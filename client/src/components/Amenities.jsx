import React from "react";
import styles from "../style.css";

class Amenities extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSleepingArrang() {
    return (
      // <div className="container">
      <div>
        <div className={styles["separation-line"]}></div>
        <div className={styles["arrangements"]}>
          <img
            className={styles["bed-icon"]}
            src="https://img.icons8.com/pastel-glyph/2x/bed--v2.png"
            height="35px"
            width="35px"
          />
          <div>1 bedroom</div>
          <div className={styles.descript}>1 queen</div>
        </div>
        <div className={styles["arrangements"]}>
          <img
            className={styles["bed-icon"]}
            src="https://img.icons8.com/pastel-glyph/2x/bed--v2.png"
            height="35px"
            width="35px"
          />
          <div>1 bedroom</div>
          <div className={styles.descript}>1 queen</div>
        </div>
      </div>
      // </div>
    );
  }

  render() {
    return (
      <div id={styles["amenities-section"]}>
        <div>
          <div>{this.renderSleepingArrang()}</div>
        </div>
      </div>
    );
  }
}

export default Amenities;
