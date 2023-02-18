import React, { Component } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';



export default class Task extends Component {
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
                        checked={completed} />
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
                <input type="text" className="edit" value={description}></input>
            </div>
        )
    }
}