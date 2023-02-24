import React from 'react'
import './TaskList.css'
import PropTypes from 'prop-types'

import Task from '../task'

export default function TaskList({ data, onDeleted, onToggleCompleted }) {
  const tasks = data.map((item) => {
    let classNames = ''
    if (item.completed) classNames += 'completed'
    return (
      <li key={item.id} className={classNames}>
        <Task
          completed={item.completed}
          description={item.description}
          onDeleted={() => {
            onDeleted(item.id)
          }}
          creationTime={item.created}
          onToggleCompleted={() => onToggleCompleted(item.id)}
        />
      </li>
    )
  })
  return (
    <section className='main'>
      <ul className='todo-list'>{tasks}</ul>
    </section>
  )
}

TaskList.defaultProps = {
  data: [],
  onDeleted: () => {},
  onToggleCompleted: () => {},
}

TaskList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      optionalProperty: PropTypes.string,
    })
  ),
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
}
