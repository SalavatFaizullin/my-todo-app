import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
    render() {
        const { description, onDeleted, creationTime, onToggleCompleted, onEditing } = this.props
        return (
            <div>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick={onToggleCompleted} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">created {creationTime} ago</span>
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