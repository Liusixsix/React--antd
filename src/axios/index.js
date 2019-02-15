import Jsonp from 'jsonp'
import { Promise } from 'q';
import { resolve } from 'path';
export default class Axios{
    static jsonp(){
      return  new Promise((resolve,reject)=>{
            Jsonp(Option.url,{
                param:'callback'
            },function(err,response){

            })
        })
    }
}