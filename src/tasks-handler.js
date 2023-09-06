import { handleProjects } from "./projects-handler"
const contentTitle = document.querySelector('.content-title')
const contentTasks = document.querySelector('.tasks')
const handleTasks = (()=>{

    const show = (clickedProject)=>{
        contentTitle.textContent = clickedProject
        const projectArray = handleProjects.getProjectArray(clickedProject)
        contentTasks.innerHTML = ''
        projectArray.forEach(item =>{
            const task = document.createElement('div')
            task.classList.add('task')
            contentTasks.appendChild(task)
        })

    }
    const add = ()=>{
        
    }
    return{show, add}
})()

export{handleTasks}