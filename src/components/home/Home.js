import React from 'react'
import styles from "./Home.module.css"

function Home() {
  return (
      <div className={styles.headerOne}>
          <div className={styles.headerTwo}>
          <div>
            <h1>Pomeranian puppy</h1>
          </div>
          <div>for sale in Pembroke Pines</div>
          <div>born 3/27/2023, Blue Merle White Parti</div>
        </div>
      </div>
  )
}

export default Home
