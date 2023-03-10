import React from 'react'
import './App.css'
import nextId from 'react-id-generator'

import Footer from '../footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoData: [],
      filter: 'all',
    }

    this.filter = (items, filter) => {
      switch (filter) {
        case 'all':
          return items
        case 'active':
          return items.filter((item) => !item.completed)
        case 'completed':
          return items.filter((item) => item.completed)
        default:
          return items
      }
    }

    this.onAddItem = (description, minutes, seconds) => {
      this.setState(({ todoData }) => {
        const newArray = [...todoData, this.createItem(description, minutes, seconds)]
        return {
          todoData: newArray,
        }
      })
    }

    this.onDeleteItem = (id) => {
      this.setState(({ todoData }) => {
        const i = todoData.findIndex((el) => el.id === id)
        const newArray = [...todoData.slice(0, i), ...todoData.slice(i + 1)]
        return {
          todoData: newArray,
        }
      })
    }

    this.onToggleCompleted = (id) => {
      this.setState(({ todoData }) => {
        const i = todoData.findIndex((el) => el.id === id)
        const oldItem = todoData[i]
        const newItem = { ...oldItem, completed: !oldItem.completed, isTimerRunning: !oldItem.isTimerRunning }
        const newArray = [...todoData.slice(0, i), newItem, ...todoData.slice(i + 1)]
        return {
          todoData: newArray,
        }
      })
    }

    this.onFilterChange = (filter) => {
      this.setState({ filter })
    }

    this.onClearCompleted = () => {
      this.setState(({ todoData }) => {
        const newArray = todoData.filter((el) => !el.completed)
        return {
          todoData: newArray,
        }
      })
    }

    this.onTimerStart = (id) => {
      this.setState(({ todoData }) => {
        const i = todoData.findIndex((el) => el.id === id)
        const newObj = [{ ...todoData[i], isTimerRunning: true }]
        const newData = [...todoData.slice(0, i), ...newObj, ...todoData.slice(i + 1)]
        return {
          todoData: newData,
        }
      })
    }

    this.onTimerPause = (id) => {
      this.setState(({ todoData }) => {
        const i = todoData.findIndex((el) => el.id === id)
        const newObj = [{ ...todoData[i], isTimerRunning: false }]
        const newData = [...todoData.slice(0, i), ...newObj, ...todoData.slice(i + 1)]
        return {
          todoData: newData,
        }
      })
    }

    this.createItem = (description, minutes, seconds) => {
      return {
        description,
        minutes,
        seconds,
        isTimerRunning: true,
        completed: false,
        created: new Date(),
        id: nextId(),
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ todoData }) => {
        const newArr = todoData.map((el) => {
          if (el.isTimerRunning) el.seconds += 1
          if (el.seconds === 59) {
            el.seconds = 0
            el.minutes += 1
          }
          return el
        })
        return {
          todoData: newArr,
        }
      })
    }, 1000)
  }

  render() {
    const { todoData, filter } = this.state
    const visibleItems = this.filter(todoData, filter)
    return (
      <section className='todoapp'>
        <NewTaskForm onAddItem={this.onAddItem} />
        <TaskList
          data={visibleItems}
          onDeleteItem={this.onDeleteItem}
          onToggleCompleted={this.onToggleCompleted}
          onTimerStart={this.onTimerStart}
          onTimerPause={this.onTimerPause}
        />
        <Footer
          itemsLeft={todoData.filter((el) => !el.completed).length}
          filter={filter}
          onFilterChange={this.onFilterChange}
          onClearCompleted={this.onClearCompleted}
        />
      </section>
    )
  }
}
