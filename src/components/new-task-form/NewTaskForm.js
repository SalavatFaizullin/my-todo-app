import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
    state = {
        description: ''
    }

    onChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAdd(this.state.description)
        this.setState({
            description: ''
        })
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onChange={this.onChange}
                        value={this.state.description}
                        autofocus />
                </form>
            </header>
        )
    }
}