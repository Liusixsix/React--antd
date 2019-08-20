
import React from 'react'
import './Layout.less'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class admin extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} breakpoint="lg"
            style={{ borderTop: ' 0.5px solid #fff' }}
            collapsedWidth="0">
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    文章
              </span>
                }
              >
                <Menu.Item key="1"><Link to='/admin/Article'>发布</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/admin/TodoList'>文章管理</Link></Menu.Item>

              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    图片
              </span>
                }
              >
                <Menu.Item key="5">图片发布</Menu.Item>
                <Menu.Item key="6">图片管理</Menu.Item>

              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    视频
              </span>
                }
              >
                <Menu.Item key="9">视频发布</Menu.Item>
                <Menu.Item key="10">视频管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '15px 15px 15px' }}>
            <Content
              style={{
                // background: '#fff',
                // padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }

}

export default admin