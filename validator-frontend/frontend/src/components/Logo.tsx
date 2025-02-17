import React from 'react'

import styles from './Logo.module.css'

export default function Logo(): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={'feza-logo.png'} alt="Feza Logo" className={styles.logo} />
      <h1 className={styles.heading}>AyanEduTechs Identity Writter</h1>
    </div>
  )
}
