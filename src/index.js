import './style.css'
import {handleProjects} from './projects-handler.js'
const btnAddProject = document.querySelector('.btn-new-project')
const projectFormContainer = document.querySelector('.project-form-container')
const projectForm = document.querySelector('.project-form')
const projectFormSubmit = document.querySelector('.btn-project-form-submit')
const projectFormOverlay = document.querySelector('.project-form-overlay')

const handleProjectForm = (()=>{
    btnAddProject.addEventListener('click',()=>{
        projectFormContainer.classList.add('active')
        projectFormOverlay.classList.add('active')
    })
    projectFormSubmit.addEventListener('click',(event)=>{
        event.preventDefault()
        if(!projectForm.checkValidity()){
            projectForm.reportValidity()
        }
        if(projectForm.checkValidity()){
            handleProjects.addProject()
            projectFormContainer.classList.remove('active')
            projectFormOverlay.classList.remove('active')
        }
    })
    projectFormOverlay.addEventListener('click',()=>{
        projectFormContainer.classList.remove('active')
        projectFormOverlay.classList.remove('active')
    })
})()

