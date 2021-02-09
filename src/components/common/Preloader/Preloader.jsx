import React from 'react'
import preloader from '../../../assets/images/loader.svg'
import classes from './Preloader.module.css'

const Preloader = (props) => {
  return (
    <div className={classes.preloader_container}>
      <img
        src={preloader}
        alt="loader"
      />
    </div>
  )
}

export default Preloader
