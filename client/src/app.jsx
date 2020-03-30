import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import HostStat from "./components/HostStat.jsx";
import Amenities from "./components/Amenities.jsx";
import styles from "./style.css";

class LocationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationId: 1,
      locationInfo: null,
      amenities: null,
      host: null
    };
  }

  componentDidMount() {
    axios.get("/api/location/1").then(result => {
      this.setState({ locationInfo: result.data[0] });
    });

    axios.get(`/api/user/${this.state.locationId}`).then(result => {
      this.setState({ host: result.data[0] });
    });

    axios.get(`/api/amenities/${this.state.locationId}`).then(result => {
      this.setState({ amenities: result.data[0] });
    });
  }

  renderHostStats() {
    if (!this.state.locationInfo || !this.state.host) {
      return <div>No host info</div>;
    } else {
      return (
        <HostStat
          hostData={this.state.host}
          locationStat={this.state.locationInfo}
        />
      );
    }
  }

  renderAmenities() {
    if (this.state.amenities) {
      return (
        <Amenities
          hostData={this.state.host}
          locationStat={this.state.locationInfo}
          amenities={this.state.amenities}
        />
      );
    }
  }

  allAmenities() {
    const amen = this.props.amenities;
    let amenities = [];
    for (var key in amen) {
      if (this.props.amenities[key]) {
        amenities.push(key);
      }
    }

    let num = 0;

    return amenities.
    amenities.shift();
  }

  render() {
    return (
      <div id={styles["entire-application"]}>
        <div>{this.renderHostStats()}</div>
        {/* <div className={styles["separation-line"]}></div> */}
        <div>{this.renderAmenities()}</div>
        <div>
          <div>{this.allAmenities()}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <LocationInfo />,
  document.getElementById("location-info-here")
);
