import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Search.css';

class Search extends Component {
  state = {
    value: "",
    value_fields: ""
  }

  // handleSearch = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })

  handleSearch = e => {
    this.setState({
      value: e.target.value,
      value_fields: "",
    })
  }

  handleFieldsOfStudy = e => {
    this.setState({
      value_fields: e.target.value,
      value: "",
    })
  }

  handleFilterUniversity = () => {
    if (this.state.value) {
      return this.props.university.filter(item => item.name.toLowerCase().includes(this.state.value.toLowerCase())).map(item => (
        <li key={item.id}><NavLink className="search__list--el" to={`/university${item.ref}`}>{item.name}</NavLink></li>
      ))
    }
  }

  handleFilterFieldsOfStudy = () => {
    if (this.props.isLoaded && this.state.value_fields) {
      const fields = this.props.university.map((item) => item.fields)
      const allFields = fields.reduce(function (a, b) {
        return a.concat(b);
      }, []);

      return allFields.filter(item => item.toLowerCase().includes(this.state.value_fields.toLowerCase())).map((item, i) => (
        <li className="search__listFields--el" key={i}>{item}</li>
      ))
    }
  }

  render() {
    return (

      <div className="search">
        <h1 className="search__title">Search:</h1>
        <input className="search__input" type="text" placeholder="Search universities..." value={this.state.value} onChange={this.handleSearch} name="value" />
        <input className="search__input" type="text" placeholder="Search fields of study..." value={this.state.value_fields} onChange={this.handleFieldsOfStudy} name="value_fields" />

        <ul className="search__list">{this.handleFilterUniversity()}
          {!this.state.value && this.handleFilterFieldsOfStudy()}
        </ul>
      </div>
    );
  }
}

export default Search;