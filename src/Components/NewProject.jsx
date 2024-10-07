import Input from "./Input"
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAddProject, onCancel}){

    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = desc.current.value;
        const entereddue = dueDate.current.value;

        if(enteredTitle.trim()==='' || enteredDescription.trim() === '' || entereddue.trim() ==='')
        {
                modal.current.open();
                return;
        }

        onAddProject({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : entereddue,
        })
    }
    return (
    
    <>
    <Modal ref={modal} buttonCaption = "Okay">
        <h2 className = "mb-4 font-bold uppercase md:text-xl text-stone-500">Invalid Input</h2>
        <p className = "mb-4 text-stone-400"> Please provide valid input data</p>
    </Modal>
    <div className = "w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>       
        </menu>
        <div>
            <Input ref={title} label="Title"/>
            <Input ref= {desc} label="Description" textarea/>
            <Input ref={dueDate} label="Due Date" type="date"/>
        </div>
    </div>
    </>);
}