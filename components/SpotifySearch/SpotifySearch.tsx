import { useState } from 'react'
import { SeachAlbumResponse } from '../../utils/types';

import SpotifyAlbum from '../SpotifyAlbum/SpotifyAlbum';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
import styles from './SpotifySearch.module.scss';


const SpotifySearch = (props: SpotifySearch) => {

  const [results, setResults] = useState<SeachAlbumResponse>();
  const [searchSuggestion, setsearchSuggestion] = useState<string>();
  const [noResultsSearchTerm, setNoResultsSearchTerm] = useState<string>();

  const onSubmit = async (searchSuggestion: string) => {
    const res = await fetch(`http://localhost:3000/api/spotifyProxy?q=${searchSuggestion}`)
    const data = await res.json()
    setResults(data)
    const noResultsSearchTermString = (!data.items.length) ? searchSuggestion : ""
    setNoResultsSearchTerm(noResultsSearchTermString)
  }

  const onSubmitSuggestion = (searchSuggestion: string) => {
    onSubmit(searchSuggestion);
    setsearchSuggestion(searchSuggestion);
  }    

  return (
    <article className={styles.spotifySearch}>
      <nav className={styles.navigation}>
        <SearchBar onSubmit={onSubmit} text={searchSuggestion} />
      </nav>  
      <main className={styles.main}>
      { noResultsSearchTerm &&
        <span className={styles.noResults}>No results for {noResultsSearchTerm}</span>
      }
      { !results?.items.length &&  !noResultsSearchTerm &&
        <SearchSuggestions onSuggestionClick={onSubmitSuggestion} />
      }
      { results?.items.map((album, index) =>
        <SpotifyAlbum album={album} key={`spotifySearch${album.name}-${index}`} />)
      }
      </main>
    </article>
  )
}

type SpotifySearch = {};

export default SpotifySearch;