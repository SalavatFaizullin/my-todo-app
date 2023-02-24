import React from 'react'
import './NewTaskForm.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }
    this.onChange = (e) => {
      this.setState({
        description: e.target.value,
      })
    }
    this.onSubmit = (e) => {
      e.preventDefault()
      const { onAdd } = this.props
      const { description } = this.state
      onAdd(description)
      this.setState({
        description: '',
      })
    }
  }

  render() {
    const { description } = this.state
    return (
      <header className='header'>
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className='new-todo'
            placeholder='What needs to be done?'
            onChange={this.onChange}
            value={description}
          />
        </form>
      </header>
    )
  }
}

NewTaskForm.defaultProps = {
  onAdd: () => {},
}

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
}
