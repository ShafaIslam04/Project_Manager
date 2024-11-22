import { useContext, useState } from "react";
import { ProjectContext } from "../../Context";


const AddTask = ({onClose,editTask}) => {
    const {projects,setProjects}=useContext(ProjectContext)
    const[newProjects,setNewProjects]=useState(editTask || {
        id : crypto.randomUUID(),
        taskName:"",
        description:"",
        dueDate:"",
        category:"todo"
    })
    
     const [isEdit,setIsEdit]=useState(Object.is(editTask,null))
    function handleProject(e){
        let name = e.target.name;
        let value = e.target.value
        setNewProjects(
            {
                ...newProjects,
            [name]:value
            }
        )

    }

    

    function addProject(){

        const { taskName, description, dueDate } = newProjects;
    if (!taskName.trim() || !description.trim() || !dueDate.trim()) {
      alert("Please fill out all the required fields before submitting.");
      return;
    }else{

    // Proceed with submission logic
    console.log("Form submitted:", newProjects);
  };
        
       if(isEdit){
        setProjects([...projects,newProjects])
       }else{
        setProjects(
            projects.map(item=>{
                if(item.id===newProjects.id){
                return newProjects
            }
            return item
        })
        )
       }
        
        onClose()
         
    }
    console.log(projects)
    
    return (
       <>
       <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0">
       <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white ">
          <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
      <div className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
        <form >
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="mb-1 block text-sm font-medium text-gray-300"
              >Task Name
              </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={newProjects.taskName}
              onChange={handleProject}
              required
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-300"
              >Description
              </label>
            <textarea
              id="description"
              name="description"
              value={newProjects.description}
              onChange={handleProject}
              rows="3"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="mb-1 block text-sm font-medium text-gray-300"
              >Due Date 
              </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newProjects.dueDate}
              onChange={handleProject}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-gray-300"
              >Category 
              </label>
            <select
              id="category"
              name="category"
              value={newProjects.category}
              onChange={handleProject}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="todo">To-Do</option>
              <option value="inprogress">On Progress</option>
              <option value="done">Done</option>
              <option value="revised">Revised</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button onClick={onClose}
              type="button"
              className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={(e)=>{
                e.preventDefault()
                addProject(newProjects)}}
            >
              {isEdit ? 'Create Task': 'Edit Task'}
            </button>
          </div>
        </form>
      </div>
    </div>  
        </div>
       </div>
       </>
    );
};

export default AddTask;