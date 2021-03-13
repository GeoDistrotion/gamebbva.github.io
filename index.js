/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Classes/Elements__Geo/UserDataGame.js":
/*!******************************************************!*\
  !*** ./src/js/Classes/Elements__Geo/UserDataGame.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserData)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserData = /*#__PURE__*/function () {
  function UserData() {
    _classCallCheck(this, UserData);

    this.nickName = "";
    this.player = "";
    this.statusGame = false;
  }

  _createClass(UserData, [{
    key: "setUserName",
    value: function setUserName(usr_name) {
      this.nickName = usr_name;
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      return this.nickName;
    }
  }, {
    key: "setPlayer",
    value: function setPlayer(usr_player) {
      this.player = usr_player;
    }
  }, {
    key: "getPlayer",
    value: function getPlayer() {
      return this.player;
    }
  }]);

  return UserData;
}();



/***/ }),

/***/ "./src/js/modules/Alertmessage.js":
/*!****************************************!*\
  !*** ./src/js/modules/Alertmessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertMessage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertMessage = /*#__PURE__*/function () {
  function AlertMessage() {
    _classCallCheck(this, AlertMessage);

    this.message = '';
  }

  _createClass(AlertMessage, [{
    key: "setMessage",
    value: function setMessage(message) {
      this.message = message;
      this.createAlert();
    }
  }, {
    key: "createAlert",
    value: function createAlert() {
      var msCnt = document.getElementById('AlertsContainer');
      var message = "<div class=\"message__alert\"><p>".concat(this.message, "</p></div>");
      msCnt.innerHTML = message;
      this.removeAlert();
    }
  }, {
    key: "removeAlert",
    value: function removeAlert() {
      var alertEl = document.querySelector(".message__alert");
      var timer = setTimeout(function () {
        alertEl.remove(0);
        clearTimeout(timer);
      }, 3000);
    }
  }]);

  return AlertMessage;
}();



/***/ }),

/***/ "./src/js/modules/StepGame.js":
/*!************************************!*\
  !*** ./src/js/modules/StepGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stepGameManager": () => (/* binding */ stepGameManager),
/* harmony export */   "btnChoseSection": () => (/* binding */ btnChoseSection)
/* harmony export */ });
/* harmony import */ var _modules_Alertmessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Alertmessage */ "./src/js/modules/Alertmessage.js");

/**
 * 
 * @param {*} currentView 
 * @param {*} w_usrdata 
 * @param {*} callback 
 */

function stepGameManager() {
  var currentView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var w_usrdata = arguments.length > 1 ? arguments[1] : undefined;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  var sections = document.getElementsByClassName('step-cont'); // get Sections

  for (var sect = 0; sect < sections.length; sect++) {
    if (validateStep(w_usrdata, currentView)) {
      // Validate Section rules
      if (sect === currentView) // Compare with parameter
        sections[sect].style.display = "block"; // Show Section
      else sections[sect].style.display = "none"; // Hide Section
    }
  }

  callback(currentView);
}
/**
 * 
 * @param {*} w_usrdata 
 * @param {*} callback 
 */

function btnChoseSection(w_usrdata, callback) {
  var btnSection = document.getElementsByClassName('bnt__section'); // Get buttons

  var _loop = function _loop(btn) {
    // Loop each one
    var current__btn = btnSection[btn];
    var step = current__btn.getAttribute("attr-section");
    current__btn.addEventListener('click', function () {
      stepGameManager(parseInt(step), w_usrdata, callback);
    });
  };

  for (var btn = 0; btn < btnSection.length; btn++) {
    _loop(btn);
  }
}
/**
 * 
 * @param {*} w_usrdata 
 * @param {*} step 
 * @returns 
 */

function validateStep(w_usrdata, step) {
  // function to validate section
  var alert = new _modules_Alertmessage__WEBPACK_IMPORTED_MODULE_0__.default();
  var valid = false;

  switch (step) {
    case 0:
      // Section 0 not require validation
      valid = true;
      break;

    case 1:
      // Section 1 not require validation
      valid = true;
      alert.setMessage('Comienza el juego!');
      break;

    case 2:
      // Section require validation 2 validations, the nickname and the
      var nickName = w_usrdata.getPlayer();
      var player = w_usrdata.getPlayer();
      if (nickName && player) valid = true;else valid = false;
      alert.setMessage('Debes seleccionar al menos un perfil e ingresar un nickname.');
      break;

    default:
      valid = false;
      break;
  }

  console.log(step, "Es valido: ".concat(valid));
  return valid;
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/\u0010Player_Consultant\u0010.jpg":
/*!********************************************!*\
  !*** ./src/images/Player_Consultant.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f4c98d6d195deb738b2a.jpg";

/***/ }),

/***/ "./src/images/\u0010Player_Manager.jpg":
/*!****************************************!*\
  !*** ./src/images/Player_Manager.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1f2c55aca275f34caa53.jpg";

/***/ }),

/***/ "./src/images/\u0010Player_TechCreative\u0010.jpg":
/*!**********************************************!*\
  !*** ./src/images/Player_TechCreative.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/558496a5b95cd07a944c.jpg";

/***/ }),

/***/ "./src/images/logo_bbva_blanco.svg":
/*!*****************************************!*\
  !*** ./src/images/logo_bbva_blanco.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d95c2432c9b0242d08e6.svg";

/***/ }),

/***/ "./src/images/zombie-background-02.jpg":
/*!*********************************************!*\
  !*** ./src/images/zombie-background-02.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1d63e1edac55d6980f3b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _images_logo_bbva_blanco_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo_bbva_blanco.svg */ "./src/images/logo_bbva_blanco.svg");
/* harmony import */ var _images_zombie_background_02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/zombie-background-02.jpg */ "./src/images/zombie-background-02.jpg");
/* harmony import */ var _images_Player_Consultant_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Player_Consultant.jpg */ "./src/images/\u0010Player_Consultant\u0010.jpg");
/* harmony import */ var _images_Player_Manager_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Player_Manager.jpg */ "./src/images/\u0010Player_Manager.jpg");
/* harmony import */ var _images_Player_TechCreative_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Player_TechCreative.jpg */ "./src/images/\u0010Player_TechCreative\u0010.jpg");
/* harmony import */ var _js_modules_StepGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modules/StepGame */ "./src/js/modules/StepGame.js");
/* harmony import */ var _js_Classes_Elements_Geo_UserDataGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Classes/Elements__Geo/UserDataGame */ "./src/js/Classes/Elements__Geo/UserDataGame.js");









function initGame() {
  var userData = new _js_Classes_Elements_Geo_UserDataGame__WEBPACK_IMPORTED_MODULE_7__.default();
  (0,_js_modules_StepGame__WEBPACK_IMPORTED_MODULE_6__.btnChoseSection)(userData, triggerSection); // add Chose section Event to buttons

  (0,_js_modules_StepGame__WEBPACK_IMPORTED_MODULE_6__.stepGameManager)(0, userData, triggerSection); // init the game with the first view

  function triggerSection(w_sect) {
    switch (w_sect) {
      case 2:
        break;

      case 3:
        break;
    }
  }
}

initGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9DbGFzc2VzL0VsZW1lbnRzX19HZW8vVXNlckRhdGFHYW1lLmpzIiwid2VicGFjazovL2dhbWViYnZhLy4vc3JjL2pzL21vZHVsZXMvQWxlcnRtZXNzYWdlLmpzIiwid2VicGFjazovL2dhbWViYnZhLy4vc3JjL2pzL21vZHVsZXMvU3RlcEdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvaW5kZXguc2Nzcz9hNWRlIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1lYmJ2YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJVc2VyRGF0YSIsIm5pY2tOYW1lIiwicGxheWVyIiwic3RhdHVzR2FtZSIsInVzcl9uYW1lIiwidXNyX3BsYXllciIsIkFsZXJ0TWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVBbGVydCIsIm1zQ250IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJlbW92ZUFsZXJ0IiwiYWxlcnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJzdGVwR2FtZU1hbmFnZXIiLCJjdXJyZW50VmlldyIsIndfdXNyZGF0YSIsImNhbGxiYWNrIiwic2VjdGlvbnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2VjdCIsImxlbmd0aCIsInZhbGlkYXRlU3RlcCIsInN0eWxlIiwiZGlzcGxheSIsImJ0bkNob3NlU2VjdGlvbiIsImJ0blNlY3Rpb24iLCJidG4iLCJjdXJyZW50X19idG4iLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnNlSW50IiwiYWxlcnQiLCJ2YWxpZCIsInNldE1lc3NhZ2UiLCJnZXRQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiaW5pdEdhbWUiLCJ1c2VyRGF0YSIsInRyaWdnZXJTZWN0aW9uIiwid19zZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTtBQUNqQixzQkFBYztBQUFBOztBQUNWLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDs7OztXQUVELHFCQUFZQyxRQUFaLEVBQXNCO0FBQ2xCLFdBQUtILFFBQUwsR0FBZ0JHLFFBQWhCO0FBQ0g7OztXQUNELHVCQUFjO0FBQ1YsYUFBTyxLQUFLSCxRQUFaO0FBQ0g7OztXQUVELG1CQUFVSSxVQUFWLEVBQXNCO0FBQ2xCLFdBQUtILE1BQUwsR0FBY0csVUFBZDtBQUNIOzs7V0FDRCxxQkFBWTtBQUNSLGFBQU8sS0FBS0gsTUFBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CZ0JJLFk7QUFDakIsMEJBQWE7QUFBQTs7QUFDVCxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNIOzs7O1dBRUQsb0JBQVdBLE9BQVgsRUFBbUI7QUFDZixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLQyxXQUFMO0FBQ0g7OztXQUVELHVCQUFhO0FBQ1QsVUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQVo7QUFDQSxVQUFJSixPQUFPLDhDQUFxQyxLQUFLQSxPQUExQyxlQUFYO0FB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LENBRytCOztBQUU5QyxXQUFTQSxjQUFULENBQXdCQyxNQUF4QixFQUErQjtBQUMzQixZQUFRQSxNQUFSO0FBQ0ksV0FBSyxDQUFMO0FBRUk7O0FBQ0osV0FBSyxDQUFMO0FBRUk7QUFOUjtBQVFIO0FBQ0o7O0FBRURILFFBQVEsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucGxheWVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdGF0dXNHYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0VXNlck5hbWUodXNyX25hbWUpIHtcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHVzcl9uYW1lO1xuICAgIH1cbiAgICBnZXRVc2VyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmlja05hbWU7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyKHVzcl9wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB1c3JfcGxheWVyO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRNZXNzYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3JlYXRlQWxlcnQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbGVydCgpe1xuICAgICAgICBsZXQgbXNDbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWxlcnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYDxkaXYgY2xhc3M9XCJtZXNzYWdlX19hbGVydFwiPjxwPiR7dGhpcy5tZXNzYWdlfTwvcD48L2Rpdj5gXG4gICAgICAgIG1zQ250LmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxlcnQoKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGVydCgpe1xuICAgICAgICBsZXQgYWxlcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZV9fYWxlcnRcIik7IFxuICAgICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBhbGVydEVsLnJlbW92ZSgwKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufSIsImltcG9ydCBBbGVydE1lc3NhZ2UgZnJvbSAnLi4vbW9kdWxlcy9BbGVydG1lc3NhZ2UnO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjdXJyZW50VmlldyBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBHYW1lTWFuYWdlcihjdXJyZW50VmlldyA9IDAsIHdfdXNyZGF0YSwgY2FsbGJhY2spe1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RlcC1jb250Jyk7IC8vIGdldCBTZWN0aW9uc1xuICAgIGZvciAobGV0IHNlY3QgPSAwOyBzZWN0IDwgc2VjdGlvbnMubGVuZ3RoOyBzZWN0KyspIHtcbiAgICAgICAgaWYoIHZhbGlkYXRlU3RlcCggd191c3JkYXRhLCBjdXJyZW50VmlldyApICl7IC8vIFZhbGlkYXRlIFNlY3Rpb24gcnVsZXNcbiAgICAgICAgICAgIGlmKHNlY3QgPT09IGN1cnJlbnRWaWV3KSAvLyBDb21wYXJlIHdpdGggcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy8gU2hvdyBTZWN0aW9uXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIFNlY3Rpb25cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFjayhjdXJyZW50Vmlldyk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHdfdXNyZGF0YSBcbiAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidG5DaG9zZVNlY3Rpb24od191c3JkYXRhLCBjYWxsYmFjayl7XG4gICAgbGV0IGJ0blNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibnRfX3NlY3Rpb24nKTsgLy8gR2V0IGJ1dHRvbnNcbiAgICBmb3IgKGxldCBidG4gPSAwOyBidG4gPCBidG5TZWN0aW9uLmxlbmd0aDsgYnRuKyspIHsgLy8gTG9vcCBlYWNoIG9uZVxuICAgICAgICBjb25zdCBjdXJyZW50X19idG4gPSBidG5TZWN0aW9uW2J0bl07XG4gICAgICAgIGxldCBzdGVwID0gY3VycmVudF9fYnRuLmdldEF0dHJpYnV0ZShcImF0dHItc2VjdGlvblwiKTsgXG4gICAgICAgIGN1cnJlbnRfX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0ZXBHYW1lTWFuYWdlcihwYXJzZUludChzdGVwKSwgd191c3JkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBzdGVwIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlU3RlcCh3X3VzcmRhdGEsIHN0ZXApeyAvLyBmdW5jdGlvbiB0byB2YWxpZGF0ZSBzZWN0aW9uXG4gICAgbGV0IGFsZXJ0ID0gbmV3IEFsZXJ0TWVzc2FnZSgpXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICAgIGNhc2UgMDogLy8gU2VjdGlvbiAwIG5vdCByZXF1aXJlIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOiAvLyBTZWN0aW9uIDEgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnQ29taWVuemEgZWwganVlZ28hJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyBTZWN0aW9uIHJlcXVpcmUgdmFsaWRhdGlvbiAyIHZhbGlkYXRpb25zLCB0aGUgbmlja25hbWUgYW5kIHRoZVxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB3X3VzcmRhdGEuZ2V0UGxheWVyKCk7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB3X3VzcmRhdGEuZ2V0UGxheWVyKCk7XG4gICAgICAgICAgICBpZihuaWNrTmFtZSAmJiBwbGF5ZXIpXG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnRGViZXMgc2VsZWNjaW9uYXIgYWwgbWVub3MgdW4gcGVyZmlsIGUgaW5ncmVzYXIgdW4gbmlja25hbWUuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc29sZS5sb2coc3RlcCwgYEVzIHZhbGlkbzogJHt2YWxpZH1gKTtcbiAgICByZXR1cm4gdmFsaWQ7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBNYWluTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvX2JidmFfYmxhbmNvLnN2Zyc7XG5pbXBvcnQgTWFpbkJhY2tHcm91bmQgZnJvbSAnLi9pbWFnZXMvem9tYmllLWJhY2tncm91bmQtMDIuanBnJztcbmltcG9ydCBQbGF5Q29uc3VsdGFudCBmcm9tICcuL2ltYWdlcy9cdTAwMTBQbGF5ZXJfQ29uc3VsdGFudFx1MDAxMC5qcGcnO1xuaW1wb3J0IFBsYXltYW5hZ2VyIGZyb20gJy4vaW1hZ2VzL1x1MDAxMFBsYXllcl9NYW5hZ2VyLmpwZyc7XG5pbXBvcnQgUGxheVRlY2ggZnJvbSAnLi9pbWFnZXMvXHUwMDEwUGxheWVyX1RlY2hDcmVhdGl2ZVx1MDAxMC5qcGcnO1xuaW1wb3J0IHtzdGVwR2FtZU1hbmFnZXIsIGJ0bkNob3NlU2VjdGlvbn0gZnJvbSAnLi9qcy9tb2R1bGVzL1N0ZXBHYW1lJztcbmltcG9ydCBVc2VyRGF0YSBmcm9tICcuL2pzL0NsYXNzZXMvRWxlbWVudHNfX0dlby9Vc2VyRGF0YUdhbWUnO1xuXG5cbmZ1bmN0aW9uIGluaXRHYW1lKCl7XG4gICAgbGV0IHVzZXJEYXRhID0gbmV3IFVzZXJEYXRhKCk7XG4gICAgYnRuQ2hvc2VTZWN0aW9uKHVzZXJEYXRhLCB0cmlnZ2VyU2VjdGlvbik7IC8vIGFkZCBDaG9zZSBzZWN0aW9uIEV2ZW50IHRvIGJ1dHRvbnNcbiAgICBzdGVwR2FtZU1hbmFnZXIoMCwgdXNlckRhdGEsIHRyaWdnZXJTZWN0aW9uKTsgLy8gaW5pdCB0aGUgZ2FtZSB3aXRoIHRoZSBmaXJzdCB2aWV3XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyU2VjdGlvbih3X3NlY3Qpe1xuICAgICAgICBzd2l0Y2ggKHdfc2VjdCkge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pbml0R2FtZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=