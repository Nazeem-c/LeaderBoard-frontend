import React from 'react'
import Styles from './Public.module.css'

function Public() {
  return (
    <div>
        <div className={`${Styles.menulist} flexColStart`}>
              <div className={`${Styles.item} flexStart`}>
                <div className={Styles.menuImahe}>
                  <FaHome className={Styles.icon} />
                </div>
                <div>
                  <h1 className={Styles.menutext}>Home</h1>
                </div>
              </div>
              <div className={Styles.item}>
                <div className={Styles.menuImahe}>
                  <FaList className={Styles.icon} />
                </div>
                <div>
                  <h1 className={Styles.menutext}>Leaderboard</h1>
                </div>
              </div>
              <div className={Styles.item}>
                <div className={Styles.menuImahe}>
                  <FaSignInAlt className={Styles.icon} />
                </div>
                <div>
                  <h1 className={Styles.menutext}>Login</h1>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Public