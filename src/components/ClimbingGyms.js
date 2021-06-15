import React from "react";

class ClimbingGyms extends React.Component {
  mapRatingPhotos = (rating) => {
    const imageBaseUrl = "/yelp_stars/web_and_ios/regular/regular_";
    switch (rating) {
      case 0:
        return <img src={imageBaseUrl + "0.png"} alt="0 stars"></img>;
      case 1:
        return <img src={imageBaseUrl + "1.png"} alt="1 star"></img>;
      case 1.5:
        return <img src={imageBaseUrl + "1_half.png"} alt="1.5 stars"></img>;
      case 2:
        return <img src={imageBaseUrl + "2.png"} alt="2 stars"></img>;
      case 2.5:
        return <img src={imageBaseUrl + "2_half.png"} alt="2.5 stars"></img>;
      case 3:
        return <img src={imageBaseUrl + "3.png"} alt="3 stars"></img>;
      case 3.5:
        return <img src={imageBaseUrl + "3_half.png"} alt="3.5 stars"></img>;
      case 4:
        return <img src={imageBaseUrl + "4.png"} alt="4 stars"></img>;
      case 4.5:
        return <img src={imageBaseUrl + "4_half.png"} alt="4.5 stars"></img>;
      case 5:
        return <img src={imageBaseUrl + "5.png"} alt="5 stars"></img>;
      default:
        return "Error in mapRatingPhotos";
    }
  };

  mapClimbingGyms = () => {
    if (this.props.climbingGyms !== null) {
      let climbingGyms = this.props.climbingGyms.map((climbingGym) => (
        <div key={climbingGym.name}>
          <div className="col mb-4 mt-2">
            <div className="card h-150">
              <img
                src={climbingGym.image_url}
                height="250"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-external-link-alt link-icon"></i>{" "}
                  <a
                    className="outdoor-store-name text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={climbingGym.url}
                  >
                    {climbingGym.name}
                  </a>
                </h5>
                <p className="card-text number-of-reviews">
                  {this.mapRatingPhotos(climbingGym.rating)}{" "}
                  {climbingGym.review_count} reviews
                </p>
                <p className="card-text location">
                  {climbingGym.location.display_address.map((location) => (
                    <p>{location}</p>
                  ))}
                </p>
                <p className="card-text price">{climbingGym.price}</p>
                <img src="/yelp_logo.png" alt="yelp-logo"></img>
              </div>
            </div>
          </div>
        </div>
      ));
      return climbingGyms;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <a className="city-name" href={`/cities/${this.props.city.id}`}>
          {this.props.city.attributes.name}
        </a>
        <br></br>
        <br></br>
        <a className="back-button" href={`/cities/${this.props.city.id}`}>
          <i className="fas fa-arrow-left"></i> Back
        </a>
        <div className="row row-cols-1 row-cols-md-3">
          {this.mapClimbingGyms()}
        </div>
      </div>
    );
  }
}

export default ClimbingGyms;
