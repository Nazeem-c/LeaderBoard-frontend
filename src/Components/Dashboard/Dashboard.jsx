import React from "react";
import Styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={Styles.Dashboard}>
      <div className={Styles.container}>
        <div className={`${Styles.wrapper} flexColStart paddings`}>
        <div className={Styles.topbanner}> 
        <h4>Welcome to the admin Portal</h4>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
