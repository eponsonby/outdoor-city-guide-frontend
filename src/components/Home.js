import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Welcome, please login or sign up</h2>
        <Link to='/signup'>Sign Up</Link> or <Link to='/login'>Login</Link>
    </div>
)

export default Home