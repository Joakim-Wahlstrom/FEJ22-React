import React, { Component } from 'react'

export default class AddProductForm extends Component {

  constructor(props) {
    super(props)
     this.state = {
       name: '',
       desc: ''
     }
     this.onChangeName = this.onChangeName.bind(this)
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeDesc = (e) => {
    this.setState({ desc: e.target.value })
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSub = (e) => {
    e.preventDefault()
    this.props.addProduct({
      id: Date.now().toString(),
      name: this.state.name,
      desc: this.state.desc
    })
  }

  render() {
    const {name, desc} = this.state
    return (
      <form onSubmit={this.onSub}>
        <input type="text" placeholder='name' name="name" value={name} onChange={this.onChange} />
        <input type="text" placeholder='description' name='desc' value={desc} onChange={this.onChange}  />
        <button>Add product</button>
        <br />
        {this.state.name}
        <br />
        {this.state.desc}
      </form>
    )
  }
}
