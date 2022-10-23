import styles from './SearchSuggestions.module.scss';

const SearchSuggestions = (props: SearchSuggestions) => {
  const { onSuggestionClick } = props

  const Link = (props: Suggestion) => {
    const { text } = props
    return (
      <a
        href=""
        className={styles.suggestion}
        onClick={(event) => { 
          event.preventDefault();
          onSuggestionClick(text) 
        }}
      >{text}</a>)
  }

  return (
    <p className={styles.searchSuggestions}>
      Start by searching for some keywords, album
      names (try <Link text="Thriller" /> 
       or <Link text="The Dark Side of the Moon" />)
      or artist names (try <Link text="Tool" />
      or <Link text="DJ Shadow" />).”
    </p>
  )
}

type SearchSuggestions = {
  className?: string
  onSuggestionClick: (suggestion: string) => void
};

type Suggestion = {
  text: string;
}

export default SearchSuggestions;