import React from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default function Task({ description, onDeleted, creationTime, onToggleCompleted, completed }) {
  const timeSinceCreation = formatDistanceToNow(creationTime, { includeSeconds: true }, { addSuffix: true })
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' onClick={onToggleCompleted} defaultChecked={completed} />
      <label htmlFor='description'>
        <span className='description'>{description}</span>
        <span className='created'>created {timeSinceCreation} ago</span>
      </label>
      {/* <button type='button' className='icon icon-edit' aria-label='Edit task' /> */}
      <button type='button' className='icon icon-destroy' aria-label='Delete task' onClick={onDeleted} />
    </div>
  )
}
Task.defaultProps = {
  description: 'default',
  onDeleted: () => {},
  creationTime: new Date(),
  onToggleCompleted: () => {},
  completed: false,
}
Task.propTypes = {
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  creationTime: PropTypes.shape({
    optionalProperty: PropTypes.string,
  }),
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
}
