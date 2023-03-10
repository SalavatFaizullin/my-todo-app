/*eslint-disable*/
import React, { Component } from 'react'
import './TaskFilter.css'
import PropTypes from 'prop-types'

export default class TaskFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  render() {
    const { filter, onFilterChange } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      const classes = isActive ? 'selected' : ''
      return (
        <li key={name}>
          <button type='button' className={classes} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      )
    })
    return <ul className='filters'>{buttons}</ul>
  }
}
TaskFilter.defaultProps = {
  filter: 'default',
  onFilterChange: () => {},
}
TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}
