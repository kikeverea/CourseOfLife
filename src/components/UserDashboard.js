import ActionButton from "./ActionButton";

const UserDashboard = ({ user }) =>
  <div className='container-fluid p-3'>
    <div className='row'>
      <h5 className='display-5'>{ user.name }</h5>
      <p className='lead'>{ user.mail }</p>
    </div>
    <div className='row'>
      <table>
        <tbody>
          {/*{ user.courseList.map(course => <SimpleCourse key={course.name} course={ course }/>) }*/}
        </tbody>
      </table>
    </div>
    <ActionButton handleClick={ ()=> console.log('Action button clicked') }/>
  </div>

export default UserDashboard