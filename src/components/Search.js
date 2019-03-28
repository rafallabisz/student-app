import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Search extends Component {
  state = {
    value: "",
    // valueFields: ""
  }

  handleSearch = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  // handleStudent = (e) => {
  //   this.setState({
  //     valueFields: e.target.value
  //   })
  // }

  handleFilterUniversity = () => {
    if (this.state.value) {
      return this.props.university.filter(item => item.name.toLowerCase().includes(this.state.value.toLowerCase())).map(item => (
        <li key={item.id}><NavLink to={`/university${item.ref}`}>{item.name}</NavLink></li>
      ))
    }
  }




  render() {
    // this.handleFilterStudents()
    return (

      <div>
        <input type="text" placeholder="Search university" value={this.state.value} onChange={this.handleSearch} />

        <ul>{this.handleFilterUniversity()}</ul>

      </div>

    );
  }
}

export default Search;