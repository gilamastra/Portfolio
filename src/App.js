import Home from "./components/home.js";
import Loading from "./components/Loading";
import Projects from "./components/projects.js";
import { useEffect, useRef, useState } from "react";
import Skills from "./components/skills.js";
import project1 from "./img/netflixProjectPicture1.png";
import project2 from "./img/SlackClone1.png";

import project3 from "./img/CatWiki1.png";
import project4 from "./img/PlantManagerlogo2.png";
import styled from "styled-components";
import ClipLoader from "react-spinners/ScaleLoader";

import Menu from "./components/menu";
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import ProjectSinglePage from "./Projects/ProjectSinglePage.js";
function App(props) {
   const [isLoading, setIsLoading] = useState(false);
   setTimeout(() => {}, 1000);

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
         setIsLoading(false);
      }, 2000);
   }, []);
   return (
      <Router>
         {isLoading ? (
            <Center>
               <ClipLoader
                  color={"#8100c7"}
                  height={100}
                  width={30}
                  loading={isLoading}
               />
            </Center>
         ) : (
            <div className="App">
               <Switch>
                  <Route path="/projects/:project">
                     <ProjectSinglePage />
                  </Route>

                  <Route path="/">
                     <Menu />
                     <Home />
                     <Skills />
                     <Projects
                        project1={project1}
                        project3={project3}
                        project4={project4}
                        project2={project2}
                     />
                  </Route>
               </Switch>
            </div>
         )}
      </Router>
   );
}

const Center = styled.div`
   display: flex;
   justify-content: center;
   background: #0f0017;
   align-items: center;
   height: 100vh;
`;

export default App;
