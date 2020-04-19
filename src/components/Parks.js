import React from 'react'

class Parks extends React.Component {
    
    mapParkPhotos = (parkName) => {
        const imageBaseUrl = "/park_pics/"
            switch (parkName) {
                case "Rocky Mountain National Park":
                    return imageBaseUrl + "rmnp.jpeg"
                case "Boulder Canyon":
                    return imageBaseUrl + "boulder-canyon.jpg"
                case "Mount Evans Wilderness: Arapaho & Roosevelt":
                    return imageBaseUrl + "mount-evans.jpg"
                case "El Dorado Canyon":
                    return imageBaseUrl + "el-dorado.jpg"
                case "Lake Roosevelt National Recreation Area":
                    return imageBaseUrl + "lrnra.jpg"
                case "Mount Rainier National Park":
                    return imageBaseUrl + "mrnp.jpg"
                case "North Cascades National Park":
                    return imageBaseUrl + "ncnp.jpg"
                case "Olympic National Park":
                    return imageBaseUrl + "onp.jpg"
                case "Lake Tahoe - East Shore":
                    return imageBaseUrl + "lake-tahoe.jpg"
                case "Adventure Mountain":
                    return imageBaseUrl + "adventure-mountain.jpg"
                case "Sand Mountain Recreation Area":
                    return imageBaseUrl + "sand-mountain.jpg"
                case "Yosemite National Park":
                    return imageBaseUrl + "ynp.jpg"
                case "Mt. Hood National Forest":
                    return imageBaseUrl + "mount-hood.jpg"
                case "Columbia River Gorge National Scenic Area":
                    return imageBaseUrl + "columbia-river-gorge.jpeg"
                case "Three Sisters Wilderness: Willamette":
                    return imageBaseUrl + "three-sisters.jpg"
                case "Crater Lake National Park":
                    return imageBaseUrl + "clnp.jpg"
                case "Pisgah National Forest":
                    return imageBaseUrl + "pisgah.jpg"
                case "Great Smoky Mountains National Park":
                    return imageBaseUrl + "gsmnp.jpg"
                case "French Broad River":
                    return imageBaseUrl + "french-broad.jpg"               
                case "Blue Ridge Parkway":
                    return imageBaseUrl + "blue-ridge.jpg"
                case "Capitol Reef National Park":
                    return imageBaseUrl + "cpnp.jpg"
                case "Flaming Gorge NRA":
                    return imageBaseUrl + "flaming-gorge.jpeg"
                case "Uinta-Wasatch-Cache National Forest":
                    return imageBaseUrl + "uinta.jpg"
                case "Antelope Island State Park":
                    return imageBaseUrl + "antelope-island.jpg"
        }
    }
    
    
    // Create a card on the page for each national park 
    mapNationalParks = () => {
        if (this.props.nationalParks !== null) {
            let parkData = this.props.nationalParks.map(park => ({description: park.description, name: park.name, url: park.url}))
            let parks = parkData.map(park =>
                <div key={park.name}>
                <div className="col mb-4 mt-2">
                            <div className="card h-150">
                                <img src={this.mapParkPhotos(park.name)} height="250" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-external-link-alt link-icon"></i>  <a className="outdoor-store-name text-decoration-none" target="_blank" href={park.url}>{park.name}</a></h5>
                                    <p className="card-text">{park.description}</p>
                                </div>
                            </div>
                </div>
                </div>)
            return parks
        } else {
            return null
        }
    }

    // truncate local park descriptions, some of them were very long
    truncateParkDescription = (string, number, url) => {
    if (string.length <= number) {
      return string
    }
    return <p className="card-text">{string.slice(0, number)}<a className='read-more text-decoration-none' target='_blank' href={url}>...</a></p>
}
 
    // Create a card on the page for each local park
    mapLocalParks = () => {
        if (this.props.localParks !== null) {
            let parks = this.props.localParks.map(park =>
                <div key={park.name}>
                <div className="col mb-4 mt-2">
                            <div className="card h-150">
                                <img src={this.mapParkPhotos(park.name)} height="250" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-external-link-alt link-icon"></i>  <a className="outdoor-store-name text-decoration-none" target="_blank" href={park.url}>{park.name}</a></h5>
                                    {this.truncateParkDescription(park.description, 399, park.url)}
                                </div>
                            </div>
                </div>
                </div>)
            return parks
        } else {
            return null
        }
    }


    // Adding this Boulder park manually, no access to their database
    boulderPark = () => {
        if (this.props.city.attributes.name == "Boulder") {
            let park =
                <div key="El Dorado Canyon">
                <div className="col mb-4 mt-2">
                            <div className="card h-150">
                                <img src={this.mapParkPhotos("El Dorado Canyon")} height="250" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title"><i className="fas fa-external-link-alt link-icon"></i>  <a className="outdoor-store-name text-decoration-none" target="_blank" href="https://cpw.state.co.us/placestogo/Parks/eldoradocanyon">El Dorado Canyon</a></h5>
                                    <p className="card-text">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Eldorado Canyon is a hidden treasure right in Boulder’s backyard!  Whether it’s hiking amidst the towering sandstone cliffs, picnicking along scenic South Boulder Creek or climbing Eldo's sheer golden walls, Eldorado Canyon State Park truly has something for everyone!  Discover this hidden jewel and take home memories that will last a lifetime.</p>
                                </div>
                            </div>
                </div>
                </div>
            return park
        } else {
            return null
        }
    }

    
    render() {
        return (
            <div>
                <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
                <br></br><br></br>
                <a className="back-button" href={`/cities/${this.props.city.id}`}><i class="fas fa-arrow-left"></i> Back</a>
                <div className="row row-cols-1 row-cols-md-2">
                    {this.mapNationalParks()}
                    {this.mapLocalParks()}
                    {this.boulderPark()}
                </div>
            </div>
        )
    }
}

    
export default Parks