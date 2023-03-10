import Course from "./Course";

const hrClass = {
  border: '0',
  height: '1px',
  background: '#333',
  backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)'
}

const Section = ({ section }) =>
  <>
    <div className='row mb-3'>
      <h1 className='display-2 p-0'>{ section.name }<span className='ms-3'>{ section.logo }</span></h1>
    </div>
    <div className='row mb-3'>
      <div className='col'><strong>Course</strong></div>
      <div className='col'><strong>Provider</strong></div>
      <div className='col'><strong>Skills</strong></div>
      <div className='col'><strong>Result</strong></div>
      <div className='col'><strong>Final Project</strong></div>
    </div>
    { section.courseList.map(course => <Course key = { course.name } course = { course } />) }
    <div className='row mb-3'>
      <hr style={ hrClass } className='mt-4'/>
    </div>
  </>

export default Section