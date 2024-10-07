import ProjectSideBar from './Components/ProjectSideBar.jsx'
import './App.css';
import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import { useState } from 'react';
import SelectedProject from './Components/SelectedProject.jsx';

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text){
    setprojectState(prevState => {
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectID,
        id: Math.random()
      }
      return{
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
   })
  }
  function handleDeleteTask(id){
    setprojectState((prevState)=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter(task => task.id !== id),
      }
    });
  }
  function handleCancelAddProject(){
    setprojectState(prevState =>{
      return{
        ...prevState,
        selectedProjectID : undefined,
      }
    })
  }
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

  function handleSelectProject(id){
    setprojectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectID:id,
      }
    });
  }

  function handleDeleteProject(){
    setprojectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectID:undefined,
        projects:prevState.projects.filter(project => project.id !== prevState.selectedProjectID)
      }
    });
  }
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectID)
  
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>;
  if (projectState.selectedProjectID === null){
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
  }
  else if(projectState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject = {handleStartAddProject}
      projects = {projectState.projects}
      onSelectProject ={handleSelectProject}
      selectedProjectID={projectState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
