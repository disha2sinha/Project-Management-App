import ProjectSideBar from './Components/ProjectSideBar.jsx'
import './App.css';
import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import { useState } from 'react';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectID: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setprojectState(prevState =>{
      return{
        ...prevState,
        selectedProjectID : null,
      }
    })
  }
  function handleAddProject(projectData){
    setprojectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectID : undefined,
        projects: [...prevState.projects,newProject]
      };
    })
  }

  
  let content;
  if (projectState.selectedProjectID === null){
    content = <NewProject onAddProject={handleAddProject}></NewProject>
  }
  else if(projectState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject = {handleStartAddProject}
      projects = {projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
