const handleProjects = (() => {
    const projectsLibrary = {}

    const addProject = ()=>{
        const newProject = document.createElement('div')
        newProject.classList.add('project-btn')

        const projectText = document.createElement('div')
        projectText.classList.add('project-btn-text')

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-btn-title')
        projectTitle.textContent = document.getElementById('new-project-title').value
        projectText.appendChild(projectTitle)

        const closeButton = document.createElement('div')
        closeButton.classList.add('project-btn-close')
        closeButton.textContent = 'X'

        newProject.appendChild(projectText)
        newProject.appendChild(closeButton)
        document.querySelector(".project-section").appendChild(newProject)

        const projectName = document.getElementById('new-project-title').value
        projectsLibrary[projectName] = []
        console.log(projectsLibrary)
    }
    const addTaskToProject = (project ,task)=>{
        const taskArray = projectsLibrary[project]
        taskArray.push(task)
    }
    const removeTaskFromProject = (_projectName, _taskIndex)=>{
        const taskArray = projectsLibrary[_projectName]
        taskArray.splice(_taskIndex, 1)
        console.log(_taskIndex)
    }
    const getProjectArray = (project)=>{
        return projectsLibrary[project]
    }
    const removeProject = (_projectName)=>{
        delete projectsLibrary[_projectName]
    }
    return{addProject, removeProject, getProjectArray, addTaskToProject, removeTaskFromProject}
})()

export {handleProjects};