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
/* harmony import */ var _classes_Alertmessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Alertmessage */ "./src/js/classes/Alertmessage.js");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ "./src/js/classes/Bullet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/js/classes/Player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CanvasGame = /*#__PURE__*/function () {
  function CanvasGame(assets, callback) {
    _classCallCheck(this, CanvasGame);

    this.gameCont = document.querySelector('#InitBBVAGame'); // Get the main container

    this.canvas = document.createElement('canvas'); // Init element canvas

    this.assets = assets; // Get the game assets preloaded

    this.context; // 2D CONTEXT

    this.hero; // Hero cont

    this.score = 0;
    this.level = 0;
    this.floor; // Floor parameter

    this.center; // Center param

    this.contWidth = 0; // Main container width

    this.contHeight = 0; // Main container height

    this.animate; // Set the window animation frame id

    this.zombies = []; // Array to store the zombies objects

    this.zombiesSpeed = 1; // Attack speed

    this.zDir = "right"; // Set the current zombie direction

    this.zombieloop; // Set an interval id

    this.bullets = []; // Array to store the bullets objects

    this.Alerts = new _classes_Alertmessage__WEBPACK_IMPORTED_MODULE_0__.default();
    this.callback = callback;
    this.userData;
  }

  _createClass(CanvasGame, [{
    key: "startCanvasGame",
    value: function startCanvasGame(userData) {
      var _this = this;

      // Trigger the start game  && set the global conf
      this.score = 0;
      this.level = 0;
      this.zombies = []; // Rest Params

      this.zombiesSpeed = 1; // Rest Params

      this.zDir = "right"; // Rest Params

      this.userData = userData;
      this.nickName = this.userData.getNickName();
      this.playerProfile = this.userData.getPlayer();
      this.context = this.canvas.getContext('2d'); // Init the cotext

      this.contWidth = this.gameCont.offsetWidth; // set the maib cont width

      this.contHeight = this.gameCont.offsetHeight; // set the main cont height

      this.canvas.width = this.contWidth; // set the canvas width

      this.canvas.height = this.contHeight; // set the canvas height

      this.floor = this.contHeight - 150; // set the game floor 

      this.center = this.contWidth / 2; // set the center game

      this.gameCont.appendChild(this.canvas); // inject the canvas in the main container

      this.hero = new _Player__WEBPACK_IMPORTED_MODULE_2__.default(this.assets.hero_right, this.assets.hero_left, 3, this.context, 'Hero'); // Create the hero object

      this.hero.setPosX(this.center); // set the init hero x pos

      this.hero.setPosY(this.floor - 140); // set the init hero y pos 

      this._levleZombiesManager(); // start the zombie manager creator


      this._addHeroControls(); // add keyboard events to the hero object


      this.animate = requestAnimationFrame(function () {
        return _this._turnOnEngine();
      }); // recursive iteration function

      this.Alerts.setMessage('¡Ohh no!. Una orda de task zombies enviados por el cliente... Defiendete.');
    }
  }, {
    key: "_addHeroControls",
    value: function _addHeroControls() {
      var _this2 = this;

      addEventListener('keydown', function (e) {
        // adding the window keyboard event
        var hPosX = _this2.hero.getPosX(); // get the hero current x pos


        var hDir = _this2.hero.getDirection(); // get the hero current direction


        var bulletXOrigin = hDir == 'right' ? hPosX + 80 : hPosX + 40; // set the origin of the new bullet;

        switch (e.key) {
          case "ArrowLeft":
            // catch the Arrow left
            _this2.hero.setDirection('left'); // set the hero direction to left


            _this2.hero.startRun(); // init the run animation to the direction before configured


            if (hPosX > 0) {
              // limit the environment to left
              _this2.hero.setPosX(hPosX - 10);
            }

            break;

          case "ArrowRight":
            // catch the arrow right 
            _this2.hero.setDirection('right'); // set the hero direction to right


            _this2.hero.startRun(); // init the run animation to the direction before configured


            if (hPosX < _this2.contWidth - 100) {
              // limit the environment to right
              _this2.hero.setPosX(hPosX + 10);
            }

            break;

          case " ":
            // catch the spacebar
            var newBullet = new _Bullet__WEBPACK_IMPORTED_MODULE_1__.default(bulletXOrigin, _this2.contHeight - 180, hDir, _this2.context); // create the new bullet

            _this2.bullets.push(newBullet); // add the new bullet to the bullets array


            break;

          default:
            break;
        }
      });
      addEventListener('keyup', function (e) {
        // catch the key up event
        switch (e.key) {
          case 'ArrowLeft':
            _this2.hero.stopRun(); // stop the run left animation


            break;

          case 'ArrowRight':
            _this2.hero.stopRun(); // stop the run right animation


            break;

          default:
            break;
        }
      });
    }
  }, {
    key: "_levleZombiesManager",
    value: function _levleZombiesManager() {
      var _this3 = this;

      var levelTimer = 0; // Level timer, counter in charge to add 1 level each 10 seconds

      this.zombieloop = setInterval(function () {
        // start the time interval and add it to the id
        if (levelTimer > 10) {
          _this3.Alerts.setMessage('Has subido de nivel');

          _this3.level += 1;
          _this3.zombiesSpeed += 1;
          levelTimer = 0; // Reset level timer
        } else {
          if (_this3.zombies.length < 10) {
            var newZombie = new _Player__WEBPACK_IMPORTED_MODULE_2__.default(_this3.assets.zombie_right, _this3.assets.zombie_left, 10, _this3.context, "zombie", _this3.zDir); // create zombie object

            newZombie.setPosY(_this3.floor - 140); // set the zombir Y pos origin

            newZombie.setPosX(_this3.zDir === "right" ? -50 : _this3.contWidth + 50); // set the zombir X pos origin

            _this3.zDir = _this3.zDir === "right" ? "left" : "right"; // set the Zombie move direction

            _this3.zombies.push(newZombie); // add the new zombie to the main zombies array

          }

          levelTimer++;
        }
      }, 1000);
    }
  }, {
    key: "_turnOnEngine",
    value: function _turnOnEngine() {
      var _this4 = this;

      var heroCurrentLife = this.hero.getPointsOfLive();
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
      /** Display score */

      this.context.font = "18px BentonSansBBVA-Book";
      this.context.textAlign = "center";
      this.context.fillStyle = "white";
      this.context.fillText("Nivel: ".concat(this.level, ", Score: ").concat(this.score, " pts"), 450, 180);
      /** Floor */

      this.context.fillStyle = 'black'; // set the game floor color

      this.context.fillRect(0, this.floor, this.contWidth, 150); // draw the game floor

      var heroPosX = this.hero.getPosX();
      this.hero.draw(); // draw the hero object each iteration

      this.zombies.forEach(function (zombie, z) {
        // read each zombie object from the zombie list
        zombie.draw(); // draw the zombie object each iteration

        var zPosX = zombie.getPosX(); // get the current X pos

        var currentZombieDir = zombie.getDirection(); // get the current direction

        if (currentZombieDir === "right" && zPosX < _this4.contWidth) {
          // limit the area
          zombie.setPosX(zPosX + _this4.zombiesSpeed);
        } else if (currentZombieDir === "right" && zPosX >= _this4.contWidth) {
          _this4.zombies.splice(z, 1); // remove the object from the list

        }

        if (zombie.getDirection() === "left" && zPosX > -100) {
          // limit the area
          zombie.setPosX(zPosX - _this4.zombiesSpeed);
        } else if (currentZombieDir === "left" && zPosX <= 0) {
          _this4.zombies.splice(z, 1); // remove the object from the list

        }

        if (zPosX > heroPosX - 50 && zPosX < heroPosX + 60) {
          _this4.zombies.splice(z, 1); // Remove zombie when collide with hero


          if (heroCurrentLife <= 1) {
            // If hero life is 1 or less the game ends
            _this4._endGame();
          } else {
            _this4.Alerts.setMessage('¡Rapido dispara con barra espaciadora!'); // Trigger an alerts

          }

          var life = heroCurrentLife - 1;

          _this4.hero.setPointsOfLive(life);
        }
        /* Collition detector */


        _this4.bullets.forEach(function (bullet, b) {
          var bulletPosX = bullet.getPosX();

          if (bulletPosX > zPosX + 40 && bulletPosX < zPosX + 60) {
            _this4.zombies.splice(z, 1);

            _this4.bullets.splice(b, 1);

            _this4.score += 10; // Adding 10pts per zombie killed
          }
        });

        zombie.startRun(); // start the animation depending on the zombie direction
      });
      this.bullets.forEach(function (bullet, b) {
        bullet.draw(); // draw the bullet object each iteration

        var bPosX = bullet.getPosX();
        var currentBulletDir = bullet.getDirection();

        if (currentBulletDir == 'right' && bPosX < _this4.contWidth) {
          bullet.setPosX(bPosX + 3);
        } else if (currentBulletDir === "right" && bPosX >= _this4.contWidth) {
          _this4.bullets.splice(b, 1);
        }

        if (currentBulletDir == 'left' && bPosX > 0) {
          bullet.setPosX(bPosX - 3);
        } else if (currentBulletDir === "left" && bPosX <= 0) {
          _this4.bullets.splice(b, 1);
        }
      });
      console.log('go....');

      if (heroCurrentLife > 0) {
        this.animate = requestAnimationFrame(function () {
          return _this4._turnOnEngine();
        }); // recursive iteration function
      } else {
        /** Header */
        this.context.font = "70px BentonSansBBVA-Bold";
        this.context.textAlign = "center";
        this.context.fillStyle = "white";
        this.context.fillText("Game Over", 450, 300);
      }
    }
  }, {
    key: "_endGame",
    value: function _endGame() {
      var _this5 = this;

      this._stopCanvasGame();

      this.userData.setScore(this.score);
      this.userData.setLevel(this.level);
      this.Alerts.setMessage('Ups, no importa.¡Lo has echo muy bien!');
      var triggerEndSection = setTimeout(function () {
        clearTimeout(triggerEndSection);

        _this5.callback(3);
      }, 1000);
    }
  }, {
    key: "_stopCanvasGame",
    value: function _stopCanvasGame() {
      window.cancelAnimationFrame(this.animate); // cancel the animation loop engine

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
    key: "setPointsOfLive",
    value: function setPointsOfLive(w_pol) {
      this.pointsOfLive = w_pol;
    }
  }, {
    key: "getPointsOfLive",
    value: function getPointsOfLive() {
      return this.pointsOfLive;
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
    this.level = 0;
  }
  /** Getters & Setters */


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
  }, {
    key: "setScore",
    value: function setScore(score) {
      this.score = score;
    }
  }, {
    key: "getScore",
    value: function getScore(score) {
      return this.score;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this.level = level;
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this.level;
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

  if (validateStep(w_usrdata, currentView)) {
    if (callback) {
      callback(currentView);
    }
  }
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

    case 3:
      // Section 3 not require validation
      valid = true;
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
  var canvasGame = new _js_classes_CanvasGame__WEBPACK_IMPORTED_MODULE_10__.default(gameAssets, triggerSection);
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
        var resultNickname = document.querySelector('.result-nickname');
        var resultLevel = document.querySelector('.result-level');
        var resultScore = document.querySelector('.result-score');
        resultNickname.innerHTML = this.userData.getNickName();
        resultLevel.innerHTML = this.userData.getLevel();
        resultScore.innerHTML = this.userData.getScore();
        (0,_js_modules_stepGame__WEBPACK_IMPORTED_MODULE_7__.stepGameManager)(3, userData, null); // End section and show the history list

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0FsZXJ0bWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0NhbnZhc0dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9Vc2VyRGF0YUdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9oZXJvX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9tb2R1bGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9zdGVwR2FtZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lYmJ2YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhbWViYnZhLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsZXJ0TWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVBbGVydCIsIm1zQ250IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJlbW92ZUFsZXJ0IiwiYWxlcnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJCdWxsZXQiLCJ4IiwieSIsImRpciIsImNvbnRleHQiLCJyYWRpdXMiLCJkaXJlY3Rpb24iLCJjIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIkNhbnZhc0dhbWUiLCJhc3NldHMiLCJjYWxsYmFjayIsImdhbWVDb250IiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImhlcm8iLCJzY29yZSIsImxldmVsIiwiZmxvb3IiLCJjZW50ZXIiLCJjb250V2lkdGgiLCJjb250SGVpZ2h0IiwiYW5pbWF0ZSIsInpvbWJpZXMiLCJ6b21iaWVzU3BlZWQiLCJ6RGlyIiwiem9tYmllbG9vcCIsImJ1bGxldHMiLCJBbGVydHMiLCJ1c2VyRGF0YSIsIm5pY2tOYW1lIiwiZ2V0Tmlja05hbWUiLCJwbGF5ZXJQcm9maWxlIiwiZ2V0UGxheWVyIiwiZ2V0Q29udGV4dCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsIlBsYXllciIsImhlcm9fcmlnaHQiLCJoZXJvX2xlZnQiLCJzZXRQb3NYIiwic2V0UG9zWSIsIl9sZXZsZVpvbWJpZXNNYW5hZ2VyIiwiX2FkZEhlcm9Db250cm9scyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90dXJuT25FbmdpbmUiLCJzZXRNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoUG9zWCIsImdldFBvc1giLCJoRGlyIiwiZ2V0RGlyZWN0aW9uIiwiYnVsbGV0WE9yaWdpbiIsImtleSIsInNldERpcmVjdGlvbiIsInN0YXJ0UnVuIiwibmV3QnVsbGV0IiwicHVzaCIsInN0b3BSdW4iLCJsZXZlbFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJuZXdab21iaWUiLCJ6b21iaWVfcmlnaHQiLCJ6b21iaWVfbGVmdCIsImhlcm9DdXJyZW50TGlmZSIsImdldFBvaW50c09mTGl2ZSIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImZpbGxSZWN0IiwiaGVyb1Bvc1giLCJkcmF3IiwiZm9yRWFjaCIsInpvbWJpZSIsInoiLCJ6UG9zWCIsImN1cnJlbnRab21iaWVEaXIiLCJzcGxpY2UiLCJfZW5kR2FtZSIsImxpZmUiLCJzZXRQb2ludHNPZkxpdmUiLCJidWxsZXQiLCJiIiwiYnVsbGV0UG9zWCIsImJQb3NYIiwiY3VycmVudEJ1bGxldERpciIsImNvbnNvbGUiLCJsb2ciLCJfc3RvcENhbnZhc0dhbWUiLCJzZXRTY29yZSIsInNldExldmVsIiwidHJpZ2dlckVuZFNlY3Rpb24iLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFySW50ZXJ2YWwiLCJpbWdzX3JpZ2h0IiwiaW1nc19sZWZ0Iiwid19wb2ludHNvZmxpZmUiLCJ3X2lkIiwid19kaXIiLCJwb2ludHNPZkxpdmUiLCJpZCIsImFzc2V0c19yaWdodCIsImFzc2V0c19sZWZ0IiwiaW1hZ2VJbmRleCIsIm1heEltZ3MiLCJ3X3BvbCIsImRyYXdJbWFnZSIsIlVzZXJEYXRhIiwicGxheWVyIiwidXNyX25hbWUiLCJ1c3JfcGxheWVyIiwiZ2V0R2FtZUFzc2V0cyIsInJpZ2h0IiwiaGVyb19yaWdodF8wIiwiaGVyb19yaWdodF8xIiwiaGVyb19yaWdodF8yIiwiaGVyb19yaWdodF8zIiwiaGVyb19yaWdodF80IiwiaGVyb19yaWdodF81IiwiaGVyb19yaWdodF82IiwiaGVyb19yaWdodF83IiwiaGVyb19yaWdodF84IiwiaGVyb19yaWdodF85IiwiaGVyb19yaWdodF8xMCIsImhlcm9fcmlnaHRfMTEiLCJoZXJvX3JpZ2h0XzEyIiwiaGVyb19yaWdodF8xMyIsImhlcm9fcmlnaHRfMTQiLCJoZXJvX3JpZ2h0XzE1IiwibGVmdCIsImhlcm9fbGVmdF8wIiwiaGVyb19sZWZ0XzEiLCJoZXJvX2xlZnRfMiIsImhlcm9fbGVmdF8zIiwiaGVyb19sZWZ0XzQiLCJoZXJvX2xlZnRfNSIsImhlcm9fbGVmdF82IiwiaGVyb19sZWZ0XzciLCJoZXJvX2xlZnRfOCIsImhlcm9fbGVmdF85IiwiaGVyb19sZWZ0XzEwIiwiaGVyb19sZWZ0XzExIiwiaGVyb19sZWZ0XzEyIiwiaGVyb19sZWZ0XzEzIiwiaGVyb19sZWZ0XzE0IiwiaGVyb19sZWZ0XzE1Iiwiem9tYmllX3JpZ2h0XzEiLCJ6b21iaWVfcmlnaHRfMiIsInpvbWJpZV9yaWdodF8zIiwiem9tYmllX3JpZ2h0XzQiLCJ6b21iaWVfcmlnaHRfNSIsInpvbWJpZV9yaWdodF82Iiwiem9tYmllX3JpZ2h0XzciLCJ6b21iaWVfcmlnaHRfOCIsInpvbWJpZV9yaWdodF85Iiwiem9tYmllX3JpZ2h0XzEwIiwiem9tYmllX2xlZnRfMSIsInpvbWJpZV9sZWZ0XzIiLCJ6b21iaWVfbGVmdF8zIiwiem9tYmllX2xlZnRfNCIsInpvbWJpZV9sZWZ0XzUiLCJ6b21iaWVfbGVmdF82Iiwiem9tYmllX2xlZnRfNyIsInpvbWJpZV9sZWZ0XzgiLCJ6b21iaWVfbGVmdF85Iiwiem9tYmllX2xlZnRfMTAiLCJzdG9yYWdlQXNzZXRzIiwiYXNzZXQiLCJuZXdJbWciLCJJbWFnZSIsInNyYyIsImluaXRQcm9maWxlRXZlbnRzIiwid191c2VyZGF0YSIsImJ0bnNfcGxheWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5pY2tuYW1lX2lucHV0IiwiaW5wdXRfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRfdmFsdWUiLCJyZXBsYWNlIiwic2V0Tmlja05hbWUiLCJidG5wbHlyIiwiY3VycmVudF9idG4iLCJ3X3BsYXllciIsImdldEF0dHJpYnV0ZSIsInNldFBsYXllciIsImNob29zZVBsYXllciIsInJlbW92ZVByb2ZpbGVFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYXJQcm9maWxlIiwic3RlcEdhbWVNYW5hZ2VyIiwiY3VycmVudFZpZXciLCJ3X3VzcmRhdGEiLCJzZWN0aW9ucyIsInNlY3QiLCJ2YWxpZGF0ZVN0ZXAiLCJzdHlsZSIsImRpc3BsYXkiLCJidG5DaG9zZVNlY3Rpb24iLCJidG5TZWN0aW9uIiwiY3VycmVudF9fYnRuIiwic3RlcCIsInBhcnNlSW50IiwiYWxlcnQiLCJ2YWxpZCIsImluaXRHYW1lIiwiZ2FtZUFzc2V0cyIsImNhbnZhc0dhbWUiLCJ0cmlnZ2VyU2VjdGlvbiIsIndfc2VjdCIsInN0YXJ0Q2FudmFzR2FtZSIsInJlc3VsdE5pY2tuYW1lIiwicmVzdWx0TGV2ZWwiLCJyZXN1bHRTY29yZSIsImdldExldmVsIiwiZ2V0U2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxZO0FBQ2pCLDBCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDSDs7OztXQUVELG9CQUFXQSxPQUFYLEVBQW1CO0FBQ2YsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0MsV0FBTDtBQUNIOzs7V0FFRCx1QkFBYTtBQUNULFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFaO0FBQ0EsVUFBSUosT0FBTyw4Q0FBcUMsS0FBS0EsT0FBMUMsZUFBWDtBQUNBRSxXQUFLLENBQUNHLFNBQU4sR0FBa0JMLE9BQWxCO0FBQ0EsV0FBS00sV0FBTDtBQUNIOzs7V0FFRCx1QkFBYTtBQUNULFVBQUlDLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLGlCQUF2QixDQUFkO0FBQ0EsVUFBSUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBSTtBQUN2QkgsZUFBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZjtBQUNBQyxvQkFBWSxDQUFDSCxLQUFELENBQVo7QUFDSCxPQUhxQixFQUduQixJQUhtQixDQUF0QjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZCZ0JJLE07QUFDakIsa0JB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QUw7QUFDSTZMLGtCQUFVLENBQUNHLGVBQVgsQ0FBMkJoTSxRQUEzQixFQURKLENBQzBDOztBQUN0Qzs7QUFDSixXQUFLLENBQUw7QUFDSSxZQUFNaU0sY0FBYyxHQUFHN08sUUFBUSxDQUFDSyxhQUFULENBQXVCLGtCQUF2QixDQUF2QjtBQUNBLFlBQU15TyxXQUFXLEdBQUc5TyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxZQUFNME8sV0FBVyxHQUFHL08sUUFBUSxDQUFDSyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0F3TyxzQkFBYyxDQUFDM08sU0FBZixHQUEyQixLQUFLMEMsUUFBTCxDQUFjRSxXQUFkLEVBQTNCO0FBQ0FnTSxtQkFBVyxDQUFDNU8sU0FBWixHQUF3QixLQUFLMEMsUUFBTCxDQUFjb00sUUFBZCxFQUF4QjtBQUNBRCxtQkFBVyxDQUFDN08sU0FBWixHQUF3QixLQUFLMEMsUUFBTCxDQUFjcU0sUUFBZCxFQUF4QjtBQUNBekIsNkVBQWUsQ0FBQyxDQUFELEVBQUk1SyxRQUFKLEVBQWMsSUFBZCxDQUFmLENBUEosQ0FPd0M7O0FBQ3BDO0FBaEJSO0FBa0JIO0FBQ0o7O0FBRUQsQ0FBQyxZQUFVO0FBQ1AyTCxVQUFRO0FBQ1gsQ0FGRCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRNZXNzYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3JlYXRlQWxlcnQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbGVydCgpe1xuICAgICAgICBsZXQgbXNDbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWxlcnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYDxkaXYgY2xhc3M9XCJtZXNzYWdlX19hbGVydFwiPjxwPiR7dGhpcy5tZXNzYWdlfTwvcD48L2Rpdj5gXG4gICAgICAgIG1zQ250LmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxlcnQoKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGVydCgpe1xuICAgICAgICBsZXQgYWxlcnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZV9fYWxlcnRcIik7IFxuICAgICAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBhbGVydEVsLnJlbW92ZSgwKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldHtcbiAgICBjb25zdHJ1Y3RvciggeCwgeSwgZGlyID0gJ3JpZ2h0JywgY29udGV4dCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJcbiAgICAgICAgdGhpcy5jICA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqIEdldHRlcnMgJiYgU2V0dGVycyAqL1xuICAgIHNldFBvc1goeCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgfSBcblxuICAgIGdldFBvc1goeCl7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcbiAgICB9XG59IiwiaW1wb3J0IEFsZXJ0TWVzc2FnZSBmcm9tICcuLi9jbGFzc2VzL0FsZXJ0bWVzc2FnZSc7XG5pbXBvcnQgQnVsbGV0IGZyb20gJy4vQnVsbGV0JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNHYW1le1xuICAgIGNvbnN0cnVjdG9yKCBhc3NldHMsIGNhbGxiYWNrICl7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjSW5pdEJCVkFHYW1lJyk7IC8vIEdldCB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgLy8gSW5pdCBlbGVtZW50IGNhbnZhc1xuICAgICAgICB0aGlzLmFzc2V0cyA9IGFzc2V0czsgIC8vIEdldCB0aGUgZ2FtZSBhc3NldHMgcHJlbG9hZGVkXG4gICAgICAgIHRoaXMuY29udGV4dDsgLy8gMkQgQ09OVEVYVFxuICAgICAgICB0aGlzLmhlcm87IC8vIEhlcm8gY29udFxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZsb29yOyAvLyBGbG9vciBwYXJhbWV0ZXJcbiAgICAgICAgdGhpcy5jZW50ZXI7IC8vIENlbnRlciBwYXJhbVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250V2lkdGggPSAwOyAvLyBNYWluIGNvbnRhaW5lciB3aWR0aFxuICAgICAgICB0aGlzLmNvbnRIZWlnaHQgPSAwOyAvLyBNYWluIGNvbnRhaW5lciBoZWlnaHRcblxuICAgICAgICB0aGlzLmFuaW1hdGU7IC8vIFNldCB0aGUgd2luZG93IGFuaW1hdGlvbiBmcmFtZSBpZFxuICAgICAgICBcbiAgICAgICAgdGhpcy56b21iaWVzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIHRoZSB6b21iaWVzIG9iamVjdHNcbiAgICAgICAgdGhpcy56b21iaWVzU3BlZWQgPSAxOyAvLyBBdHRhY2sgc3BlZWRcbiAgICAgICAgdGhpcy56RGlyID0gXCJyaWdodFwiOyAvLyBTZXQgdGhlIGN1cnJlbnQgem9tYmllIGRpcmVjdGlvblxuICAgICAgICB0aGlzLnpvbWJpZWxvb3A7IC8vIFNldCBhbiBpbnRlcnZhbCBpZFxuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IFtdOyAvLyBBcnJheSB0byBzdG9yZSB0aGUgYnVsbGV0cyBvYmplY3RzXG4gICAgICAgIHRoaXMuQWxlcnRzID0gbmV3IEFsZXJ0TWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMudXNlckRhdGE7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0Q2FudmFzR2FtZSh1c2VyRGF0YSl7IC8vIFRyaWdnZXIgdGhlIHN0YXJ0IGdhbWUgICYmIHNldCB0aGUgZ2xvYmFsIGNvbmZcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLnpvbWJpZXMgPSBbXTsgLy8gUmVzdCBQYXJhbXNcbiAgICAgICAgdGhpcy56b21iaWVzU3BlZWQgPSAxOyAvLyBSZXN0IFBhcmFtc1xuICAgICAgICB0aGlzLnpEaXIgPSBcInJpZ2h0XCI7IC8vIFJlc3QgUGFyYW1zXG5cbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICB0aGlzLm5pY2tOYW1lID0gdGhpcy51c2VyRGF0YS5nZXROaWNrTmFtZSgpO1xuICAgICAgICB0aGlzLnBsYXllclByb2ZpbGUgPSB0aGlzLnVzZXJEYXRhLmdldFBsYXllcigpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vIEluaXQgdGhlIGNvdGV4dFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250V2lkdGggPSB0aGlzLmdhbWVDb250Lm9mZnNldFdpZHRoOyAvLyBzZXQgdGhlIG1haWIgY29udCB3aWR0aFxuICAgICAgICB0aGlzLmNvbnRIZWlnaHQgPSB0aGlzLmdhbWVDb250Lm9mZnNldEhlaWdodDsgLy8gc2V0IHRoZSBtYWluIGNvbnQgaGVpZ2h0XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY29udFdpZHRoOyAvLyBzZXQgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbnRIZWlnaHQ7IC8vIHNldCB0aGUgY2FudmFzIGhlaWdodFxuICAgICAgICBcbiAgICAgICAgdGhpcy5mbG9vciA9IHRoaXMuY29udEhlaWdodCAtIDE1MDsgLy8gc2V0IHRoZSBnYW1lIGZsb29yIFxuICAgICAgICB0aGlzLmNlbnRlciA9IHRoaXMuY29udFdpZHRoIC8gMjsgLy8gc2V0IHRoZSBjZW50ZXIgZ2FtZVxuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lQ29udC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7IC8vIGluamVjdCB0aGUgY2FudmFzIGluIHRoZSBtYWluIGNvbnRhaW5lclxuICAgICAgICBcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IFBsYXllcih0aGlzLmFzc2V0cy5oZXJvX3JpZ2h0LCB0aGlzLmFzc2V0cy5oZXJvX2xlZnQsIDMsIHRoaXMuY29udGV4dCwgJ0hlcm8nKTsgLy8gQ3JlYXRlIHRoZSBoZXJvIG9iamVjdFxuICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWCggdGhpcy5jZW50ZXIgKTsgLy8gc2V0IHRoZSBpbml0IGhlcm8geCBwb3NcbiAgICAgICAgdGhpcy5oZXJvLnNldFBvc1koIHRoaXMuZmxvb3IgLSAxNDAgKTsgLy8gc2V0IHRoZSBpbml0IGhlcm8geSBwb3MgXG5cbiAgICAgICAgdGhpcy5fbGV2bGVab21iaWVzTWFuYWdlcigpOyAvLyBzdGFydCB0aGUgem9tYmllIG1hbmFnZXIgY3JlYXRvclxuICAgICAgICB0aGlzLl9hZGRIZXJvQ29udHJvbHMoKTsgLy8gYWRkIGtleWJvYXJkIGV2ZW50cyB0byB0aGUgaGVybyBvYmplY3RcbiAgICAgICAgdGhpcy5hbmltYXRlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl90dXJuT25FbmdpbmUoKSApOyAvLyByZWN1cnNpdmUgaXRlcmF0aW9uIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuQWxlcnRzLnNldE1lc3NhZ2UoJ8KhT2hoIG5vIS4gVW5hIG9yZGEgZGUgdGFzayB6b21iaWVzIGVudmlhZG9zIHBvciBlbCBjbGllbnRlLi4uIERlZmllbmRldGUuJyk7XG4gICAgfVxuXG4gICAgX2FkZEhlcm9Db250cm9scygpe1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57IC8vIGFkZGluZyB0aGUgd2luZG93IGtleWJvYXJkIGV2ZW50XG4gICAgICAgICAgICBjb25zdCBoUG9zWCA9IHRoaXMuaGVyby5nZXRQb3NYKCk7IC8vIGdldCB0aGUgaGVybyBjdXJyZW50IHggcG9zXG4gICAgICAgICAgICBjb25zdCBoRGlyID0gdGhpcy5oZXJvLmdldERpcmVjdGlvbigpOyAvLyBnZXQgdGhlIGhlcm8gY3VycmVudCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IGJ1bGxldFhPcmlnaW4gPSBoRGlyPT0ncmlnaHQnPyBoUG9zWCArIDgwOiBoUG9zWCArIDQwOyAgLy8gc2V0IHRoZSBvcmlnaW4gb2YgdGhlIG5ldyBidWxsZXQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOiAvLyBjYXRjaCB0aGUgQXJyb3cgbGVmdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0RGlyZWN0aW9uKCdsZWZ0Jyk7IC8vIHNldCB0aGUgaGVybyBkaXJlY3Rpb24gdG8gbGVmdFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc3RhcnRSdW4oKTsgLy8gaW5pdCB0aGUgcnVuIGFuaW1hdGlvbiB0byB0aGUgZGlyZWN0aW9uIGJlZm9yZSBjb25maWd1cmVkXG4gICAgICAgICAgICAgICAgICAgIGlmKGhQb3NYID4gMCl7IC8vIGxpbWl0IHRoZSBlbnZpcm9ubWVudCB0byBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWChoUG9zWCAtIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjogLy8gY2F0Y2ggdGhlIGFycm93IHJpZ2h0IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0RGlyZWN0aW9uKCdyaWdodCcpOyAvLyBzZXQgdGhlIGhlcm8gZGlyZWN0aW9uIHRvIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zdGFydFJ1bigpOyAvLyBpbml0IHRoZSBydW4gYW5pbWF0aW9uIHRvIHRoZSBkaXJlY3Rpb24gYmVmb3JlIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYoaFBvc1ggPCB0aGlzLmNvbnRXaWR0aCAtIDEwMCl7IC8vIGxpbWl0IHRoZSBlbnZpcm9ubWVudCB0byByaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnNldFBvc1goaFBvc1ggKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiIFwiOiAvLyBjYXRjaCB0aGUgc3BhY2ViYXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QnVsbGV0ID0gbmV3IEJ1bGxldChidWxsZXRYT3JpZ2luLCB0aGlzLmNvbnRIZWlnaHQgLSAxODAsIGhEaXIsdGhpcy5jb250ZXh0KTsgLy8gY3JlYXRlIHRoZSBuZXcgYnVsbGV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKG5ld0J1bGxldCk7IC8vIGFkZCB0aGUgbmV3IGJ1bGxldCB0byB0aGUgYnVsbGV0cyBhcnJheVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4geyAvLyBjYXRjaCB0aGUga2V5IHVwIGV2ZW50XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnN0b3BSdW4oKTsgLy8gc3RvcCB0aGUgcnVuIGxlZnQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc3RvcFJ1bigpOyAvLyBzdG9wIHRoZSBydW4gcmlnaHQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2xldmxlWm9tYmllc01hbmFnZXIoKXtcbiAgICAgICAgbGV0IGxldmVsVGltZXIgPSAwOyAvLyBMZXZlbCB0aW1lciwgY291bnRlciBpbiBjaGFyZ2UgdG8gYWRkIDEgbGV2ZWwgZWFjaCAxMCBzZWNvbmRzXG4gICAgICAgIHRoaXMuem9tYmllbG9vcCA9IHNldEludGVydmFsKCgpID0+IHsgLy8gc3RhcnQgdGhlIHRpbWUgaW50ZXJ2YWwgYW5kIGFkZCBpdCB0byB0aGUgaWRcbiAgICAgICAgICAgIGlmKGxldmVsVGltZXIgPiAxMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5BbGVydHMuc2V0TWVzc2FnZSgnSGFzIHN1YmlkbyBkZSBuaXZlbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXNTcGVlZCArPSAxO1xuICAgICAgICAgICAgICAgIGxldmVsVGltZXIgPSAwOyAvLyBSZXNldCBsZXZlbCB0aW1lclxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYodGhpcy56b21iaWVzLmxlbmd0aCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1pvbWJpZSA9IG5ldyBQbGF5ZXIodGhpcy5hc3NldHMuem9tYmllX3JpZ2h0LHRoaXMuYXNzZXRzLnpvbWJpZV9sZWZ0LCAxMCwgdGhpcy5jb250ZXh0LCBcInpvbWJpZVwiLCB0aGlzLnpEaXIpOyAvLyBjcmVhdGUgem9tYmllIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UG9zWSggdGhpcy5mbG9vciAtIDE0MCApOyAvLyBzZXQgdGhlIHpvbWJpciBZIHBvcyBvcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgbmV3Wm9tYmllLnNldFBvc1goICh0aGlzLnpEaXIgPT09IFwicmlnaHRcIik/IC01MCA6ICh0aGlzLmNvbnRXaWR0aCArIDUwKSApOyAvLyBzZXQgdGhlIHpvbWJpciBYIHBvcyBvcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy56RGlyID0gKHRoaXMuekRpciA9PT0gXCJyaWdodFwiKT8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7IC8vIHNldCB0aGUgWm9tYmllIG1vdmUgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9tYmllcy5wdXNoKG5ld1pvbWJpZSk7IC8vIGFkZCB0aGUgbmV3IHpvbWJpZSB0byB0aGUgbWFpbiB6b21iaWVzIGFycmF5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldmVsVGltZXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgX3R1cm5PbkVuZ2luZSgpe1xuICAgICAgICBjb25zdCBoZXJvQ3VycmVudExpZmUgPSB0aGlzLmhlcm8uZ2V0UG9pbnRzT2ZMaXZlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwwLHRoaXMuY29udFdpZHRoLCB0aGlzLmNvbnRXaWR0aCk7IC8vIGNsZWFuIHRoZSBzdGFnZSBlYWNoIGl0ZXJhdGlvblxuICAgICAgICAvKiogSGVhZGVyICovXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCI4MHB4IEJlbnRvblNhbnNCQlZBLUJvbGRcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChcIlpPTUJJRSBUQVNLXCIsIDQ1MCwgMTAwKTtcblxuICAgICAgICAvKiogRGlzcGxheSB1c2VyIGRhdGEgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjMwcHggQmVudG9uU2Fuc0JCVkEtQm9va1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGAke3RoaXMucGxheWVyUHJvZmlsZX06ICR7dGhpcy5uaWNrTmFtZX1gLCA0NTAsIDE1MCk7XG4gICAgICAgIFxuICAgICAgICAvKiogRGlzcGxheSBzY29yZSAqL1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMThweCBCZW50b25TYW5zQkJWQS1Cb29rXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYE5pdmVsOiAke3RoaXMubGV2ZWx9LCBTY29yZTogJHt0aGlzLnNjb3JlfSBwdHNgLCA0NTAsIDE4MCk7XG5cbiAgICAgICAgLyoqIEZsb29yICovXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snOyAvLyBzZXQgdGhlIGdhbWUgZmxvb3IgY29sb3JcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIHRoaXMuZmxvb3IsIHRoaXMuY29udFdpZHRoLCAxNTApOyAvLyBkcmF3IHRoZSBnYW1lIGZsb29yXG5cbiAgICAgICAgY29uc3QgaGVyb1Bvc1ggPSB0aGlzLmhlcm8uZ2V0UG9zWCgpO1xuICAgICAgICB0aGlzLmhlcm8uZHJhdygpOyAvLyBkcmF3IHRoZSBoZXJvIG9iamVjdCBlYWNoIGl0ZXJhdGlvblxuICAgICAgICBcbiAgICAgICAgdGhpcy56b21iaWVzLmZvckVhY2goKHpvbWJpZSwgeikgPT4geyAvLyByZWFkIGVhY2ggem9tYmllIG9iamVjdCBmcm9tIHRoZSB6b21iaWUgbGlzdFxuICAgICAgICAgICAgem9tYmllLmRyYXcoKTsgLy8gZHJhdyB0aGUgem9tYmllIG9iamVjdCBlYWNoIGl0ZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgelBvc1ggPSB6b21iaWUuZ2V0UG9zWCgpOyAvLyBnZXQgdGhlIGN1cnJlbnQgWCBwb3NcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRab21iaWVEaXIgPSB6b21iaWUuZ2V0RGlyZWN0aW9uKCk7IC8vIGdldCB0aGUgY3VycmVudCBkaXJlY3Rpb25cblxuICAgICAgICAgICAgaWYoIGN1cnJlbnRab21iaWVEaXIgPT09IFwicmlnaHRcIiAmJiB6UG9zWCA8IHRoaXMuY29udFdpZHRoICl7IC8vIGxpbWl0IHRoZSBhcmVhXG4gICAgICAgICAgICAgICAgem9tYmllLnNldFBvc1goelBvc1ggKyB0aGlzLnpvbWJpZXNTcGVlZCk7XG4gICAgICAgICAgICB9ZWxzZSBpZiggY3VycmVudFpvbWJpZURpciA9PT0gXCJyaWdodFwiICYmIHpQb3NYID49IHRoaXMuY29udFdpZHRoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpOyAvLyByZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB6b21iaWUuZ2V0RGlyZWN0aW9uKCkgPT09IFwibGVmdFwiICYmIHpQb3NYID4gLTEwMCl7IC8vIGxpbWl0IHRoZSBhcmVhXG4gICAgICAgICAgICAgICAgem9tYmllLnNldFBvc1goelBvc1ggLSB0aGlzLnpvbWJpZXNTcGVlZCk7XG4gICAgICAgICAgICB9ZWxzZSBpZiggY3VycmVudFpvbWJpZURpciA9PT0gXCJsZWZ0XCIgJiYgelBvc1ggPD0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy56b21iaWVzLnNwbGljZSh6LCAxKTsvLyByZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHpQb3NYID4gaGVyb1Bvc1gtNTAgJiYgelBvc1ggPCBoZXJvUG9zWCArIDYwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpOyAvLyBSZW1vdmUgem9tYmllIHdoZW4gY29sbGlkZSB3aXRoIGhlcm9cbiAgICAgICAgICAgICAgICBpZihoZXJvQ3VycmVudExpZmUgPD0gMSl7IC8vIElmIGhlcm8gbGlmZSBpcyAxIG9yIGxlc3MgdGhlIGdhbWUgZW5kc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmRHYW1lKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQWxlcnRzLnNldE1lc3NhZ2UoJ8KhUmFwaWRvIGRpc3BhcmEgY29uIGJhcnJhIGVzcGFjaWFkb3JhIScpOyAvLyBUcmlnZ2VyIGFuIGFsZXJ0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbGlmZSA9IGhlcm9DdXJyZW50TGlmZSAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvLnNldFBvaW50c09mTGl2ZShsaWZlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogQ29sbGl0aW9uIGRldGVjdG9yICovXG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0LCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVsbGV0UG9zWCA9IGJ1bGxldC5nZXRQb3NYKCk7XG4gICAgICAgICAgICAgICAgaWYoYnVsbGV0UG9zWCA+IHpQb3NYICsgNDAgJiYgYnVsbGV0UG9zWCA8IHpQb3NYICsgNjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKGIsMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7IC8vIEFkZGluZyAxMHB0cyBwZXIgem9tYmllIGtpbGxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB6b21iaWUuc3RhcnRSdW4oKTsgLy8gc3RhcnQgdGhlIGFuaW1hdGlvbiBkZXBlbmRpbmcgb24gdGhlIHpvbWJpZSBkaXJlY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzLmZvckVhY2goKGJ1bGxldCwgYik9PntcbiAgICAgICAgICAgIGJ1bGxldC5kcmF3KCk7IC8vIGRyYXcgdGhlIGJ1bGxldCBvYmplY3QgZWFjaCBpdGVyYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGJQb3NYID0gYnVsbGV0LmdldFBvc1goKTsgXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QnVsbGV0RGlyID0gYnVsbGV0LmdldERpcmVjdGlvbigpO1xuICAgICAgICAgICAgaWYoY3VycmVudEJ1bGxldERpciA9PSAncmlnaHQnICYmIGJQb3NYIDwgdGhpcy5jb250V2lkdGggKXtcbiAgICAgICAgICAgICAgICBidWxsZXQuc2V0UG9zWCggYlBvc1ggKyAzICk7XG4gICAgICAgICAgICB9ZWxzZSBpZiggY3VycmVudEJ1bGxldERpciA9PT0gXCJyaWdodFwiICYmIGJQb3NYID49IHRoaXMuY29udFdpZHRoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKGIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudEJ1bGxldERpciA9PSAnbGVmdCcgJiYgYlBvc1ggPiAwKXtcbiAgICAgICAgICAgICAgICBidWxsZXQuc2V0UG9zWCggYlBvc1ggLSAzICk7ICAgXG4gICAgICAgICAgICB9ZWxzZSBpZiggY3VycmVudEJ1bGxldERpciA9PT0gXCJsZWZ0XCIgJiYgYlBvc1ggPD0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZShiLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnby4uLi4nKVxuICAgICAgICBpZihoZXJvQ3VycmVudExpZmUgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5fdHVybk9uRW5naW5lKCkgKTsgLy8gcmVjdXJzaXZlIGl0ZXJhdGlvbiBmdW5jdGlvblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8qKiBIZWFkZXIgKi9cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCI3MHB4IEJlbnRvblNhbnNCQlZBLUJvbGRcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCA0NTAsIDMwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZW5kR2FtZSgpe1xuICAgICAgICB0aGlzLl9zdG9wQ2FudmFzR2FtZSgpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLnNldFNjb3JlKHRoaXMuc2NvcmUpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLnNldExldmVsKHRoaXMubGV2ZWwpO1xuICAgICAgICB0aGlzLkFsZXJ0cy5zZXRNZXNzYWdlKCdVcHMsIG5vIGltcG9ydGEuwqFMbyBoYXMgZWNobyBtdXkgYmllbiEnKTtcbiAgICAgICAgbGV0IHRyaWdnZXJFbmRTZWN0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodHJpZ2dlckVuZFNlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygzKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIFxuICAgIF9zdG9wQ2FudmFzR2FtZSgpe1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTsgLy8gY2FuY2VsIHRoZSBhbmltYXRpb24gbG9vcCBlbmdpbmVcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnpvbWJpZWxvb3ApOyAvLyBjbGVhciB0aGUgdGltZSBpbnRlcnZhciB6b21iaWUgY3JlYXRvclxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoIFxuICAgICAgICBpbWdzX3JpZ2h0LCAvLyBnZXQgdGhlIGFycmF5IGltYWdlcyBwcmVsb2FkZWQgZm9yIHRoZSByaWdodCBkaXJlY3Rpb25cbiAgICAgICAgaW1nc19sZWZ0LCAgLy8gZ2V0IHRoZSBhcnJheSBpbWFnZXMgcHJlbG9hZGVkIGZvciB0aGUgbGVmdCBkaXJlY3Rpb25cbiAgICAgICAgd19wb2ludHNvZmxpZmUgPSAwLCAvLyBzZXQgdGhlIHBvaW50cyBvZiBsaWZlXG4gICAgICAgIGNvbnRleHQsIC8vIHBhc3MgdGhlIGNvbnRleHQgdG8gZHJhdyB0aGUgbmV3IG9iamVjdCB0byB0aGUgY2FudmFzIGVudlxuICAgICAgICB3X2lkLCAvLyBzZXQgdGhlIGlkIChub3QgaW4gdXNlIGJ5IHRoZSBtb21lbnQpXG4gICAgICAgIHdfZGlyID0gXCJyaWdodFwiIC8vIHNldCB0aGUgb3JpZ2luIGRpcmVjdGlvblxuICAgICAgICApe1xuICAgICAgICB0aGlzLnggPSAwOyAvLyBvcmlnaW4geCBwb3NcbiAgICAgICAgdGhpcy55ID0gMDsgLy8gb3JpZ2luIHkgcG9zXG4gICAgICAgIHRoaXMucG9pbnRzT2ZMaXZlID0gd19wb2ludHNvZmxpZmU7XG4gICAgICAgIHRoaXMuaWQgPSB3X2lkO1xuICAgICAgICB0aGlzLmMgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFzc2V0c19yaWdodCA9IGltZ3NfcmlnaHQ7XG4gICAgICAgIHRoaXMuYXNzZXRzX2xlZnQgPSBpbWdzX2xlZnQ7XG4gICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gd19kaXI7XG4gICAgICAgIHRoaXMubWF4SW1ncyA9ICh0aGlzLmRpcmVjdGlvbik/ICh0aGlzLmFzc2V0c19yaWdodC5sZW5ndGgtMSk6KHRoaXMuYXNzZXRzX2xlZnQubGVuZ3RoLTEpOyAvLyBjcmVhdGUgYSBsaW1pdCB0byBsb29wXG4gICAgfVxuIFxuXG4gICAgLyoqIEdldHRlcnMgJiYgU2V0dGVycyAqL1xuICAgIHNldFBvc1goeCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgfVxuICAgIHNldFBvc1koeSl7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgZ2V0UG9zWCh4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9XG4gICAgZ2V0UG9zWSh5KXtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIGdldERpcmVjdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgc2V0UG9pbnRzT2ZMaXZlKHdfcG9sKXtcbiAgICAgICAgdGhpcy5wb2ludHNPZkxpdmUgPSB3X3BvbDtcbiAgICB9XG4gICAgZ2V0UG9pbnRzT2ZMaXZlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c09mTGl2ZTtcbiAgICB9XG5cbiAgICBzdGFydFJ1bigpe1xuICAgICAgICBpZih0aGlzLmltYWdlSW5kZXggPCB0aGlzLm1heEltZ3MpeyAvLyBkaXNwbGF5aW5nIHRoZSBtb3ZlbWVudCBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VJbmRleCArPSAxO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IDE7IC8vIHJldHVybiB0byB0aGUgZmlyc3QgaW1hZ2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3BSdW4oKXtcbiAgICAgICAgdGhpcy5pbWFnZUluZGV4ID0gMDsgLy8gcmV0dXJuIHRvIHRoZSBmaXJzdCBpbWFnZVxuICAgIH1cblxuICAgIGRyYXcoeCwgeSl7XG4gICAgICAgIHRoaXMuYy5kcmF3SW1hZ2UoKCh0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnKT8gdGhpcy5hc3NldHNfcmlnaHRbdGhpcy5pbWFnZUluZGV4XTp0aGlzLmFzc2V0c19sZWZ0W3RoaXMuaW1hZ2VJbmRleF0pLCB0aGlzLngsIHRoaXMueSwgMTAwLCAxNjApO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmlja05hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnBsYXllciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmxldmVsID0gMDtcbiAgICB9XG5cbiAgICAvKiogR2V0dGVycyAmIFNldHRlcnMgKi9cblxuICAgIHNldE5pY2tOYW1lKHVzcl9uYW1lKSB7XG4gICAgICAgIHRoaXMubmlja05hbWUgPSB1c3JfbmFtZTtcbiAgICB9XG4gICAgZ2V0Tmlja05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5pY2tOYW1lO1xuICAgIH1cblxuICAgIHNldFBsYXllcih1c3JfcGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gdXNyX3BsYXllcjtcbiAgICB9XG4gICAgZ2V0UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gICAgfVxuXG4gICAgc2V0U2NvcmUoc2NvcmUpe1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgfVxuICAgIGdldFNjb3JlKHNjb3JlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XG4gICAgfVxuICAgIFxuICAgIHNldExldmVsKGxldmVsKXtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIH1cbiAgICBnZXRMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgICB9XG59IiwiaW1wb3J0IGhlcm9fcmlnaHRfMTUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xNS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xNC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMy5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMi5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMTAgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xMC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfOSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzkucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX184LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF83IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fNy5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfNiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzYucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX181LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF80IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fNC5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMyBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzMucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18yLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fMS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzAucG5nJztcblxuaW1wb3J0IGhlcm9fbGVmdF8xNSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTUucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTQgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzE0LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzEzIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xMy5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8xMiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTIucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTEgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzExLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzEwIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xMC5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF85IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX185LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzgucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfNyBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fNy5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF82IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX182LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzUucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfNCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fNC5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8zIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18zLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzIucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMS5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8wIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18wLnBuZyc7XG5cbmltcG9ydCB6b21iaWVfcmlnaHRfMSBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfMS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF8yIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa18yLnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzMgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzMucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfNCBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfNC5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF81IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa181LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzYgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzYucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfNyBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfNy5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF84IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa184LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzkgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzkucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfMTAgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzEwLnBuZyc7XG5cbmltcG9ydCB6b21iaWVfbGVmdF8xIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzEucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8yIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzIucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8zIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzMucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF80IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzQucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF81IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzUucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF82IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzYucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF83IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzcucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF84IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzgucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF85IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzkucG5nJztcbmltcG9ydCB6b21iaWVfbGVmdF8xMCBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL2xlZnQvV2Fsa18xMC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHYW1lQXNzZXRzKCl7XG4gICAgbGV0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIGhlcm86IHtcbiAgICAgICAgICAgICAgICByaWdodDogW1xuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8yLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfNCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF81LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzYsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfNyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF84LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzksXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTIsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTQsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMTUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsZWZ0OltcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzAsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzMsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF80LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfNSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzYsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF83LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfOCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzksXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xMCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzExLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTIsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xMyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzE0LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTUsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvbWJpZTp7XG4gICAgICAgICAgICAgICAgcmlnaHQ6W1xuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfMSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzIsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF8zLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfNCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzUsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF82LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfNyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzgsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF85LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfMTAsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsZWZ0OltcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMixcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNixcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfNyxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfOCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfOSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX2xlZnRfMTAsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBsZXQgc3RvcmFnZUFzc2V0cyA9IHtcbiAgICAgICAgaGVyb19yaWdodDpbXSxcbiAgICAgICAgaGVyb19sZWZ0OltdLFxuICAgICAgICB6b21iaWVfcmlnaHQ6W10sXG4gICAgICAgIHpvbWJpZV9sZWZ0OltdLFxuICAgIH07XG4gICAgXG4gICAgYXNzZXRzLmhlcm8ucmlnaHQuZm9yRWFjaChhc3NldD0+e1xuICAgICAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5zcmMgPSBhc3NldDtcbiAgICAgICAgc3RvcmFnZUFzc2V0cy5oZXJvX3JpZ2h0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcbiAgICBcbiAgICBhc3NldHMuaGVyby5sZWZ0LmZvckVhY2goYXNzZXQ9PntcbiAgICAgICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuc3JjID0gYXNzZXQ7XG4gICAgICAgIHN0b3JhZ2VBc3NldHMuaGVyb19sZWZ0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcbiAgICBcbiAgICBhc3NldHMuem9tYmllLnJpZ2h0LmZvckVhY2goYXNzZXQ9PntcbiAgICAgICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuc3JjID0gYXNzZXQ7XG4gICAgICAgIHN0b3JhZ2VBc3NldHMuem9tYmllX3JpZ2h0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcblxuICAgIGFzc2V0cy56b21iaWUubGVmdC5mb3JFYWNoKGFzc2V0PT57XG4gICAgICAgIGxldCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLnNyYyA9IGFzc2V0O1xuICAgICAgICBzdG9yYWdlQXNzZXRzLnpvbWJpZV9sZWZ0LnB1c2gobmV3SW1nKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdG9yYWdlQXNzZXRzO1xufSIsIi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHdfdXNlcmRhdGEgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0UHJvZmlsZUV2ZW50cyh3X3VzZXJkYXRhKXsgICAgICAvLyBCaW5kIGV2ZW50cyB0byB0aGUgaW50ZXJhY3RpdmUgZWxlbWVudHNcbiAgICBjb25zdCBidG5zX3BsYXllciAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1wbGF5ZXInKTsgICAgLy8gZ2V0IGFsbCB0aGUgcGxheWVyIGJ1dHRvbnMgc2VsZWN0b3JcbiAgICBjb25zdCBuaWNrbmFtZV9pbnB1dCAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOaWNrbmFtZUlucHV0Jyk7ICAgICAgICAgLy8gZ2V0IHRoZSBuaWNrbmFtZSB0ZXh0IGlucHV0IFxuXG4gICAgbmlja25hbWVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHsgICAgIC8vIEFkZCB0aGUgb25jaGFuZ2UgZXZlbnQgdG8gdGhlIGlucHV0XG4gICAgICAgIGNvbnN0IGlucHV0X3ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWUgPSBpbnB1dF92YWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpIC8vIFZhbGlkYXRpbiB0byBvbmx5IGFjY2VwdCB0ZXh0XG4gICAgICAgIHdfdXNlcmRhdGEuc2V0Tmlja05hbWUoY3VycmVudF92YWx1ZSk7IC8vIHNldCB0aGUgbmV3IG5pY2tuYW1lXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBidG5wbHlyID0gMDsgYnRucGx5ciA8IGJ0bnNfcGxheWVyLmxlbmd0aDsgYnRucGx5cisrKSB7IC8vIGxvb3BpbmcgdGhyb3VnaCB0aGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBjdXJyZW50X2J0biAgID0gYnRuc19wbGF5ZXJbYnRucGx5cl07IC8vXG4gICAgICAgIGNvbnN0IHdfcGxheWVyICAgICAgPSBjdXJyZW50X2J0bi5nZXRBdHRyaWJ1dGUoJ2F0dHItcGxheWVyJyk7IC8vIGNhdGNoIHRoZSBwbGF5ZXIgYXR0cmlidXRlIGFuZCBzZXQgaXQgaW4gYSBjb25zdFxuICAgICAgICBjdXJyZW50X2J0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PnsgIC8vIGFkZCBjbGljayBldmVudCB0byBlYWNoIGJ1dHRvblxuICAgICAgICAgICAgd191c2VyZGF0YS5zZXRQbGF5ZXIod19wbGF5ZXIpOyAgICAgLy8gc2V0IHRoZSBuZXcgc2VsZWN0ZWQgcGxheWVyIGluIHRoZSBtYWluIHVzZXIgZGF0YVxuICAgICAgICAgICAgY2hvb3NlUGxheWVyKGN1cnJlbnRfYnRuKTsgIC8vIHJlc3RvcmUgdGhlIG90aGVyIG9wdGlvbnMgc3RhdGVcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9maWxlRXZlbnRzKCl7XG4gICAgY29uc3QgYnRuc19wbGF5ZXIgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tcGxheWVyJyk7ICAgIC8vIGdldCBhbGwgdGhlIHBsYXllciBidXR0b25zIHNlbGVjdG9yXG4gICAgY29uc3Qgbmlja25hbWVfaW5wdXQgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmlja25hbWVJbnB1dCcpOyAgICAgICAgIC8vIGdldCB0aGUgbmlja25hbWUgdGV4dCBpbnB1dCBcbiAgICBuaWNrbmFtZV9pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgbmlja25hbWVfaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHt9KTsgLy8gUmVtb3ZlIExpc3RlbmVycyBmcm9tICB0aGUgbmlja25hbWUgaW5wdXRcbiAgICBmb3IgKGxldCBidG5wbHlyID0gMDsgYnRucGx5ciA8IGJ0bnNfcGxheWVyLmxlbmd0aDsgYnRucGx5cisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfYnRuID0gYnRuc19wbGF5ZXJbYnRucGx5cl07ICBcbiAgICAgICAgY3VycmVudF9idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e30pOyAgLy8gcmVtb3ZlIGxpc3RlbmVycyBmcm9tIHRoZSBwbGF5ZXIgc2VsZWN0b3IgYnV0dG9uc1xuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gYnRuIFxuICovXG5mdW5jdGlvbiBjaG9vc2VQbGF5ZXIoYnRuPW51bGwpeyAvLyBVSSBpbnRlcmZhY2UgYmVoYXZpb3JcbiAgICBjb25zdCBidG5zX3BsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1wbGF5ZXInKTsgLy8gZ2V0IGFsbCB0aGUgcGxheWVyIGJ1dHRvbnMgc2VsZWN0b3IgXG4gICAgZm9yIChsZXQgYnRucGx5ciA9IDA7IGJ0bnBseXIgPCBidG5zX3BsYXllci5sZW5ndGg7IGJ0bnBseXIrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50X2J0biA9IGJ0bnNfcGxheWVyW2J0bnBseXJdO1xuICAgICAgICBjdXJyZW50X2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7IC8vIFJlbW92ZSBhbnkgc2VsZWN0ZWQgY2xhc3MgYWRkZWRcbiAgICB9XG4gICAgaWYoIGJ0biApXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7IC8vIGlmIHBsYXllciBzZWxlY3RlZCBieSB1c2VyIGFkZCBzZWxlY3RlZCBjbGFzc1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiAgY2xlYXJQcm9maWxlKHdfdXNlcmRhdGEpeyAvLyBSZXNldCB1c2VyIHByb2ZpbGVcbiAgICB3X3VzZXJkYXRhLnNldE5pY2tOYW1lKCcnKTsgLy8gZW1wdHkgbmlja25hbWUgdXNlciBuaWNrbmFtZVxuICAgIHdfdXNlcmRhdGEuc2V0UGxheWVyKCcnKTsgLy8gZW1wdHkgcGxheWVyIGNob29zZSBieSB0aGUgdXNlclxufSIsImltcG9ydCBBbGVydE1lc3NhZ2UgZnJvbSAnLi4vY2xhc3Nlcy9BbGVydG1lc3NhZ2UnO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjdXJyZW50VmlldyBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBHYW1lTWFuYWdlcihjdXJyZW50VmlldyA9IDAsIHdfdXNyZGF0YSwgY2FsbGJhY2spe1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RlcC1jb250Jyk7IC8vIGdldCBTZWN0aW9uc1xuICAgIGZvciAobGV0IHNlY3QgPSAwOyBzZWN0IDwgc2VjdGlvbnMubGVuZ3RoOyBzZWN0KyspIHtcbiAgICAgICAgaWYoIHZhbGlkYXRlU3RlcCggd191c3JkYXRhLCBjdXJyZW50VmlldyApICl7IC8vIFZhbGlkYXRlIFNlY3Rpb24gcnVsZXNcbiAgICAgICAgICAgIGlmKHNlY3QgPT09IGN1cnJlbnRWaWV3KSAvLyBDb21wYXJlIHdpdGggcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy8gU2hvdyBTZWN0aW9uXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbc2VjdF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvLyBIaWRlIFNlY3Rpb25cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZih2YWxpZGF0ZVN0ZXAoIHdfdXNyZGF0YSwgY3VycmVudFZpZXcgKSl7XG4gICAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJlbnRWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ0bkNob3NlU2VjdGlvbih3X3VzcmRhdGEsIGNhbGxiYWNrKXtcbiAgICBsZXQgYnRuU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JudF9fc2VjdGlvbicpOyAvLyBHZXQgYnV0dG9uc1xuICAgIGZvciAobGV0IGJ0biA9IDA7IGJ0biA8IGJ0blNlY3Rpb24ubGVuZ3RoOyBidG4rKykgeyAvLyBMb29wIGVhY2ggb25lXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfX2J0biA9IGJ0blNlY3Rpb25bYnRuXTtcbiAgICAgICAgbGV0IHN0ZXAgPSBjdXJyZW50X19idG4uZ2V0QXR0cmlidXRlKFwiYXR0ci1zZWN0aW9uXCIpOyBcbiAgICAgICAgY3VycmVudF9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RlcEdhbWVNYW5hZ2VyKHBhcnNlSW50KHN0ZXApLCB3X3VzcmRhdGEsIGNhbGxiYWNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSB3X3VzcmRhdGEgXG4gKiBAcGFyYW0geyp9IHN0ZXAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVTdGVwKHdfdXNyZGF0YSwgc3RlcCl7IC8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHNlY3Rpb25cbiAgICBsZXQgYWxlcnQgPSBuZXcgQWxlcnRNZXNzYWdlKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHN0ZXApIHtcbiAgICAgICAgY2FzZSAwOiAvLyBTZWN0aW9uIDAgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6IC8vIFNlY3Rpb24gMSBub3QgcmVxdWlyZSB2YWxpZGF0aW9uXG4gICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyBTZWN0aW9uIHJlcXVpcmUgdmFsaWRhdGlvbiAyIHZhbGlkYXRpb25zLCB0aGUgbmlja25hbWUgYW5kIHRoZVxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB3X3VzcmRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHdfdXNyZGF0YS5nZXRQbGF5ZXIoKTtcbiAgICAgICAgICAgIGlmKG5pY2tOYW1lICYmIHBsYXllcilcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnRGViZXMgc2VsZWNjaW9uYXIgYWwgbWVub3MgdW4gcGVyZmlsIGUgaW5ncmVzYXIgdW4gbmlja25hbWUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLyBTZWN0aW9uIDMgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1haW5Mb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ29fYmJ2YV9ibGFuY28uc3ZnJztcbmltcG9ydCBNYWluQmFja0dyb3VuZCBmcm9tICcuL2ltYWdlcy96b21iaWUtYmFja2dyb3VuZC0wMi5qcGcnO1xuaW1wb3J0IFBsYXlDb25zdWx0YW50IGZyb20gJy4vaW1hZ2VzL1x1MDAxMFBsYXllcl9Db25zdWx0YW50XHUwMDEwLmpwZyc7XG5pbXBvcnQgUGxheW1hbmFnZXIgZnJvbSAnLi9pbWFnZXMvXHUwMDEwUGxheWVyX01hbmFnZXIuanBnJztcbmltcG9ydCBQbGF5VGVjaCBmcm9tICcuL2ltYWdlcy9cdTAwMTBQbGF5ZXJfVGVjaENyZWF0aXZlXHUwMDEwLmpwZyc7XG5pbXBvcnQgZ2V0R2FtZUFzc2V0cyBmcm9tICcuL2pzL21vZHVsZXMvaGVyb19pbWFnZXMnO1xuaW1wb3J0IHtzdGVwR2FtZU1hbmFnZXIsIGJ0bkNob3NlU2VjdGlvbn0gZnJvbSAnLi9qcy9tb2R1bGVzL3N0ZXBHYW1lJztcbmltcG9ydCBVc2VyRGF0YSBmcm9tICcuL2pzL2NsYXNzZXMvVXNlckRhdGFHYW1lJztcbmltcG9ydCB7IGluaXRQcm9maWxlRXZlbnRzLCByZW1vdmVQcm9maWxlRXZlbnRzLCBjbGVhclByb2ZpbGUgfSBmcm9tICcuL2pzL21vZHVsZXMvcHJvZmlsZSc7XG5pbXBvcnQgQ2FudmFzR2FtZSBmcm9tICcuL2pzL2NsYXNzZXMvQ2FudmFzR2FtZSdcblxuXG5mdW5jdGlvbiBpbml0R2FtZSgpe1xuICAgIGxldCB1c2VyRGF0YSA9IG5ldyBVc2VyRGF0YSgpO1xuICAgIGNvbnN0IGdhbWVBc3NldHMgPSBnZXRHYW1lQXNzZXRzKCk7XG4gICAgY29uc3QgY2FudmFzR2FtZSA9IG5ldyBDYW52YXNHYW1lKCBnYW1lQXNzZXRzLCB0cmlnZ2VyU2VjdGlvbiApO1xuICAgIGJ0bkNob3NlU2VjdGlvbih1c2VyRGF0YSwgdHJpZ2dlclNlY3Rpb24pOyAvLyBhZGQgQ2hvc2Ugc2VjdGlvbiBFdmVudCB0byBidXR0b25zXG4gICAgc3RlcEdhbWVNYW5hZ2VyKDAsIHVzZXJEYXRhLCB0cmlnZ2VyU2VjdGlvbik7IC8vIGluaXQgdGhlIGdhbWUgd2l0aCB0aGUgZmlyc3Qgdmlld1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlclNlY3Rpb24od19zZWN0KXtcbiAgICAgICAgcmVtb3ZlUHJvZmlsZUV2ZW50cygpO1xuICAgICAgICBzd2l0Y2ggKHdfc2VjdCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNsZWFyUHJvZmlsZSggdXNlckRhdGEgKTsgLy8gY2xlYXIgdGhlIGN1cnJlbnQgcHJvZmlsZSB0byBhZGQgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgaW5pdFByb2ZpbGVFdmVudHMoIHVzZXJEYXRhICk7IC8vIGluaXQgdGhlIHByb2ZpbGUgYm90dG9ucyBldmVudCB0byBzZWxlY3QgdGhlIG5ldyBvbmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYW52YXNHYW1lLnN0YXJ0Q2FudmFzR2FtZSh1c2VyRGF0YSk7IC8vIHN0YXJ0IHRoZSBjYW52YXMgZ2FtZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdE5pY2tuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1uaWNrbmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdExldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1sZXZlbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1zY29yZScpO1xuICAgICAgICAgICAgICAgIHJlc3VsdE5pY2tuYW1lLmlubmVySFRNTCA9IHRoaXMudXNlckRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgICAgICAgICByZXN1bHRMZXZlbC5pbm5lckhUTUwgPSB0aGlzLnVzZXJEYXRhLmdldExldmVsKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0U2NvcmUuaW5uZXJIVE1MID0gdGhpcy51c2VyRGF0YS5nZXRTY29yZSgpO1xuICAgICAgICAgICAgICAgIHN0ZXBHYW1lTWFuYWdlcigzLCB1c2VyRGF0YSwgbnVsbCk7IC8vIEVuZCBzZWN0aW9uIGFuZCBzaG93IHRoZSBoaXN0b3J5IGxpc3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKGZ1bmN0aW9uKCl7XG4gICAgaW5pdEdhbWUoKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==