
import store from './index'
const defstore={
    input_value:'123',
    list:[
        '1',2
    ]
}

let newstate;

const todos = (state=defstore,action)=>{
    switch(action.type){
        case "changevalue":
             newstate = JSON.parse(JSON.stringify(state))
            newstate.input_value=action.value;
            return newstate;
        case 'add_list':
             newstate = JSON.parse(JSON.stringify(state))
            newstate.list.push(action.value);   
            newstate.input_value=''
            return newstate;

        default:
          return state
    }
}



export default todos;