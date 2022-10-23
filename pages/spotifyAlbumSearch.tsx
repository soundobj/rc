import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/main.module.scss'
import SpotifySearch from '../components/SpotifySearch/SpotifySearch'

type SpotifyAlbumSearch = {};

const SpotifyAlbumSearch: NextPage<SpotifyAlbumSearch> = (props: SpotifyAlbumSearch) => {

  return (
    <div className={styles.reset}>
      <Head>
        <title>SpotifyAlbumSearch</title>
        <meta name="description" content="Search Music Albums on Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SpotifySearch />
    </div>
  )
}

export default SpotifyAlbumSearch


