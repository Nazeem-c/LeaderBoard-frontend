import React from 'react'
import Styles from "./Navmenu.module.css"
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <div className={`${Styles.NavMenu}`}>
        <div className={`${Styles.container}`}>
                    <div className={`${Styles.menu}`}>
                        <div className={`${Styles.menucontainer} flexStart`}>
                            <Link to="/leaderboard"><div className={`${Styles.menuItem}`}>
                                <a>Student</a>
                            </div></Link>
                            
                            <Link to="/leaderboard/college"><div className={`${Styles.menuItem}`}>
                                <a>College</a>
                            </div></Link>
                            
                            <Link to="/leaderboard/department"><div className={`${Styles.menuItem}`}>
                                <a>Department</a>
                            </div></Link>
                            
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default NavMenu