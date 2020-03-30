import React from "react";
import styles from "../style.css";

class HostStat extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEntireHome() {
    if (this.props.hostData.entire_home) {
      return (
        <div id={styles["entire-home"]}>
          <img
            className={styles["icon-home-pic"]}
            src="https://p7.hiclipart.com/preview/40/622/525/star-symbol-clip-art-star-png-material-thumbnail.jpg"
          />
          <div>Entire Home</div>
          <div className={styles["descript"]}>
            You'll have the island to yourself
          </div>
        </div>
      );
    }
  }

  renderSuperHost() {
    if (this.props.hostData.is_superhost) {
      return (
        <div>
          <img
            className={styles["icon-home-pic"]}
            src="https://image.flaticon.com/icons/svg/66/66027.svg"
          />
          <div>{this.props.hostData.first_name} is a Superhost </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div id={styles["hosted-by-info"]}>
              Island hosted by {this.props.hostData.first_name}
            </div>
            <img
              className={styles["host-pic"]}
              src={this.props.hostData.profile_picture}
            />
          </div>
          <div>
            <span>{this.props.locationStat.guest_limit} guests </span>
            <span>{this.props.locationStat.bedrooms} bedrooms </span>
            <span>{this.props.locationStat.beds} beds </span>
            <span>{this.props.locationStat.baths} baths </span>
          </div>
        </div>
        <div>
          <div className={styles["first-house-stats"]}>
            {this.renderEntireHome()}
          </div>
          <div className={styles["first-house-stats"]}>
            {this.renderSuperHost()}
          </div>
        </div>
        <div className={styles["separation-line"]}></div>
        <div id={styles["location-bio"]}>
          {this.props.locationStat["location_bio"]}
        </div>
      </div>
    );
  }
}

export default HostStat;
