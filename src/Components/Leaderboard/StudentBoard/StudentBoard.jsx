import React, { useState } from "react";
import Styles from "./StudentBoard.module.css";

function StudentBoard() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    switch (inputNumber) {
      case 1:
        setInput1(value);
        break;
      case 2:
        setInput2(value);
        break;
      case 3:
        setInput3(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className={`${Styles.wrapper} paddings`}>
        <div className={`${Styles.container} flexColStart innerWidth`}>
          <div className={`${Styles.filters} flexStart  innerWidth`}>
            <div className={`${Styles.filterinputs}`}>
              <input
                type="text"
                value={input1}
                onChange={(e) => handleInputChange(e, 1)}
                placeholder="College"
                className={Styles.inputField}
              />

              <input
                type="text"
                value={input2}
                onChange={(e) => handleInputChange(e, 2)}
                placeholder="Department"
                className={Styles.inputField}
              />

              <input
                type="text"
                value={input3}
                onChange={(e) => handleInputChange(e, 3)}
                placeholder="Batch"
                className={Styles.inputField}
              />
            </div>
            <div className={`${Styles.filterbutton} `}>
              <button className={Styles.button}> Filter</button>
            </div>
          </div>
          <div className={`${Styles.maintable} innerWidth`}>
            <table className={Styles.customTable}>
              <thead className={Styles.tablehead}>
                <tr>
                  <th>Ranking</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody className={Styles.tablebody}>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr><tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr><tr>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>New York</td>
                  <td>chjbncs</td>
                </tr>

                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentBoard;
