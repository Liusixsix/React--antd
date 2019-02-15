import React from 'react'
import MenuConfig from './../../config/menuConfig'
import {Menu,Icon,Form,Input} from 'antd'
import './index.less'
import {NavLink} from 'react-router-dom'
import menuConfig from './../../config/menuConfig';
const SubMenu = Menu.SubMenu

// const MenuItemGroup =Menu.MenuItemGroup
// import { from } from 'rxjs';
export default class Navleft extends React.Component{

    constructor(){
        super()
    }

    componentWillMount(){
       const menuTressNode = this.renderMent(menuConfig)
       this.setState({
        menuTressNode
       })
    }

    renderMent=(data)=>{
       
        return data.map(item=>{
            if(item.children){
              return (
                  <SubMenu title={item.title} key={item.key}>
                      {this.renderMent(item.children)}
                  </SubMenu>
              )
            }
            return <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>
            {item.title}
            </NavLink>
           
            </Menu.Item>
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
         <div className='logo'>
            <img src="/assets/timg.jpg" />
            <h1>Imooc Ms</h1>
         </div>
        <Menu theme="dark" >
            
            {/* <SubMenu   key='sub1' title={<span><Icon type='mail'></Icon>子菜单栏一</span>}> */}
              {/* <Menu.Item key='1'>子菜单项</Menu.Item>
              <Menu.Item key='2'>子菜单项4</Menu.Item>
              <Menu.Item key='3'>子菜单5项</Menu.Item>
              <Menu.Item key='4'>子菜单项5</Menu.Item> */}
             {this.state.menuTressNode}
            {/* </SubMenu> */}
          </Menu>
                 
          </div>
        );
    }
}