import { handleProjects } from "./projects-handler"
const contentTitle = document.querySelector('.content-title')
const contentTasks = document.querySelector('.tasks')
const handleTasks = (()=>{

    const show = (clickedProject)=>{
        contentTitle.textContent = clickedProject
        const projectArray = handleProjects.getProjectArray(clickedProject)
        contentTasks.innerHTML = ''
        loopThroughTheProject(projectArray)
    }
    const loopThroughTheProject = (_projectArray)=>{
        _projectArray.forEach(item =>{
            const task = document.createElement('div')
            task.classList.add('task')
            task.dataset.number = _projectArray.indexOf(item)
            
            const checkBox = document.createElement('div')
            checkBox.classList.add('task-check-box')
            checkBox.textContent = '0'
            task.appendChild(checkBox)

            const taskTitle = document.createElement('div')
            taskTitle.classList.add('task-title')
            taskTitle.textContent = item.title
            task.appendChild(taskTitle)

            const taskDate = document.createElement('div')
            taskDate.classList.add('task-date')
            taskDate.textContent = item.date
            task.appendChild(taskDate)

            const taskClose = document.createElement('div')
            taskClose.classList.add('task-close')
            taskClose.textContent = 'X'
            task.appendChild(taskClose)

            // task.textContent = item
            contentTasks.appendChild(task)
        })
    }
    const add = ()=>{
        if(document.querySelector('.task-form').checkValidity()){
            const taskObject = {
                title: document.getElementById('task-title').value,
                date: document.getElementById('task-date').value
            }
            const projectName = document.querySelector('.content-title').textContent
            handleProjects.addTaskToProject(projectName, taskObject)
            show(projectName)
        }

    }
    return{show, add}
})()

export{handleTasks}