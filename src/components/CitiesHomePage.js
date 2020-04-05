import React from 'react'

class CitiesHomePage extends React.Component {

    render() {
        return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Parks</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Parks</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Outdoor Stores</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Outdoor Store</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Climbing Gyms</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Climbing Gyms</a>
                    </div>
            </div>
        </div>

        )
    }

}
export default CitiesHomePage