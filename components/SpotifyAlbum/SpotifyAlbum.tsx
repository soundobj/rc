import { Album } from '../../utils/types'
import styles from './SpotifyAlbum.module.scss'

const SpotifyAlbum = (props: SpotifyAlbum) => {
  const { album : { name, images, artists, release_date } } = props
  const image = images[1]
  const artistName = artists[0].name
  const albumYear = release_date.substring(0, 4)

  return (
    <article className={styles.albumCover}>
      <header>
        <img className={styles.img} src={image.url} />
      </header>
      <h3 className={styles.albumName}>{name}</h3>
      <footer className={styles.footer}>
        <div className={styles.circle} />
        <div className={styles.artistYear}>
          <h3 className={styles.artistName}>{artistName}</h3>
          <h3 className={styles.albumYear}>{albumYear}</h3>
        </div>
      </footer>
    </article>
  )
}

type SpotifyAlbum = {
  album: Album,
};

export default SpotifyAlbum;