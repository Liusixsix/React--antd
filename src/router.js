import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './pages/login'
import Button from './pages/ui/button'
import Modals from './pages/ui/modals'
import Admin from './admin'
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/button' component={Button} />
                                <Route path='/admin/ui/modals' component={Modals} />
                            </Switch>

                        </Admin>
                    } />

                </App>

            </HashRouter>
        )
    }
}