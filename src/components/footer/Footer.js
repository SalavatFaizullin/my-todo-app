import React, { Component } from 'react';
import './Footer.css';
import TaskFilter from '../task-filter';
import PropTypes, { number } from 'prop-types';

export default class Footer extends Component {
    static defaultProps = {
        itemsLeft: 0,
        filter: 'default',
        onFilterChange: () => { },
        onClearCompleted: () => { }
    }
    static propTypes = {
        itemsLeft: number,
        filter: PropTypes.string,
        onFilterChange: PropTypes.func,
        onClearCompleted: PropTypes.func
    }
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