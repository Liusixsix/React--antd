import React from 'react'

import Search from './search'
import Tables from './table'
import {gettable} from '../../api/index'
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class Article extends React.Component {
    constructor() {
        super()
        // this.changeIcon = this.changeIcon.bind(this)
        this.state = {
            icon: false
        }
    }
    componentWillMount(){
        gettable({aa:1}).then(res=>{
            console.log(res)
        })
    }


    handleSubmit = e => {
        e.preventDefault();
          this.refs.Search.validateFields((err, values) => {
                console.log('Received values of form: ', values);
         });
    };

    changeIcon = () => {
        let falg = this.state.icon
        this.setState({
            icon: !falg
        })
    }


    render() {
        return (
            <div>
                <Search 
                    icon={this.state.icon}
                    handleSubmit={this.handleSubmit}
                    changeIcon={this.changeIcon}
                   ref='Search'
                ></Search>
                <Tables data={data}></Tables>
            </div>
        )
    }


}










export default Article;