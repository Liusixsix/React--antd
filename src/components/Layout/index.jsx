
import React from 'react'
import './Layout.less'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import Tags from './commponent/tags'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class admin extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
   
  }

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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.props.location.pathname]}
              mode="inline"
              theme="dark"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span> 门店</span>
                  </span>
                }
              >
                <Menu.Item key="/admin/Purchase">
                  <Link to='/admin/Purchase'>进货明细</Link>
                </Menu.Item>
                <Menu.Item key="6">销售明细</Menu.Item>
                <Menu.Item key="7">库存明细</Menu.Item>
                <Menu.Item key="8">进销存明细</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>线上</span>
                  </span>
                }
              >
                <Menu.Item key="9">进货明细</Menu.Item>
                <Menu.Item key="10">销售明细</Menu.Item>

              </SubMenu>
              <Menu.Item key="11"> <Icon type="mail" />用户管理</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0px 15px 0px', }}>
            <Tags></Tags>
            <Content
              style={{
                margin: 0,
                marginTop:13,
                padding: '0px',
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