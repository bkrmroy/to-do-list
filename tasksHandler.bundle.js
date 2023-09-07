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
        closeButton.textContent = 'x'

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
    const getProjectArray = (project)=>{
        return projectsLibrary[project]
    }
    const removeProject = ()=>{
        
    }
    return{addProject, removeProject, getProjectArray, addTaskToProject}
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
            _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.addTaskToProject(projectName, taskObject)
            show(projectName)
        }

    }
    return{show, add}
})()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NIYW5kbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2REFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MtaGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW5kbGVQcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpYnJhcnkgPSB7fVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tdGV4dCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLXRpdGxlJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLWNsb3NlJylcclxuICAgICAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4J1xyXG5cclxuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KVxyXG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgIHByb2plY3RzTGlicmFyeVtwcm9qZWN0TmFtZV0gPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlicmFyeSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAocHJvamVjdCAsdGFzayk9PntcclxuICAgICAgICBjb25zdCB0YXNrQXJyYXkgPSBwcm9qZWN0c0xpYnJhcnlbcHJvamVjdF1cclxuICAgICAgIHRhc2tBcnJheS5wdXNoKHRhc2spXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0QXJyYXkgPSAocHJvamVjdCk9PntcclxuICAgICAgICByZXR1cm4gcHJvamVjdHNMaWJyYXJ5W3Byb2plY3RdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKCk9PntcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybnthZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0QXJyYXksIGFkZFRhc2tUb1Byb2plY3R9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7aGFuZGxlUHJvamVjdHN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFuZGxlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy1oYW5kbGVyXCJcclxuY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKVxyXG5jb25zdCBjb250ZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG5jb25zdCBoYW5kbGVUYXNrcyA9ICgoKT0+e1xyXG5cclxuICAgIGNvbnN0IHNob3cgPSAoY2xpY2tlZFByb2plY3QpPT57XHJcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gY2xpY2tlZFByb2plY3RcclxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBoYW5kbGVQcm9qZWN0cy5nZXRQcm9qZWN0QXJyYXkoY2xpY2tlZFByb2plY3QpXHJcbiAgICAgICAgY29udGVudFRhc2tzLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgbG9vcFRocm91Z2hUaGVQcm9qZWN0KHByb2plY3RBcnJheSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvb3BUaHJvdWdoVGhlUHJvamVjdCA9IChfcHJvamVjdEFycmF5KT0+e1xyXG4gICAgICAgIF9wcm9qZWN0QXJyYXkuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJylcclxuICAgICAgICAgICAgdGFzay5kYXRhc2V0Lm51bWJlciA9IF9wcm9qZWN0QXJyYXkuaW5kZXhPZihpdGVtKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrLWJveCcpXHJcbiAgICAgICAgICAgIGNoZWNrQm94LnRleHRDb250ZW50ID0gJzAnXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrQ2xvc2UuY2xhc3NMaXN0LmFkZCgndGFzay1jbG9zZScpXHJcbiAgICAgICAgICAgIHRhc2tDbG9zZS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tDbG9zZSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRhc2sudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnRUYXNrcy5hcHBlbmRDaGlsZCh0YXNrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGQgPSAoKT0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJykudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJykudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgaGFuZGxlUHJvamVjdHMuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFza09iamVjdClcclxuICAgICAgICAgICAgc2hvdyhwcm9qZWN0TmFtZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJue3Nob3csIGFkZH1cclxufSkoKVxyXG5cclxuZXhwb3J0e2hhbmRsZVRhc2tzfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==