import React, { Component } from 'react';
import { Button } from 'antd';
import './tags.scss'
class tags extends Component {

constructor(props){
    super(props)
}
    componentDidMount(){
      
    }


    render() {
        return (
            <div className='tags'>
                    <Button size='small' type="primary">进货明细</Button>
            </div>
        );
    }
}

export default tags;