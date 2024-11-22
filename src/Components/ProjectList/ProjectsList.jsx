
import { useContext, useState } from "react";
import Add from "./Add";
import Done from "./Done";
import OnProgress from "./OnProgress";
import Revise from "./Revise";
import ToDo from "./ToDo";
import {  ProjectContext } from "../../Context";


const ProjectsList = () => {
    const [showModal,setShowModal]=useState(false)
    const[editTask,setEditTask]=useState(null)
    const {projects,setProjects}=useContext(ProjectContext)
    
    console.log(projects)
    
    function handleAddModal(){
        setShowModal(true) 
    }

    function handleCloseModal(){
        setShowModal(false)
        setEditTask(null)
    }
    function handleEdit(item){
        setEditTask(item)
        setShowModal(true)
    }
    function handleDelete(itemId){
        const remainingItem = projects.filter(project=>project.id!==itemId)
        setProjects([...remainingItem ])
    }
    const Todo = projects.filter(project=>project.category==='todo')
    console.log(Todo)
    const onProgress = projects.filter(project=>project.category==='inprogress')
    const done = projects.filter(project=>project.category==='done')  
    const revise = projects.filter(project=>project.category==='revised')  

    return (
        <div className="mx-auto max-w-7xl p-6">
            
                  <Add onEdit={handleEdit} editTask={editTask} onModal={handleAddModal} onClose={handleCloseModal} showModal={showModal}></Add> 
                    
                        <div className="-mx-2 mb-6 flex flex-wrap">
                    <ToDo onDelete={handleDelete} onEdit={handleEdit} Todo={Todo}></ToDo>
                    <OnProgress onDelete={handleDelete} onEdit={handleEdit} onProgress={onProgress}></OnProgress>
                    <Done onDelete={handleDelete} onEdit={handleEdit} done={done}></Done>
                    <Revise onDelete={handleDelete} onEdit={handleEdit} revise={revise}></Revise>
                  </div>
                    
            
           
        </div>
    );
};

export default ProjectsList;