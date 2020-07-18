import React from 'react'

class OutdoorStores extends React.Component {
    
    mapRatingPhotos = (rating) => {
    const imageBaseUrl = "/yelp_stars/web_and_ios/regular/regular_"
        switch (rating) {
            case 0:
                return <img src={imageBaseUrl + "0.png"} alt="0 stars"></img>
            case 1:
                return <img src={imageBaseUrl + "1.png"} alt="1 star"></img>
            case 1.5:
                return <img src={imageBaseUrl + "1_half.png"} alt="1.5 stars"></img>
            case 2:
                return <img src={imageBaseUrl + "2.png"} alt="2 stars"></img>
            case 2.5:
                return <img src={imageBaseUrl + "2_half.png"} alt="2.5 stars"></img>
            case 3:
                return <img src={imageBaseUrl + "3.png"} alt="3 stars"></img>
            case 3.5:
                return <img src={imageBaseUrl + "3_half.png"} alt="3.5 stars"></img>
            case 4:
                return <img src={imageBaseUrl + "4.png"} alt="4 stars"></img>
            case 4.5:
                return <img src={imageBaseUrl + "4_half.png"} alt="4.5 stars"></img>
            case 5:
                return <img src={imageBaseUrl + "5.png"} alt="5 stars"></img>
            default:
                return "Error in mapRatingPhotos"
    }
}
    mapOutdoorStores = () => {
        if (this.props.outdoorStores !== null) {
            let outdoorStores = this.props.outdoorStores.map(outdoorStore =>
                <div key={outdoorStore.name + 'container'}>
                    <div key={outdoorStore.name + 'div'} className="col mb-4 mt-2">
                        <div key={outdoorStore.name + 'card'} className="card h-150">
                            <img 
                            key={outdoorStore.image_url}
                            src={outdoorStore.image_url}
                            height="250"
                            className="card-img-top"
                            alt="...">
                            </img>
                        <div key={outdoorStore.name + 'card-body'} className="card-body">
                            <h5 key={outdoorStore.name} className="card-title">
                                <i className="fas fa-external-link-alt link-icon"></i>
                                    <a
                                    className="outdoor-store-name text-decoration-none" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={outdoorStore.url}>{outdoorStore.name}
                                    </a>
                            </h5>
                            <p key="number-of-reviews" className="card-text number-of-reviews">
                            {this.mapRatingPhotos(outdoorStore.rating)} {outdoorStore.review_count} reviews
                            </p>
                            <div key="location" className="card-text location">
                            {outdoorStore.location.display_address.map(location => <p key={location}>{location}</p>)}
                            </div>
                            <p key="price" className="card-text price">{outdoorStore.price}</p>
                            <img key="yelp-logo" src="/yelp_logo.png" alt="yelp-logo"></img>
                        </div>
                        </div>
                    </div>
                </div>
                )
                
            return outdoorStores
        } else {
            return null
        }
    }


    render() {
        return (
            <div>
                <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
                <br></br><br></br>
                <a className="back-button" href={`/cities/${this.props.city.id}`}><i className="fas fa-arrow-left"></i> Back</a>
                <div className="row row-cols-1 row-cols-md-3">
                    {this.mapOutdoorStores()}
                </div>
            </div>
        )
    }
}

export default OutdoorStores