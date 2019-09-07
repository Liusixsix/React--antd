import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login/'
import Admin from './components/Layout'
import Purchase from './pages/purchase' 
// import TodoList from './commponets/list'
const Routers = () => {
    return (
        <Router>
            <Switch>                           
                <Route exact  path='/' component={Login} />                                       
                <Admin>
                    <Route exact path='/admin/Purchase'  component={Purchase} />
                    {/* <Route exact path='/admin/TodoList'  component={TodoList} /> */}
                </Admin>
                                       
            </Switch>
        </Router>
    )
}

export default Routers
