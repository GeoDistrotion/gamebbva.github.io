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

  if (callback) {
    callback(currentView);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0FsZXJ0bWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9jbGFzc2VzL0NhbnZhc0dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvY2xhc3Nlcy9Vc2VyRGF0YUdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9oZXJvX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9qcy9tb2R1bGVzL3Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvLi9zcmMvanMvbW9kdWxlcy9zdGVwR2FtZS5qcyIsIndlYnBhY2s6Ly9nYW1lYmJ2YS8uL3NyYy9pbmRleC5zY3NzP2E1ZGUiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWJidmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lYmJ2YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWViYnZhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhbWViYnZhLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFsZXJ0TWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVBbGVydCIsIm1zQ250IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInJlbW92ZUFsZXJ0IiwiYWxlcnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJCdWxsZXQiLCJ4IiwieSIsImRpciIsImNvbnRleHQiLCJyYWRpdXMiLCJkaXJlY3Rpb24iLCJjIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsIkNhbnZhc0dhbWUiLCJhc3NldHMiLCJjYWxsYmFjayIsImdhbWVDb250IiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImhlcm8iLCJzY29yZSIsImxldmVsIiwiZmxvb3IiLCJjZW50ZXIiLCJjb250V2lkdGgiLCJjb250SGVpZ2h0IiwiYW5pbWF0ZSIsInpvbWJpZXMiLCJ6b21iaWVzU3BlZWQiLCJ6RGlyIiwiem9tYmllbG9vcCIsImJ1bGxldHMiLCJBbGVydHMiLCJ1c2VyRGF0YSIsIm5pY2tOYW1lIiwiZ2V0Tmlja05hbWUiLCJwbGF5ZXJQcm9maWxlIiwiZ2V0UGxheWVyIiwiZ2V0Q29udGV4dCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsIlBsYXllciIsImhlcm9fcmlnaHQiLCJoZXJvX2xlZnQiLCJzZXRQb3NYIiwic2V0UG9zWSIsIl9sZXZsZVpvbWJpZXNNYW5hZ2VyIiwiX2FkZEhlcm9Db250cm9scyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90dXJuT25FbmdpbmUiLCJzZXRNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoUG9zWCIsImdldFBvc1giLCJoRGlyIiwiZ2V0RGlyZWN0aW9uIiwiYnVsbGV0WE9yaWdpbiIsImtleSIsInNldERpcmVjdGlvbiIsInN0YXJ0UnVuIiwibmV3QnVsbGV0IiwicHVzaCIsInN0b3BSdW4iLCJsZXZlbFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJuZXdab21iaWUiLCJ6b21iaWVfcmlnaHQiLCJ6b21iaWVfbGVmdCIsImhlcm9DdXJyZW50TGlmZSIsImdldFBvaW50c09mTGl2ZSIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImZpbGxSZWN0IiwiaGVyb1Bvc1giLCJkcmF3IiwiZm9yRWFjaCIsInpvbWJpZSIsInoiLCJ6UG9zWCIsImN1cnJlbnRab21iaWVEaXIiLCJzcGxpY2UiLCJfZW5kR2FtZSIsImxpZmUiLCJzZXRQb2ludHNPZkxpdmUiLCJidWxsZXQiLCJiIiwiYnVsbGV0UG9zWCIsImJQb3NYIiwiY3VycmVudEJ1bGxldERpciIsImNvbnNvbGUiLCJsb2ciLCJfc3RvcENhbnZhc0dhbWUiLCJzZXRTY29yZSIsInNldExldmVsIiwidHJpZ2dlckVuZFNlY3Rpb24iLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFySW50ZXJ2YWwiLCJpbWdzX3JpZ2h0IiwiaW1nc19sZWZ0Iiwid19wb2ludHNvZmxpZmUiLCJ3X2lkIiwid19kaXIiLCJwb2ludHNPZkxpdmUiLCJpZCIsImFzc2V0c19yaWdodCIsImFzc2V0c19sZWZ0IiwiaW1hZ2VJbmRleCIsIm1heEltZ3MiLCJ3X3BvbCIsImRyYXdJbWFnZSIsIlVzZXJEYXRhIiwicGxheWVyIiwidXNyX25hbWUiLCJ1c3JfcGxheWVyIiwiZ2V0R2FtZUFzc2V0cyIsInJpZ2h0IiwiaGVyb19yaWdodF8wIiwiaGVyb19yaWdodF8xIiwiaGVyb19yaWdodF8yIiwiaGVyb19yaWdodF8zIiwiaGVyb19yaWdodF80IiwiaGVyb19yaWdodF81IiwiaGVyb19yaWdodF82IiwiaGVyb19yaWdodF83IiwiaGVyb19yaWdodF84IiwiaGVyb19yaWdodF85IiwiaGVyb19yaWdodF8xMCIsImhlcm9fcmlnaHRfMTEiLCJoZXJvX3JpZ2h0XzEyIiwiaGVyb19yaWdodF8xMyIsImhlcm9fcmlnaHRfMTQiLCJoZXJvX3JpZ2h0XzE1IiwibGVmdCIsImhlcm9fbGVmdF8wIiwiaGVyb19sZWZ0XzEiLCJoZXJvX2xlZnRfMiIsImhlcm9fbGVmdF8zIiwiaGVyb19sZWZ0XzQiLCJoZXJvX2xlZnRfNSIsImhlcm9fbGVmdF82IiwiaGVyb19sZWZ0XzciLCJoZXJvX2xlZnRfOCIsImhlcm9fbGVmdF85IiwiaGVyb19sZWZ0XzEwIiwiaGVyb19sZWZ0XzExIiwiaGVyb19sZWZ0XzEyIiwiaGVyb19sZWZ0XzEzIiwiaGVyb19sZWZ0XzE0IiwiaGVyb19sZWZ0XzE1Iiwiem9tYmllX3JpZ2h0XzEiLCJ6b21iaWVfcmlnaHRfMiIsInpvbWJpZV9yaWdodF8zIiwiem9tYmllX3JpZ2h0XzQiLCJ6b21iaWVfcmlnaHRfNSIsInpvbWJpZV9yaWdodF82Iiwiem9tYmllX3JpZ2h0XzciLCJ6b21iaWVfcmlnaHRfOCIsInpvbWJpZV9yaWdodF85Iiwiem9tYmllX3JpZ2h0XzEwIiwiem9tYmllX2xlZnRfMSIsInpvbWJpZV9sZWZ0XzIiLCJ6b21iaWVfbGVmdF8zIiwiem9tYmllX2xlZnRfNCIsInpvbWJpZV9sZWZ0XzUiLCJ6b21iaWVfbGVmdF82Iiwiem9tYmllX2xlZnRfNyIsInpvbWJpZV9sZWZ0XzgiLCJ6b21iaWVfbGVmdF85Iiwiem9tYmllX2xlZnRfMTAiLCJzdG9yYWdlQXNzZXRzIiwiYXNzZXQiLCJuZXdJbWciLCJJbWFnZSIsInNyYyIsImluaXRQcm9maWxlRXZlbnRzIiwid191c2VyZGF0YSIsImJ0bnNfcGxheWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5pY2tuYW1lX2lucHV0IiwiaW5wdXRfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRfdmFsdWUiLCJyZXBsYWNlIiwic2V0Tmlja05hbWUiLCJidG5wbHlyIiwiY3VycmVudF9idG4iLCJ3X3BsYXllciIsImdldEF0dHJpYnV0ZSIsInNldFBsYXllciIsImNob29zZVBsYXllciIsInJlbW92ZVByb2ZpbGVFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xlYXJQcm9maWxlIiwic3RlcEdhbWVNYW5hZ2VyIiwiY3VycmVudFZpZXciLCJ3X3VzcmRhdGEiLCJzZWN0aW9ucyIsInNlY3QiLCJ2YWxpZGF0ZVN0ZXAiLCJzdHlsZSIsImRpc3BsYXkiLCJidG5DaG9zZVNlY3Rpb24iLCJidG5TZWN0aW9uIiwiY3VycmVudF9fYnRuIiwic3RlcCIsInBhcnNlSW50IiwiYWxlcnQiLCJ2YWxpZCIsImluaXRHYW1lIiwiZ2FtZUFzc2V0cyIsImNhbnZhc0dhbWUiLCJ0cmlnZ2VyU2VjdGlvbiIsIndfc2VjdCIsInN0YXJ0Q2FudmFzR2FtZSIsInJlc3VsdE5pY2tuYW1lIiwicmVzdWx0TGV2ZWwiLCJyZXN1bHRTY29yZSIsImdldExldmVsIiwiZ2V0U2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxZO0FBQ2pCLDBCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDSDs7OztXQUVELG9CQUFXQSxPQUFYLEVBQW1CO0FBQ2YsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0MsV0FBTDtBQUNIOzs7V0FFRCx1QkFBYTtBQUNULFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFaO0FBQ0EsVUFBSUosT0FBTyw4Q0FBcUMsS0FBS0EsT0FBMUMsZUFBWDtBQUNBRSxXQUFLLENBQUNHLFNBQU4sR0FBa0JMLE9BQWxCO0FBQ0EsV0FBS00sV0FBTDtBQUNIOzs7V0FFRCx1QkFBYTtBQUNULFVBQUlDLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLGlCQUF2QixDQUFkO0FBQ0EsVUFBSUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBSTtBQUN2QkgsZUFBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZjtBQUNBQyxvQkFBWSxDQUFDSCxLQUFELENBQVo7QUFDSCxPQUhxQixFQUduQixJQUhtQixDQUF0QjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZCZ0JJLE07QUFDakIsa0JB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Q3RDOztBQUNKLFdBQUssQ0FBTDtBQUNJLFlBQU1pTSxjQUFjLEdBQUc3TyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0FBQ0EsWUFBTXlPLFdBQVcsR0FBRzlPLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLFlBQU0wTyxXQUFXLEdBQUcvTyxRQUFRLENBQUNLLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQXdPLHNCQUFjLENBQUMzTyxTQUFmLEdBQTJCLEtBQUswQyxRQUFMLENBQWNFLFdBQWQsRUFBM0I7QUFDQWdNLG1CQUFXLENBQUM1TyxTQUFaLEdBQXdCLEtBQUswQyxRQUFMLENBQWNvTSxRQUFkLEVBQXhCO0FBQ0FELG1CQUFXLENBQUM3TyxTQUFaLEdBQXdCLEtBQUswQyxRQUFMLENBQWNxTSxRQUFkLEVBQXhCO0FBQ0F6Qiw2RUFBZSxDQUFDLENBQUQsRUFBSTVLLFFBQUosRUFBYyxJQUFkLENBQWYsQ0FQSixDQU93Qzs7QUFDcEM7QUFoQlI7QUFrQkg7QUFDSjs7QUFFRCxDQUFDLFlBQVU7QUFDUDJMLFVBQVE7QUFDWCxDQUZELEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydE1lc3NhZ2V7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgfVxuXG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5jcmVhdGVBbGVydCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFsZXJ0KCl7XG4gICAgICAgIGxldCBtc0NudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBbGVydHNDb250YWluZXInKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgPGRpdiBjbGFzcz1cIm1lc3NhZ2VfX2FsZXJ0XCI+PHA+JHt0aGlzLm1lc3NhZ2V9PC9wPjwvZGl2PmBcbiAgICAgICAgbXNDbnQuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGVydCgpO1xuICAgIH1cblxuICAgIHJlbW92ZUFsZXJ0KCl7XG4gICAgICAgIGxldCBhbGVydEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlX19hbGVydFwiKTsgXG4gICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGFsZXJ0RWwucmVtb3ZlKDApXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0e1xuICAgIGNvbnN0cnVjdG9yKCB4LCB5LCBkaXIgPSAncmlnaHQnLCBjb250ZXh0KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpclxuICAgICAgICB0aGlzLmMgID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKiogR2V0dGVycyAmJiBTZXR0ZXJzICovXG4gICAgc2V0UG9zWCh4KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICB9IFxuXG4gICAgZ2V0UG9zWCh4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICB0aGlzLmMuZmlsbCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWxlcnRNZXNzYWdlIGZyb20gJy4uL2NsYXNzZXMvQWxlcnRtZXNzYWdlJztcbmltcG9ydCBCdWxsZXQgZnJvbSAnLi9CdWxsZXQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0dhbWV7XG4gICAgY29uc3RydWN0b3IoIGFzc2V0cywgY2FsbGJhY2sgKXtcbiAgICAgICAgdGhpcy5nYW1lQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNJbml0QkJWQUdhbWUnKTsgLy8gR2V0IHRoZSBtYWluIGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyAvLyBJbml0IGVsZW1lbnQgY2FudmFzXG4gICAgICAgIHRoaXMuYXNzZXRzID0gYXNzZXRzOyAgLy8gR2V0IHRoZSBnYW1lIGFzc2V0cyBwcmVsb2FkZWRcbiAgICAgICAgdGhpcy5jb250ZXh0OyAvLyAyRCBDT05URVhUXG4gICAgICAgIHRoaXMuaGVybzsgLy8gSGVybyBjb250XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmxldmVsID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmxvb3I7IC8vIEZsb29yIHBhcmFtZXRlclxuICAgICAgICB0aGlzLmNlbnRlcjsgLy8gQ2VudGVyIHBhcmFtXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRXaWR0aCA9IDA7IC8vIE1haW4gY29udGFpbmVyIHdpZHRoXG4gICAgICAgIHRoaXMuY29udEhlaWdodCA9IDA7IC8vIE1haW4gY29udGFpbmVyIGhlaWdodFxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZTsgLy8gU2V0IHRoZSB3aW5kb3cgYW5pbWF0aW9uIGZyYW1lIGlkXG4gICAgICAgIFxuICAgICAgICB0aGlzLnpvbWJpZXMgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHpvbWJpZXMgb2JqZWN0c1xuICAgICAgICB0aGlzLnpvbWJpZXNTcGVlZCA9IDE7IC8vIEF0dGFjayBzcGVlZFxuICAgICAgICB0aGlzLnpEaXIgPSBcInJpZ2h0XCI7IC8vIFNldCB0aGUgY3VycmVudCB6b21iaWUgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuem9tYmllbG9vcDsgLy8gU2V0IGFuIGludGVydmFsIGlkXG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIHRoZSBidWxsZXRzIG9iamVjdHNcbiAgICAgICAgdGhpcy5BbGVydHMgPSBuZXcgQWxlcnRNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy51c2VyRGF0YTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnRDYW52YXNHYW1lKHVzZXJEYXRhKXsgLy8gVHJpZ2dlciB0aGUgc3RhcnQgZ2FtZSAgJiYgc2V0IHRoZSBnbG9iYWwgY29uZlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgICAgIHRoaXMuem9tYmllcyA9IFtdOyAvLyBSZXN0IFBhcmFtc1xuICAgICAgICB0aGlzLnpvbWJpZXNTcGVlZCA9IDE7IC8vIFJlc3QgUGFyYW1zXG4gICAgICAgIHRoaXMuekRpciA9IFwicmlnaHRcIjsgLy8gUmVzdCBQYXJhbXNcblxuICAgICAgICB0aGlzLnVzZXJEYXRhID0gdXNlckRhdGE7XG4gICAgICAgIHRoaXMubmlja05hbWUgPSB0aGlzLnVzZXJEYXRhLmdldE5pY2tOYW1lKCk7XG4gICAgICAgIHRoaXMucGxheWVyUHJvZmlsZSA9IHRoaXMudXNlckRhdGEuZ2V0UGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgLy8gSW5pdCB0aGUgY290ZXh0XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRXaWR0aCA9IHRoaXMuZ2FtZUNvbnQub2Zmc2V0V2lkdGg7IC8vIHNldCB0aGUgbWFpYiBjb250IHdpZHRoXG4gICAgICAgIHRoaXMuY29udEhlaWdodCA9IHRoaXMuZ2FtZUNvbnQub2Zmc2V0SGVpZ2h0OyAvLyBzZXQgdGhlIG1haW4gY29udCBoZWlnaHRcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jb250V2lkdGg7IC8vIHNldCB0aGUgY2FudmFzIHdpZHRoXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY29udEhlaWdodDsgLy8gc2V0IHRoZSBjYW52YXMgaGVpZ2h0XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5jb250SGVpZ2h0IC0gMTUwOyAvLyBzZXQgdGhlIGdhbWUgZmxvb3IgXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy5jb250V2lkdGggLyAyOyAvLyBzZXQgdGhlIGNlbnRlciBnYW1lXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVDb250LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTsgLy8gaW5qZWN0IHRoZSBjYW52YXMgaW4gdGhlIG1haW4gY29udGFpbmVyXG4gICAgICAgIFxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgUGxheWVyKHRoaXMuYXNzZXRzLmhlcm9fcmlnaHQsIHRoaXMuYXNzZXRzLmhlcm9fbGVmdCwgMywgdGhpcy5jb250ZXh0LCAnSGVybycpOyAvLyBDcmVhdGUgdGhlIGhlcm8gb2JqZWN0XG4gICAgICAgIHRoaXMuaGVyby5zZXRQb3NYKCB0aGlzLmNlbnRlciApOyAvLyBzZXQgdGhlIGluaXQgaGVybyB4IHBvc1xuICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWSggdGhpcy5mbG9vciAtIDE0MCApOyAvLyBzZXQgdGhlIGluaXQgaGVybyB5IHBvcyBcblxuICAgICAgICB0aGlzLl9sZXZsZVpvbWJpZXNNYW5hZ2VyKCk7IC8vIHN0YXJ0IHRoZSB6b21iaWUgbWFuYWdlciBjcmVhdG9yXG4gICAgICAgIHRoaXMuX2FkZEhlcm9Db250cm9scygpOyAvLyBhZGQga2V5Ym9hcmQgZXZlbnRzIHRvIHRoZSBoZXJvIG9iamVjdFxuICAgICAgICB0aGlzLmFuaW1hdGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX3R1cm5PbkVuZ2luZSgpICk7IC8vIHJlY3Vyc2l2ZSBpdGVyYXRpb24gZnVuY3Rpb25cbiAgICAgICAgdGhpcy5BbGVydHMuc2V0TWVzc2FnZSgnwqFPaGggbm8hLiBVbmEgb3JkYSBkZSB0YXNrIHpvbWJpZXMgZW52aWFkb3MgcG9yIGVsIGNsaWVudGUuLi4gRGVmaWVuZGV0ZS4nKTtcbiAgICB9XG5cbiAgICBfYWRkSGVyb0NvbnRyb2xzKCl7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PnsgLy8gYWRkaW5nIHRoZSB3aW5kb3cga2V5Ym9hcmQgZXZlbnRcbiAgICAgICAgICAgIGNvbnN0IGhQb3NYID0gdGhpcy5oZXJvLmdldFBvc1goKTsgLy8gZ2V0IHRoZSBoZXJvIGN1cnJlbnQgeCBwb3NcbiAgICAgICAgICAgIGNvbnN0IGhEaXIgPSB0aGlzLmhlcm8uZ2V0RGlyZWN0aW9uKCk7IC8vIGdldCB0aGUgaGVybyBjdXJyZW50IGRpcmVjdGlvblxuICAgICAgICAgICAgY29uc3QgYnVsbGV0WE9yaWdpbiA9IGhEaXI9PSdyaWdodCc/IGhQb3NYICsgODA6IGhQb3NYICsgNDA7ICAvLyBzZXQgdGhlIG9yaWdpbiBvZiB0aGUgbmV3IGJ1bGxldDtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6IC8vIGNhdGNoIHRoZSBBcnJvdyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXREaXJlY3Rpb24oJ2xlZnQnKTsgLy8gc2V0IHRoZSBoZXJvIGRpcmVjdGlvbiB0byBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zdGFydFJ1bigpOyAvLyBpbml0IHRoZSBydW4gYW5pbWF0aW9uIHRvIHRoZSBkaXJlY3Rpb24gYmVmb3JlIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYoaFBvc1ggPiAwKXsgLy8gbGltaXQgdGhlIGVudmlyb25tZW50IHRvIGxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXRQb3NYKGhQb3NYIC0gMTApO1xuICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOiAvLyBjYXRjaCB0aGUgYXJyb3cgcmlnaHQgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zZXREaXJlY3Rpb24oJ3JpZ2h0Jyk7IC8vIHNldCB0aGUgaGVybyBkaXJlY3Rpb24gdG8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnN0YXJ0UnVuKCk7IC8vIGluaXQgdGhlIHJ1biBhbmltYXRpb24gdG8gdGhlIGRpcmVjdGlvbiBiZWZvcmUgY29uZmlndXJlZFxuICAgICAgICAgICAgICAgICAgICBpZihoUG9zWCA8IHRoaXMuY29udFdpZHRoIC0gMTAwKXsgLy8gbGltaXQgdGhlIGVudmlyb25tZW50IHRvIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0UG9zWChoUG9zWCArIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIgXCI6IC8vIGNhdGNoIHRoZSBzcGFjZWJhclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdCdWxsZXQgPSBuZXcgQnVsbGV0KGJ1bGxldFhPcmlnaW4sIHRoaXMuY29udEhlaWdodCAtIDE4MCwgaERpcix0aGlzLmNvbnRleHQpOyAvLyBjcmVhdGUgdGhlIG5ldyBidWxsZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnB1c2gobmV3QnVsbGV0KTsgLy8gYWRkIHRoZSBuZXcgYnVsbGV0IHRvIHRoZSBidWxsZXRzIGFycmF5XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7IC8vIGNhdGNoIHRoZSBrZXkgdXAgZXZlbnRcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc3RvcFJ1bigpOyAvLyBzdG9wIHRoZSBydW4gbGVmdCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zdG9wUnVuKCk7IC8vIHN0b3AgdGhlIHJ1biByaWdodCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfbGV2bGVab21iaWVzTWFuYWdlcigpe1xuICAgICAgICBsZXQgbGV2ZWxUaW1lciA9IDA7IC8vIExldmVsIHRpbWVyLCBjb3VudGVyIGluIGNoYXJnZSB0byBhZGQgMSBsZXZlbCBlYWNoIDEwIHNlY29uZHNcbiAgICAgICAgdGhpcy56b21iaWVsb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4geyAvLyBzdGFydCB0aGUgdGltZSBpbnRlcnZhbCBhbmQgYWRkIGl0IHRvIHRoZSBpZFxuICAgICAgICAgICAgaWYobGV2ZWxUaW1lciA+IDEwKXtcbiAgICAgICAgICAgICAgICB0aGlzLkFsZXJ0cy5zZXRNZXNzYWdlKCdIYXMgc3ViaWRvIGRlIG5pdmVsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbCArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllc1NwZWVkICs9IDE7XG4gICAgICAgICAgICAgICAgbGV2ZWxUaW1lciA9IDA7IC8vIFJlc2V0IGxldmVsIHRpbWVyXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnpvbWJpZXMubGVuZ3RoIDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Wm9tYmllID0gbmV3IFBsYXllcih0aGlzLmFzc2V0cy56b21iaWVfcmlnaHQsdGhpcy5hc3NldHMuem9tYmllX2xlZnQsIDEwLCB0aGlzLmNvbnRleHQsIFwiem9tYmllXCIsIHRoaXMuekRpcik7IC8vIGNyZWF0ZSB6b21iaWUgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG5ld1pvbWJpZS5zZXRQb3NZKCB0aGlzLmZsb29yIC0gMTQwICk7IC8vIHNldCB0aGUgem9tYmlyIFkgcG9zIG9yaWdpblxuICAgICAgICAgICAgICAgICAgICBuZXdab21iaWUuc2V0UG9zWCggKHRoaXMuekRpciA9PT0gXCJyaWdodFwiKT8gLTUwIDogKHRoaXMuY29udFdpZHRoICsgNTApICk7IC8vIHNldCB0aGUgem9tYmlyIFggcG9zIG9yaWdpblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpEaXIgPSAodGhpcy56RGlyID09PSBcInJpZ2h0XCIpPyBcImxlZnRcIiA6IFwicmlnaHRcIjsgLy8gc2V0IHRoZSBab21iaWUgbW92ZSBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b21iaWVzLnB1c2gobmV3Wm9tYmllKTsgLy8gYWRkIHRoZSBuZXcgem9tYmllIHRvIHRoZSBtYWluIHpvbWJpZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV2ZWxUaW1lcisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBfdHVybk9uRW5naW5lKCl7XG4gICAgICAgIGNvbnN0IGhlcm9DdXJyZW50TGlmZSA9IHRoaXMuaGVyby5nZXRQb2ludHNPZkxpdmUoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLDAsdGhpcy5jb250V2lkdGgsIHRoaXMuY29udFdpZHRoKTsgLy8gY2xlYW4gdGhlIHN0YWdlIGVhY2ggaXRlcmF0aW9uXG4gICAgICAgIC8qKiBIZWFkZXIgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjgwcHggQmVudG9uU2Fuc0JCVkEtQm9sZFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KFwiWk9NQklFIFRBU0tcIiwgNDUwLCAxMDApO1xuXG4gICAgICAgIC8qKiBEaXNwbGF5IHVzZXIgZGF0YSAqL1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IFwiMzBweCBCZW50b25TYW5zQkJWQS1Cb29rXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYCR7dGhpcy5wbGF5ZXJQcm9maWxlfTogJHt0aGlzLm5pY2tOYW1lfWAsIDQ1MCwgMTUwKTtcbiAgICAgICAgXG4gICAgICAgIC8qKiBEaXNwbGF5IHNjb3JlICovXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gXCIxOHB4IEJlbnRvblNhbnNCQlZBLUJvb2tcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgTml2ZWw6ICR7dGhpcy5sZXZlbH0sIFNjb3JlOiAke3RoaXMuc2NvcmV9IHB0c2AsIDQ1MCwgMTgwKTtcblxuICAgICAgICAvKiogRmxvb3IgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7IC8vIHNldCB0aGUgZ2FtZSBmbG9vciBjb2xvclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgdGhpcy5mbG9vciwgdGhpcy5jb250V2lkdGgsIDE1MCk7IC8vIGRyYXcgdGhlIGdhbWUgZmxvb3JcblxuICAgICAgICBjb25zdCBoZXJvUG9zWCA9IHRoaXMuaGVyby5nZXRQb3NYKCk7XG4gICAgICAgIHRoaXMuaGVyby5kcmF3KCk7IC8vIGRyYXcgdGhlIGhlcm8gb2JqZWN0IGVhY2ggaXRlcmF0aW9uXG4gICAgICAgIFxuICAgICAgICB0aGlzLnpvbWJpZXMuZm9yRWFjaCgoem9tYmllLCB6KSA9PiB7IC8vIHJlYWQgZWFjaCB6b21iaWUgb2JqZWN0IGZyb20gdGhlIHpvbWJpZSBsaXN0XG4gICAgICAgICAgICB6b21iaWUuZHJhdygpOyAvLyBkcmF3IHRoZSB6b21iaWUgb2JqZWN0IGVhY2ggaXRlcmF0aW9uXG4gICAgICAgICAgICBjb25zdCB6UG9zWCA9IHpvbWJpZS5nZXRQb3NYKCk7IC8vIGdldCB0aGUgY3VycmVudCBYIHBvc1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFpvbWJpZURpciA9IHpvbWJpZS5nZXREaXJlY3Rpb24oKTsgLy8gZ2V0IHRoZSBjdXJyZW50IGRpcmVjdGlvblxuXG4gICAgICAgICAgICBpZiggY3VycmVudFpvbWJpZURpciA9PT0gXCJyaWdodFwiICYmIHpQb3NYIDwgdGhpcy5jb250V2lkdGggKXsgLy8gbGltaXQgdGhlIGFyZWFcbiAgICAgICAgICAgICAgICB6b21iaWUuc2V0UG9zWCh6UG9zWCArIHRoaXMuem9tYmllc1NwZWVkKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50Wm9tYmllRGlyID09PSBcInJpZ2h0XCIgJiYgelBvc1ggPj0gdGhpcy5jb250V2lkdGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllcy5zcGxpY2UoeiwgMSk7IC8vIHJlbW92ZSB0aGUgb2JqZWN0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIHpvbWJpZS5nZXREaXJlY3Rpb24oKSA9PT0gXCJsZWZ0XCIgJiYgelBvc1ggPiAtMTAwKXsgLy8gbGltaXQgdGhlIGFyZWFcbiAgICAgICAgICAgICAgICB6b21iaWUuc2V0UG9zWCh6UG9zWCAtIHRoaXMuem9tYmllc1NwZWVkKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50Wm9tYmllRGlyID09PSBcImxlZnRcIiAmJiB6UG9zWCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnpvbWJpZXMuc3BsaWNlKHosIDEpOy8vIHJlbW92ZSB0aGUgb2JqZWN0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoelBvc1ggPiBoZXJvUG9zWC01MCAmJiB6UG9zWCA8IGhlcm9Qb3NYICsgNjApe1xuICAgICAgICAgICAgICAgIHRoaXMuem9tYmllcy5zcGxpY2UoeiwgMSk7IC8vIFJlbW92ZSB6b21iaWUgd2hlbiBjb2xsaWRlIHdpdGggaGVyb1xuICAgICAgICAgICAgICAgIGlmKGhlcm9DdXJyZW50TGlmZSA8PSAxKXsgLy8gSWYgaGVybyBsaWZlIGlzIDEgb3IgbGVzcyB0aGUgZ2FtZSBlbmRzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZEdhbWUoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BbGVydHMuc2V0TWVzc2FnZSgnwqFSYXBpZG8gZGlzcGFyYSBjb24gYmFycmEgZXNwYWNpYWRvcmEhJyk7IC8vIFRyaWdnZXIgYW4gYWxlcnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBsaWZlID0gaGVyb0N1cnJlbnRMaWZlIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8uc2V0UG9pbnRzT2ZMaXZlKGxpZmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBDb2xsaXRpb24gZGV0ZWN0b3IgKi9cbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5mb3JFYWNoKChidWxsZXQsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWxsZXRQb3NYID0gYnVsbGV0LmdldFBvc1goKTtcbiAgICAgICAgICAgICAgICBpZihidWxsZXRQb3NYID4gelBvc1ggKyA0MCAmJiBidWxsZXRQb3NYIDwgelBvc1ggKyA2MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9tYmllcy5zcGxpY2UoeiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5zcGxpY2UoYiwxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDsgLy8gQWRkaW5nIDEwcHRzIHBlciB6b21iaWUga2lsbGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHpvbWJpZS5zdGFydFJ1bigpOyAvLyBzdGFydCB0aGUgYW5pbWF0aW9uIGRlcGVuZGluZyBvbiB0aGUgem9tYmllIGRpcmVjdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0LCBiKT0+e1xuICAgICAgICAgICAgYnVsbGV0LmRyYXcoKTsgLy8gZHJhdyB0aGUgYnVsbGV0IG9iamVjdCBlYWNoIGl0ZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgYlBvc1ggPSBidWxsZXQuZ2V0UG9zWCgpOyBcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCdWxsZXREaXIgPSBidWxsZXQuZ2V0RGlyZWN0aW9uKCk7XG4gICAgICAgICAgICBpZihjdXJyZW50QnVsbGV0RGlyID09ICdyaWdodCcgJiYgYlBvc1ggPCB0aGlzLmNvbnRXaWR0aCApe1xuICAgICAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NYKCBiUG9zWCArIDMgKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50QnVsbGV0RGlyID09PSBcInJpZ2h0XCIgJiYgYlBvc1ggPj0gdGhpcy5jb250V2lkdGgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5zcGxpY2UoYiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJyZW50QnVsbGV0RGlyID09ICdsZWZ0JyAmJiBiUG9zWCA+IDApe1xuICAgICAgICAgICAgICAgIGJ1bGxldC5zZXRQb3NYKCBiUG9zWCAtIDMgKTsgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKCBjdXJyZW50QnVsbGV0RGlyID09PSBcImxlZnRcIiAmJiBiUG9zWCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHMuc3BsaWNlKGIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvLi4uLicpXG4gICAgICAgIGlmKGhlcm9DdXJyZW50TGlmZSA+IDApe1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl90dXJuT25FbmdpbmUoKSApOyAvLyByZWN1cnNpdmUgaXRlcmF0aW9uIGZ1bmN0aW9uXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLyoqIEhlYWRlciAqL1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjcwcHggQmVudG9uU2Fuc0JCVkEtQm9sZFwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIDQ1MCwgMzAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9lbmRHYW1lKCl7XG4gICAgICAgIHRoaXMuX3N0b3BDYW52YXNHYW1lKCk7XG4gICAgICAgIHRoaXMudXNlckRhdGEuc2V0U2NvcmUodGhpcy5zY29yZSk7XG4gICAgICAgIHRoaXMudXNlckRhdGEuc2V0TGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgIHRoaXMuQWxlcnRzLnNldE1lc3NhZ2UoJ1Vwcywgbm8gaW1wb3J0YS7CoUxvIGhhcyBlY2hvIG11eSBiaWVuIScpO1xuICAgICAgICBsZXQgdHJpZ2dlckVuZFNlY3Rpb24gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0cmlnZ2VyRW5kU2VjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKDMpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgXG4gICAgX3N0b3BDYW52YXNHYW1lKCl7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpOyAvLyBjYW5jZWwgdGhlIGFuaW1hdGlvbiBsb29wIGVuZ2luZVxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuem9tYmllbG9vcCk7IC8vIGNsZWFyIHRoZSB0aW1lIGludGVydmFyIHpvbWJpZSBjcmVhdG9yXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3RvciggXG4gICAgICAgIGltZ3NfcmlnaHQsIC8vIGdldCB0aGUgYXJyYXkgaW1hZ2VzIHByZWxvYWRlZCBmb3IgdGhlIHJpZ2h0IGRpcmVjdGlvblxuICAgICAgICBpbWdzX2xlZnQsICAvLyBnZXQgdGhlIGFycmF5IGltYWdlcyBwcmVsb2FkZWQgZm9yIHRoZSBsZWZ0IGRpcmVjdGlvblxuICAgICAgICB3X3BvaW50c29mbGlmZSA9IDAsIC8vIHNldCB0aGUgcG9pbnRzIG9mIGxpZmVcbiAgICAgICAgY29udGV4dCwgLy8gcGFzcyB0aGUgY29udGV4dCB0byBkcmF3IHRoZSBuZXcgb2JqZWN0IHRvIHRoZSBjYW52YXMgZW52XG4gICAgICAgIHdfaWQsIC8vIHNldCB0aGUgaWQgKG5vdCBpbiB1c2UgYnkgdGhlIG1vbWVudClcbiAgICAgICAgd19kaXIgPSBcInJpZ2h0XCIgLy8gc2V0IHRoZSBvcmlnaW4gZGlyZWN0aW9uXG4gICAgICAgICl7XG4gICAgICAgIHRoaXMueCA9IDA7IC8vIG9yaWdpbiB4IHBvc1xuICAgICAgICB0aGlzLnkgPSAwOyAvLyBvcmlnaW4geSBwb3NcbiAgICAgICAgdGhpcy5wb2ludHNPZkxpdmUgPSB3X3BvaW50c29mbGlmZTtcbiAgICAgICAgdGhpcy5pZCA9IHdfaWQ7XG4gICAgICAgIHRoaXMuYyA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuYXNzZXRzX3JpZ2h0ID0gaW1nc19yaWdodDtcbiAgICAgICAgdGhpcy5hc3NldHNfbGVmdCA9IGltZ3NfbGVmdDtcbiAgICAgICAgdGhpcy5pbWFnZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB3X2RpcjtcbiAgICAgICAgdGhpcy5tYXhJbWdzID0gKHRoaXMuZGlyZWN0aW9uKT8gKHRoaXMuYXNzZXRzX3JpZ2h0Lmxlbmd0aC0xKToodGhpcy5hc3NldHNfbGVmdC5sZW5ndGgtMSk7IC8vIGNyZWF0ZSBhIGxpbWl0IHRvIGxvb3BcbiAgICB9XG4gXG5cbiAgICAvKiogR2V0dGVycyAmJiBTZXR0ZXJzICovXG4gICAgc2V0UG9zWCh4KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICB9XG4gICAgc2V0UG9zWSh5KXtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBnZXRQb3NYKHgpe1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH1cbiAgICBnZXRQb3NZKHkpe1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbihkaXJlY3Rpb24pe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgZ2V0RGlyZWN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBzZXRQb2ludHNPZkxpdmUod19wb2wpe1xuICAgICAgICB0aGlzLnBvaW50c09mTGl2ZSA9IHdfcG9sO1xuICAgIH1cbiAgICBnZXRQb2ludHNPZkxpdmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzT2ZMaXZlO1xuICAgIH1cblxuICAgIHN0YXJ0UnVuKCl7XG4gICAgICAgIGlmKHRoaXMuaW1hZ2VJbmRleCA8IHRoaXMubWF4SW1ncyl7IC8vIGRpc3BsYXlpbmcgdGhlIG1vdmVtZW50IGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZUluZGV4ICs9IDE7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pbWFnZUluZGV4ID0gMTsgLy8gcmV0dXJuIHRvIHRoZSBmaXJzdCBpbWFnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcFJ1bigpe1xuICAgICAgICB0aGlzLmltYWdlSW5kZXggPSAwOyAvLyByZXR1cm4gdG8gdGhlIGZpcnN0IGltYWdlXG4gICAgfVxuXG4gICAgZHJhdyh4LCB5KXtcbiAgICAgICAgdGhpcy5jLmRyYXdJbWFnZSgoKHRoaXMuZGlyZWN0aW9uID09ICdyaWdodCcpPyB0aGlzLmFzc2V0c19yaWdodFt0aGlzLmltYWdlSW5kZXhdOnRoaXMuYXNzZXRzX2xlZnRbdGhpcy5pbWFnZUluZGV4XSksIHRoaXMueCwgdGhpcy55LCAxMDAsIDE2MCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucGxheWVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH1cblxuICAgIC8qKiBHZXR0ZXJzICYgU2V0dGVycyAqL1xuXG4gICAgc2V0Tmlja05hbWUodXNyX25hbWUpIHtcbiAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHVzcl9uYW1lO1xuICAgIH1cbiAgICBnZXROaWNrTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmlja05hbWU7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyKHVzcl9wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB1c3JfcGxheWVyO1xuICAgIH1cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9XG5cbiAgICBzZXRTY29yZShzY29yZSl7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICB9XG4gICAgZ2V0U2NvcmUoc2NvcmUpe1xuICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcbiAgICB9XG4gICAgXG4gICAgc2V0TGV2ZWwobGV2ZWwpe1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgfVxuICAgIGdldExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsO1xuICAgIH1cbn0iLCJpbXBvcnQgaGVyb19yaWdodF8xNSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzE1LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xNCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzE0LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xMyBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzEzLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xMiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzEyLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xMSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzExLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8xMCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzEwLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF85IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fOS5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfOCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzgucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzcgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX183LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF82IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fNi5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfNSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzUucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzQgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX180LnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8zIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fMy5wbmcnO1xuaW1wb3J0IGhlcm9fcmlnaHRfMiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL3JpZ2h0XzAxL2gzcm9fXzIucG5nJztcbmltcG9ydCBoZXJvX3JpZ2h0XzEgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9yaWdodF8wMS9oM3JvX18xLnBuZyc7XG5pbXBvcnQgaGVyb19yaWdodF8wIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vcmlnaHRfMDEvaDNyb19fMC5wbmcnO1xuXG5pbXBvcnQgaGVyb19sZWZ0XzE1IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xNS5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8xNCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTQucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTMgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzEzLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzEyIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xMi5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8xMSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMTEucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMTAgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzEwLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzkgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzkucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfOCBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fOC5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF83IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX183LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzYgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzYucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfNSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fNS5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF80IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX180LnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzMgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzMucG5nJztcbmltcG9ydCBoZXJvX2xlZnRfMiBmcm9tICcuLi8uLi9pbWFnZXMvcGxheWVyX19oZXJvL2xlZnQvaDNyb19fMi5wbmcnO1xuaW1wb3J0IGhlcm9fbGVmdF8xIGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5ZXJfX2hlcm8vbGVmdC9oM3JvX18xLnBuZyc7XG5pbXBvcnQgaGVyb19sZWZ0XzAgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXllcl9faGVyby9sZWZ0L2gzcm9fXzAucG5nJztcblxuaW1wb3J0IHpvbWJpZV9yaWdodF8xIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa18xLnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzIucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfMyBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfMy5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF80IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa180LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzUucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfNiBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfNi5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF83IGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvcmlnaHQvV2Fsa183LnBuZyc7XG5pbXBvcnQgem9tYmllX3JpZ2h0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9yaWdodC9XYWxrXzgucG5nJztcbmltcG9ydCB6b21iaWVfcmlnaHRfOSBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfOS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9yaWdodF8xMCBmcm9tICcuLi8uLi9pbWFnZXMvem9tYmllL3JpZ2h0L1dhbGtfMTAucG5nJztcblxuaW1wb3J0IHpvbWJpZV9sZWZ0XzEgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfMS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzIgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfMi5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzMgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfMy5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzQgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfNC5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzUgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfNS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzYgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfNi5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzcgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfNy5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzggZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfOC5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzkgZnJvbSAnLi4vLi4vaW1hZ2VzL3pvbWJpZS9sZWZ0L1dhbGtfOS5wbmcnO1xuaW1wb3J0IHpvbWJpZV9sZWZ0XzEwIGZyb20gJy4uLy4uL2ltYWdlcy96b21iaWUvbGVmdC9XYWxrXzEwLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdhbWVBc3NldHMoKXtcbiAgICBsZXQgYXNzZXRzID0ge1xuICAgICAgICAgICAgaGVybzoge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzIsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfMyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF80LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzUsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfNixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF83LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX3JpZ2h0XzgsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fcmlnaHRfOSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xMCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xMSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xMixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xMyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xNCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19yaWdodF8xNSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxlZnQ6W1xuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMCxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzEsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8yLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzQsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF81LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfNixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzcsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF84LFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfOSxcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzEwLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTEsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xMixcbiAgICAgICAgICAgICAgICAgICAgaGVyb19sZWZ0XzEzLFxuICAgICAgICAgICAgICAgICAgICBoZXJvX2xlZnRfMTQsXG4gICAgICAgICAgICAgICAgICAgIGhlcm9fbGVmdF8xNSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9tYmllOntcbiAgICAgICAgICAgICAgICByaWdodDpbXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF8xLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfMixcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzMsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF80LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfNSxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzYsXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF83LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfcmlnaHRfOCxcbiAgICAgICAgICAgICAgICAgICAgem9tYmllX3JpZ2h0XzksXG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZV9yaWdodF8xMCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxlZnQ6W1xuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF8xLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF8yLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF8zLFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF80LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF81LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF82LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF83LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF84LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF85LFxuICAgICAgICAgICAgICAgICAgICB6b21iaWVfbGVmdF8xMCxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIGxldCBzdG9yYWdlQXNzZXRzID0ge1xuICAgICAgICBoZXJvX3JpZ2h0OltdLFxuICAgICAgICBoZXJvX2xlZnQ6W10sXG4gICAgICAgIHpvbWJpZV9yaWdodDpbXSxcbiAgICAgICAgem9tYmllX2xlZnQ6W10sXG4gICAgfTtcbiAgICBcbiAgICBhc3NldHMuaGVyby5yaWdodC5mb3JFYWNoKGFzc2V0PT57XG4gICAgICAgIGxldCBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLnNyYyA9IGFzc2V0O1xuICAgICAgICBzdG9yYWdlQXNzZXRzLmhlcm9fcmlnaHQucHVzaChuZXdJbWcpO1xuICAgIH0pO1xuICAgIFxuICAgIGFzc2V0cy5oZXJvLmxlZnQuZm9yRWFjaChhc3NldD0+e1xuICAgICAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5zcmMgPSBhc3NldDtcbiAgICAgICAgc3RvcmFnZUFzc2V0cy5oZXJvX2xlZnQucHVzaChuZXdJbWcpO1xuICAgIH0pO1xuICAgIFxuICAgIGFzc2V0cy56b21iaWUucmlnaHQuZm9yRWFjaChhc3NldD0+e1xuICAgICAgICBsZXQgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5zcmMgPSBhc3NldDtcbiAgICAgICAgc3RvcmFnZUFzc2V0cy56b21iaWVfcmlnaHQucHVzaChuZXdJbWcpO1xuICAgIH0pO1xuXG4gICAgYXNzZXRzLnpvbWJpZS5sZWZ0LmZvckVhY2goYXNzZXQ9PntcbiAgICAgICAgbGV0IG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuc3JjID0gYXNzZXQ7XG4gICAgICAgIHN0b3JhZ2VBc3NldHMuem9tYmllX2xlZnQucHVzaChuZXdJbWcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0b3JhZ2VBc3NldHM7XG59IiwiLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gd191c2VyZGF0YSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRQcm9maWxlRXZlbnRzKHdfdXNlcmRhdGEpeyAgICAgIC8vIEJpbmQgZXZlbnRzIHRvIHRoZSBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuICAgIGNvbnN0IGJ0bnNfcGxheWVyICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLXBsYXllcicpOyAgICAvLyBnZXQgYWxsIHRoZSBwbGF5ZXIgYnV0dG9ucyBzZWxlY3RvclxuICAgIGNvbnN0IG5pY2tuYW1lX2lucHV0ICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI05pY2tuYW1lSW5wdXQnKTsgICAgICAgICAvLyBnZXQgdGhlIG5pY2tuYW1lIHRleHQgaW5wdXQgXG5cbiAgICBuaWNrbmFtZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4geyAgICAgLy8gQWRkIHRoZSBvbmNoYW5nZSBldmVudCB0byB0aGUgaW5wdXRcbiAgICAgICAgY29uc3QgaW5wdXRfdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgY3VycmVudF92YWx1ZSA9IGlucHV0X3ZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnJykgLy8gVmFsaWRhdGluIHRvIG9ubHkgYWNjZXB0IHRleHRcbiAgICAgICAgd191c2VyZGF0YS5zZXROaWNrTmFtZShjdXJyZW50X3ZhbHVlKTsgLy8gc2V0IHRoZSBuZXcgbmlja25hbWVcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGJ0bnBseXIgPSAwOyBidG5wbHlyIDwgYnRuc19wbGF5ZXIubGVuZ3RoOyBidG5wbHlyKyspIHsgLy8gbG9vcGluZyB0aHJvdWdoIHRoZSBidXR0b25zXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfYnRuICAgPSBidG5zX3BsYXllcltidG5wbHlyXTsgLy9cbiAgICAgICAgY29uc3Qgd19wbGF5ZXIgICAgICA9IGN1cnJlbnRfYnRuLmdldEF0dHJpYnV0ZSgnYXR0ci1wbGF5ZXInKTsgLy8gY2F0Y2ggdGhlIHBsYXllciBhdHRyaWJ1dGUgYW5kIHNldCBpdCBpbiBhIGNvbnN0XG4gICAgICAgIGN1cnJlbnRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+eyAgLy8gYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggYnV0dG9uXG4gICAgICAgICAgICB3X3VzZXJkYXRhLnNldFBsYXllcih3X3BsYXllcik7ICAgICAvLyBzZXQgdGhlIG5ldyBzZWxlY3RlZCBwbGF5ZXIgaW4gdGhlIG1haW4gdXNlciBkYXRhXG4gICAgICAgICAgICBjaG9vc2VQbGF5ZXIoY3VycmVudF9idG4pOyAgLy8gcmVzdG9yZSB0aGUgb3RoZXIgb3B0aW9ucyBzdGF0ZVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2ZpbGVFdmVudHMoKXtcbiAgICBjb25zdCBidG5zX3BsYXllciAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1wbGF5ZXInKTsgICAgLy8gZ2V0IGFsbCB0aGUgcGxheWVyIGJ1dHRvbnMgc2VsZWN0b3JcbiAgICBjb25zdCBuaWNrbmFtZV9pbnB1dCAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOaWNrbmFtZUlucHV0Jyk7ICAgICAgICAgLy8gZ2V0IHRoZSBuaWNrbmFtZSB0ZXh0IGlucHV0IFxuICAgIG5pY2tuYW1lX2lucHV0LnZhbHVlID0gXCJcIjtcbiAgICBuaWNrbmFtZV9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge30pOyAvLyBSZW1vdmUgTGlzdGVuZXJzIGZyb20gIHRoZSBuaWNrbmFtZSBpbnB1dFxuICAgIGZvciAobGV0IGJ0bnBseXIgPSAwOyBidG5wbHlyIDwgYnRuc19wbGF5ZXIubGVuZ3RoOyBidG5wbHlyKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9idG4gPSBidG5zX3BsYXllcltidG5wbHlyXTsgIFxuICAgICAgICBjdXJyZW50X2J0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57fSk7ICAvLyByZW1vdmUgbGlzdGVuZXJzIGZyb20gdGhlIHBsYXllciBzZWxlY3RvciBidXR0b25zXG4gICAgfVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBidG4gXG4gKi9cbmZ1bmN0aW9uIGNob29zZVBsYXllcihidG49bnVsbCl7IC8vIFVJIGludGVyZmFjZSBiZWhhdmlvclxuICAgIGNvbnN0IGJ0bnNfcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLXBsYXllcicpOyAvLyBnZXQgYWxsIHRoZSBwbGF5ZXIgYnV0dG9ucyBzZWxlY3RvciBcbiAgICBmb3IgKGxldCBidG5wbHlyID0gMDsgYnRucGx5ciA8IGJ0bnNfcGxheWVyLmxlbmd0aDsgYnRucGx5cisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfYnRuID0gYnRuc19wbGF5ZXJbYnRucGx5cl07XG4gICAgICAgIGN1cnJlbnRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTsgLy8gUmVtb3ZlIGFueSBzZWxlY3RlZCBjbGFzcyBhZGRlZFxuICAgIH1cbiAgICBpZiggYnRuIClcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTsgLy8gaWYgcGxheWVyIHNlbGVjdGVkIGJ5IHVzZXIgYWRkIHNlbGVjdGVkIGNsYXNzXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uICBjbGVhclByb2ZpbGUod191c2VyZGF0YSl7IC8vIFJlc2V0IHVzZXIgcHJvZmlsZVxuICAgIHdfdXNlcmRhdGEuc2V0Tmlja05hbWUoJycpOyAvLyBlbXB0eSBuaWNrbmFtZSB1c2VyIG5pY2tuYW1lXG4gICAgd191c2VyZGF0YS5zZXRQbGF5ZXIoJycpOyAvLyBlbXB0eSBwbGF5ZXIgY2hvb3NlIGJ5IHRoZSB1c2VyXG59IiwiaW1wb3J0IEFsZXJ0TWVzc2FnZSBmcm9tICcuLi9jbGFzc2VzL0FsZXJ0bWVzc2FnZSc7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGN1cnJlbnRWaWV3IFxuICogQHBhcmFtIHsqfSB3X3VzcmRhdGEgXG4gKiBAcGFyYW0geyp9IGNhbGxiYWNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RlcEdhbWVNYW5hZ2VyKGN1cnJlbnRWaWV3ID0gMCwgd191c3JkYXRhLCBjYWxsYmFjayl7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGVwLWNvbnQnKTsgLy8gZ2V0IFNlY3Rpb25zXG4gICAgZm9yIChsZXQgc2VjdCA9IDA7IHNlY3QgPCBzZWN0aW9ucy5sZW5ndGg7IHNlY3QrKykge1xuICAgICAgICBpZiggdmFsaWRhdGVTdGVwKCB3X3VzcmRhdGEsIGN1cnJlbnRWaWV3ICkgKXsgLy8gVmFsaWRhdGUgU2VjdGlvbiBydWxlc1xuICAgICAgICAgICAgaWYoc2VjdCA9PT0gY3VycmVudFZpZXcpIC8vIENvbXBhcmUgd2l0aCBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tzZWN0XS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAvLyBTaG93IFNlY3Rpb25cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tzZWN0XS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEhpZGUgU2VjdGlvblxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2soY3VycmVudFZpZXcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gd191c3JkYXRhIFxuICogQHBhcmFtIHsqfSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ0bkNob3NlU2VjdGlvbih3X3VzcmRhdGEsIGNhbGxiYWNrKXtcbiAgICBsZXQgYnRuU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JudF9fc2VjdGlvbicpOyAvLyBHZXQgYnV0dG9uc1xuICAgIGZvciAobGV0IGJ0biA9IDA7IGJ0biA8IGJ0blNlY3Rpb24ubGVuZ3RoOyBidG4rKykgeyAvLyBMb29wIGVhY2ggb25lXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfX2J0biA9IGJ0blNlY3Rpb25bYnRuXTtcbiAgICAgICAgbGV0IHN0ZXAgPSBjdXJyZW50X19idG4uZ2V0QXR0cmlidXRlKFwiYXR0ci1zZWN0aW9uXCIpOyBcbiAgICAgICAgY3VycmVudF9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RlcEdhbWVNYW5hZ2VyKHBhcnNlSW50KHN0ZXApLCB3X3VzcmRhdGEsIGNhbGxiYWNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSB3X3VzcmRhdGEgXG4gKiBAcGFyYW0geyp9IHN0ZXAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVTdGVwKHdfdXNyZGF0YSwgc3RlcCl7IC8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHNlY3Rpb25cbiAgICBsZXQgYWxlcnQgPSBuZXcgQWxlcnRNZXNzYWdlKClcbiAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHN0ZXApIHtcbiAgICAgICAgY2FzZSAwOiAvLyBTZWN0aW9uIDAgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6IC8vIFNlY3Rpb24gMSBub3QgcmVxdWlyZSB2YWxpZGF0aW9uXG4gICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyBTZWN0aW9uIHJlcXVpcmUgdmFsaWRhdGlvbiAyIHZhbGlkYXRpb25zLCB0aGUgbmlja25hbWUgYW5kIHRoZVxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB3X3VzcmRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IHdfdXNyZGF0YS5nZXRQbGF5ZXIoKTtcbiAgICAgICAgICAgIGlmKG5pY2tOYW1lICYmIHBsYXllcilcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQuc2V0TWVzc2FnZSgnRGViZXMgc2VsZWNjaW9uYXIgYWwgbWVub3MgdW4gcGVyZmlsIGUgaW5ncmVzYXIgdW4gbmlja25hbWUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLyBTZWN0aW9uIDMgbm90IHJlcXVpcmUgdmFsaWRhdGlvblxuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IE1haW5Mb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ29fYmJ2YV9ibGFuY28uc3ZnJztcbmltcG9ydCBNYWluQmFja0dyb3VuZCBmcm9tICcuL2ltYWdlcy96b21iaWUtYmFja2dyb3VuZC0wMi5qcGcnO1xuaW1wb3J0IFBsYXlDb25zdWx0YW50IGZyb20gJy4vaW1hZ2VzL1x1MDAxMFBsYXllcl9Db25zdWx0YW50XHUwMDEwLmpwZyc7XG5pbXBvcnQgUGxheW1hbmFnZXIgZnJvbSAnLi9pbWFnZXMvXHUwMDEwUGxheWVyX01hbmFnZXIuanBnJztcbmltcG9ydCBQbGF5VGVjaCBmcm9tICcuL2ltYWdlcy9cdTAwMTBQbGF5ZXJfVGVjaENyZWF0aXZlXHUwMDEwLmpwZyc7XG5pbXBvcnQgZ2V0R2FtZUFzc2V0cyBmcm9tICcuL2pzL21vZHVsZXMvaGVyb19pbWFnZXMnO1xuaW1wb3J0IHtzdGVwR2FtZU1hbmFnZXIsIGJ0bkNob3NlU2VjdGlvbn0gZnJvbSAnLi9qcy9tb2R1bGVzL3N0ZXBHYW1lJztcbmltcG9ydCBVc2VyRGF0YSBmcm9tICcuL2pzL2NsYXNzZXMvVXNlckRhdGFHYW1lJztcbmltcG9ydCB7IGluaXRQcm9maWxlRXZlbnRzLCByZW1vdmVQcm9maWxlRXZlbnRzLCBjbGVhclByb2ZpbGUgfSBmcm9tICcuL2pzL21vZHVsZXMvcHJvZmlsZSc7XG5pbXBvcnQgQ2FudmFzR2FtZSBmcm9tICcuL2pzL2NsYXNzZXMvQ2FudmFzR2FtZSdcblxuXG5mdW5jdGlvbiBpbml0R2FtZSgpe1xuICAgIGxldCB1c2VyRGF0YSA9IG5ldyBVc2VyRGF0YSgpO1xuICAgIGNvbnN0IGdhbWVBc3NldHMgPSBnZXRHYW1lQXNzZXRzKCk7XG4gICAgY29uc3QgY2FudmFzR2FtZSA9IG5ldyBDYW52YXNHYW1lKCBnYW1lQXNzZXRzLCB0cmlnZ2VyU2VjdGlvbiApO1xuICAgIGJ0bkNob3NlU2VjdGlvbih1c2VyRGF0YSwgdHJpZ2dlclNlY3Rpb24pOyAvLyBhZGQgQ2hvc2Ugc2VjdGlvbiBFdmVudCB0byBidXR0b25zXG4gICAgc3RlcEdhbWVNYW5hZ2VyKDAsIHVzZXJEYXRhLCB0cmlnZ2VyU2VjdGlvbik7IC8vIGluaXQgdGhlIGdhbWUgd2l0aCB0aGUgZmlyc3Qgdmlld1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlclNlY3Rpb24od19zZWN0KXtcbiAgICAgICAgcmVtb3ZlUHJvZmlsZUV2ZW50cygpO1xuICAgICAgICBzd2l0Y2ggKHdfc2VjdCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNsZWFyUHJvZmlsZSggdXNlckRhdGEgKTsgLy8gY2xlYXIgdGhlIGN1cnJlbnQgcHJvZmlsZSB0byBhZGQgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgaW5pdFByb2ZpbGVFdmVudHMoIHVzZXJEYXRhICk7IC8vIGluaXQgdGhlIHByb2ZpbGUgYm90dG9ucyBldmVudCB0byBzZWxlY3QgdGhlIG5ldyBvbmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYW52YXNHYW1lLnN0YXJ0Q2FudmFzR2FtZSh1c2VyRGF0YSk7IC8vIHN0YXJ0IHRoZSBjYW52YXMgZ2FtZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdE5pY2tuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1uaWNrbmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdExldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1sZXZlbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC1zY29yZScpO1xuICAgICAgICAgICAgICAgIHJlc3VsdE5pY2tuYW1lLmlubmVySFRNTCA9IHRoaXMudXNlckRhdGEuZ2V0Tmlja05hbWUoKTtcbiAgICAgICAgICAgICAgICByZXN1bHRMZXZlbC5pbm5lckhUTUwgPSB0aGlzLnVzZXJEYXRhLmdldExldmVsKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0U2NvcmUuaW5uZXJIVE1MID0gdGhpcy51c2VyRGF0YS5nZXRTY29yZSgpO1xuICAgICAgICAgICAgICAgIHN0ZXBHYW1lTWFuYWdlcigzLCB1c2VyRGF0YSwgbnVsbCk7IC8vIEVuZCBzZWN0aW9uIGFuZCBzaG93IHRoZSBoaXN0b3J5IGxpc3RcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuKGZ1bmN0aW9uKCl7XG4gICAgaW5pdEdhbWUoKTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==