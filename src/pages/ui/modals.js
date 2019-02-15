import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, Modal,message} from 'antd';
import { userInfo } from 'os';

class Buttons extends React.Component {

    state = {
        visible: false,
        visible2: false
    }

    handleOpen = () => {
        this.setState({
            visible: true
        })
    }

    handleCancel = (type) => {
        this.setState({
            [type]: false,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        message.success( '111')
      

        this.props.form.validateFields((err, values) => {
          if (!err) {
              message.success(`${values.userName}`)
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title='基础模拟框'>
                    <Button type="primary" onClick={() => this.handleOpen('visible')}>Open</Button>
                    <Button type="dashed" onClick={() => this.handleOpen('visible2')}>Open</Button>
                    <Button type="danger">Open</Button>
                    <Button>Open</Button>
                </Card>


                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>


                <Card title='登陆表单'>
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{width:300}}>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                         </Button>
                           
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Buttons);