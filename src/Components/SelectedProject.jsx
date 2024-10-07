import Tasks from "./Tasks.jsx"
export default function SelectedProject({project, onDelete,onAddTask,onDeleteTask,tasks}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month : 'short',
        day: 'numeric'
    })
    
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 flex flex-row mx-4  border-b-4 border-stone-600">
                <div>
                    <h1>{project.title}</h1>
                    <button onClick = {onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
        </div>
    )
}