
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src='/troll-face.svg' alt='Troll Face' className={styles.navIcon} />
      <h2 className={styles.navText}>Meme generator</h2>
    </div>
  )
}

export default Navbar
