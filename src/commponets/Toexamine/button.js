import React, { Component } from 'react'
import { Button,Icon} from 'antd';



    class Buttons extends Component{
        constructor(props){
            super(props)
            this.state = {
                // btnindex: 0
            }
        }
        render(){
            return (
                <div className='bnt-wrap' style={{ marginBottom: 10 }}>
                    {
                        this.props.btnArr.map((item, index) => {
                            return <Button 
                                type={this.props.btnindex == index ? 'primary' : ''}
                                onClick={()=>this.props.bntClick(index)}
                                style={{ marginLeft: 10 }}
                                key={item.value}
                            >
                                {item.value}
                                {index === 0 ? '' : <Icon type="info-circle" />}
                            </Button>
                        })
                    }
                </div>
            )
        }
    }

export default Buttons