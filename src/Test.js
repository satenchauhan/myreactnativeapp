import React, { Component, useState, useEffect } from 'react';


/* 
class Test extends Component{
        state = {
            count:8,
            name:"Amson Chauhan",
            city: "Florence",
            country: "Italy"
        }
        // count = 0;
        addPerson = () =>{
            this.setState({count:this.state.count+8})
            this.count = this.count +1;
            alert("Addnin new person")
            alert(`add Person button clicked ${this.count}`)  
            
        }
        render (){
            return (
                <div>
                    <h1>Welcome to Saten Pratap Chauhan</h1>
                    <p>{this.state.name}</p>
                    <p>{this.state.city}</p>
                    <p>{this.state.country}</p>
                    <p>
                        <button onClick={this.addPerson}>Add Person</button>
                    </p>
                    <p>
                        <label>add Person button is clicked: <b>{this.state.count} times</b></label>
                    </p>
                </div>
            )
        }
} 
*/
/* 
class Test extends Component {
     constructor(props){
          super(props);
          this.state={
               message: "",
               counter: 10
          };
     }
     onMessageChange(txt){
         this.setState({
             message: `message has  ${txt.length} number of characters `,
             counter: this.state.counter+2 
         })
     }

     showCounting=()=>{
         this.setState({
             counter: this.state.counter*2
         })
     }

     render(){
         return(
             <div>
                 <h2>Welcome Saten Programming Class</h2>
                 <p>
                     <label>Enter Message : <input type="text" onChange={e =>this.onMessageChange(e.target.value)}></input></label>
                 </p>
                 <p>
                     <label>{this.state.message} </label>
                 </p>
                 <p>
                     <label>{this.state.counter} </label>
                 </p>
                 <button onClick={this.showCounting}>Click me</button>
             </div>
         )
     }
}
 */

/* 
class Test extends Component{
      constructor(props) {
           super(props);

           this.state = {
                count: props.count || 8
           }

           this.onClickHandler = this.onClickHandler.bind(this);
      }

      onClickHandler(e){
          this.setState({
              count: this.state.count + 1
          })
      }

      render(){
          return(
              <div>
                  <p>Count: {this.state.count}</p>
                  <p>count is: {this.state.count} </p>
                  <button onClick={this.onClickHandler}>Click Me</button>
              </div>
          );
      }
} 
*/

/* 
const Test = (props) => {
     const [count, setCount] = useState(props.count || 4);

     const onClickHandler = () =>{
          setCount(count + 2);
     }

     return(
        <div>
            <p>Count: {count}</p>
            <p>count is: {count} </p>
            <button onClick={onClickHandler}>Click Me</button>
        </div>
     );
} 
*/

/* 
class Test extends Component{
     constructor(props){
          super(props);
          this.state = {
               data: null,
               isloading: false,
               error: null
          }
     }
     async loadAsyncData() {
          this.setState({
              isLoading: true,
              error: null
          });
          try{
              const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response=>response.json());
                this.setState({isLoading: false, data:result});
          } catch(e) {
               this.setState({isLoading: false, error:e});
          }
     }

     componentDidMount(){
           this.loadAsyncData();
     }

     render(){
         if(this.state.isLoading) return (<p>Loading......</p>);
         if(this.state.error) return (<p>Something went wrong</p>);
         if(this.state.data) return (<p>The data is: {this.state.data.title}</p>)
         return (<p> No Data Yet </p>);
     }
} 
*/

/* const Test = (props) =>{

    return (
        <div>
            <p>Hello {props.name}</p>
            <p>Number is :{props.num} </p>
        </div>
    );

} */

const Test = () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState();

        const loadAsyncData = async () =>{
            setIsLoading(true);
            setError(null);
        }
        try{
            const result = fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json());
                setData(result);
                setIsLoading(false);
        } catch(e) {
             setError(e);
             setIsLoading(false);
        }

        useEffect(() => {
             loadAsyncData();
        }, []);

        return (
             <div>
                 <div>
                     
                   if(isLoading) return (<p>Loading......</p>) }
                    if(error) return (<p>Something went wrong</p>);
                    if(data) return (<p>The data is: {data}</p>)
                    return (<p> No Data Yet </p>);
                    
                  </div>

             </div>
        )

}


export default Test;