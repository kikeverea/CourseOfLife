import './App.css';
import CourseOfLife from './components/CourseOfLife'
import testSections from './helpers/testHelper'

const App = () => {
  return (
  // <NavBar/>
  // <CourseOfLife/>
      // for each section
        //<table>
            // <Course/>
                //<tr>
  // <License/>
  <CourseOfLife sectionList= { testSections }/>
  );
}

export default App;
