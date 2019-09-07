import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.scss'
import Header from './pages/header'


function AppRouter() {
    return (
        <Router>
            <div className='main'>
                <Header></Header>
            </div>
        </Router>
    )
}


export default AppRouter