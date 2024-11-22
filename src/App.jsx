import { useState } from "react"
import ProjectsList from "./Components/ProjectList/ProjectsList"
import SearchBar from "./Components/SearchBar"
import SideBar from "./Components/SideBar"
import {  ProjectContext } from "./Context"


function App() {
  // const defaultProjects = {
  //     id : crypto.randomUUID(),
  //     taskName:"",
  //     description:"",
  //     dueDate:"",
  //     category:"todo"
    
  // }
 const [projects,setProjects]=useState([])
//  const [flteredProjects,setFilteredProjects]=useState([])

  return (
    <>
    <body className="bg-gray-900 text-white">
      <div className="flex h-screen">
        
        <ProjectContext.Provider value={{projects,setProjects}}>
        <SideBar></SideBar>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <SearchBar></SearchBar>
          <ProjectsList></ProjectsList>
          
        </main>
        </ProjectContext.Provider>
        
      </div>
      </body>
    </>
  )
}

export default App
