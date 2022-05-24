import React from 'react'
import styles from './meme.module.css'

const MemeMaker = () => {

  const [meme, setMeme] = React.useState(
    {
      topText: '',
      bottomText: '',
      randomImage: 'https://i.imgflip.com/1bgw.jpg'
    }
  )

  const [allMemeImages, setAllMemeImages] = React.useState([])

  React.useEffect(() => {
    console.log('effect ran')
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage(e) {
    e.preventDefault()

    const memesArray = allMemeImages
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMeme(prevState => ({
      ...prevState,
      randomImage: memesArray[randomNumber].url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          className={styles.formInput}
        />
        <input
          type='text'
          placeholder='bottom
          text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          className={styles.formInput}
        />
        <button onClick={getMemeImage} className={styles.button}>Get a new meme</button>
      </form>
      <div className={styles.center}>
        <img src={meme.randomImage} alt='Meme' className={styles.memeImg} />
        <h2 className={styles.topText}>{meme.topText}</h2>
        <h2 className={styles.bottomText}>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default MemeMaker
