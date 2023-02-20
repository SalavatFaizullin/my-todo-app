import React from 'react';
import './TaskList.css';
import Task from '../task';
import PropTypes from 'prop-types';

export default function TaskList({ data, onDeleted, onToggleCompleted, onEditing }) {
    const tasks = data.map(item => {
        let classNames = ''
        if (item.completed) classNames += 'completed'
        if (item.editing) classNames = 'editing'
        return (
            <li key={item.id} className={classNames}>
                <Task
                    completed={item.completed}
                    description={item.description}
                    onDeleted={() => { onDeleted(item.id) }}
                    creationTime={item.created}
                    onToggleCompleted={() => onToggleCompleted(item.id)}
                    onEditing={() => onEditing(item.id)} />
            </li>
        )
    })
    return (
        <section className='main'>
            <ul className="todo-list">
                {tasks}
            </ul>
        </section>
    )
}

TaskList.defaultProps = {
    data: [],
    onDeleted: () => { },
    onToggleCompleted: () => { },
    onEditing: () => { }
}

TaskList.propTypes = {
    data: PropTypes.array,
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onEditing: PropTypes.func
}