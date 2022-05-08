import React, { Fragment } from 'react';
import  './Todo.css'

const ToDoList = (props) => {
    
    return (
        <Fragment>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" onClick={() => {
                     props.onSelect(props.id)
                }} />
                <li >{props.data_list}</li>
            </div>
        </Fragment>
    )
}



export default ToDoList;