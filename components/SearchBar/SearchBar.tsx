import { useEffect, useRef } from 'react'
import sanitizer from 'string-sanitizer'

import Logo from '../Logo/Logo';
import styles from './SearchBar.module.scss';

const SearchBar = (props: SearchBar) => {
  const { onSubmit, text } = props;

  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (searchInputRef && searchInputRef.current) {
      const santized = sanitizer.sanitize.keepSpace(searchInputRef.current.value);
      if (santized.length) {
        onSubmit(santized)
      }
    }
  };

  useEffect(() => {
    if (searchInputRef && searchInputRef.current && text) {
      searchInputRef.current.value = text;
    }
  }, [text]);

  return (
    <div className={styles.searchBar}>
      <Logo className={styles.logo} />
      <form action="" method="get" onSubmit={handleSubmit}>
        <input ref={searchInputRef} className={styles.input} type="text" placeholder={'Search album'} />
      </form>
    </div>
  )
}

type SearchBar = {
  onSubmit: (searchSuggestion: string) => void
  text?: string
};

export default SearchBar;