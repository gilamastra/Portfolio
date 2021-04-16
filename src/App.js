import Home from './components/home.js'
import Loading from './components/Loading'
import Projects from './components/projects.js'
import {useEffect,useRef, useState} from 'react'
import Skills from './components/skills.js'
import project1 from './img/netflixProjectPicture1.png'
import project1Hover from './img/netflixProjectPicture2.png'
import Scrollbar from 'react-smooth-scrollbar'
import Menu  from './components/menu'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
function App(props) {
const [loading, isLoading] = useState(true)
setTimeout(()=>{
isLoading(false)
},1000)

  return (
    <Router>

      <Scrollbar
      damping={1}
      >
      {loading ? <Loading/>  : <div className="App"> 


        <Menu />
   
        <Home/>
        <Skills/>
        <Projects project1={project1} project1Hover={project1Hover}/>
          
            </div>}
        

    </Scrollbar>
  </Router>
  );
}

export default App;
