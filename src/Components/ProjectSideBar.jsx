import Button from "./Button.jsx"
export default function ProjectSideBar({onStartAddProject, projects,onSelectProject,selectedProjectID}){
    return(
        <aside className="w-1/3 px-8 py-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className = "mb-8 font-bold uppercase md:text-xl text-stone-500">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+Add Project</Button>
            </div>
            <ul className = "mt-8">
                {projects.map(project => {
                let cssClasses="w-full text-left px-2 py-1 rounded-sm hover:bg-stone-700"
                if (project.id === selectedProjectID){
                    cssClasses +=" bg-stone-800 text-stone-300"
                }
                else{
                    cssClasses += " text-stone-400"
                }
                return(
                <li key = {project.id}>
                    <button className = {cssClasses} onClick={() => onSelectProject(project.id)}>{project.title}</button>
                </li>
                )
})}
            </ul>
        </aside>
    )
}