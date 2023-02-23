import React from 'react'
import './Footer.css'
import PropTypes, { number } from 'prop-types'
import TaskFilter from '../task-filter'

export default class Footer extends React.Component {
  render() {
    const { itemsLeft, filter, onFilterChange, onClearCompleted } = this.props
    return (
      <footer className='footer'>
        <span className='todo-count'>{itemsLeft} items left</span>
        <TaskFilter filter={filter} onFilterChange={onFilterChange} />
        <button type="button" className='clear-completed' onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.defaultProps = {
  itemsLeft: 0,
  filter: 'default',
  onFilterChange: () => {},
  onClearCompleted: () => {},
}

Footer.propTypes = {
  itemsLeft: number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
}