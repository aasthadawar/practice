import React,{Component} from 'react';

class Practice extends Component {
    constructor(){
        super();
        this.state = {
            posts:[],
            isLoaded:false,
            error:null
        }
    }

    componentWillReceiveProps(nextProps){
      console.log('will recieve');
    }

    componentDidMount(){
      console.log('did mount')
        /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
            .then(result=>{
              return(
                this.setState({...this.state,
                  posts:result,
                  isLoaded:true})
              )
            })
            .catch((err)=>{
              return(
                this.setState({...this.state,
                  error:err,
                  isLoaded:true})
              )
            }

            )
        .catch((err)=>{
              return(
                this.setState({...this.state,
                  error:err,
                  isLoaded:true})
              )
            }

            )*/
            
        
            
            
            console.log('after fetch');
            
       
    }

    render(){
      console.log('state',this.state);
        var {error,isLoaded,posts} = this.state;

        return(
          <div>hello</div>
        )
        
       /* {

            if(error){
                return(
                <div>error is{error}</div>
                );
            }

            else if(!isLoaded){
              return(
                <div>loading....</div>
              )
            }
            
            else if(posts) {
                return (
                  <div>
                      {
                          posts.map(items=>{
                          return(<div key={items.id}>{items.title}</div>);
                          })
                      }
                  </div>
                );
              }
        }*/
    }
}
  export default Practice;