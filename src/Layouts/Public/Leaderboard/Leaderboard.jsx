import React from 'react'
import Styles from './Leaderboard.module.css'
import NavMenu from './NavMenu/NavMenu'

export default function Leaderboard() {
  return (
    <div>
        <div className={`${Styles.Leaderboard}`}>
            <div className={`${Styles.wrapper}`}>
                <NavMenu/>
            </div>
        </div>


    </div>
  )
}
