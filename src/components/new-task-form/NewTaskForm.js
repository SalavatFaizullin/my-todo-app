import React from 'react'
import './NewTaskForm.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
      minutes: '',
      seconds: '',
    }

    this.onDescriptionChange = (e) => {
      this.setState({
        description: e.target.value,
      })
    }

    this.onMinutesChange = (e) => {
      this.setState({
        minutes: e.target.value,
      })
    }

    this.onSecondsChange = (e) => {
      this.setState({
        seconds: e.target.value,
      })
    }

    this.onSubmit = (e) => {
      const { description, minutes, seconds } = this.state
      const { onAddItem } = this.props

      if (e.keyCode === 13) {
        if (description !== '' && minutes !== '' && seconds !== '') {
          onAddItem(description, parseInt(minutes, 10), parseInt(seconds, 10))

          this.setState({
            description: '',
            minutes: '',
            seconds: '',
          })
        }
      }
    }
  }

  render() {
    const { description, minutes, seconds } = this.state
    return (
      <header className='header'>
        <h1>todos los dias</h1>
        <form className='new-todo-form' onKeyDown={(e) => this.onSubmit(e)}>
          <input
            className='new-todo'
            placeholder='What needs to be done?'
            onChange={this.onDescriptionChange}
            value={description}
          />
          <input className='new-todo-form__timer' placeholder='Min' onChange={this.onMinutesChange} value={minutes} />
          <input className='new-todo-form__timer' placeholder='Sec' onChange={this.onSecondsChange} value={seconds} />
        </form>
      </header>
    )
  }
}

NewTaskForm.defaultProps = {
  onAddItem: () => {},
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
}
