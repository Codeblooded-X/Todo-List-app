import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => (


    //<div style={{display:"flex" ,justifyContent:"center"}}></div>
    <li className="list-group-item text capitalize d-flex justify-content-between my-2" >

        <div style=
            {{ textDecoration: props.todo.complete ? "Line-through" : "" }}

            onClick={props.toggleComplete}>{props.todo.text}
        </div>
        <div className="todo-icon">
            <span className="mx-2 text-success">
                <i onClick={props.onUpdate} className="fa fa-pencil">
                </i>
            </span>

            <span className="mx-2 text-danger">
                <i onClick={props.onDelete} className="fa fa-trash">
                </i>
            </span>
        </div>
    </li>


);