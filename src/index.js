import './style.css'
import {handleProjects} from './projects-handler.js'
import {handleTasks} from './tasks-handler'
const btnAddProject = document.querySelector('.btn-new-project')
const projectFormContainer = document.querySelector('.project-form-container')
const projectForm = document.querySelector('.project-form')
const projectFormSubmit = document.querySelector('.btn-project-form-submit')
const projectFormOverlay = document.querySelector('.project-form-overlay')
const projectSection = document.querySelector('.project-section')
const btnAddTask = document.querySelector('.btn-new-task')
const taskFormContainer = document.querySelector('.task-form-container')
const taskFormOverlay = document.querySelector('.task-form-overlay')
const taskForm =document.querySelector('.task-form')
const taskFormSubmit = document.querySelector('.btn-task-form-submit')
const tasks = document.querySelector('.tasks')
const taskDetailsOverlay = document.querySelector('.task-details-overlay')

import plusIcon from './images/plus.png';

const plusImg = document.querySelector('.plus-icon')
plusImg.src = plusIcon

const handleProjectForm = (()=>{
    btnAddProject.addEventListener('click',()=>{
        openProjectForm()
    })
    projectFormSubmit.addEventListener('click',(event)=>{
        event.preventDefault()
        if(!projectForm.checkValidity()){
            projectForm.reportValidity()
        }
        if(projectForm.checkValidity()){
            handleProjects.addProject()
            closeProjectForm()
        }
    })
    projectFormOverlay.addEventListener('click',()=>{
        closeProjectForm()
    })
})()

const openProjectForm = ()=>{
    projectFormContainer.classList.add('active')
    projectFormOverlay.classList.add('active')
}
const closeProjectForm = ()=>{
    projectFormContainer.classList.remove('active')
    projectFormOverlay.classList.remove('active')
    projectForm.reset()
}
projectSection.addEventListener('click',(clickedElement)=>{
    if(clickedElement.target.classList.contains('project-btn-title')){
        document.querySelector('.btn-new-task').classList.add('active')
        handleTasks.show(clickedElement.target.textContent)       
    }
})
projectSection.addEventListener('click',(clickedElement)=>{
    if(clickedElement.target.classList.contains('project-btn-close')){
        const parent = clickedElement.target.parentElement
        const titleChild = parent.firstChild
        projectSection.removeChild(parent)
        handleProjects.removeProject(titleChild.textContent) 
    }
})

//all about tasks
const openTaskForm = ()=>{
    taskFormContainer.classList.add('active')
    taskFormOverlay.classList.add('active')
}
const closeTaskForm = ()=>{
    taskFormContainer.classList.remove('active')
    taskFormOverlay.classList.remove('active')
    taskForm.reset()
}
const handleTaskForm = (()=>{
    btnAddTask.addEventListener('click',()=>{
        openTaskForm()
    })
    taskFormOverlay.addEventListener('click',function(){
        closeTaskForm()
    })
    taskFormSubmit.addEventListener('click',(event)=>{
        event.preventDefault()
        handleTasks.add()
        if(!taskForm.checkValidity()){
            taskForm.reportValidity()
        }
        if(taskForm.checkValidity()){
            closeTaskForm()
        }
    })
})()

tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("task-close")){
        const hey = _clickedElement.target.parentElement
        tasks.removeChild(hey)
        handleTasks.remove(hey.dataset.number)
    }
})
tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("see-details")){
        const task = _clickedElement.target.parentElement
        handleProjects.showTaskDetails(document.querySelector('.content-title').textContent ,task.dataset.number)
    }
})
tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("task-check-box")){
        const task = _clickedElement.target.parentElement
        task.classList.add('checked')
        handleProjects.checkProject(document.querySelector('.content-title').textContent, task.dataset.number)
    }
})
taskDetailsOverlay.addEventListener('click',()=>{
    taskDetailsOverlay.classList.remove('active')
    document.querySelector('.task-details').classList.remove('active')
})