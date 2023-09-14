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
/* harmony import */ var _images_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close.png */ "./src/images/close.png");

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

        const closeButton = document.createElement('img')
        closeButton.classList.add('project-btn-close')
        closeButton.src = _images_close_png__WEBPACK_IMPORTED_MODULE_0__

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
    const checkProject = (_projectName, _taskNumber)=>{
        const project = projectsLibrary[_projectName]
        const task = project[_taskNumber]
        task.checked = 'yes'
    }
    const showTaskDetails = (_projectName, _taskNumber)=>{
        const project = projectsLibrary[_projectName]
        const task = project[_taskNumber]
        document.querySelector('.task-details').classList.add('active')
        document.querySelector('.task-details-overlay').classList.add('active')
        document.querySelector('.task-details-title').textContent = `Title: ${task.title}`
        document.querySelector('.task-details-description').textContent = `Description: ${task.description}`
        document.querySelector('.task-details-date').textContent = `Date: ${task.date}`

    }
    return{addProject, removeProject, getProjectArray, addTaskToProject, removeTaskFromProject, checkProject, showTaskDetails}
})()



/***/ }),

/***/ "./src/images/checkbox-outline.png":
/*!*****************************************!*\
  !*** ./src/images/checkbox-outline.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7739a29861e2e86e80e.png";

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "229d5d4299ec75e20e22.png";

/***/ }),

/***/ "./src/images/trash-can-outline.png":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d85791232c5153a4295.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/trash-can-outline.png */ "./src/images/trash-can-outline.png");
/* harmony import */ var _images_checkbox_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/checkbox-outline.png */ "./src/images/checkbox-outline.png");



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

            if(item.checked === 'yes'){
                task.classList.add('checked')
            }
            const checkBox = document.createElement('img')
            checkBox.classList.add('task-check-box')
            checkBox.src = _images_checkbox_outline_png__WEBPACK_IMPORTED_MODULE_2__
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
            taskClose.src = _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__
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
                description: document.getElementById('task-description').value,
                date: document.getElementById('task-date').value,
                checked: 'no'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NIYW5kbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxXQUFXO0FBQ3pGLDBGQUEwRixpQkFBaUI7QUFDM0csNEVBQTRFLFVBQVU7QUFDdEY7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJtRDtBQUNDO0FBQ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBYztBQUN0QjtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy1oYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29uQ2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2UucG5nJ1xyXG5jb25zdCBoYW5kbGVQcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpYnJhcnkgPSB7fVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tdGV4dCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLXRpdGxlJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLWNsb3NlJylcclxuICAgICAgICBjbG9zZUJ1dHRvbi5zcmMgPSBpY29uQ2xvc2VcclxuXHJcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dClcclxuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWN0aW9uXCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LXRpdGxlJykudmFsdWVcclxuICAgICAgICBwcm9qZWN0c0xpYnJhcnlbcHJvamVjdE5hbWVdID0gW11cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0xpYnJhcnkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHByb2plY3QgLHRhc2spPT57XHJcbiAgICAgICAgY29uc3QgdGFza0FycmF5ID0gcHJvamVjdHNMaWJyYXJ5W3Byb2plY3RdXHJcbiAgICAgICAgdGFza0FycmF5LnB1c2godGFzaylcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZVRhc2tGcm9tUHJvamVjdCA9IChfcHJvamVjdE5hbWUsIF90YXNrSW5kZXgpPT57XHJcbiAgICAgICAgY29uc3QgdGFza0FycmF5ID0gcHJvamVjdHNMaWJyYXJ5W19wcm9qZWN0TmFtZV1cclxuICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKF90YXNrSW5kZXgsIDEpXHJcbiAgICAgICAgY29uc29sZS5sb2coX3Rhc2tJbmRleClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFByb2plY3RBcnJheSA9IChwcm9qZWN0KT0+e1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0c0xpYnJhcnlbcHJvamVjdF1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoX3Byb2plY3ROYW1lKT0+e1xyXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c0xpYnJhcnlbX3Byb2plY3ROYW1lXVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hlY2tQcm9qZWN0ID0gKF9wcm9qZWN0TmFtZSwgX3Rhc2tOdW1iZXIpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzTGlicmFyeVtfcHJvamVjdE5hbWVdXHJcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3RbX3Rhc2tOdW1iZXJdXHJcbiAgICAgICAgdGFzay5jaGVja2VkID0gJ3llcydcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dUYXNrRGV0YWlscyA9IChfcHJvamVjdE5hbWUsIF90YXNrTnVtYmVyKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c0xpYnJhcnlbX3Byb2plY3ROYW1lXVxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0W190YXNrTnVtYmVyXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMtb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy10aXRsZScpLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3Rhc2sudGl0bGV9YFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMtZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt0YXNrLmRlc2NyaXB0aW9ufWBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLWRhdGUnKS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Rhc2suZGF0ZX1gXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJue2FkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RBcnJheSwgYWRkVGFza1RvUHJvamVjdCwgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LCBjaGVja1Byb2plY3QsIHNob3dUYXNrRGV0YWlsc31cclxufSkoKVxyXG5cclxuZXhwb3J0IHtoYW5kbGVQcm9qZWN0c307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhhbmRsZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMtaGFuZGxlclwiXHJcbmltcG9ydCBpY29uRGVsIGZyb20gJy4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZydcclxuaW1wb3J0IGljb25DaGVjayBmcm9tICcuL2ltYWdlcy9jaGVja2JveC1vdXRsaW5lLnBuZydcclxuY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKVxyXG5jb25zdCBjb250ZW50VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG5jb25zdCBoYW5kbGVUYXNrcyA9ICgoKT0+e1xyXG5cclxuICAgIGNvbnN0IHNob3cgPSAoY2xpY2tlZFByb2plY3QpPT57XHJcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gY2xpY2tlZFByb2plY3RcclxuICAgICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBoYW5kbGVQcm9qZWN0cy5nZXRQcm9qZWN0QXJyYXkoY2xpY2tlZFByb2plY3QpXHJcbiAgICAgICAgY29udGVudFRhc2tzLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzT2YocHJvamVjdEFycmF5KVxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlVGFza0VsZW1lbnRzT2YgPSAoX3Byb2plY3RBcnJheSk9PntcclxuICAgICAgICBfcHJvamVjdEFycmF5LmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXHJcbiAgICAgICAgICAgIHRhc2suZGF0YXNldC5udW1iZXIgPSBfcHJvamVjdEFycmF5LmluZGV4T2YoaXRlbSlcclxuXHJcbiAgICAgICAgICAgIGlmKGl0ZW0uY2hlY2tlZCA9PT0gJ3llcycpe1xyXG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2stYm94JylcclxuICAgICAgICAgICAgY2hlY2tCb3guc3JjID0gaWNvbkNoZWNrXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpXHJcbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXHJcbiAgICAgICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdzZWUtZGV0YWlscycpXHJcbiAgICAgICAgICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSAnRGV0YWlscydcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXRhaWxzKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgdGFza0Nsb3NlLnNyYyA9IGljb25EZWxcclxuICAgICAgICAgICAgdGFza0Nsb3NlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2xvc2UnKVxyXG4gICAgICAgICAgICB0YXNrQ2xvc2UudGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tDbG9zZSlcclxuXHJcbiAgICAgICAgICAgIC8vIHRhc2sudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRlbnRUYXNrcy5hcHBlbmRDaGlsZCh0YXNrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGQgPSAoKT0+e1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICdubydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJykudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgaGFuZGxlUHJvamVjdHMuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFza09iamVjdClcclxuICAgICAgICAgICAgc2hvdyhwcm9qZWN0TmFtZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlID0gKF90YXNrSW5kZXgpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10aXRsZScpLnRleHRDb250ZW50XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdHMucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCBfdGFza0luZGV4KVxyXG4gICAgICAgIHNob3cocHJvamVjdE5hbWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm57c2hvdywgYWRkLCByZW1vdmV9XHJcbn0pKClcclxuXHJcbmV4cG9ydHtoYW5kbGVUYXNrc30iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=