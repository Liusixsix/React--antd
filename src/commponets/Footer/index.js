import React from 'react'

import './index.less'

export default class Footer extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
           <div className='footer'>
               版权所有 ：巴拉巴拉把卡 技术支持：React组件学习
           </div>
        );
    }
}