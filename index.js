/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/classes/Alertmessage.js":
/*!****************************************!*\
  !*** ./src/js/classes/Alertmessage.js ***!
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

/***/ "./src/js/classes/Bullet.js":
/*!**********************************!*\
  !*** ./src/js/classes/Bullet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bullet)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bullet = /*#__PURE__*/function () {
  function Bullet(x, y) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'right';
    var context = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.radius = 5;
    this.direction = dir;
    this.c = context;
  }
  /** Getters && Setters */


  _createClass(Bullet, [{
    key: "setPosX",
    value: function setPosX(x) {
      this.x = x;
    }
  }, {
    key: "getPosX",
    value: function getPosX(x) {
      return this.x;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.c.fillStyle = 'red';
      this.c.fill();
    }
  }]);

  return Bullet;
}();



/***/ }),

/***/ "./src/js/classes/CanvasGame.js":
/*!**************************************!*\
  !*** ./src/js/classes/CanvasGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasGame)
/* harmony export */ });
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ "./src/js/classes/Bullet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/js/classes/Player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CanvasGame = /*#__PURE__*/function () {
  function CanvasGame(assets, userData) {
    _classCallCheck(this, CanvasGame);

    this.gameCont = document.querySelector('#InitBBVAGame'); // Get the main container

    this.canvas = document.createElement('canvas'); // Init element canvas

    this.assets = assets; // Get the game assets preloaded

    this.context; // 2D CONTEXT

    this.hero; // Hero cont

    this.floor; // Floor parameter

    this.center; // Center param

    this.contWidth = 0; // Main container width

    this.contHeight = 0; // Main container height

    this.animate; // Set the window animation frame id

    this.zombies = []; // Array to store the zombies objects

    this.zDir = "right"; // Set the current zombie direction

    this.zombieloop; // Set an interval id

    this.bullets = []; // Array to store the bullets objects
  }

  _createClass(CanvasGame, [{
    key: "startCanvasGame",
    value: function startCanvasGame(userData) {
      // Trigger the start game  && set the global conf
      this.nickName = userData.getNickName();
      this.playerProfile = userData.getPlayer();
      this.context = this.canvas.getContext('2d'); // Init the cotext

      this.contWidth = this.gameCont.offsetWidth; // set the maib cont width

      this.contHeight = this.gameCont.offsetHeight; // set the main cont height

      this.canvas.width = this.contWidth; // set the canvas width

      this.canvas.height = this.contHeight; // set the canvas height

      this.floor = this.contHeight - 150; // set the game floor 

      this.center = this.contWidth / 2; // set the center game

      this.gameCont.appendChild(this.canvas); // inject the canvas in the main container

      this.hero = new _Player__WEBPACK_IMPORTED_MODULE_1__.default(this.assets.hero_right, this.assets.hero_left, 50, this.context, 'Hero'); // Create the hero object

      this.hero.setPosX(this.center); // set the init hero x pos

      this.hero.setPosY(this.floor - 140); // set the init hero y pos 

      this._zombiesmanager(); // start the zombie manager creator


      this._addHeroControls(); // add keyboard events to the hero object


      this._turnOnEngine(); // start the game loop engine;

    }
  }, {
    key: "_addHeroControls",
    value: function _addHeroControls() {
      var _this = this;

      addEventListener('keydown', function (e) {
        // adding the window keyboard event
        var hPosX = _this.hero.getPosX(); // get the hero current x pos


        var hDir = _this.hero.getDirection(); // get the hero current direction


        var bulletXOrigin = hDir == 'right' ? hPosX + 80 : hPosX + 40; // set the origin of the new bullet;

        switch (e.key) {
          case "ArrowLeft":
            // catch the Arrow left
            _this.hero.setDirection('left'); // set the hero direction to left


            _this.hero.startRun(); // init the run animation to the direction before configured


            if (hPosX > 0) {
              // limit the environment to left
              _this.hero.setPosX(hPosX - 10);
            }

            break;

          case "ArrowRight":
            // catch the arrow right 
            _this.hero.setDirection('right'); // set the hero direction to right


            _this.hero.startRun(); // init the run animation to the direction before configured


            if (hPosX < _this.contWidth - 100) {
              // limit the environment to right
              _this.hero.setPosX(hPosX + 10);
            }

            break;

          case " ":
            // catch the spacebar
            var newBullet = new _Bullet__WEBPACK_IMPORTED_MODULE_0__.default(bulletXOrigin, _this.contHeight - 180, hDir, _this.context); // create the new bullet

            _this.bullets.push(newBullet); // add the new bullet to the bullets array


            break;

          default:
            break;
        }
      });
      addEventListener('keyup', function (e) {
        // catch the key up event
        switch (e.key) {
          case 'ArrowLeft':
            _this.hero.stopRun(); // stop the run left animation


            break;

          case 'ArrowRight':
            _this.hero.stopRun(); // stop the run right animation


            break;

          default:
            break;
        }
      });
    }
  }, {
    key: "_zombiesmanager",
    value: function _zombiesmanager() {
      var _this2 = this;

      this.zombieloop = setInterval(function () {
        // start the time interval and add it to the id
        if (_this2.zombies.length < 3) {
          var newZombie = new _Player__WEBPACK_IMPORTED_MODULE_1__.default(_this2.assets.zombie_right, _this2.assets.zombie_left, 10, _this2.context, "zombie", _this2.zDir); // create zombie object

          newZombie.setPosY(_this2.floor - 140); // set the zombir Y pos origin

          newZombie.setPosX(_this2.zDir === "right" ? -50 : _this2.contWidth + 50); // set the zombir X pos origin

          _this2.zDir = _this2.zDir === "right" ? "left" : "right"; // set the Zombie move direction

          _this2.zombies.push(newZombie); // add the new zombie to the main zombies array

        }
      }, 1000);
    }
  }, {
    key: "_turnOnEngine",
    value: function _turnOnEngine() {
      var _this3 = this;

      this.context.clearRect(0, 0, this.contWidth, this.contWidth); // clean the stage each iteration

      /** Header */

      this.context.font = "80px BentonSansBBVA-Bold";
      this.context.textAlign = "center";
      this.context.fillStyle = "white";
      this.context.fillText("ZOMBIE TASK", 450, 100);
      /** Display user data */

      this.context.font = "30px BentonSansBBVA-Book";
      this.context.textAlign = "center";
      this.context.fillStyle = "white";
      this.context.fillText("".concat(this.playerProfile, ": ").concat(this.nickName), 450, 150);
      /** Floor */

      this.context.fillStyle = 'black'; // set the game floor color

      this.context.fillRect(0, this.floor, this.contWidth, 150); // draw the game floor

      this.hero.draw(); // draw the hero object each iteration

      this.zombies.forEach(function (zombie, z) {
        // read each zombie object from the zombie list
        zombie.draw(); // draw the zombie object each iteration

        var zPosX = zombie.getPosX(); // get the current X pos

        var currentZombieDir = zombie.getDirection(); // get the current direction

        if (currentZombieDir === "right" && zPosX < _this3.contWidth) {
          // limit the area
          zombie.setPosX(zPosX + 2);
        } else if (currentZombieDir === "right" && zPosX >= _this3.contWidth) {
          _this3.zombies.splice(z, 1); // remove the object from the list

        }

        if (zombie.getDirection() === "left" && zPosX > -100) {
          // limit the area
          zombie.setPosX(zPosX - 2);
        } else if (currentZombieDir === "left" && zPosX <= 0) {
          _this3.zombies.splice(z, 1); // remove the object from the list

        }
        /* Collition detector */


        _this3.bullets.forEach(function (bullet, b) {
          var bulletPosX = bullet.getPosX();

          if (bulletPosX > zPosX + 40 && bulletPosX < zPosX + 60) {
            _this3.zombies.splice(z, 1);

            _this3.bullets.splice(b, 1);
          }
        });

        zombie.startRun(); // start the animation depending on the zombie direction
      });
      this.bullets.forEach(function (bullet, b) {
        bullet.draw(); // draw the bullet object each iteration

        var bPosX = bullet.getPosX();
        var currentBulletDir = bullet.getDirection();

        if (currentBulletDir == 'right' && bPosX < _this3.contWidth) {
          bullet.setPosX(bPosX + 3);
        } else if (currentBulletDir === "right" && bPosX >= _this3.contWidth) {
          _this3.bullets.splice(b, 1);
        }

        if (currentBulletDir == 'left' && bPosX > 0) {
          bullet.setPosX(bPosX - 3);
        } else if (currentBulletDir === "left" && bPosX <= 0) {
          _this3.bullets.splice(b, 1);
        }
      });
      this.animate = requestAnimationFrame(function () {
        return _this3._turnOnEngine();
      }); // recursive iteration function
    }
  }, {
    key: "stopCanvasGame",
    value: function stopCanvasGame() {
      cancelAnimationFrame(this.animate); // cancel the animation loop engine

      clearInterval(this.zombieloop); // clear the time intervar zombie creator
    }
  }]);

  return CanvasGame;
}();



/***/ }),

/***/ "./src/js/classes/Player.js":
/*!**********************************!*\
  !*** ./src/js/classes/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(imgs_right, // get the array images preloaded for the right direction
  imgs_left) // set the origin direction
  {
    var w_pointsoflife = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var // set the points of life
    context = arguments.length > 3 ? arguments[3] : undefined;
    var // pass the context to draw the new object to the canvas env
    w_id = arguments.length > 4 ? arguments[4] : undefined;
    var w_dir = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "right";

    _classCallCheck(this, Player);

    this.x = 0; // origin x pos

    this.y = 0; // origin y pos

    this.pointsOfLive = w_pointsoflife;
    this.id = w_id;
    this.c = context;
    this.assets_right = imgs_right;
    this.assets_left = imgs_left;
    this.imageIndex = 0;
    this.direction = w_dir;
    this.maxImgs = this.direction ? this.assets_right.length - 1 : this.assets_left.length - 1; // create a limit to loop
  }
  /** Getters && Setters */


  _createClass(Player, [{
    key: "setPosX",
    value: function setPosX(x) {
      this.x = x;
    }
  }, {
    key: "setPosY",
    value: function setPosY(y) {
      this.y = y;
    }
  }, {
    key: "getPosX",
    value: function getPosX(x) {
      return this.x;
    }
  }, {
    key: "getPosY",
    value: function getPosY(y) {
      return this.y;
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: "startRun",
    value: function startRun() {
      if (this.imageIndex < this.maxImgs) {
        // displaying the movement images
        this.imageIndex += 1;
      } else {
        this.imageIndex = 1; // return to the first image
      }
    }
  }, {
    key: "stopRun",
    value: function stopRun() {
      this.imageIndex = 0; // return to the first image
    }
  }, {
    key: "draw",
    value: function draw(x, y) {
      this.c.drawImage(this.direction == 'right' ? this.assets_right[this.imageIndex] : this.assets_left[this.imageIndex], this.x, this.y, 100, 160);
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/js/classes/UserDataGame.js":
/*!****************************************!*\
  !*** ./src/js/classes/UserDataGame.js ***!
  \****************************************/
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
    this.score = 0;
    this.statusGame = false;
  }

  _createClass(UserData, [{
    key: "setNickName",
    value: function setNickName(usr_name) {
      this.nickName = usr_name;
    }
  }, {
    key: "getNickName",
    value: function getNickName() {
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

/***/ "./src/js/modules/hero_images.js":
/*!***************************************!*\
  !*** ./src/js/modules/hero_images.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getGameAssets)
/* harmony export */ });
/* harmony import */ var _images_player_hero_right_01_h3ro_15_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__15.png */ "./src/images/player__hero/right_01/h3ro__15.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_14_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__14.png */ "./src/images/player__hero/right_01/h3ro__14.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_13_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__13.png */ "./src/images/player__hero/right_01/h3ro__13.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_12_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__12.png */ "./src/images/player__hero/right_01/h3ro__12.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_11_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__11.png */ "./src/images/player__hero/right_01/h3ro__11.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_10_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__10.png */ "./src/images/player__hero/right_01/h3ro__10.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_9_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__9.png */ "./src/images/player__hero/right_01/h3ro__9.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__8.png */ "./src/images/player__hero/right_01/h3ro__8.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__7.png */ "./src/images/player__hero/right_01/h3ro__7.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__6.png */ "./src/images/player__hero/right_01/h3ro__6.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__5.png */ "./src/images/player__hero/right_01/h3ro__5.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__4.png */ "./src/images/player__hero/right_01/h3ro__4.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__3.png */ "./src/images/player__hero/right_01/h3ro__3.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__2.png */ "./src/images/player__hero/right_01/h3ro__2.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__1.png */ "./src/images/player__hero/right_01/h3ro__1.png");
/* harmony import */ var _images_player_hero_right_01_h3ro_0_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/player__hero/right_01/h3ro__0.png */ "./src/images/player__hero/right_01/h3ro__0.png");
/* harmony import */ var _images_player_hero_left_h3ro_15_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__15.png */ "./src/images/player__hero/left/h3ro__15.png");
/* harmony import */ var _images_player_hero_left_h3ro_14_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__14.png */ "./src/images/player__hero/left/h3ro__14.png");
/* harmony import */ var _images_player_hero_left_h3ro_13_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__13.png */ "./src/images/player__hero/left/h3ro__13.png");
/* harmony import */ var _images_player_hero_left_h3ro_12_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__12.png */ "./src/images/player__hero/left/h3ro__12.png");
/* harmony import */ var _images_player_hero_left_h3ro_11_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__11.png */ "./src/images/player__hero/left/h3ro__11.png");
/* harmony import */ var _images_player_hero_left_h3ro_10_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__10.png */ "./src/images/player__hero/left/h3ro__10.png");
/* harmony import */ var _images_player_hero_left_h3ro_9_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__9.png */ "./src/images/player__hero/left/h3ro__9.png");
/* harmony import */ var _images_player_hero_left_h3ro_8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__8.png */ "./src/images/player__hero/left/h3ro__8.png");
/* harmony import */ var _images_player_hero_left_h3ro_7_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__7.png */ "./src/images/player__hero/left/h3ro__7.png");
/* harmony import */ var _images_player_hero_left_h3ro_6_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__6.png */ "./src/images/player__hero/left/h3ro__6.png");
/* harmony import */ var _images_player_hero_left_h3ro_5_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__5.png */ "./src/images/player__hero/left/h3ro__5.png");
/* harmony import */ var _images_player_hero_left_h3ro_4_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__4.png */ "./src/images/player__hero/left/h3ro__4.png");
/* harmony import */ var _images_player_hero_left_h3ro_3_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__3.png */ "./src/images/player__hero/left/h3ro__3.png");
/* harmony import */ var _images_player_hero_left_h3ro_2_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__2.png */ "./src/images/player__hero/left/h3ro__2.png");
/* harmony import */ var _images_player_hero_left_h3ro_1_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__1.png */ "./src/images/player__hero/left/h3ro__1.png");
/* harmony import */ var _images_player_hero_left_h3ro_0_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../images/player__hero/left/h3ro__0.png */ "./src/images/player__hero/left/h3ro__0.png");
/* harmony import */ var _images_zombie_right_Walk_1_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../images/zombie/right/Walk_1.png */ "./src/images/zombie/right/Walk_1.png");
/* harmony import */ var _images_zombie_right_Walk_2_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../images/zombie/right/Walk_2.png */ "./src/images/zombie/right/Walk_2.png");
/* harmony import */ var _images_zombie_right_Walk_3_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../images/zombie/right/Walk_3.png */ "./src/images/zombie/right/Walk_3.png");
/* harmony import */ var _images_zombie_right_Walk_4_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../images/zombie/right/Walk_4.png */ "./src/images/zombie/right/Walk_4.png");
/* harmony import */ var _images_zombie_right_Walk_5_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../images/zombie/right/Walk_5.png */ "./src/images/zombie/right/Walk_5.png");
/* harmony import */ var _images_zombie_right_Walk_6_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../images/zombie/right/Walk_6.png */ "./src/images/zombie/right/Walk_6.png");
/* harmony import */ var _images_zombie_right_Walk_7_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../images/zombie/right/Walk_7.png */ "./src/images/zombie/right/Walk_7.png");
/* harmony import */ var _images_zombie_right_Walk_8_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../images/zombie/right/Walk_8.png */ "./src/images/zombie/right/Walk_8.png");
/* harmony import */ var _images_zombie_right_Walk_9_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../images/zombie/right/Walk_9.png */ "./src/images/zombie/right/Walk_9.png");
/* harmony import */ var _images_zombie_right_Walk_10_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../images/zombie/right/Walk_10.png */ "./src/images/zombie/right/Walk_10.png");
/* harmony import */ var _images_zombie_left_Walk_1_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../images/zombie/left/Walk_1.png */ "./src/images/zombie/left/Walk_1.png");
/* harmony import */ var _images_zombie_left_Walk_2_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../images/zombie/left/Walk_2.png */ "./src/images/zombie/left/Walk_2.png");
/* harmony import */ var _images_zombie_left_Walk_3_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../images/zombie/left/Walk_3.png */ "./src/images/zombie/left/Walk_3.png");
/* harmony import */ var _images_zombie_left_Walk_4_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../images/zombie/left/Walk_4.png */ "./src/images/zombie/left/Walk_4.png");
/* harmony import */ var _images_zombie_left_Walk_5_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../images/zombie/left/Walk_5.png */ "./src/images/zombie/left/Walk_5.png");
/* harmony import */ var _images_zombie_left_Walk_6_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../images/zombie/left/Walk_6.png */ "./src/images/zombie/left/Walk_6.png");
/* harmony import */ var _images_zombie_left_Walk_7_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../images/zombie/left/Walk_7.png */ "./src/images/zombie/left/Walk_7.png");
/* harmony import */ var _images_zombie_left_Walk_8_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../images/zombie/left/Walk_8.png */ "./src/images/zombie/left/Walk_8.png");
/* harmony import */ var _images_zombie_left_Walk_9_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../images/zombie/left/Walk_9.png */ "./src/images/zombie/left/Walk_9.png");
/* harmony import */ var _images_zombie_left_Walk_10_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../images/zombie/left/Walk_10.png */ "./src/images/zombie/left/Walk_10.png");




















































function getGameAssets() {
  var assets = {
    hero: {
      right: [_images_player_hero_right_01_h3ro_0_png__WEBPACK_IMPORTED_MODULE_15__, _images_player_hero_right_01_h3ro_1_png__WEBPACK_IMPORTED_MODULE_14__, _images_player_hero_right_01_h3ro_2_png__WEBPACK_IMPORTED_MODULE_13__, _images_player_hero_right_01_h3ro_3_png__WEBPACK_IMPORTED_MODULE_12__, _images_player_hero_right_01_h3ro_4_png__WEBPACK_IMPORTED_MODULE_11__, _images_player_hero_right_01_h3ro_5_png__WEBPACK_IMPORTED_MODULE_10__, _images_player_hero_right_01_h3ro_6_png__WEBPACK_IMPORTED_MODULE_9__, _images_player_hero_right_01_h3ro_7_png__WEBPACK_IMPORTED_MODULE_8__, _images_player_hero_right_01_h3ro_8_png__WEBPACK_IMPORTED_MODULE_7__, _images_player_hero_right_01_h3ro_9_png__WEBPACK_IMPORTED_MODULE_6__, _images_player_hero_right_01_h3ro_10_png__WEBPACK_IMPORTED_MODULE_5__, _images_player_hero_right_01_h3ro_11_png__WEBPACK_IMPORTED_MODULE_4__, _images_player_hero_right_01_h3ro_12_png__WEBPACK_IMPORTED_MODULE_3__, _images_player_hero_right_01_h3ro_13_png__WEBPACK_IMPORTED_MODULE_2__, _images_player_hero_right_01_h3ro_14_png__WEBPACK_IMPORTED_MODULE_1__, _images_player_hero_right_01_h3ro_15_png__WEBPACK_IMPORTED_MODULE_0__],
      left: [_images_player_hero_left_h3ro_0_png__WEBPACK_IMPORTED_MODULE_31__, _images_player_hero_left_h3ro_1_png__WEBPACK_IMPORTED_MODULE_30__, _images_player_hero_left_h3ro_2_png__WEBPACK_IMPORTED_MODULE_29__, _images_player_hero_left_h3ro_3_png__WEBPACK_IMPORTED_MODULE_28__, _images_player_hero_left_h3ro_4_png__WEBPACK_IMPORTED_MODULE_27__, _images_player_hero_left_h3ro_5_png__WEBPACK_IMPORTED_MODULE_26__, _images_player_hero_left_h3ro_6_png__WEBPACK_IMPORTED_MODULE_25__, _images_player_hero_left_h3ro_7_png__WEBPACK_IMPORTED_MODULE_24__, _images_player_hero_left_h3ro_8_png__WEBPACK_IMPORTED_MODULE_23__, _images_player_hero_left_h3ro_9_png__WEBPACK_IMPORTED_MODULE_22__, _images_player_hero_left_h3ro_10_png__WEBPACK_IMPORTED_MODULE_21__, _images_player_hero_left_h3ro_11_png__WEBPACK_IMPORTED_MODULE_20__, _images_player_hero_left_h3ro_12_png__WEBPACK_IMPORTED_MODULE_19__, _images_player_hero_left_h3ro_13_png__WEBPACK_IMPORTED_MODULE_18__, _images_player_hero_left_h3ro_14_png__WEBPACK_IMPORTED_MODULE_17__, _images_player_hero_left_h3ro_15_png__WEBPACK_IMPORTED_MODULE_16__]
    },
    zombie: {
      right: [_images_zombie_right_Walk_1_png__WEBPACK_IMPORTED_MODULE_32__, _images_zombie_right_Walk_2_png__WEBPACK_IMPORTED_MODULE_33__, _images_zombie_right_Walk_3_png__WEBPACK_IMPORTED_MODULE_34__, _images_zombie_right_Walk_4_png__WEBPACK_IMPORTED_MODULE_35__, _images_zombie_right_Walk_5_png__WEBPACK_IMPORTED_MODULE_36__, _images_zombie_right_Walk_6_png__WEBPACK_IMPORTED_MODULE_37__, _images_zombie_right_Walk_7_png__WEBPACK_IMPORTED_MODULE_38__, _images_zombie_right_Walk_8_png__WEBPACK_IMPORTED_MODULE_39__, _images_zombie_right_Walk_9_png__WEBPACK_IMPORTED_MODULE_40__, _images_zombie_right_Walk_10_png__WEBPACK_IMPORTED_MODULE_41__],
      left: [_images_zombie_left_Walk_1_png__WEBPACK_IMPORTED_MODULE_42__, _images_zombie_left_Walk_2_png__WEBPACK_IMPORTED_MODULE_43__, _images_zombie_left_Walk_3_png__WEBPACK_IMPORTED_MODULE_44__, _images_zombie_left_Walk_4_png__WEBPACK_IMPORTED_MODULE_45__, _images_zombie_left_Walk_5_png__WEBPACK_IMPORTED_MODULE_46__, _images_zombie_left_Walk_6_png__WEBPACK_IMPORTED_MODULE_47__, _images_zombie_left_Walk_7_png__WEBPACK_IMPORTED_MODULE_48__, _images_zombie_left_Walk_8_png__WEBPACK_IMPORTED_MODULE_49__, _images_zombie_left_Walk_9_png__WEBPACK_IMPORTED_MODULE_50__, _images_zombie_left_Walk_10_png__WEBPACK_IMPORTED_MODULE_51__]
    }
  };
  var storageAssets = {
    hero_right: [],
    hero_left: [],
    zombie_right: [],
    zombie_left: []
  };
  assets.hero.right.forEach(function (asset) {
    var newImg = new Image();
    newImg.src = asset;
    storageAssets.hero_right.push(newImg);
  });
  assets.hero.left.forEach(function (asset) {
    var newImg = new Image();
    newImg.src = asset;
    storageAssets.hero_left.push(newImg);
  });
  assets.zombie.right.forEach(function (asset) {
    var newImg = new Image();
    newImg.src = asset;
    storageAssets.zombie_right.push(newImg);
  });
  assets.zombie.left.forEach(function (asset) {
    var newImg = new Image();
    newImg.src = asset;
    storageAssets.zombie_left.push(newImg);
  });
  return storageAssets;
}

/***/ }),

/***/ "./src/js/modules/profile.js":
/*!***********************************!*\
  !*** ./src/js/modules/profile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initProfileEvents": () => (/* binding */ initProfileEvents),
/* harmony export */   "removeProfileEvents": () => (/* binding */ removeProfileEvents),
/* harmony export */   "clearProfile": () => (/* binding */ clearProfile)
/* harmony export */ });
/**
 * 
 * @param {*} w_userdata 
 */
function initProfileEvents(w_userdata) {
  // Bind events to the interactive elements
  var btns_player = document.getElementsByClassName('btn-player'); // get all the player buttons selector

  var nickname_input = document.querySelector('#NicknameInput'); // get the nickname text input 

  nickname_input.addEventListener('input', function (e) {
    // Add the onchange event to the input
    var input_value = e.target.value;
    var current_value = input_value.replace(/[^a-zA-Z0-9]/g, ''); // Validatin to only accept text

    w_userdata.setNickName(current_value); // set the new nickname
  });

  var _loop = function _loop(btnplyr) {
    // looping through the buttons
    var current_btn = btns_player[btnplyr]; //

    var w_player = current_btn.getAttribute('attr-player'); // catch the player attribute and set it in a const

    current_btn.addEventListener('click', function () {
      // add click event to each button
      w_userdata.setPlayer(w_player); // set the new selected player in the main user data

      choosePlayer(current_btn); // restore the other options state
    });
  };

  for (var btnplyr = 0; btnplyr < btns_player.length; btnplyr++) {
    _loop(btnplyr);
  }
}
function removeProfileEvents() {
  var btns_player = document.getElementsByClassName('btn-player'); // get all the player buttons selector

  var nickname_input = document.querySelector('#NicknameInput'); // get the nickname text input 

  nickname_input.value = "";
  nickname_input.removeEventListener('input', function (e) {}); // Remove Listeners from  the nickname input

  for (var btnplyr = 0; btnplyr < btns_player.length; btnplyr++) {
    var current_btn = btns_player[btnplyr];
    current_btn.removeEventListener('click', function () {}); // remove listeners from the player selector buttons
  }
}
/**
 * 
 * @param {*} btn 
 */

function choosePlayer() {
  var btn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  // UI interface behavior
  var btns_player = document.getElementsByClassName('btn-player'); // get all the player buttons selector 

  for (var btnplyr = 0; btnplyr < btns_player.length; btnplyr++) {
    var current_btn = btns_player[btnplyr];
    current_btn.classList.remove("selected"); // Remove any selected class added
  }

  if (btn) btn.classList.add("selected"); // if player selected by user add selected class
}

function clearProfile(w_userdata) {
  // Reset user profile
  w_userdata.setNickName(''); // empty nickname user nickname

  w_userdata.setPlayer(''); // empty player choose by the user
}

/***/ }),

/***/ "./src/js/modules/stepGame.js":
/*!************************************!*\
  !*** ./src/js/modules/stepGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stepGameManager": () => (/* binding */ stepGameManager),
/* harmony export */   "btnChoseSection": () => (/* binding */ btnChoseSection)
/* harmony export */ });
/* harmony import */ var _classes_Alertmessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Alertmessage */ "./src/js/classes/Alertmessage.js");

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
  var alert = new _classes_Alertmessage__WEBPACK_IMPORTED_MODULE_0__.default();
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
      var nickName = w_usrdata.getNickName();
      var player = w_usrdata.getPlayer();
      if (nickName && player) valid = true;else {
        valid = false;
        alert.setMessage('Debes seleccionar al menos un perfil e ingresar un nickname.');
      }
      break;

    default:
      valid = false;
      break;
  }

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

/***/ "./src/images/player__hero/left/h3ro__0.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__0.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/57fa10093d99908dffe1.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__1.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ab2cf30458b889e515f1.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__10.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__10.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e09b630227692f841633.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__11.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__11.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/becbd43f029a0d0bd5bb.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__12.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__12.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a6a51e6b43b6022efdf3.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__13.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__13.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f2f6e9d1d6cba65d6f7a.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__14.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__14.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5edeb5a23996ee8389ef.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__15.png":
/*!***************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__15.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5a101e3fd984b58d1a8d.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__2.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ab2cf30458b889e515f1.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__3.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__3.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4d28a403a293aa208573.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__4.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__4.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/61ac3fa522cefffb1e7b.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__5.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__5.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9cfe4b9798a89b082f78.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__6.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__6.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/8d877e6bcc7ebf776eff.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__7.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__7.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cb4f055791620bb33560.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__8.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__8.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2509bcc4c05958381982.png";

/***/ }),

/***/ "./src/images/player__hero/left/h3ro__9.png":
/*!**************************************************!*\
  !*** ./src/images/player__hero/left/h3ro__9.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f662ad2ee85da32fa761.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__0.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__0.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2bed3f27065dbc05249a.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__1.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__1.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02b2eb6e404efc00ca59.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__10.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__10.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/098892ee431b46289cc2.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__11.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__11.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7bde3dbd0fada8fa1c5b.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__12.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__12.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/01ee4a009967c55ae2c2.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__13.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__13.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a8afefe9b9476d1eb670.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__14.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__14.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/519055b65193603099a2.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__15.png":
/*!*******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__15.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cdda6a96dcc76ef13efb.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__2.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__2.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02b2eb6e404efc00ca59.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__3.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__3.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/273d97dd0907d422c375.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__4.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__4.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a2aca03471e780add659.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__5.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__5.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a2401ca9d29a2551cc34.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__6.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__6.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0579823dd9929c45e38a.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__7.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__7.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e046f3203eee01f1c5ce.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__8.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__8.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ace22c6ca65a93f9af55.png";

/***/ }),

/***/ "./src/images/player__hero/right_01/h3ro__9.png":
/*!******************************************************!*\
  !*** ./src/images/player__hero/right_01/h3ro__9.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4d7b5ecf8414c21da1df.png";

/***/ }),

/***/ "./src/images/zombie-background-02.jpg":
/*!*********************************************!*\
  !*** ./src/images/zombie-background-02.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1d63e1edac55d6980f3b.jpg";

/***/ }),

/***/ "./src/images/zombie/left/Walk_1.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/046b93ebdd162bd037b4.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_10.png":
/*!********************************************!*\
  !*** ./src/images/zombie/left/Walk_10.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/a179ea0f6d9bea937789.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_2.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/05b93f2eb4bc56baecb2.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_3.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/143947f0d67b7c28880d.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_4.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/16e881caa7aaefdbeabd.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_5.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/17fbd59537b018335ee5.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_6.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_6.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fb7d99391279c63b5a95.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_7.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_7.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3dffd6112840dccd0fe3.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_8.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_8.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2d227fd9c7930be705aa.png";

/***/ }),

/***/ "./src/images/zombie/left/Walk_9.png":
/*!*******************************************!*\
  !*** ./src/images/zombie/left/Walk_9.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1fe84bbcb8d58ebfa6fe.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_1.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/472cb9cf7fad834aa143.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_10.png":
/*!*********************************************!*\
  !*** ./src/images/zombie/right/Walk_10.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6d55e49d2dd59f7539e5.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_2.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_2.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/02d58e438e45d75284e3.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_3.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_3.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/01b6ad83e151a962b384.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_4.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_4.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9585556ed9395d9b323b.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_5.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_5.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/78b3bfac877792253883.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_6.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_6.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ba9d32099994a44d1eb1.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_7.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_7.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/74a0d672373ef102eb7f.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_8.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_8.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6a7ac262bc972f7d41a8.png";

/***/ }),

/***/ "./src/images/zombie/right/Walk_9.png":
/*!********************************************!*\
  !*** ./src/images/zombie/right/Walk_9.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1e1d0c61d5e32a62549d.png";

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
/* harmony import */ var _js_modules_hero_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modules/hero_images */ "./src/js/modules/hero_images.js");
/* harmony import */ var _js_modules_stepGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/modules/stepGame */ "./src/js/modules/stepGame.js");
/* harmony import */ var _js_classes_UserDataGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/classes/UserDataGame */ "./src/js/classes/UserDataGame.js");
/* harmony import */ var _js_modules_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/modules/profile */ "./src/js/modules/profile.js");
/* harmony import */ var _js_classes_CanvasGame__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/classes/CanvasGame */ "./src/js/classes/CanvasGame.js");












function initGame() {
  var userData = new _js_classes_UserDataGame__WEBPACK_IMPORTED_MODULE_8__.default();
  var gameAssets = (0,_js_modules_hero_images__WEBPACK_IMPORTED_MODULE_6__.default)();
  var canvasGame = new _js_classes_CanvasGame__WEBPACK_IMPORTED_MODULE_10__.default(gameAssets);
  (0,_js_modules_stepGame__WEBPACK_IMPORTED_MODULE_7__.btnChoseSection)(userData, triggerSection); // add Chose section Event to buttons

  (0,_js_modules_stepGame__WEBPACK_IMPORTED_MODULE_7__.stepGameManager)(0, userData, triggerSection); // init the game with the first view

  function triggerSection(w_sect) {
    (0,_js_modules_profile__WEBPACK_IMPORTED_MODULE_9__.removeProfileEvents)();

    switch (w_sect) {
      case 1:
        (0,_js_modules_profile__WEBPACK_IMPORTED_MODULE_9__.clearProfile)(userData); // clear the current profile to add a new one

        (0,_js_modules_profile__WEBPACK_IMPORTED_MODULE_9__.initProfileEvents)(userData); // init the profile bottons event to select the new one

        break;

      case 2:
        canvasGame.startCanvasGame(userData); // start the canvas game

        break;

      case 3:
        break;
    }
  }
}

(function () {
  initGame();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0FsZXJ0bWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0NhbnZhc0dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9Vc2VyRGF0YUdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9oZXJvX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9tb2R1bGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9zdGVwR2FtZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lYmJ2YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhbWViYnZhLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsZXJ0TWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVBbGVydCIsIm1zQ250IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJlbW92ZUFsZXJ0IiwiYWxlcnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJCdWxsZXQiLCJ4IiwieSIsImRpciIsImNvbnRleHQiLCJyYWRpdXMiLCJkaXJlY3Rpb24iLCJjIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIkNhbnZhc0dhbWUiLCJhc3NldHMiLCJ1c2VyRGF0YSIsImdhbWVDb250IiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImhlcm8iLCJmbG9vciIsImNlbnRlciIsImNvbnRXaWR0aCIsImNvbnRIZWlnaHQiLCJhbmltYXRlIiwiem9tYmllcyIsInpEaXIiLCJ6b21iaWVsb29wIiwiYnVsbGV0cyIsIm5pY2tOYW1lIiwiZ2V0Tmlja05hbWUiLCJwbGF5ZXJQcm9maWxlIiwiZ2V0UGxheWVyIiwiZ2V0Q29udGV4dCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsIlBsYXllciIsImhlcm9fcmlnaHQiLCJoZXJvX2xlZnQiLCJzZXRQb3NYIiwic2V0UG9zWSIsIl96b21iaWVzbWFuYWdlciIsIl9hZGRIZXJvQ29udHJvbHMiLCJfdHVybk9uRW5naW5lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoUG9zWCIsImdldFBvc1giLCJoRGlyIiwiZ2V0RGlyZWN0aW9uIiwiYnVsbGV0WE9yaWdpbiIsImtleSIsInNldERpcmVjdGlvbiIsInN0YXJ0UnVuIiwibmV3QnVsbGV0IiwicHVzaCIsInN0b3BSdW4iLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsIm5ld1pvbWJpZSIsInpvbWJpZV9yaWdodCIsInpvbWJpZV9sZWZ0IiwiY2xlYXJSZWN0IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiZmlsbFJlY3QiLCJkcmF3IiwiZm9yRWFjaCIsInpvbWJpZSIsInoiLCJ6UG9zWCIsImN1cnJlbnRab21iaWVEaXIiLCJzcGxpY2UiLCJidWxsZXQiLCJiIiwiYnVsbGV0UG9zWCIsImJQb3NYIiwiY3VycmVudEJ1bGxldERpciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJJbnRlcnZhbCIsImltZ3NfcmlnaHQiLCJpbWdzX2xlZnQiLCJ3X3BvaW50c29mbGlmZSIsIndfaWQiLCJ3X2RpciIsInBvaW50c09mTGl2ZSIsImlkIiwiYXNzZXRzX3JpZ2h0IiwiYXNzZXRzX2xlZnQiLCJpbWFnZUluZGV4IiwibWF4SW1ncyIsImRyYXdJbWFnZSIsIlVzZXJEYXRhIiwicGxheWVyIiwic2NvcmUiLCJzdGF0dXNHYW1lIiwidXNyX25hbWUiLCJ1c3JfcGxheWVyIiwiZ2V0R2FtZUFzc2V0cyIsInJpZ2h0IiwiaGVyb19yaWdodF8wIiwiaGVyb19yaWdodF8xIiwiaGVyb19yaWdodF8yIiwiaGVyb19yaWdodF8zIiwiaGVyb19yaWdodF80IiwiaGVyb19yaWdodF81IiwiaGVyb19yaWdodF82IiwiaGVyb19yaWdodF83IiwiaGVyb19yaWdodF84IiwiaGVyb19yaWdodF85IiwiaGVyb19yaWdodF8xMCIsImhlcm9fcmlnaHRfMTEiLCJoZXJvX3JpZ2h0XzEyIiwiaGVyb19yaWdodF8xMyIsImhlcm9fcmlnaHRfMTQiLCJoZXJvX3JpZ2h0XzE1IiwibGVmdCIsImhlcm9fbGVmdF8wIiwiaGVyb19sZWZ0XzEiLCJoZXJvX2xlZnRfMiIsImhlcm9fbGVmdF8zIiwiaGVyb19sZWZ0XzQiLCJoZXJvX2xlZnRfNSIsImhlcm9fbGVmdF82IiwiaGVyb19sZWZ0XzciLCJoZXJvX2xlZnRfOCIsImhlcm9fbGVmdF85IiwiaGVyb19sZWZ0XzEwIiwiaGVyb19sZWZ0XzExIiwiaGVyb19sZWZ0XzEyIiwiaGVyb19sZWZ0XzEzIiwiaGVyb19sZWZ0XzE0IiwiaGVyb19sZWZ0XzE1Iiwiem9tYmllX3JpZ2h0XzEiLCJ6b21iaWVfcmlnaHRfMiIsInpvbWJpZV9yaWdodF8zIiwiem9tYmllX3JpZ2h0XzQiLCJ6b21iaWVfcmlnaHRfNSIsInpvbWJpZV9yaWdodF82Iiwiem9tYmllX3JpZ2h0XzciLCJ6b21iaWVfcmlnaHRfOCIsInpvbWJpZV9yaWdodF85Iiwiem9tYmllX3JpZ2h0XzEwIiwiem9tYmllX2xlZnRfMSIsInpvbWJpZV9sZWZ0XzIiLCJ6b21iaWVfbGVmdF8zIiwiem9tYmllX2xlZnRfNCIsInpvbWJpZV9sZWZ0XzUiLCJ6b21iaWVfbGVmdF82Iiwiem9tYmllX2xlZnRfNyIsInpvbWJpZV9sZWZ0XzgiLCJ6b21iaWVfbGVmdF85Iiwiem9tYmllX2xlZnRfMTAiLCJzdG9yYWdlQXNzZXRzIiwiYXNzZXQiLCJuZXdJbWciLCJJbWFnZSIsInNyYyIsImluaXRQcm9maWxlRXZlbnRzIiwid191c2VyZGF0YSIsImJ0bnNfcGxheWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5pY2tuYW1lX2lucHV0IiwiaW5wdXRfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRfdmFsdWUiLCJyZXBsYWNlIiwic2V0Tmlja05hbWUiLCJidG5wbHlyIiwiY3VycmVudF9idG4iLCJ3X3BsYXllciIsImdldEF0dHJpYnV0ZSIsInNldFBsYXllciIsImNob29zZVBsYXllciIsInJlbW92ZVByb2ZpbGVFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYXJQcm9maWxlIiwic3RlcEdhbWVNYW5hZ2VyIiwiY3VycmVudFZpZXciLCJ3X3VzcmRhdGEiLCJjYWxsYmFjayIsInNlY3Rpb25zIiwic2VjdCIsInZhbGlkYXRlU3RlcCIsInN0eWxlIiwiZGlzcGxheSIsImJ0bkNob3NlU2VjdGlvbiIsImJ0blNlY3Rpb24iLCJjdXJyZW50X19idG4iLCJzdGVwIiwicGFyc2VJbnQiLCJhbGVydCIsInZhbGlkIiwic2V0TWVzc2FnZSIsImluaXRHYW1lIiwiZ2FtZUFzc2V0cyIsImNhbnZhc0dhbWUi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ZmF1bHQgY2xhc3MgQWxlcnRNZXNzYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3JlYXRlQWxlcnQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbGVydCgpe1xuICAgICAgICBsZXQgbXNDbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWxlcnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYDxkaXYgY2xhc3M9XCJtZXNzYWdlX19hbGVydFwiPjxwPiR7dGhpcy5tZXNzYWdlfTwvcD48L2Rpdj5gXG4gICAgICAgIG1zQ250LmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxlcnQoKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGVydCgpe1xuICAgICAgICBsZXQgYWxlcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZV9fYWxlcnRcIik7IFxuICAgICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBhbGVydEVsLnJlbW92ZSgwKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldHtcbiAgICBjb25zdHJ1Y3RvciggeCwgeSwgZGlyID0gJ3JpZ2h0JywgY29udGV4dCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJcbiAgICAgICAgdGhpcy5jICA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqIEdldHRlcnMgJiYgU2V0dGVycyAqL1xuICAgIHNldFBvc1goeCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgfSBcblxuICAgIGdldFBvc1goeCl7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcbiAgICB9XG59IiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzR2FtZXtcbiAgICBjb25zdHJ1Y3RvciggYXNzZXRzLCB1c2VyRGF0YSApe1xuICAgICAgICB0aGlzLmdhbWVDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0luaXRCQlZBR2FtZScpOyAvLyBHZXQgdGhlIG1haW4gY29udGFpbmVyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IC8vIEluaXQgZWxlbWVudCBjYW52YXNcbiAgICAgICAgdGhpcy5hc3NldHMgPSBhc3NldHM7ICAvLyBHZXQgdGhlIGdhbWUgYXNzZXRzIHByZWxvYWRlZFxuICAgICAgICB0aGlzLmNvbnRleHQ7IC8vIDJEIENPTlRFWFRcbiAgICAgICAgdGhpcy5oZXJvOyAvLyBIZXJvIGNvbnRcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmxvb3I7IC8vIEZsb29yIHBhcmFtZXRlclxuICAgICAgICB0aGlzLmNlbnRlcjsgLy8gQ2VudGVyIHBhcmFtXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRXaWR0aCA9IDA7IC8vIE1haW4gY29udGFpbmVyIHdpZHRoXG4gICAgICAgIHRoaXMuY29udEhlaWdodCA9IDA7IC8vIE1haW4gY29udGFpbmVyIGhlaWdodFxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZTsgLy8gU2V0IHRoZSB3aW5kb3cgYW5pbWF0aW9uIGZyYW1lIGlkXG4gICAgICAgIFxuICAgICAgICB0aGlzLnpvbWJpZXMgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHpvbWJpZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLnpEaXIgPSBcInJpZ2h0XCI7IC8vIFNldCB0aGUgY3VycmVudCB6b21iaWUgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuem9tYmllbG9vcDsgLy8gU2V0IGFuIGludGVydmFsIGlkXG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIHRoZSBidWxsZXRzIG9iamVjdHNcbiAgICB9XG4gICAgXG4gICAgc3RhcnRDYW52YXNHYW1lKHVzZXJEYXRhKXsgLy8gVHJpZ2dlciB0aGUgc3RhcnQgZ2FtZSAgJiYgc2V0IHRoZSBnbG9iYWwgY29uZlxuICAgICAgICB0aGlzLm5pY2tOYW1lID0gdXNlckRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJQcm9maWxlID0gdXNlckRhdGEuZ2V0UGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgLy8gSW5pdCB0aGUgY290ZXh0XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRXaWR0aCA9IHRoaXMuZ2FtZUNvbnQub2Zmc2V0V2lkdGg7IC8vIHNldCB0aGUgbWFpYiBjb250IHdpZHRoXG4gICAgICAgIHRoaXMuY29udEhlaWdodCA9IHRoaXMuZ2FtZUNvbnQub2Zmc2V0SGVpZ2h0OyAvLyBzZXQgdGhlIG1haW4gY29udCBoZWlnaHRcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jb250V2lkdGg7IC8vIHNldCB0aGUgY2FudmFzIHdpZHRoXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY29udEhlaWdodDsgLy8gc2V0IHRoZSBjYW52YXMgaGVpZ2h0XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5jb250SGVpZ2h0IC0gMTUwOyAvLyBzZXQgdGhlIGdhbWUgZmxvb3IgXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy5jb250V2lkdGggLyAyOyAvLyBzZXQgdGhlIGNlbnRlciBnYW1lXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVDb250LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTsgLy8gaW5qZWN0IHRoZSBjYW52YXMgaW4gdGhlIG1haW4gY29udGFpbmVyXG4gICAgICAgIFxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgUGxheWVyKHRoaXMuYXNzZXRzLmhlcm9fcmlnaHQsIHRoaXMuYXNzZXRzLmhlcm9fbGVmdCwgNTAsIHRoaXMuY29udGV4dCwgJ0hlcm8nKTsgLy8gQ3JlYXRlIHRoZSBoZXJvIG9iamVjdFxuICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWCggdGhpcy5jZW50ZXIgKTsgLy8gc2V0IHRoZSBpbml0IGhlcm8geCBwb3NcbiAgICAgICAgdGhpcy5oZXJvLnNldFBvc1koIHRoaXMuZmxvb3IgLSAxNDAgKTsgLy8gc2V0IHRoZSBpbml0IGhlcm8geSBwb3MgXG5cbiAgICAgICAgdGhpcy5fem9tYmllc21hbmFnZXIoKTsgLy8gc3RhcnQgdGhlIHpvbWJpZSBtYW5hZ2VyIGNyZWF0b3JcbiAgICAgICAgdGhpcy5fYWRkSGVyb0NvbnRyb2xzKCk7IC8vIGFkZCBrZXlib2FyZCBldmVudHMgdG8gdGhlIGhlcm8gb2JqZWN0XG4gICAgICAgIHRoaXMuX3R1cm5PbkVuZ2luZSgpOyAvLyBzdGFydCB0aGUgZ2FtZSBsb29wIGVuZ2luZTtcbiAgICB9XG5cbiAgICBfYWRkSGVyb0NvbnRyb2xzKCl7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PnsgLy8gYWRkaW5nIHRoZSB3aW5kb3cga2V5Ym9hcmQgZXZlbnRcbiAgICAgICAgICAgIGNvbnN0IGhQb3NYID0gdGhpcy5oZXJvLmdldFBvc1goKTsgLy8gZ2V0IHRoZSBoZXJvIGN1cnJlbnQgeCBwb3NcbiAgICAgICAgICAgIGNvbnN0IGhEaXIgPSB0aGlzLmhlcm8uZ2V0RGlyZWN0aW9uKCk7IC8vIGdldCB0aGUgaGVybyBjdXJyZW50IGRpcmVjdGlvblxuICAgICAgICAgICAgY29uc3QgYnVsbGV0WE9yaWdpbiA9IGhEaXI9PSdyaWdodCc/IGhQb3NYICsgODA6IGhQb3NYICsgNDA7ICAvLyBzZXQgdGhlIG9yaWdpbiBvZiB0aGUgbmV3IGJ1bGxldDtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IC8vIGNhdGNoIHRoZSBBcnJvdyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXREaXJlY3Rpb24oJ2xlZnQnKTsgLy8gc2V0IHRoZSBoZXJvIGRpcmVjdGlvbiB0byBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zdGFydFJ1bigpOyAvLyBpbml0IHRoZSBydW4gYW5pbWF0aW9uIHRvIHRoZSBkaXJlY3Rpb24gYmVmb3JlIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYoaFBvc1ggPiAwKXsgLy8gbGltaXQgdGhlIGVudmlyb25tZW50IHRvIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXRQb3NYKGhQb3NYIC0gMTApO1xuICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiAvLyBjYXRjaCB0aGUgYXJyb3cgcmlnaHQgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXREaXJlY3Rpb24oJ3JpZ2h0Jyk7IC8vIHNldCB0aGUgaGVybyBkaXJlY3Rpb24gdG8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnN0YXJ0UnVuKCk7IC8vIGluaXQgdGhlIHJ1biBhbmltYXRpb24gdG8gdGhlIGRpcmVjdGlvbiBiZWZvcmUgY29uZmlndXJlZFxuICAgICAgICAgICAgICAgICAgICBpZihoUG9zWCA8IHRoaXMuY29udFdpZHRoIC0gMTAwKXsgLy8gbGltaXQgdGhlIGVudmlyb25tZW50IHRvIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWChoUG9zWCArIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIgXCI6IC8vIGNhdGNoIHRoZSBzcGFjZWJhclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdCdWxsZXQgPSBuZXcgQnVsbGV0KGJ1bGxldFhPcmlnaW4sIHRoaXMuY29udEhlaWdodCAtIDE4MCwgaERpcix0aGlzLmNvbnRleHQpOyAvLyBjcmVhdGUgdGhlIG5ldyBidWxsZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnB1c2gobmV3QnVsbGV0KTsgLy8gYWRkIHRoZSBuZXcgYnVsbGV0IHRvIHRoZSBidWxsZXRzIGFycmF5XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7IC8vIGNhdGNoIHRoZSBrZXkgdXAgZXZlbnRcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc3RvcFJ1bigpOyAvLyBzdG9wIHRoZSBydW4gbGVmdCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zdG9wUnVuKCk7IC8vIHN0b3AgdGhlIHJ1biByaWdodCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfem9tYmllc21hbmFnZXIoKXtcbiAgICAgICAgdGhpcy56b21iaWVsb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4geyAvLyBzdGFydCB0aGUgdGltZSBpbnRlcnZhbCBhbmQgYWRkIGl0IHRvIHRoZSBpZFxuICAgICAgICAgICAgaWYodGhpcy56b21iaWVzLmxlbmd0aCA8IDMpe1xuICAgICAgICAgICAgICAgIGxldCBuZXdab21iaWUgPSBuZXcgUGxheWVyKHRoaXMuYXNzZXRzLnpvbWJpZV9yaWdodCx0aGlzLmFzc2V0cy56b21iaWVfbGVmdCwgMTAsIHRoaXMuY29udGV4dCwgXCJ6b21iaWVcIiwgdGhpcy56RGlyKTsgLy8gY3JlYXRlIHpvbWJpZSBvYmplY3RcbiAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UG9zWSggdGhpcy5mbG9vciAtIDE0MCApOyAvLyBzZXQgdGhlIHpvbWJpciBZIHBvcyBvcmlnaW5cbiAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UG9zWCggKHRoaXMuekRpciA9PT0gXCJyaWdodFwiKT8gLTUwIDogKHRoaXMuY29udFdpZHRoICsgNTApICk7IC8vIHNldCB0aGUgem9tYmlyIFggcG9zIG9yaWdpblxuICAgICAgICAgICAgICAgIHRoaXMuekRpciA9ICh0aGlzLnpEaXIgPT09IFwicmlnaHRcIik/IFwibGVmdFwiIDogXCJyaWdodFwiOyAvLyBzZXQgdGhlIFpvbWJpZSBtb3ZlIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllcy5wdXNoKG5ld1pvbWJpZSk7IC8vIGFkZCB0aGUgbmV3IHpvbWJpZSB0byB0aGUgbWFpbiB6b21iaWVzIGFycmF5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIF90dXJuT25FbmdpbmUoKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy5jb250V2lkdGgsIHRoaXMuY29udFdpZHRoKTsgLy8gY2xlYW4gdGhlIHN0YWdlIGVhY2ggaXRlcmF0aW9uXG4gICAgICAgIC8qKiBIZWFkZXIgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjgwcHggQmVudG9uU2Fuc0JCVkEtQm9sZFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KFwiWk9NQklFIFRBU0tcIiwgNDUwLCAxMDApO1xuXG4gICAgICAgIC8qKiBEaXNwbGF5IHVzZXIgZGF0YSAqL1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMzBweCBCZW50b25TYW5zQkJWQS1Cb29rXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYCR7dGhpcy5wbGF5ZXJQcm9maWxlfTogJHt0aGlzLm5pY2tOYW1lfWAsIDQ1MCwgMTUwKTtcblxuICAgICAgICAvKiogRmxvb3IgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7IC8vIHNldCB0aGUgZ2FtZSBmbG9vciBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgdGhpcy5mbG9vciwgdGhpcy5jb250V2lkdGgsIDE1MCk7IC8vIGRyYXcgdGhlIGdhbWUgZmxvb3JcbiAgICAgICAgdGhpcy5oZXJvLmRyYXcoKTsgLy8gZHJhdyB0aGUgaGVybyBvYmplY3QgZWFjaCBpdGVyYXRpb25cbiAgICAgICAgXG4gICAgICAgIHRoaXMuem9tYmllcy5mb3JFYWNoKCh6b21iaWUsIHopID0+IHsgLy8gcmVhZCBlYWNoIHpvbWJpZSBvYmplY3QgZnJvbSB0aGUgem9tYmllIGxpc3RcbiAgICAgICAgICAgIHpvbWJpZS5kcmF3KCk7IC8vIGRyYXcgdGhlIHpvbWJpZSBvYmplY3QgZWFjaCBpdGVyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHpQb3NYID0gem9tYmllLmdldFBvc1goKTsgLy8gZ2V0IHRoZSBjdXJyZW50IFggcG9zXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Wm9tYmllRGlyID0gem9tYmllLmdldERpcmVjdGlvbigpOyAvLyBnZXQgdGhlIGN1cnJlbnQgZGlyZWN0aW9uXG5cbiAgICAgICAgICAgIGlmKCBjdXJyZW50Wm9tYmllRGlyID09PSBcInJpZ2h0XCIgJiYgelBvc1ggPCB0aGlzLmNvbnRXaWR0aCApeyAvLyBsaW1pdCB0aGUgYXJlYVxuICAgICAgICAgICAgICAgIHpvbWJpZS5zZXRQb3NYKHpQb3NYICsgMik7XG4gICAgICAgICAgICB9ZWxzZSBpZiggY3VycmVudFpvbWJpZURpciA9PT0gXCJyaWdodFwiICYmIHpQb3NYID49IHRoaXMuY29udFdpZHRoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpOyAvLyByZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB6b21iaWUuZ2V0RGlyZWN0aW9uKCkgPT09IFwibGVmdFwiICYmIHpQb3NYID4gLTEwMCl7IC8vIGxpbWl0IHRoZSBhcmVhXG4gICAgICAgICAgICAgICAgem9tYmllLnNldFBvc1goelBvc1ggLSAyKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50Wm9tYmllRGlyID09PSBcImxlZnRcIiAmJiB6UG9zWCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpOy8vIHJlbW92ZSB0aGUgb2JqZWN0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQ29sbGl0aW9uIGRldGVjdG9yICovXG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0LCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVsbGV0UG9zWCA9IGJ1bGxldC5nZXRQb3NYKCk7XG4gICAgICAgICAgICAgICAgaWYoYnVsbGV0UG9zWCA+IHpQb3NYICsgNDAgJiYgYnVsbGV0UG9zWCA8IHpQb3NYICsgNjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKGIsMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHpvbWJpZS5zdGFydFJ1bigpOyAvLyBzdGFydCB0aGUgYW5pbWF0aW9uIGRlcGVuZGluZyBvbiB0aGUgem9tYmllIGRpcmVjdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0LCBiKT0+e1xuICAgICAgICAgICAgYnVsbGV0LmRyYXcoKTsgLy8gZHJhdyB0aGUgYnVsbGV0IG9iamVjdCBlYWNoIGl0ZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYlBvc1ggPSBidWxsZXQuZ2V0UG9zWCgpOyBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdWxsZXREaXIgPSBidWxsZXQuZ2V0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICBpZihjdXJyZW50QnVsbGV0RGlyID09ICdyaWdodCcgJiYgYlBvc1ggPCB0aGlzLmNvbnRXaWR0aCApe1xuICAgICAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NYKCBiUG9zWCArIDMgKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50QnVsbGV0RGlyID09PSBcInJpZ2h0XCIgJiYgYlBvc1ggPj0gdGhpcy5jb250V2lkdGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5zcGxpY2UoYiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJyZW50QnVsbGV0RGlyID09ICdsZWZ0JyAmJiBiUG9zWCA+IDApe1xuICAgICAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NYKCBiUG9zWCAtIDMgKTsgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50QnVsbGV0RGlyID09PSBcImxlZnRcIiAmJiBiUG9zWCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKGIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX3R1cm5PbkVuZ2luZSgpICk7IC8vIHJlY3Vyc2l2ZSBpdGVyYXRpb24gZnVuY3Rpb25cbiAgICB9XG4gICAgXG4gICAgc3RvcENhbnZhc0dhbWUoKXtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTsgLy8gY2FuY2VsIHRoZSBhbmltYXRpb24gbG9vcCBlbmdpbmVcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnpvbWJpZWxvb3ApOyAvLyBjbGVhciB0aGUgdGltZSBpbnRlcnZhciB6b21iaWUgY3JlYXRvclxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoIFxuICAgICAgICBpbWdzX3JpZ2h0LCAvLyBnZXQgdGhlIGFycmF5IGltYWdlcyBwcmVsb2FkZWQgZm9yIHRoZSByaWdodCBkaXJlY3Rpb25cbiAgICAgICAgaW1nc19sZWZ0LCAgLy8gZ2V0IHRoZSBhcnJheSBpbWFnZXMgcHJlbG9hZGVkIGZvciB0aGUgbGVmdCBkaXJlY3Rpb25cbiAgICAgICAgd19wb2ludHNvZmxpZmUgPSAwLCAvLyBzZXQgdGhlIHBvaW50cyBvZiBsaWZlXG4gICAgICAgIGNvbnRleHQsIC8vIHBhc3MgdGhlIGNvbnRleHQgdG8gZHJhdyB0aGUgbmV3IG9iamVjdCB0byB0aGUgY2FudmFzIGVudlxuICAgICAgICB3X2lkLCAvLyBzZXQgdGhlIGlkIChub3QgaW4gdXNlIGJ5IHRoZSBtb21lbnQpXG4gICAgICAgIHdfZGlyID0gXCJyaWdodFwiIC8vIHNldCB0aGUgb3JpZ2luIGRpcmVjdGlvblxuICAgICAgICApe1xuICAgICAgICB0aGlzLnggPSAwOyAvLyBvcmlnaW4geCBwb3NcbiAgICAgICAgdGhpcy55ID0gMDsgLy8gb3JpZ2luIHkgcG9zXG4gICAgICAgIHRoaXMucG9pbnRzT2ZMaXZlID0gd19wb2ludHNvZmxpZmU7XG4gICAgICAgIHRoaXMuaWQgPSB3X2lkO1xuICAgICAgICB0aGlzLmMgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFzc2V0c19yaWdodCA9IGltZ3NfcmlnaHQ7XG4gICAgICAgIHRoaXMuYXNzZXRzX2xlZnQgPSBpbWdzX2xlZnQ7XG4gICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gd19kaXI7XG4gICAgICAgIHRoaXMubWF4SW1ncyA9ICh0aGlzLmRpcmVjdGlvbik/ICh0aGlzLmFzc2V0c19yaWdodC5sZW5ndGgtMSk6KHRoaXMuYXNzZXRzX2xlZnQubGVuZ3RoLTEpOyAvLyBjcmVhdGUgYSBsaW1pdCB0byBsb29wXG4gICAgfVxuIFxuXG4gICAgLyoqIEdldHRlcnMgJiYgU2V0dGVycyAqL1xuICAgIHNldFBvc1goeCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgfVxuICAgIHNldFBvc1koeSl7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgZ2V0UG9zWCh4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9XG4gICAgZ2V0UG9zWSh5KXtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIGdldERpcmVjdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgc3RhcnRSdW4oKXtcbiAgICAgICAgaWYodGhpcy5pbWFnZUluZGV4IDwgdGhpcy5tYXhJbWdzKXsgLy8gZGlzcGxheWluZyB0aGUgbW92ZW1lbnQgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlSW5kZXggKz0gMTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmltYWdlSW5kZXggPSAxOyAvLyByZXR1cm4gdG8gdGhlIGZpcnN0IGltYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wUnVuKCl7XG4gICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDA7IC8vIHJldHVybiB0byB0aGUgZmlyc3QgaW1hZ2VcbiAgICB9XG5cbiAgICBkcmF3KHgsIHkpe1xuICAgICAgICB0aGlzLmMuZHJhd0ltYWdlKCgodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0Jyk/IHRoaXMuYXNzZXRzX3JpZ2h0W3RoaXMuaW1hZ2VJbmRleF06dGhpcy5hc3NldHNfbGVmdFt0aGlzLmltYWdlSW5kZXhdKSwgdGhpcy54LCB0aGlzLnksIDEwMCwgMTYwKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5pY2tOYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zdGF0dXNHYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0Tmlja05hbWUodXNyX25hbWUpIHtcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHVzcl9uYW1lO1xuICAgIH1cbiAgICBnZXROaWNrTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmlja05hbWU7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyKHVzcl9wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB1c3JfcGxheWVyO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9XG59IiwiaW1wb3J0IGhlcm9fcmlnaHRfMTUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xNS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xNC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMy5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMi5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTAgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfOSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzkucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX184LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF83IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fNy5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfNiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzYucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX181LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF80IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fNC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMyBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzMucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18yLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fMS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzAucG5nJztcblxuaW1wb3J0IGhlcm9fbGVmdF8xNSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTUucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzE0LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzEzIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xMy5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8xMiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTIucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzExLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzEwIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xMC5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF85IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX185LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzgucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfNyBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fNy5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF82IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX182LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzUucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfNCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fNC5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8zIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18zLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzIucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMS5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8wIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18wLnBuZyc7XG5cbmltcG9ydCB6b21iaWVfcmlnaHRfMSBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfMS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF8yIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa18yLnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzMgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzMucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfNCBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfNC5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF81IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa181LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzYgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzYucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfNyBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfNy5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF84IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa184LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzkgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzkucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfMTAgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzEwLnBuZyc7XG5cbmltcG9ydCB6b21iaWVfbGVmdF8xIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzEucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8yIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzIucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8zIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzMucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF80IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzQucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF81IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzUucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF82IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzYucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF83IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzcucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF84IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzgucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF85IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzkucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8xMCBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL2xlZnQvV2Fsa18xMC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHYW1lQXNzZXRzKCl7XG4gICAgbGV0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIGhlcm86IHtcbiAgICAgICAgICAgICAgICByaWdodDogW1xuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8yLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfNCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF81LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzYsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfNyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF84LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzksXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTIsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTQsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsZWZ0OltcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF80LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfNSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzYsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF83LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfOCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzksXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xMCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzExLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTIsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xMyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzE0LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTUsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvbWJpZTp7XG4gICAgICAgICAgICAgICAgcmlnaHQ6W1xuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfMSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzIsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF8zLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfNCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzUsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF82LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfNyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzgsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF85LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfMTAsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsZWZ0OltcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMixcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNixcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfOCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfOSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMTAsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBsZXQgc3RvcmFnZUFzc2V0cyA9IHtcbiAgICAgICAgaGVyb19yaWdodDpbXSxcbiAgICAgICAgaGVyb19sZWZ0OltdLFxuICAgICAgICB6b21iaWVfcmlnaHQ6W10sXG4gICAgICAgIHpvbWJpZV9sZWZ0OltdLFxuICAgIH07XG4gICAgXG4gICAgYXNzZXRzLmhlcm8ucmlnaHQuZm9yRWFjaChhc3NldD0+e1xuICAgICAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5zcmMgPSBhc3NldDtcbiAgICAgICAgc3RvcmFnZUFzc2V0cy5oZXJvX3JpZ2h0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcbiAgICBcbiAgICBhc3NldHMuaGVyby5sZWZ0LmZvckVhY2goYXNzZXQ9PntcbiAgICAgICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuc3JjID0gYXNzZXQ7XG4gICAgICAgIHN0b3JhZ2VBc3NldHMuaGVyb19sZWZ0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcbiAgICBcbiAgICBhc3NldHMuem9tYmllLnJpZ2h0LmZvckVhY2goYXNzZXQ9PntcbiAgICAgICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuc3JjID0gYXNzZXQ7XG4gICAgICAgIHN0b3JhZ2VBc3NldHMuem9tYmllX3JpZ2h0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcblxuICAgIGFzc2V0cy56b21iaWUubGVmdC5mb3JFYWNoKGFzc2V0PT57XG4gICAgICAgIGxldCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLnNyYyA9IGFzc2V0O1xuICAgICAgICBzdG9yYWdlQXNzZXRzLnpvbWJpZV9sZWZ0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdG9yYWdlQXNzZXRzO1xufSIsIi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHdfdXNlcmRhdGEgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0UHJvZmlsZUV2ZW50cyh3X3VzZXJkYXRhKXsgICAgICAvLyBCaW5kIGV2ZW50cyB0byB0aGUgaW50ZXJhY3RpdmUgZWxlbWVudHNcbiAgICBjb25zdCBidG5zX3BsYXllciAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1wbGF5ZXInKTsgICAgLy8gZ2V0IGFsbCB0aGUgcGxheWVyIGJ1dHRvbnMgc2VsZWN0b3JcbiAgICBjb25zdCBuaWNrbmFtZV9pbnB1dCAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOaWNrbmFtZUlucHV0Jyk7ICAgICAgICAgLy8gZ2V0IHRoZSBuaWNrbmFtZSB0ZXh0IGlucHV0IFxuXG4gICAgbmlja25hbWVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHsgICAgIC8vIEFkZCB0aGUgb25jaGFuZ2UgZXZlbnQgdG8gdGhlIGlucHV0XG4gICAgICAgIGNvbnN0IGlucHV0X3ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWUgPSBpbnB1dF92YWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpIC8vIFZhbGlkYXRpbiB0byBvbmx5IGFjY2VwdCB0ZXh0XG4gICAgICAgIHdfdXNlcmRhdGEuc2V0Tmlja05hbWUoY3VycmVudF92YWx1ZSk7IC8vIHNldCB0aGUgbmV3IG5pY2tuYW1lXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBidG5wbHlyID0gMDsgYnRucGx5ciA8IGJ0bnNfcGxheWVyLmxlbmd0aDsgYnRucGx5cisrKSB7IC8vIGxvb3BpbmcgdGhyb3VnaCB0aGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBjdXJyZW50X2J0biAgID0gYnRuc19wbGF5ZXJbYnRucGx5cl07IC8vXG4gICAgICAgIGNvbnN0IHdfcGxheWVyICAgICAgPSBjdXJyZW50X2J0bi5nZXRBdHRyaWJ1dGUoJ2F0dHItcGxheWVyJyk7IC8vIGNhdGNoIHRoZSBwbGF5ZXIgYXR0cmlidXRlIGFuZCBzZXQgaXQgaW4gYSBjb25zdFxuICAgICAgICBjdXJyZW50X2J0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PnsgIC8vIGFkZCBjbGljayBldmVudCB0byBlYWNoIGJ1dHRvblxuICAgICAgICAgICAgd191c2VyZGF0YS5zZXRQbGF5ZXIod19wbGF5ZXIpOyAgICAgLy8gc2V0IHRoZSBuZXcgc2VsZWN0ZWQgcGxheWVyIGluIHRoZSBtYWluIHVzZXIgZGF0YVxuICAgICAgICAgICAgY2hvb3NlUGxheWVyKGN1cnJlbnRfYnRuKTsgIC8vIHJlc3RvcmUgdGhlIG90aGVyIG9wdGlvbnMgc3RhdGVcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9maWxlRXZlbnRzKCl7XG4gICAgY29uc3QgYnRuc19wbGF5ZXIgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tcGxheWVyJyk7ICAgIC8vIGdldCBhbGwgdGhlIHBsYXllciBidXR0b25zIHNlbGVjdG9yXG4gICAgY29uc3Qgbmlja25hbWVfaW5wdXQgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmlja25hbWVJbnB1dCcpOyAgICAgICAgIC8vIGdldCB0aGUgbmlja25hbWUgdGV4dCBpbnB1dCBcbiAgICBuaWNrbmFtZV9pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgbmlja25hbWVfaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHt9KTsgLy8gUmVtb3ZlIExpc3RlbmVycyBmcm9tICB0aGUgbmlja25hbWUgaW5wdXRcbiAgICBmb3IgKGxldCBidG5wbHlyID0gMDsgYnRucGx5ciA8IGJ0bnNfcGxheWVyLmxlbmd0aDsgYnRucGx5cisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfYnRuID0gYnRuc19wbGF5ZXJbYnRucGx5cl07ICBcbiAgICAgICAgY3VycmVudF9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e30pOyAgLy8gcmVtb3ZlIGxpc3RlbmVycyBmcm9tIHRoZSBwbGF5ZXIgc2VsZWN0b3IgYnV0dG9uc1xuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gYnRuIFxuICovXG5mdW5jdGlvbiBjaG9vc2VQbGF5ZXIoYnRuPW51bGwpeyAvLyBVSSBpbnRlcmZhY2UgYmVoYXZpb3JcbiAgICBjb25zdCBidG5zX3BsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1wbGF5ZXInKTsgLy8gZ2V0IGFsbCB0aGUgcGxheWVyIGJ1dHRvbnMgc2VsZWN0b3IgXG4gICAgZm9yIChsZXQgYnRucGx5ciA9IDA7IGJ0bnBseXIgPCBidG5zX3BsYXllci5sZW5ndGg7IGJ0bnBseXIrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50X2J0biA9IGJ0bnNfcGxheWVyW2J0bnBseXJdO1xuICAgICAgICBjdXJyZW50X2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7IC8vIFJlbW92ZSBhbnkgc2VsZWN0ZWQgY2xhc3MgYWRkZWRcbiAgICB9XG4gICAgaWYoIGJ0biApXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7IC8vIGlmIHBsYXllciBzZWxlY3RlZCBieSB1c2VyIGFkZCBzZWxlY3RlZCBjbGFzc1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiAgY2xlYXJQcm9maWxlKHdfdXNlcmRhdGEpeyAvLyBSZXNldCB1c2VyIHByb2ZpbGVcbiAgICB3X3VzZXJkYXRhLnNldE5pY2tOYW1lKCcnKTsgLy8gZW1wdHkgbmlja25hbWUgdXNlciBuaWNrbmFtZVxuICAgIHdfdXNlcmRhdGEuc2V0UGxheWVyKCcnKTsgLy8gZW1wdHkgcGxheWVyIGNob29zZSBieSB0aGUgdXNlclxufSIsImltcG9ydCBBbGVydE1lc3NhZ2UgZnJvbSAnLi4vY2xhc3Nlcy9BbGVydG1lc3NhZ2UnO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjdXJyZW50VmlldyBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBHYW1lTWFuYWdlcihjdXJyZW50VmlldyA9IDAsIHdfdXNyZGF0YSwgY2FsbGJhY2spe1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RlcC1jb250Jyk7IC8vIGdldCBTZWN0aW9uc1xuICAgIGZvciAobGV0IHNlY3QgPSAwOyBzZWN0IDwgc2VjdGlvbnMubGVuZ3RoOyBzZWN0KyspIHtcbiAgICAgICAgaWYoIHZhbGlkYXRlU3RlcCggd191c3JkYXRhLCBjdXJyZW50VmlldyApICl7IC8vIFZhbGlkYXRlIFNlY3Rpb24gcnVsZXNcbiAgICAgICAgICAgIGlmKHNlY3QgPT09IGN1cnJlbnRWaWV3KSAvLyBDb21wYXJlIHdpdGggcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy8gU2hvdyBTZWN0aW9uXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIFNlY3Rpb25cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxsYmFjayhjdXJyZW50Vmlldyk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHdfdXNyZGF0YSBcbiAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidG5DaG9zZVNlY3Rpb24od191c3JkYXRhLCBjYWxsYmFjayl7XG4gICAgbGV0IGJ0blNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibnRfX3NlY3Rpb24nKTsgLy8gR2V0IGJ1dHRvbnNcbiAgICBmb3IgKGxldCBidG4gPSAwOyBidG4gPCBidG5TZWN0aW9uLmxlbmd0aDsgYnRuKyspIHsgLy8gTG9vcCBlYWNoIG9uZVxuICAgICAgICBjb25zdCBjdXJyZW50X19idG4gPSBidG5TZWN0aW9uW2J0bl07XG4gICAgICAgIGxldCBzdGVwID0gY3VycmVudF9fYnRuLmdldEF0dHJpYnV0ZShcImF0dHItc2VjdGlvblwiKTsgXG4gICAgICAgIGN1cnJlbnRfX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0ZXBHYW1lTWFuYWdlcihwYXJzZUludChzdGVwKSwgd191c3JkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBzdGVwIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlU3RlcCh3X3VzcmRhdGEsIHN0ZXApeyAvLyBmdW5jdGlvbiB0byB2YWxpZGF0ZSBzZWN0aW9uXG4gICAgbGV0IGFsZXJ0ID0gbmV3IEFsZXJ0TWVzc2FnZSgpXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICAgIGNhc2UgMDogLy8gU2VjdGlvbiAwIG5vdCByZXF1aXJlIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOiAvLyBTZWN0aW9uIDEgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnQ29taWVuemEgZWwganVlZ28hJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyBTZWN0aW9uIHJlcXVpcmUgdmFsaWRhdGlvbiAyIHZhbGlkYXRpb25zLCB0aGUgbmlja25hbWUgYW5kIHRoZVxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB3X3VzcmRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHdfdXNyZGF0YS5nZXRQbGF5ZXIoKTtcbiAgICAgICAgICAgIGlmKG5pY2tOYW1lICYmIHBsYXllcilcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnRGViZXMgc2VsZWNjaW9uYXIgYWwgbWVub3MgdW4gcGVyZmlsIGUgaW5ncmVzYXIgdW4gbmlja25hbWUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgTWFpbkxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nb19iYnZhX2JsYW5jby5zdmcnO1xuaW1wb3J0IE1haW5CYWNrR3JvdW5kIGZyb20gJy4vaW1hZ2VzL3pvbWJpZS1iYWNrZ3JvdW5kLTAyLmpwZyc7XG5pbXBvcnQgUGxheUNvbnN1bHRhbnQgZnJvbSAnLi9pbWFnZXMvXHUwMDEwUGxheWVyX0NvbnN1bHRhbnRcdTAwMTAuanBnJztcbmltcG9ydCBQbGF5bWFuYWdlciBmcm9tICcuL2ltYWdlcy9cdTAwMTBQbGF5ZXJfTWFuYWdlci5qcGcnO1xuaW1wb3J0IFBsYXlUZWNoIGZyb20gJy4vaW1hZ2VzL1x1MDAxMFBsYXllcl9UZWNoQ3JlYXRpdmVcdTAwMTAuanBnJztcbmltcG9ydCBnZXRHYW1lQXNzZXRzIGZyb20gJy4vanMvbW9kdWxlcy9oZXJvX2ltYWdlcyc7XG5pbXBvcnQge3N0ZXBHYW1lTWFuYWdlciwgYnRuQ2hvc2VTZWN0aW9ufSBmcm9tICcuL2pzL21vZHVsZXMvc3RlcEdhbWUnO1xuaW1wb3J0IFVzZXJEYXRhIGZyb20gJy4vanMvY2xhc3Nlcy9Vc2VyRGF0YUdhbWUnO1xuaW1wb3J0IHsgaW5pdFByb2ZpbGVFdmVudHMsIHJlbW92ZVByb2ZpbGVFdmVudHMsIGNsZWFyUHJvZmlsZSB9IGZyb20gJy4vanMvbW9kdWxlcy9wcm9maWxlJztcbmltcG9ydCBDYW52YXNHYW1lIGZyb20gJy4vanMvY2xhc3Nlcy9DYW52YXNHYW1lJ1xuXG5cbmZ1bmN0aW9uIGluaXRHYW1lKCl7XG4gICAgbGV0IHVzZXJEYXRhID0gbmV3IFVzZXJEYXRhKCk7XG4gICAgY29uc3QgZ2FtZUFzc2V0cyA9IGdldEdhbWVBc3NldHMoKTtcbiAgICBjb25zdCBjYW52YXNHYW1lID0gbmV3IENhbnZhc0dhbWUoIGdhbWVBc3NldHMgKTtcbiAgICBidG5DaG9zZVNlY3Rpb24odXNlckRhdGEsIHRyaWdnZXJTZWN0aW9uKTsgLy8gYWRkIENob3NlIHNlY3Rpb24gRXZlbnQgdG8gYnV0dG9uc1xuICAgIHN0ZXBHYW1lTWFuYWdlcigwLCB1c2VyRGF0YSwgdHJpZ2dlclNlY3Rpb24pOyAvLyBpbml0IHRoZSBnYW1lIHdpdGggdGhlIGZpcnN0IHZpZXdcblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJTZWN0aW9uKHdfc2VjdCl7XG4gICAgICAgIHJlbW92ZVByb2ZpbGVFdmVudHMoKTtcbiAgICAgICAgc3dpdGNoICh3X3NlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjbGVhclByb2ZpbGUoIHVzZXJEYXRhICk7IC8vIGNsZWFyIHRoZSBjdXJyZW50IHByb2ZpbGUgdG8gYWRkIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIGluaXRQcm9maWxlRXZlbnRzKCB1c2VyRGF0YSApOyAvLyBpbml0IHRoZSBwcm9maWxlIGJvdHRvbnMgZXZlbnQgdG8gc2VsZWN0IHRoZSBuZXcgb25lXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY2FudmFzR2FtZS5zdGFydENhbnZhc0dhbWUodXNlckRhdGEpOyAvLyBzdGFydCB0aGUgY2FudmFzIGdhbWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKGZ1bmN0aW9uKCl7XG4gICAgaW5pdEdhbWUoKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==