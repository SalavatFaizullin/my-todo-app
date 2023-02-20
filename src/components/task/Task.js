import React, { Component } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';



export default class Task extends Component {
    static defaultProps =  {
        description: 'default',
        onDeleted: () => { },
        creationTime: new Date(),
        onToggleCompleted: () => { },
        onEditing: () => { },
        completed: false
    }
    static propTypes = {
        description: PropTypes.string,
        onDeleted: PropTypes.func,
        creationTime: PropTypes.object,
        onToggleCompleted: PropTypes.func,
        onEditing: PropTypes.func,
        completed: PropTypes.bool
    }
    render() {
        const { description, onDeleted, creationTime, onToggleCompleted, onEditing, completed } = this.props
        const timeSinceCreation = formatDistanceToNow(
            creationTime,
            { includeSeconds: true },
            { addSuffix: true }
        )
        return (
            <div>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={onToggleCompleted}
                        defaultChecked={completed} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">created {timeSinceCreation} ago</span>
                    </label>
                    <button
                        className="icon icon-edit"
                        onClick={onEditing}>
                    </button>
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}>
                    </button>
                </div>
                <input type="text" className="edit" defaultValue={description}></input>
            </div>
        )
    }
}