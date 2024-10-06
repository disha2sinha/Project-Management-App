import Button from "./Button.jsx";
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className =  "mt-24 text-center w-2/3">
            <h2 className = "mb-8 md:text-xl font-bold text-stone-200 uppercase">No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <Button onClick = {onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    );
}