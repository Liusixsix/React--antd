import React from 'react'
import PropType from 'prop-types'

class List extends React.Component{
    
    render(){
        return (
            <div onClick={this.handeClick.bind(this)}>
                {this.props.item}
            </div>
        )
    }
    handeClick(){
        this.props.del()
    }
}


export default List;