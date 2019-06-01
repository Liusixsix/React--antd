import React, { Component } from 'react'
import './App.less'

import Headers from './view/headers/headers'


class App extends Component {
    constructor(props) {
        super()     
    }
   
    
    render() {
        return (
            <div>
                <Headers></Headers>
            </div>
        )
    }

   

}

export default App;