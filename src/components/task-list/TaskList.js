import React from 'react';
import './TaskList.css';
import Task from '../task';

function TaskList({ data, onDeleted, creationTime, onToggleCompleted, onEditing }) {
    const tasks = data.map(item => {
        let classNames = ''
        if (item.completed) classNames += 'completed'
        if (item.editing) classNames = 'editing'
        return (
            <li key={item.id} className={classNames}>
                <Task
                    description={item.description}
                    onDeleted={() => { onDeleted(item.id) }}
                    creationTime={creationTime}
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