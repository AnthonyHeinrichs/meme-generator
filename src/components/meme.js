import React from 'react'
import styles from './meme.module.css'
import memeData from './memesData'

const MemeMaker = () => {
  const [memeImage, setMemeImage] = React.useState('')

  function getMemeImage(e) {
    e.preventDefault()

    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
    console.log(memeImage)
  }

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type='text' placeholder='top text' className={styles.formInput}/>
        <input type='text' placeholder='bottom text' className={styles.formInput}/>
        <button onClick={getMemeImage} className={styles.button}>Get a new meme</button>
      </form>
      <img src={memeImage} alt='Meme' className={styles.memeImg} />
    </main>
  )
}

export default MemeMaker
