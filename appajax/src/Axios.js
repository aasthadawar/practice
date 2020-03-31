import React,{Component} from 'react';

import axios from 'axios';

class Axios extends Component{
    constructor(){
        super();
        this.state={
            posts:[],
            isLoaded:false,
            error:null
        }
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            return(
                this.setState({
                    ...this.setState,
                    posts:response,
                    isLoaded:true
                })
            );
        })
        .catch(err=>{
            return(
                this.setState({
                    ...this.setState,
                    error:err,
                    isLoaded:true
                })
            );
        })

    }

    render(){
         var {error,isLoaded,posts} = this.state;
        {
            if(error){
                return(
                    <div> error is {error}</div>
                );
            }
            else if(!isLoaded){
                return(
                    <div> error is {error}</div>
                );
            }
        }
    }
}

export default Axios;
