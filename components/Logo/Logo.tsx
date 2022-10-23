import classnames from 'classnames'

import styles from './Logo.module.scss';

const Logo = (props: Logo) => {
  const { className } = props
  return (
    <article className={classnames(styles.logo, className)}>
      <span>Roli</span>
      <a className={styles.link} href="https://roli.com/" target="black">.Music</a>
    </article>
  )
}

type Logo = {
  className?: string
};

export default Logo;