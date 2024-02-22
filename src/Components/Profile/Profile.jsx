// import React from "react";
import styles from "./Profile.module.css"; // Import CSS module with correct naming
import React, { useState, useEffect } from "react";
// import myImage from '../../../public/Assets/banner.png';

// ...

{
  /* <img src={myImage} alt="My Image" /> */
}

const Profile = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Run once on component mount to set the initial date
    setCurrentDate(new Date());
  }, []);
  return (
    <div className={styles.container}>
      <div className={`${styles.warpper} flexColStart paddings innerWidth`}>
        <div className={`${styles.topbanner} flexStart paddings`}>
          <div className={`${styles.left} flexColStart `}>
            <div className={`${styles.top} flexStart`}>
              <p className={styles.primary}>{currentDate.toDateString()}</p>
            </div>
            <div className="flexColStart">
              <p className={styles.secondary}>Welcome Back Jhon Doe</p>
              <p className={styles.tert}>
                Always stay updated in your student portal
              </p>
            </div>
          </div>
          <div className={`${styles.detailscontainer} flexColStart`}>
            <p className={`${styles.headtext}`}>namecccccccccs</p>
            <p className={`${styles.subtext}`}>id</p>
            <br />
            <p className={`${styles.textcontent}`}>Department : </p>
            <p className={`${styles.textcontent}`}>College : </p>
            <p className={`${styles.textcontent}`}>College ID : </p>
            <p className={`${styles.textcontent}`}>Batch : </p>
            <p className={`${styles.textcontent}`}>Mail : </p>
          </div>
          <div className={`${styles.right} innerWidth`}>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + "/Assets/profile.png"}
              alt="banner"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Profile;
