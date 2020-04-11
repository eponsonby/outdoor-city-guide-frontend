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
            <a className="outdoor-store-name text-decoration-none" target="_blank" href={outdoorStore.url}>{outdoorStore.name}</a>
            <p>{outdoorStore.location.display_address.map(location => <p>{location}</p>)}</p>
            <p>{this.mapRatingPhotos(outdoorStore.rating)}</p>
            <p>{outdoorStore.price}</p>
            </div>)
            return outdoorStores
        } else {
            return null
        }
    }


    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        
                    </div>
                    <div className="col-sm">
                        {this.mapOutdoorStores()}
                        {/* {this.getOutdoorStoresInfo().slice(0,4)} */}
                    </div>
                    <div className="col-sm">
                        {/* {this.getOutdoorStoresInfo().slice(4)} */}
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}

export default OutdoorStores