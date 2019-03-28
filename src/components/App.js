import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';
import University from './University';
import UniversityPage from '../pages/UniversityPage';
import FieldsOfStudyPage from '../pages/FieldsOfStudyPage';


class App extends Component {

  state = {
    university: [],
    fieldsOfStudy: {},
    student: null,
    isLoaded: false,
  }

  componentDidMount() {
    fetch('data/contestModel.json')
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Error");
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState(prevState => ({
          isLoaded: true,
          university: data.definitions.University,
          fieldsOfStudy: data.definitions.FieldOfStudy,
          student: data.definitions.Student
        }));
      })
      .catch(err => {
        console.log(err)
        this.setState(prevState => ({

        }));
      });
  };


  render() {
    const { isLoaded, university, fieldsOfStudy, student } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header className="header">
            <Header />
          </header>

          <main>
            <section className="panel">
              <Switch>
                <Route path="/" exact render={() => (<Home university={university} student={student} isLoaded={isLoaded} />)} />
                <Route path="/university" exact render={() => (<University university={university} isLoaded={isLoaded} />)} />
                <Route path="/search" exact render={() => (
                  <Search
                    university={university}
                    fieldsOfStudy={fieldsOfStudy}
                    isLoaded={isLoaded}
                    student={student}
                  />)} />

                {university.map(item => (
                  <Route path={`/university${item.ref}`} exact key={item.id} render={() => (
                    <UniversityPage university={item} fieldsOfStudy={fieldsOfStudy} />)} />
                ))}

                {university.map(item => (
                  <Route path={`/university${item.ref}/:id`} key={item.id} render={({ match }) => (
                    <FieldsOfStudyPage
                      fieldsOfStudy={fieldsOfStudy}
                      match={match}
                      number={item.id}
                      student={student}

                    />
                  )}
                  />))}

              </Switch>
            </section>

            <section className="navigation">
              <Navigation />
            </section>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
