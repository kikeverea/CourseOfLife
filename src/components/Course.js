import './Course.css'

const Course = ({ course }) =>
        <div className='row mb-3'>
                <div className='col'>{course.name}</div>
                <div className='col'>{course.platform.name}
                        <img src={course.platform.icon} alt='provider logo' className='favicon ms-2'/>
                </div>
                <div className='col'>{course.skills}</div>
                <div className='col'>{course.obtained}</div>
                <div className='col'>{course.finalProject}</div>
        </div>

export default Course