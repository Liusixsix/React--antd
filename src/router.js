import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './commponets/login/'
import Admin from './commponets/Layout'
import Article from './commponets/article'
import TodoList from './commponets/list'
const Routers = () => {
    return (
        <Router>
            <Switch>                           
                <Route exact  path='/' component={Login} />   
                           
                {/* <Route   path='/admin' component={Admin} > */}
                <Admin>
                    <Route exact path='/admin/Article'  component={Article} />
                    <Route exact path='/admin/TodoList'  component={TodoList} />
                {/* </Route> */}
                </Admin>
                                       
            </Switch>
        </Router>
    )
}

export default Routers
