import { handleProjects } from "./projects-handler"
import iconDel from './images/trash-can-outline.png'
import iconCheck from './images/checkbox-outline.png'
import { compareAsc, format, parseISO } from 'date-fns'
const contentTitle = document.querySelector('.content-title')
const contentTasks = document.querySelector('.tasks')
const handleTasks = (()=>{

    const show = (clickedProject)=>{
        contentTitle.textContent = clickedProject
        const projectArray = handleProjects.getProjectArray(clickedProject)
        contentTasks.innerHTML = ''
        createTaskElementsOf(projectArray)
    }
    const createTaskElementsOf = (_projectArray)=>{
        _projectArray.forEach(item =>{
            const task = document.createElement('div')
            task.classList.add('task')
            task.dataset.number = _projectArray.indexOf(item)

            if(item.checked === 'yes'){
                task.classList.add('checked')
            }
            const checkBox = document.createElement('img')
            checkBox.classList.add('task-check-box')
            checkBox.src = iconCheck
            task.appendChild(checkBox)

            const taskTitle = document.createElement('div')
            taskTitle.classList.add('task-title')
            taskTitle.textContent = item.title
            task.appendChild(taskTitle)

            const taskDate = document.createElement('div')
            taskDate.classList.add('task-date')
            taskDate.textContent = item.date
            task.appendChild(taskDate)
            
            const details = document.createElement('button')
            details.classList.add('see-details')
            details.textContent = 'Details'
            task.appendChild(details)

            const taskClose = document.createElement('img')
            taskClose.src = iconDel
            taskClose.classList.add('task-close')
            taskClose.textContent = 'Delete'
            task.appendChild(taskClose)
            contentTasks.appendChild(task)
        })
    }
    const add = ()=>{
        if(document.querySelector('.task-form').checkValidity()){
            const taskObject = {
                title: document.getElementById('task-title').value,
                description: document.getElementById('task-description').value,
                date: format(parseISO(document.getElementById('task-date').value) , 'dd MMM, yyyy'),
                checked: 'no'
            }
            const projectName = document.querySelector('.content-title').textContent
            handleProjects.addTaskToProject(projectName, taskObject)
            show(projectName)
        }

    }
    const remove = (_taskIndex)=>{
        const projectName = document.querySelector('.content-title').textContent
        handleProjects.removeTaskFromProject(projectName, _taskIndex)
        show(projectName)
    }
    return{show, add, remove}
})()

export{handleTasks}