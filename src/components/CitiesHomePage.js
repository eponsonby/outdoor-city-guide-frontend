import React from 'react'

class CitiesHomePage extends React.Component {

    render() {
        return (
        <div>
            <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
            <div className="card-deck">
            <div className="card" style={{width: "18rem"}}>
                <img src='/nationalpark.jpg' className="card-img-top" alt="national park"></img>
                    <div className="card-body">
                        <h5 className="card-title">Parks</h5>
                        <p className="card-text">Explore nearby local and national parks. </p>
                        <a href={`/cities/${this.props.city.id}/parks`} className="btn btn-primary">See Parks</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="/outdoor-stores.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Outdoor Stores</h5>
                        <p className="card-text">Get geared up at a local outdoor shop.</p>
                        <a href={`/cities/${this.props.city.id}/outdoor-stores`} className="btn btn-primary">See Outdoor Stores</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="/climbing-gym.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Climbing Gyms</h5>
                        <p className="card-text">Visit a nearby indoor climbing gym.</p>
                        <a href={`/cities/${this.props.city.id}/climbing-gyms`} className="btn btn-primary">See Climbing Gyms</a>
                    </div>
            </div>
            </div>
        </div>

        )
    }

}
export default CitiesHomePage