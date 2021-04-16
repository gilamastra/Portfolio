import Home from './components/home.js'
import Projects from './components/projects.js'
import {useEffect,useRef} from 'react'
import Skills from './components/skills.js'
import project1 from './img/netflixProjectPicture1.png'
import project1Hover from './img/netflixProjectPicture2.png'
import Scrollbar from 'react-smooth-scrollbar'
import Menu  from './components/menu'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
function App(props) {



  return (
    <Router>

      <Scrollbar
      damping={1}
      >

      <div className="App">

        <Menu />
        <Switch>
          <Route path="/"/>
        </Switch>
        <Home/>
        <Skills/>
        <Projects project1={project1} project1Hover={project1Hover}/>
        

      </div>
    </Scrollbar>
  </Router>
  );
}

export default App;
