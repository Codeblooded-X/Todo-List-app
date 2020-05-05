import React from 'react';
import shortid from "shortid"

import 'bootstrap/dist/css/bootstrap.min.css';

export default class TodoForm extends React.Component {


    render() {
        const { handleSubmit, handleChange, text, editItem } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="inpu-group-text bg-primary text-white">
                                <span className="mx-2 ">
                                    <i className="fa fa-book" ></i>
                                </span>
                            </div>
                        </div>
                        <input className="form-control"
                            type="text"
                            // value={this.state.text} 
                            value={text}
                            // onChange={this.handleChange}
                            onChange={handleChange}
                            placeholder="Add a Todo Item" />
                    </div>
                    <button className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}> {editItem ? "Edit Todo" : "Add Todo"}</button>
                </form>
            </div>
        )
    }
} 