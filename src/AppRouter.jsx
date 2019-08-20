import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.scss'
import Video from './pages/video'
import Workplace from './pages/workplace'


function AppRouter() {
    return (
        <Router>
            <div className='main'>
                <div className="left">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/video/'>视频首页</Link></li>
                        <li><Link to='/Workplace/'>职场技能</Link></li>
                    </ul>
                </div>

                <div className="right">
                    <Route path='/video/' component={Video} />
                    <Route path='/Workplace/' component={Workplace} />
                </div>
            </div>
        </Router>
    )
}


export default AppRouter