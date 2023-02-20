import React, { Component } from 'react';
import './App.css';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';

export default class App extends Component {
  id = 1;

  state = {
    todoData: [],
    filter: 'all'
  }

  createItem(description) {
    return {
      description: description,
      completed: false,
      editing: false,
      created: new Date(),
      id: this.id++
    }
  }

  addItem = (description) => {
    if (!description) { return }
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createItem(description)]
      return {
        todoData: newArray
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const i = todoData.findIndex(el => el.id === id)
      const newArray = [
        ...todoData.slice(0, i),
        ...todoData.slice(i + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  toggleProperty = (arr, id, prop) => {
    const i = arr.findIndex(el => el.id === id)
    const oldItem = arr[i]
    const newItem = { ...oldItem, [prop]: !oldItem[prop] }
    return [
      ...arr.slice(0, i),
      newItem,
      ...arr.slice(i + 1)
    ]
  }

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      }
    })
  }

  onEditing = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'editing')
      }
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.completed)
      case 'completed':
        return items.filter(item => item.completed)
      default:
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter(el => !el.completed)
      return {
        todoData: newArray
      }
    })
  }

  render() {
    const { todoData, filter } = this.state

    const visibleItems = this.filter(todoData, filter)

    return (
      <section className="todoapp">
        <NewTaskForm
          onAdd={this.addItem}
        />
        <TaskList
          data={visibleItems}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
          onEditing={this.onEditing} />
        <Footer
          itemsLeft={todoData.filter(el => !el.completed).length}
          filter={filter}
          onFilterChange={this.onFilterChange}
          onClearCompleted={this.onClearCompleted} />
      </section>
    )
  }
}