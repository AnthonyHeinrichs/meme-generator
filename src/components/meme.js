import React from 'react'
import styles from './meme.module.css'
import memeData from './memesData'

const MemeMaker = () => {

  const [memesObject, setMemesObject] = React.useState (
    {
      topText: '',
      bottomText: '',
      randomImage: 'https://i.imgflip.com/1bgw.jpg'
    }
  )

  const [allMemeImages, setAllMemeImages] = React.useState (memeData)

  function getMemeImage(e) {
    e.preventDefault()

    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemesObject(prevState => ({
      ...prevState,
      randomImage: memesArray[randomNumber].url
    }))
  }

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type='text' placeholder='top text' className={styles.formInput}/>
        <input type='text' placeholder='bottom text' className={styles.formInput}/>
        <button onClick={getMemeImage} className={styles.button}>Get a new meme</button>
      </form>
      <div className={styles.center}>
        <img src={memesObject.randomImage} alt='Meme' className={styles.memeImg} />
      </div>
    </main>
  )
}

export default MemeMaker
