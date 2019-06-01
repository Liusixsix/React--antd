import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch,Redirect,IndexRoute } from 'react-router-dom'
import App from './App'
import Login from './commponets/login/login'
import Admin from './commponets/Layout/Layout'
import Button from './commponets/button/button'

const Routers = () => {
    return (
        <Router>
            <Switch>                           
                <Route  path='/login' component={Login} />  
                {/* 后台模板 */}
                <Route  path='/admin' component={Admin} ></Route>
                {/* 练习 */}
                <Route  path='/index' component={App} />                            
            </Switch>
        </Router>
    )
}
export default Routers