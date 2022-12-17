const Course = ({ course }) =>
    <tr>
        <td>{ course.name }</td>
        <td>{ course.skills }</td>
        <td>{ course.projectCount }</td>
        <td>{ course.obtained }</td>
        <td>{ course.finalProject }</td>
    </tr>

export default Course