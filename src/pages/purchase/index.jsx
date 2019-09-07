import React, { Component } from 'react';
import Top from './component/top'
import { Input } from 'antd'
class index extends Component {
    
    constructor(props){
        super(props)
        this.topRef = React.createRef()
        this.state = {
            topHei:null
        }
    }

    componentDidMount(){
         console.log(this.topRef.current)
    }

    handleSubmit = (value) => { 
        console.log(value)    
    };

    chageToph = (topHei) =>{
        this.setState({
            topHei
        })
    }
    

    focusInput =()=>{
       this.inputText.current.focus()
    }
    render() {
        return (
            <div>
                  <Top ref={this.topRef} chageToph={this.chageToph} topHei={this.state.topHei} handleSubmit={this.handleSubmit.bind(this)}></Top>  
                  <div className='table'>
                    <Input ref={this.inputText}></Input>
                    <Input value='test' onClick={this.focusInput}></Input>

                  </div>
            </div>
        );
    }
}

export default index;