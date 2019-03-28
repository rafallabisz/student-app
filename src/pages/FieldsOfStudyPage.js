import React, { useState } from 'react';
import '../styles/FieldsOfStudyPage.css'

const FieldsOfStudyPage = (props) => {

  const [activeBtn, setActiveBtn] = useState(false);

  const len = `${props.match.params.id.length + 1}`
  const path = props.match.url.slice(12, -len);
  const idUrl = props.match.params.id;

  const handleFieldsOfStudy = () => {
    if (path === "polsl") {
      switch (props.match.params.id) {
        case "informatics": return 0;
        case "automatics": return 1;
        case "electronics": return 2;
        default: return null
      }
    }
    if (path === "wroclaw") {
      switch (props.match.params.id) {
        case "architecture": return 0
        case "chemistry": return 1
        case "transport": return 2
        default: return null
      }
    }
    if (path === "warsaw") {
      switch (props.match.params.id) {
        case "mechatronics": return 0;
        case "biotechnology": return 1;
        case "mathematics": return 2;
        default: return null
      }
    }
  }

  const { nameOfStudyField, startDate, studentsLimit, grade } = props.fieldsOfStudy[path][handleFieldsOfStudy()]

  const studentsList = props.student[path][idUrl].map(item => (
    <div className="studentList" key={item.id}>
      <span>First name: {item.firstName}</span>
      <span>Last name: {item.lastName}</span>
    </div>

  ))

  const activeViev = props.student[path][idUrl].map(item => (
    <div className="studentList" key={item.id}>
      <span>First name: {item.firstName}</span>
      <span>Last name: {item.lastName}</span>
      <span>Gender: {item.gender}</span>
      <span>Age: {item.age}</span>
      <span>Email: {item.email}</span>
      <span>Phone: {item.phone}</span>
      <span>Average grade: {item.averageGrade}</span>
      <span>Student status: {item.studentStatus}</span>
    </div>
  ))

  return (
    <>
      <div className="fieldsOfStudy">
        <span className="fieldsOfStudy__el">{nameOfStudyField}</span>
        <span className="fieldsOfStudy__el">Start date: {startDate}</span>
        <span className="fieldsOfStudy__el">Students limit: {studentsLimit}</span>
        <span className="fieldsOfStudy__el">Grade: {grade}</span>


        <p className="fieldsOfStudy__title">List students:</p>
        <button className="fieldsOfStudy__btn" onClick={() => setActiveBtn(!activeBtn)}>{activeBtn ? "Less" : "More"}</button>
        {!activeBtn && studentsList}
        <div>{activeBtn && <div>{activeViev}</div>}</div>
      </div>
    </>
  );
}

export default FieldsOfStudyPage;