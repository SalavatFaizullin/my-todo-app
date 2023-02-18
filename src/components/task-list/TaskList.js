import React from 'react';
import './TaskList.css';
import Task from '../task';

function TaskList({ data, onDeleted, onToggleCompleted, onEditing }) {
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

export default TaskList;