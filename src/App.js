import './App.css';
import { BrowserRouter, } from 'react-router-dom';
import { useState } from 'react';
import { taskContext } from './context/taskContext';
// import { projects } from './utils/data';
import TaskBoard from './components2/TaskBoard';

function App() {

  const [activeProject,setActiveProject]=useState(null);
  // const [allProjects,setAllProjects]=useState(projects);

  return (
    <div className="App">
        <BrowserRouter>
          <taskContext.Provider value={{activeProject,setActiveProject}}>
            <TaskBoard/>
          </taskContext.Provider >
        </BrowserRouter >
    </div>
  );
}

export default App;
