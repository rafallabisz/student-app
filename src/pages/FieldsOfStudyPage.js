import React, { useState } from 'react';
import '../styles/FieldsOfStudyPage.css'

const FieldsOfStudyPage = (props) => {

  const [activeBtn, setActiveBtn] = useState(false);

  const length = `${props.match.params.id.length + 1}`
  const path = props.match.url.slice(12, -length);
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
        case "pedagogy": return 3
        default: return null
      }
    }
  }

  const { nameOfStudyField, startDate, studentsLimit, grade } = props.fieldsOfStudy[path][handleFieldsOfStudy()]

  const studentsList = props.student[path][idUrl].map(item => (
    <div className="fieldsOfStudy__studentList" key={item.id}>
      <span className="fieldsOfStudy__studentList--el">First name: {item.firstName}</span>
      <span className="fieldsOfStudy__studentList--el">Last name: {item.lastName}</span>
      <span className="fieldsOfStudy__studentList--line"></span>
    </div>

  ))

  const activeViev = props.student[path][idUrl].map(item => (
    <div className="fieldsOfStudy__studentList" key={item.id}>
      <span className="fieldsOfStudy__studentList--el">First name: {item.firstName}</span>
      <span className="fieldsOfStudy__studentList--el">Last name: {item.lastName}</span>
      <span className="fieldsOfStudy__studentList--el">Gender: {item.gender}</span>
      <span className="fieldsOfStudy__studentList--el">Age: {item.age}</span>
      <span className="fieldsOfStudy__studentList--el">Email: {item.email}</span>
      <span className="fieldsOfStudy__studentList--el">Phone: {item.phone}</span>
      <span className="fieldsOfStudy__studentList--el">Average grade: {item.averageGrade}</span>
      <span className="fieldsOfStudy__studentList--el">Student status: {item.studentStatus}</span>
      <span className="fieldsOfStudy__studentList--line"></span>
    </div>
  ))

  return (
    <>
      <div className="fieldsOfStudy">
        <span className="fieldsOfStudy__el">{nameOfStudyField}</span>
        <span className="fieldsOfStudy__el">Start date: {startDate}</span>
        <span className="fieldsOfStudy__el">Students limit: {studentsLimit}</span>
        <span className="fieldsOfStudy__el">Grade: {grade}</span>


        <span className="fieldsOfStudy__title">List students:<button className="fieldsOfStudy__btn" onClick={() => setActiveBtn(!activeBtn)}>{activeBtn ? "Less" : "More"}</button></span>

        {!activeBtn && studentsList}
        <div>{activeBtn && <div>{activeViev}</div>}</div>
      </div>
    </>
  );
}

export default FieldsOfStudyPage;