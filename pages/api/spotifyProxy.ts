// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SeachAlbumResponse } from '../../utils/types'
import * as dotenv from 'dotenv'

dotenv.config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const SPOTIFY_API_TOKEN = 'https://accounts.spotify.com/api/token'
const SPOTIFY_SEARCH = 'https://api.spotify.com/v1/search'

const AUTH_PARAMS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

const getSpotifySearchFetchParams = (token: string) => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SeachAlbumResponse>
) {
  const { url, query, method, body } = req;
  console.log(`req: ${url} method: ${method} query:`, query);

  const spotifyApiTokenResponse = await fetch(SPOTIFY_API_TOKEN, AUTH_PARAMS)
    .then((res) => res.json());
  
  const { access_token } = spotifyApiTokenResponse;

  const searchResults = await fetch(
    `${SPOTIFY_SEARCH}?q='${query.q}'&type=album,artist&limit=20&market=GB`,
    getSpotifySearchFetchParams(access_token))
      .then((res) => res.json());

  const { albums } = searchResults;
  res.status(200).json(albums);
}
