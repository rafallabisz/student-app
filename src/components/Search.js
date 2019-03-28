import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Search.css';

class Search extends Component {
  state = {
    value: "",
  }

  handleSearch = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleFilterUniversity = () => {
    if (this.state.value) {
      return this.props.university.filter(item => item.name.toLowerCase().includes(this.state.value.toLowerCase())).map(item => (
        <li key={item.id}><NavLink className="search__list--el" to={`/university${item.ref}`}>{item.name}</NavLink></li>
      ))
    }
  }


  render() {
    return (

      <div className="search">
        <input className="search__input" type="text" placeholder="Search universities..." value={this.state.value} onChange={this.handleSearch} />

        <ul className="search__list">{this.handleFilterUniversity()}</ul>

      </div>

    );
  }
}

export default Search;