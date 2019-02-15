import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';

export default class Buttons extends React.Component {

    state = {
        loading: false,
        iconLoading: false,
    }

    click = () => {
        console.log('click')
    }
    enterLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000)

    }
    render() {
        return (
            <div>

                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
          <Icon type="setting" />
                </Button>

                <Card title='基础按钮'>
                    <Button type="primary" icon="search" onClick={this.click}>Search</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
            </div>
        )
    }
}