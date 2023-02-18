import React, { Component } from 'react';
import './Footer.css';
import TaskFilter from '../task-filter';

export default class Footer extends Component {
    render() {
        const { itemsLeft, filter, onFilterChange, onClearCompleted } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">{itemsLeft} items left</span>
                <TaskFilter
                    filter={filter}
                    onFilterChange={onFilterChange} />
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}>
                    Clear completed
                </button>
            </footer>
        )
    }
}