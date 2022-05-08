import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Todo.css'
import ToDoList from './ToDoList';

const ToDo = () =>{
    const [inputData, setInputData] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) =>{
           setInputData(event.target.value);
    }

    const showItems = (event) => {
        setItems((oldItems) => {
            return [...oldItems, inputData];
        })
        setInputData('');
    }
    const deleteItem = (id) =>{
        console.log('deleted');

        setItems((oldItems) => {
             return oldItems.filter((arrElem, index) => {
                    return index !== id;
             });
        });
    }
    return (
    <>
        <div className="mainDiv">
            <div className="centerDiv">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" value={inputData} onChange={itemEvent}  placeholder={'Add a Items'}  />
                <button onClick={showItems}> <span style={{position:'relative', bottom:"3px", right:"1px"}}> + </span> </button>
                <ol>
                    {/* <li>{inputData}</li> */}

                    {Items.map( (itemValue, index) => {
                        return <ToDoList 
                                    key={index} 
                                    id={index} 
                                    data_list={itemValue} 
                                    onSelect={deleteItem}
                                />
                    })}
                </ol>
            </div>
        </div>
    </>
    );
     
}


export default ToDo;