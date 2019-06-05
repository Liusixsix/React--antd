import { Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react'
import { from } from 'rxjs';



 class Breadcrumbs extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {title1,title2} = this.props;
        return (
            <Breadcrumb>
                {/* <span className='shu'></span> */}
                <Breadcrumb.Item >                  
                    {title1}
                </Breadcrumb.Item>
                <Breadcrumb.Item> {title2}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

Breadcrumbs.defaultProps={
    title1:'首页',
    title2:'当前'
}

export default Breadcrumbs