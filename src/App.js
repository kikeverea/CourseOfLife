import './App.css';
import CourseOfLife from './components/CourseOfLife'
import testSections from './helpers/testHelper'
import UserDashboard from "./components/UserDashboard";

const App = () => {
  return (
  // <NavBar/>
  // <CourseOfLife/>
      // for each section
        //<table>
            // <Course/>
                //<tr>
  // <License/>

    // if state
      //CourseOfLife
    // else
      // user dashboard


    // <CourseOfLife sectionList= { testSections }/>
    <UserDashboard user={{
      name: 'Enrique Verea',
      mail: 'kikeverea@gmail.com',
      phone: '653 216 860'
    }}/>
  );
}

export default App;
