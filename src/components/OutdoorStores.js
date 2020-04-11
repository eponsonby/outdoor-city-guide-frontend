import React from 'react'

class OutdoorStores extends React.Component {
    
    mapRatingPhotos = (rating) => {
    const imageBaseUrl = "/yelp_stars/web_and_ios/regular/regular_"
        switch (rating) {
            case 0:
            return <img src={imageBaseUrl + "0.png"}></img>
            case 1:
            return <img src={imageBaseUrl + "1.png"}></img>
            case 1.5:
            return <img src={imageBaseUrl + "1_half.png"}></img>
            case 2:
            return <img src={imageBaseUrl + "2.png"}></img>
            case 2.5:
            return <img src={imageBaseUrl + "2_half.png"}></img>
            case 3:
            return <img src={imageBaseUrl + "3.png"}></img>
            case 3.5:
            return <img src={imageBaseUrl + "3_half.png"}></img>
            case 4:
            return <img src={imageBaseUrl + "4.png"}></img>
            case 4.5:
            return <img src={imageBaseUrl + "4_half.png"}></img>
            case 5:
            return <img src={imageBaseUrl + "5_half.png"}></img>
    }
}
    mapOutdoorStores = () => {
        if (this.props.outdoorStores !== null) {
            let outdoorStores = this.props.outdoorStores.map(outdoorStore =>
            <div key={outdoorStore.name}>
            <div className="col mb-4">
                        <div className="card">
                            <img src={outdoorStore.image_url} class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title"><a className="outdoor-store-name text-decoration-none" target="_blank" href={outdoorStore.url}>{outdoorStore.name}</a></h5>
                                <p className="card-text">{outdoorStore.location.display_address.map(location => <p>{location}</p>)}</p>
                                <p>{this.mapRatingPhotos(outdoorStore.rating)}</p>
                                <p>{outdoorStore.price}</p>
                            </div>
                        </div>
            </div>
            </div>)
            return outdoorStores
        } else {
            return null
        }
    }


    render() {
        return (
            <div>
                <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
                <div className="row row-cols-1 row-cols-md-3">
                    {this.mapOutdoorStores()}
                </div>
            </div>
        )
    }
}

export default OutdoorStores