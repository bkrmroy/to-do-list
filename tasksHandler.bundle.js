/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects-handler.js":
/*!*********************************!*\
  !*** ./src/projects-handler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleProjects: () => (/* binding */ handleProjects)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/tasks-handler.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTasks: () => (/* binding */ handleTasks)
/* harmony export */ });
/* harmony import */ var _projects_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-handler */ "./src/projects-handler.js");

const contentTitle = document.querySelector('.content-title')
const contentTasks = document.querySelector('.tasks')
const handleTasks = (()=>{

    const show = (clickedProject)=>{
        contentTitle.textContent = clickedProject
        const projectArray = _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.getProjectArray(clickedProject)
        contentTasks.innerHTML = ''
        createTaskElementsOf(projectArray)
    }
    const createTaskElementsOf = (_projectArray)=>{
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

            const taskClose = document.createElement('button')
            taskClose.classList.add('task-close')
            taskClose.textContent = 'Delete'
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
            _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.addTaskToProject(projectName, taskObject)
            show(projectName)
        }

    }
    const remove = (_taskIndex)=>{
        const projectName = document.querySelector('.content-title').textContent
        _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.removeTaskFromProject(projectName, _taskIndex)
        show(projectName)
    }
    return{show, add, remove}
})()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NIYW5kbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7Ozs7Ozs7VUM1Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkRBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBYztBQUN0QjtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy1oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbmRsZVByb2plY3RzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzTGlicmFyeSA9IHt9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bi10ZXh0JylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tdGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpLnZhbHVlXHJcbiAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tY2xvc2UnKVxyXG4gICAgICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnXHJcblxyXG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpXHJcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VjdGlvblwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpLnZhbHVlXHJcbiAgICAgICAgcHJvamVjdHNMaWJyYXJ5W3Byb2plY3ROYW1lXSA9IFtdXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNMaWJyYXJ5KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9IChwcm9qZWN0ICx0YXNrKT0+e1xyXG4gICAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHByb2plY3RzTGlicmFyeVtwcm9qZWN0XVxyXG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHRhc2spXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAoX3Byb2plY3ROYW1lLCBfdGFza0luZGV4KT0+e1xyXG4gICAgICAgIGNvbnN0IHRhc2tBcnJheSA9IHByb2plY3RzTGlicmFyeVtfcHJvamVjdE5hbWVdXHJcbiAgICAgICAgdGFza0FycmF5LnNwbGljZShfdGFza0luZGV4LCAxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrSW5kZXgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0QXJyYXkgPSAocHJvamVjdCk9PntcclxuICAgICAgICByZXR1cm4gcHJvamVjdHNMaWJyYXJ5W3Byb2plY3RdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKF9wcm9qZWN0TmFtZSk9PntcclxuICAgICAgICBkZWxldGUgcHJvamVjdHNMaWJyYXJ5W19wcm9qZWN0TmFtZV1cclxuICAgIH1cclxuICAgIHJldHVybnthZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0QXJyYXksIGFkZFRhc2tUb1Byb2plY3QsIHJlbW92ZVRhc2tGcm9tUHJvamVjdH1cclxufSkoKVxyXG5cclxuZXhwb3J0IHtoYW5kbGVQcm9qZWN0c307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoYW5kbGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLWhhbmRsZXJcIlxyXG5jb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10aXRsZScpXHJcbmNvbnN0IGNvbnRlbnRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXHJcbmNvbnN0IGhhbmRsZVRhc2tzID0gKCgpPT57XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9IChjbGlja2VkUHJvamVjdCk9PntcclxuICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBjbGlja2VkUHJvamVjdFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RBcnJheSA9IGhhbmRsZVByb2plY3RzLmdldFByb2plY3RBcnJheShjbGlja2VkUHJvamVjdClcclxuICAgICAgICBjb250ZW50VGFza3MuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBjcmVhdGVUYXNrRWxlbWVudHNPZihwcm9qZWN0QXJyYXkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVUYXNrRWxlbWVudHNPZiA9IChfcHJvamVjdEFycmF5KT0+e1xyXG4gICAgICAgIF9wcm9qZWN0QXJyYXkuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJylcclxuICAgICAgICAgICAgdGFzay5kYXRhc2V0Lm51bWJlciA9IF9wcm9qZWN0QXJyYXkuaW5kZXhPZihpdGVtKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrLWJveCcpXHJcbiAgICAgICAgICAgIGNoZWNrQm94LnRleHRDb250ZW50ID0gJzAnXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICB0YXNrQ2xvc2UuY2xhc3NMaXN0LmFkZCgndGFzay1jbG9zZScpXHJcbiAgICAgICAgICAgIHRhc2tDbG9zZS50ZXh0Q29udGVudCA9ICdEZWxldGUnXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0Nsb3NlKVxyXG5cclxuICAgICAgICAgICAgLy8gdGFzay50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICAgICAgY29udGVudFRhc2tzLmFwcGVuZENoaWxkKHRhc2spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZCA9ICgpPT57XHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpLmNoZWNrVmFsaWRpdHkoKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKS52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICBoYW5kbGVQcm9qZWN0cy5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrT2JqZWN0KVxyXG4gICAgICAgICAgICBzaG93KHByb2plY3ROYW1lKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmUgPSAoX3Rhc2tJbmRleCk9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJykudGV4dENvbnRlbnRcclxuICAgICAgICBoYW5kbGVQcm9qZWN0cy5yZW1vdmVUYXNrRnJvbVByb2plY3QocHJvamVjdE5hbWUsIF90YXNrSW5kZXgpXHJcbiAgICAgICAgc2hvdyhwcm9qZWN0TmFtZSlcclxuICAgIH1cclxuICAgIHJldHVybntzaG93LCBhZGQsIHJlbW92ZX1cclxufSkoKVxyXG5cclxuZXhwb3J0e2hhbmRsZVRhc2tzfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==