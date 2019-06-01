import { Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react'
import { from } from 'rxjs';

export default class Breadcrumbs extends React.Component {
    render() {
        return (
            <Breadcrumb>
                {/* <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item> */}
                <Breadcrumb.Item href="">
                    <Icon type="home" />                   
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}