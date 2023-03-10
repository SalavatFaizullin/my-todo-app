import React from 'react'
import './Task.css'
// import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default function Task({
  description,
  seconds,
  minutes,
  onTimerStart,
  onTimerPause,
  onDeleteItem,
  // creationTime,
  onToggleCompleted,
  completed,
}) {
  // const timeSinceCreation = formatDistanceToNow(creationTime, { includeSeconds: true }, { addSuffix: true })

  return (
    <div className='view'>
      <input className='toggle' type='checkbox' onClick={onToggleCompleted} defaultChecked={completed} />
      <label htmlFor='description'>
        <span className='title'>{description}</span>
        <span>
          <button type='button' className='icon icon-play' aria-label='play' onClick={onTimerStart} />
          <button type='button' className='icon icon-pause' aria-label='pause' onClick={onTimerPause} />
          <span>
            {minutes < 10 ? `0${  minutes}` : minutes}:{seconds < 10 ? `0${  seconds}` : seconds}&nbsp;
          </span>
        </span>
        {/* <span className='created'>created {timeSinceCreation} ago</span> */}
      </label>
      {/* <button type='button' className='icon icon-edit' aria-label='Edit task' /> */}
      <button type='button' className='icon icon-destroy' aria-label='Delete task' onClick={onDeleteItem} />
    </div>
  )
}

Task.defaultProps = {
  description: 'default',
  onDeleteItem: () => {},
  creationTime: new Date(),
  onToggleCompleted: () => {},
  completed: false,
}
Task.propTypes = {
  description: PropTypes.string,
  onDeleteItem: PropTypes.func,
  creationTime: PropTypes.shape({
    optionalProperty: PropTypes.string,
  }),
  onToggleCompleted: PropTypes.func,
  completed: PropTypes.bool,
}
