import './CourseOfLife.css'
import Section from './Section'

const CourseOfLife = ({ sectionList }) =>
    <div className = 'container-fluid p-5'>
        { sectionList.map(section => <Section key = { section.name } section = { section } />) }
    </div>

export default CourseOfLife