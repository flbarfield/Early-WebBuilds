/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	// ...
	// import some new stuff
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});
	// we'll use this to render our app to an html string


	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AboutBand = __webpack_require__(5);

	var _AboutBand2 = _interopRequireDefault(_AboutBand);

	var _AboutBlog = __webpack_require__(9);

	var _AboutBlog2 = _interopRequireDefault(_AboutBlog);

	var _AboutCompany = __webpack_require__(10);

	var _AboutCompany2 = _interopRequireDefault(_AboutCompany);

	var _AboutGames = __webpack_require__(11);

	var _AboutGames2 = _interopRequireDefault(_AboutGames);

	var _AboutHome = __webpack_require__(12);

	var _AboutHome2 = _interopRequireDefault(_AboutHome);

	var _AboutShopping = __webpack_require__(13);

	var _AboutShopping2 = _interopRequireDefault(_AboutShopping);

	var _AboutTravel = __webpack_require__(14);

	var _AboutTravel2 = _interopRequireDefault(_AboutTravel);

	var _AboutTSDC = __webpack_require__(15);

	var _AboutTSDC2 = _interopRequireDefault(_AboutTSDC);

	var _MainPage = __webpack_require__(16);

	var _MainPage2 = _interopRequireDefault(_MainPage);

	var _NotFoundPage = __webpack_require__(18);

	var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Router,
	  null,
	  _react2.default.createElement(_reactRouter.Route, { path: "/", component: _MainPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutBand", component: _AboutBand2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutCompany", component: _AboutCompany2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutGames", component: _AboutGames2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutHome", component: _AboutHome2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutShopping", component: _AboutShopping2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutTravel", component: _AboutTravel2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutTSDC", component: _AboutTSDC2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "aboutBlog", component: _AboutBlog2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "*", component: _NotFoundPage2.default })
	);

	exports.default = routes;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _reactRouter = __webpack_require__(3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutBand = function (_React$Component) {
	  _inherits(AboutBand, _React$Component);

	  function AboutBand() {
	    _classCallCheck(this, AboutBand);

	    return _possibleConstructorReturn(this, (AboutBand.__proto__ || Object.getPrototypeOf(AboutBand)).apply(this, arguments));
	  }

	  _createClass(AboutBand, [{
	    key: "toBand",
	    value: function toBand() {
	      window.location.assign('./app/Past_Projects/Band_stream/dist/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Bandstream.png",
	        description: "This features four behind-the-scenes technologies that I have never worked with before: Sass, Webpack, React, Redux. All of these tools help gear me toward working with a team, as most of it includes various features that allow you to split your code into seperate and easily reusable components. I also gained the ability to uglify, compress, and keep my code in a virtual DOM that's seperate from the real DOM which that allows for faster render times. My build system also allows me error check and debug my applications before I even put it online."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toBand },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutBand;
	}(_react2.default.Component);

	exports.default = AboutBand;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavBar = function (_React$Component) {
	  _inherits(NavBar, _React$Component);

	  function NavBar() {
	    _classCallCheck(this, NavBar);

	    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	  }

	  _createClass(NavBar, [{
	    key: "openNav",
	    value: function openNav() {
	      document.getElementById('hidden-nav').style.width = '22em';
	      document.getElementById('hidden-nav').style.borderColor = 'rgb(252, 232, 54)';
	    }
	  }, {
	    key: "closeNav",
	    value: function closeNav() {
	      document.getElementById('hidden-nav').style.width = '0';
	      document.getElementById('hidden-nav').style.borderColor = 'rgb(34, 34, 34)';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "nav",
	            { className: "navbar navbar-inverse navbar-fixed-top" },
	            _react2.default.createElement(
	              "div",
	              { className: "container-fluid" },
	              _react2.default.createElement(
	                "ul",
	                { className: "nav navbar-nav" },
	                _react2.default.createElement(
	                  "li",
	                  null,
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: "/", activeClassName: "active" },
	                    "Home"
	                  )
	                ),
	                _react2.default.createElement(
	                  "li",
	                  { onClick: this.openNav },
	                  _react2.default.createElement(
	                    "a",
	                    { id: "project-link", href: "javascript:void(0)" },
	                    "Project List"
	                  )
	                ),
	                _react2.default.createElement(
	                  "li",
	                  null,
	                  _react2.default.createElement(
	                    "a",
	                    { href: "#project-info-aboutme" },
	                    "About Me"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { id: "hidden-nav" },
	            _react2.default.createElement("i", { onClick: this.closeNav, className: "fa fa-close" }),
	            _react2.default.createElement(
	              "div",
	              { id: "nav-text" },
	              _react2.default.createElement(
	                "h1",
	                null,
	                "Other Projects"
	              ),
	              _react2.default.createElement(
	                "ul",
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutCompany", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Company Page (Layout/CSS centric practice)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutShopping", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Shop Page (Layout and eventual SQL practice)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutTSDC", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Swing Dance Club (AJAX/Video)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutGames", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Games Recreation (Pure Javascript/React Interactivity)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutBand", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Band Stream (Intro to React/webpack/Sass)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutTravel", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Travel Page (Intro to CSS interactivity)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutBlog", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Blog (Layout Practice)"
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: "/aboutHome", href: "#" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    "Home and Furnishing (Intro to image manipulation)"
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NavBar;
	}(_react2.default.Component);

	exports.default = NavBar;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(8);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Abouts = function (_React$Component) {
	  _inherits(Abouts, _React$Component);

	  function Abouts() {
	    _classCallCheck(this, Abouts);

	    return _possibleConstructorReturn(this, (Abouts.__proto__ || Object.getPrototypeOf(Abouts)).apply(this, arguments));
	  }

	  _createClass(Abouts, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'imported-content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'project-info project-wrapper' },
	            _react2.default.createElement(
	              'div',
	              { className: 'proj-pic-wrapper col-xs-12 col-sm-12 col-md-7' },
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:void(0)' },
	                _react2.default.createElement('img', { src: this.props.img })
	              )
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: 'javascript:void(0)' },
	              _react2.default.createElement(
	                'p',
	                { className: 'hidden-md hidden-lg mobile-clicky' },
	                'TAP HERE TO VIEW'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'proj-text col-md-5 col-xs-12' },
	              _react2.default.createElement(
	                'h1',
	                { className: 'page-heading-additional' },
	                'What is this project about?'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                this.props.description
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return Abouts;
	}(_react2.default.Component);

	exports.default = Abouts;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'footer',
	      { className: 'project-info-footer' },
	      _react2.default.createElement(
	        'div',
	        { id: 'project-info-aboutme', className: 'project-info-about col-xs-12 col-md-6' },
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement('img', { className: 'ricky', src: '/app/Images/Ricky.jpg' }),
	          'Fredrick is a passionate Self-Starter that has learned a variety of different IT technologies from HTML and Javascript to Python through textbook, documentation, and experimental programming on his own free time. ',
	          _react2.default.createElement('br', null),
	          ' ',
	          _react2.default.createElement('br', null),
	          ' Previous years of work within the hospitality industry also gives him exceptional skills at quickly adapting to a client\'s needs as well as instilling the idea that communication should be of utmost priority within any project. '
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'project-info-links col-xs-12 col-md-6' },
	        _react2.default.createElement(
	          'div',
	          { className: 'git-wrapper col-xs-6' },
	          _react2.default.createElement(
	            'a',
	            { href: 'https://github.com/flbarfield' },
	            _react2.default.createElement('i', { className: 'fa fa-github' })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '@flbarfield on GitHub'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mail-wrapper col-xs-6' },
	          _react2.default.createElement(
	            'a',
	            { href: 'mailto:flbarfield@yahoo.com' },
	            _react2.default.createElement('i', { className: 'fa fa-envelope' })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Message Fredrick'
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = Footer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutBlog = function (_React$Component) {
	  _inherits(AboutBlog, _React$Component);

	  function AboutBlog() {
	    _classCallCheck(this, AboutBlog);

	    return _possibleConstructorReturn(this, (AboutBlog.__proto__ || Object.getPrototypeOf(AboutBlog)).apply(this, arguments));
	  }

	  _createClass(AboutBlog, [{
	    key: "toBlog",
	    value: function toBlog() {
	      window.location.assign('./app/Past_Projects/Blog_V3/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Blog_SC.png",
	        description: "So far, this is merely a small page I created just to familiarize myself further with Bootstrap. Sometime soon, I do hope to add extra functionality such as the ability to actually add and delete comments and posts, account creation, and so on hoping that it will aid in developing my understanding of back-end languages and how they relate to front-end."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toBlog },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutBlog;
	}(_react2.default.Component);

	exports.default = AboutBlog;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutCompany = function (_React$Component) {
	  _inherits(AboutCompany, _React$Component);

	  function AboutCompany() {
	    _classCallCheck(this, AboutCompany);

	    return _possibleConstructorReturn(this, (AboutCompany.__proto__ || Object.getPrototypeOf(AboutCompany)).apply(this, arguments));
	  }

	  _createClass(AboutCompany, [{
	    key: "toCompany",
	    value: function toCompany() {
	      window.location.assign('./app/Past_Projects/Company_Page/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/company_SC.png",
	        description: "Aesthetics and polish was the theme of this webpage. Up until now, I was rushing through the creation of all of my pages in order to try the next new technique or technology that I had caught wind of. With this I took the time to really slow down and tweek the little details to create a finished looking result - and it was fun! I'm now inspired to revamp everything else I've done up to this point. This also has surprisingly little javascript involved, before now I had used it for the bulk of my visual effects when simple CSS rules did it easier and faster. Such as transitioning color and creating a dynamic nav menu."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toCompany },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutCompany;
	}(_react2.default.Component);

	exports.default = AboutCompany;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _reactRouter = __webpack_require__(3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutGames = function (_React$Component) {
	  _inherits(AboutGames, _React$Component);

	  function AboutGames() {
	    _classCallCheck(this, AboutGames);

	    return _possibleConstructorReturn(this, (AboutGames.__proto__ || Object.getPrototypeOf(AboutGames)).apply(this, arguments));
	  }

	  _createClass(AboutGames, [{
	    key: "toGames",
	    value: function toGames() {
	      window.location.assign('./app/Past_Projects/Games/dist/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Games.png",
	        description: "This page is intended to be a place to safely experiment with Javascript and React programming by the re-creation of classic games! It will be a work in progress for a while, but I believe it will be my go-to way to spend the time where I'm not necessarily looking to learn new technologies."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toGames },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutGames;
	}(_react2.default.Component);

	exports.default = AboutGames;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutHome = function (_React$Component) {
	  _inherits(AboutHome, _React$Component);

	  function AboutHome() {
	    _classCallCheck(this, AboutHome);

	    return _possibleConstructorReturn(this, (AboutHome.__proto__ || Object.getPrototypeOf(AboutHome)).apply(this, arguments));
	  }

	  _createClass(AboutHome, [{
	    key: "toHome",
	    value: function toHome() {
	      window.location.assign('./app/Past_Projects/Home_improvement_page/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Home_SC.png",
	        description: "This particular project was the very first I had semi-finished! At the time, this introduced interesting challenges such as figuring out how to use a grid system for element alignment, doing all the animation through my own JavaScript strings because I didn't know much about jquery or plug-ins at all yet, and wrapping my head around how to use iconography. You can also hover over or click the smaller images to display overlaying text"
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toHome },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutHome;
	}(_react2.default.Component);

	exports.default = AboutHome;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _reactRouter = __webpack_require__(3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutShopping = function (_React$Component) {
	  _inherits(AboutShopping, _React$Component);

	  function AboutShopping() {
	    _classCallCheck(this, AboutShopping);

	    return _possibleConstructorReturn(this, (AboutShopping.__proto__ || Object.getPrototypeOf(AboutShopping)).apply(this, arguments));
	  }

	  _createClass(AboutShopping, [{
	    key: "toShop",
	    value: function toShop() {
	      window.location.assign('./app/Past_Projects/Shopping/dist/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Shop.png",
	        description: "This was created with the goal of eventually linking a database to it to practice my growing SQL skills. But in the process I made a fairly nice layout, and wanted to show it's progress!"
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toShop },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutShopping;
	}(_react2.default.Component);

	exports.default = AboutShopping;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutTravel = function (_React$Component) {
	  _inherits(AboutTravel, _React$Component);

	  function AboutTravel() {
	    _classCallCheck(this, AboutTravel);

	    return _possibleConstructorReturn(this, (AboutTravel.__proto__ || Object.getPrototypeOf(AboutTravel)).apply(this, arguments));
	  }

	  _createClass(AboutTravel, [{
	    key: "toTravel",
	    value: function toTravel() {
	      window.location.assign('./app/Past_Projects/Tourist_page/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/Travel_SC.png",
	        description: "In this project, I discovered how to embed pre-existing plug-ins into projects. While I understand it may be best practice to not completely rely on them, there's no doubt that it drastically cuts down on development time as well smistakes made by the novice programmer! Examples are as follows: Slideshow at the top of the page, color transistions for the icons within the city directory, billing, and social icon sections and the widget used to display the local weather."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toTravel },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutTravel;
	}(_react2.default.Component);

	exports.default = AboutTravel;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Abouts = __webpack_require__(7);

	var _Abouts2 = _interopRequireDefault(_Abouts);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutTsdc = function (_React$Component) {
	  _inherits(AboutTsdc, _React$Component);

	  function AboutTsdc() {
	    _classCallCheck(this, AboutTsdc);

	    return _possibleConstructorReturn(this, (AboutTsdc.__proto__ || Object.getPrototypeOf(AboutTsdc)).apply(this, arguments));
	  }

	  _createClass(AboutTsdc, [{
	    key: "toTsdc",
	    value: function toTsdc() {
	      window.location.assign('./app/Past_Projects/TSDC/index.html');
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var SPECIFICS = {
	        img: "/app/Images/TSDC_SC.png",
	        description: "This project was mostly about learning how to integrate AJAX into webpages in order to achieve a smooth and seamless user experience as the website is navigated. This is shown within the main body of the page - new information is updated after clicking a navigation link without needing a refresh. Building this website also came with the learning experiences of embedding video into a page as well as discovering how to build an image-based header with mis-aligned starting images."
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Navbar2.default, null),
	        _react2.default.createElement(
	          "div",
	          { onClick: this.toTsdc },
	          _react2.default.createElement(_Abouts2.default, { description: SPECIFICS.description, img: SPECIFICS.img })
	        )
	      );
	    }
	  }]);

	  return AboutTsdc;
	}(_react2.default.Component);

	exports.default = AboutTsdc;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Footer = __webpack_require__(8);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _reactRouter = __webpack_require__(3);

	var _MainImg = __webpack_require__(17);

	var _MainImg2 = _interopRequireDefault(_MainImg);

	var _Navbar = __webpack_require__(6);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainPage = function (_React$Component) {
	  _inherits(MainPage, _React$Component);

	  function MainPage() {
	    _classCallCheck(this, MainPage);

	    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
	  }

	  _createClass(MainPage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'jumbotron jumbotron-main' },
	          _react2.default.createElement(_Navbar2.default, null),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Fredrick Barfield'
	            ),
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Front End Web Development'
	            ),
	            _react2.default.createElement(
	              'h3',
	              null,
	              'HTML ',
	              _react2.default.createElement('span', { className: 'fa fa-circle' }),
	              ' CSS ',
	              _react2.default.createElement('span', { className: 'fa fa-circle' }),
	              ' JavaScript'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'h1',
	          { className: 'page-heading' },
	          'Project Examples'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[0].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[0].imageWrapStyling, img: PROJINFO[0].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[1].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[1].imageWrapStyling, img: PROJINFO[1].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[2].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[2].imageWrapStyling, img: PROJINFO[2].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[3].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[3].imageWrapStyling, img: PROJINFO[3].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[4].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[4].imageWrapStyling, img: PROJINFO[4].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[5].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[5].imageWrapStyling, img: PROJINFO[5].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[6].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[6].imageWrapStyling, img: PROJINFO[6].img })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: PROJINFO[7].id },
	          _react2.default.createElement(_MainImg2.default, { imageWrapStyling: PROJINFO[7].imageWrapStyling, img: PROJINFO[7].img })
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);

	  return MainPage;
	}(_react2.default.Component);

	exports.default = MainPage;


	var PROJINFO = [{
	  key: 0,
	  id: "AboutCompany",
	  img: "/app/Images/company_SC.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left"
	}, {
	  key: 1,
	  id: "AboutTSDC",
	  img: "/app/Images/TSDC_SC.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right"
	}, {
	  key: 2,
	  id: "AboutGames",
	  img: "/app/Images/Games.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left"
	}, {

	  key: 3,
	  id: "AboutShopping",
	  img: "/app/Images/Shop.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right"
	}, {
	  key: 4,
	  id: "AboutBand",
	  img: "/app/Images/Bandstream.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left"
	}, {
	  key: 5,
	  id: "AboutTravel",
	  img: "/app/Images/Travel_SC.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right"
	}, {
	  key: 6,
	  id: "AboutBlog",
	  img: "/app/Images/Blog_SC.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 left"
	}, {
	  key: 7,
	  id: "AboutHome",
	  img: "/app/Images/Home_SC.png",
	  imageWrapStyling: "main-img-wrap col-xs-12 col-sm-12 col-md-12 right"
	}];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainImg = function (_React$Component) {
	  _inherits(MainImg, _React$Component);

	  function MainImg() {
	    _classCallCheck(this, MainImg);

	    return _possibleConstructorReturn(this, (MainImg.__proto__ || Object.getPrototypeOf(MainImg)).apply(this, arguments));
	  }

	  _createClass(MainImg, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'project-wrapper' },
	            _react2.default.createElement(
	              'div',
	              { className: this.props.imageWrapStyling },
	              _react2.default.createElement('img', { className: 'col-xs-12 col-sm-12 col-md-12', src: this.props.img })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MainImg;
	}(_react2.default.Component);

	exports.default = MainImg;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotFoundPage = function (_React$Component) {
	  _inherits(NotFoundPage, _React$Component);

	  function NotFoundPage() {
	    _classCallCheck(this, NotFoundPage);

	    return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
	  }

	  _createClass(NotFoundPage, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'not-found' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          '404'
	        ),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Page not found!'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'Go back to the main page'
	          )
	        )
	      );
	    }
	  }]);

	  return NotFoundPage;
	}(_react2.default.Component);

	exports.default = NotFoundPage;

/***/ }
/******/ ]);