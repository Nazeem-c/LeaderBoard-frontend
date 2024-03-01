import React from 'react';
import Styles from './Home.module.css';

function Home() {
  return (
    <div className={Styles.home}>
        <div className={`${Styles.wrapper} paddings innerWidth`}>
            <div className={Styles.container}>
                <div className={`${Styles.columns} flexColStart`}>
                    <div className={Styles.items}>
                        <span className={Styles.primaryFOnt1}>Welcome to Stellar University</span>
                    </div>
                    <div className={`${Styles.items} flexColStart`}>
                        <span className={Styles.primaryFOnt2}><span className={Styles.text}>S</span>tellar University</span>
                        <span className={Styles.primaryFOnt3}>Inspiring Minds, Shaping Futures</span>
                    </div>
                    <div className={Styles.items}>
                        <a className={Styles.primaryFOnt4}>At Stellar University, we believe in fostering a dynamic learning environment where curiosity meets knowledge and innovation knows no bounds. Established with a commitment to excellence, Stellar University stands as a beacon of higher education, dedicated to shaping the leaders of tomorrow.</a>
                    </div>
                    <div className={Styles.items}>
                        <a className={Styles.primaryFOnt5}>Click here to Admission and Course Details</a>
                    </div>
                    <div className={`${Styles.items} flexColStart`}>
                        <a className={Styles.primaryFOnt6}>Our Vision:</a>
                        <a className={Styles.primaryFOnt7}>To empower individuals with quality education, nurture intellectual curiosity, and inspire a passion for lifelong learning.</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home