import React from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from "shortid"

export default class TodoList extends React.Component {

    state = {
        todos: [],
        todoToShow: 'all',
        editItem: false,
        text: "",
        complete: false,
        id: shortid.generate()

    };


    // addTodo = todo => {
    //     const newTodos = [todo, ...this.state.todos];
    //     this.setState({
    //         todos: newTodos,
    //         editItem: false,

    //     })
    // };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newTodo = {

            id: this.state.id,
            text: this.state.text,
        };
        console.log(newTodo);
        const newTodos = [newTodo, ...this.state.todos];


        this.setState({
            todos: newTodos,
            text: '',
            editItem: false,
            complete: false,
            id: shortid.generate(),
        });
    }





    handleEdit = id => {
        console.log(id);
        const filteredtodos = this.state.todos.filter(todo => todo.id !== id);

        const selectedtodos = this.state.todos.find(todo => todo.id === id);
        console.log(selectedtodos);
        this.setState({
            todos: filteredtodos,
            text: selectedtodos.text,
            editItem: true,
            id: id
        })
    };



    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        // id:todo.id,
                        // text:todo.text,
                        ...todo,
                        complete: !todo.complete
                    };
                }
                else {
                    return todo;
                }
            })
        });
    };



    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }


    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }


    clearList = () => {
        this.setState({
            todos: []
        })
    }



    render() {

        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div>

                <ul className="list-group my-5">

                    <TodoForm
                        // onSubmit={this.addTodo}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        // clearList={this.clearList}
                        text={this.state.text}
                        editItem={this.state.editItem}
                    />



                    <h3 className="text-capitalize text-center">Todo list</h3>
                    {
                        todos.map(todo => (
                            <Todo key={todo.id}
                                toggleComplete={() => this.toggleComplete(todo.id)}
                                // text={todo.text}
                                onDelete={() => this.handleDeleteTodo(todo.id)}
                                onUpdate={() => this.handleEdit(todo.id)}
                                todo={todo} />
                        )
                        )
                    }

                    <div>Todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                </ul>

                <div>
                    <button style={{ marginLeft: "130px" }} onClick={() => this.updateTodoToShow("all")} className="btn btn-warning mt-3">All</button>
                    <button style={{ marginLeft: "160px" }} onClick={() => this.updateTodoToShow("active")} className="btn btn-warning  mt-3">active</button>
                    <button style={{ marginLeft: "160px" }} onClick={() => this.updateTodoToShow("complete")} className="btn btn-warning  mt-3">complete</button>
                    <button onClick={() => this.clearList()} className="btn btn-danger btn-block  mt-3 ">Clear List</button>
                </div>
            </div>
        );
    }
}