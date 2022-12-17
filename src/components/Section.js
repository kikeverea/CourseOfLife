import Course from "./Course";

const hrClass = {
  border: 0,
  height: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
}

const Section = ({ section }) =>
    <div className='row mb-3'>
      <h1 className='display-2 p-0'>{ section.name }<span className='ms-3'>{ section.logo }</span></h1>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Skills</th>
            <th scope="col">Project Count</th>
            <th scope="col">Obtained</th>
            <th scope="col">Final Project</th>
          </tr>
        </thead>
        <tbody>
          { section.courseList.map(course => <Course key = { course.name } course = { course } />) }
        </tbody>
      </table>
      <hr className='hrClass mt-4'/>
    </div>

export default Section