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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	var _isLink = __webpack_require__(7);

	var _isLink2 = _interopRequireDefault(_isLink);

	var _data = __webpack_require__(8);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: core-skills tag 功能添加
	var setExperiences = function setExperiences(experiences) {
	  var body = experiences.reduce(function (prev, item) {
	    return prev + ('\n      <div class="intro__item experiences">\n        <h4>' + item.position + ' @ ' + item.company + '</h4>\n        <div class="experiences__time">' + item.time + '</div>\n        <div class="experiences__description">' + item.description + '</div>\n      </div>\n    ');
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u5DE5\u4F5C\u7ECF\u5386</h3>\n      <div class="intro__detail">\n        ' + body + '\n      </div>\n    </div>\n  ' : '';
	};

	var setProjects = function setProjects(projects) {
	  var body = projects.reduce(function (prev, item) {
	    return prev + ('\n      <h4>' + item.title + '</h4>\n      <div class="projects__link">\u9884\u89C8\u7F51\u5740\uFF1A<a href="' + item.link + '" target="_blank">' + item.link + '</a></div>\n      <div class="projects__description">' + item.description + '</div>\n    ');
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u9879\u76EE\u5217\u8868</h3>\n      <div class="intro__detail">\n        ' + body + '\n      </div>\n    </div>\n  ' : '';
	};

	var setContact = function setContact(contact) {
	  var body = Object.keys(contact).reduce(function (prev, key) {
	    return (0, _isLink2.default)(contact[key]) ? prev + ('<li>' + key + ': <a href="' + contact[key] + '" target="blank">' + contact[key] + '</a></li>') : prev + ('<li>' + key + ': ' + contact[key] + ' </li>');
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u8054\u7CFB\u65B9\u5F0F</h3>\n      <div class="intro__detail">\n        <ul>' + body + '</ul>\n      </div>\n    </div>\n  ' : '';
	};

	var setOptions = function setOptions(contact) {
	  return Object.keys(contact).reduce(function (prev, key) {
	    return (0, _isLink2.default)(contact[key]) ? prev + ('<li>' + key + ': <a href="' + contact[key] + '" target="blank">' + contact[key] + '</a></li>') : prev + ('<li>' + key + ': ' + contact[key] + ' </li>');
	  }, '');
	};

	var setBasic = function setBasic(basic) {
	  var body = Object.keys(basic).reduce(function (prev, key) {
	    switch (key) {
	      case 'education':
	        prev += setEducation(basic[key]);
	        break;
	      case 'languages':
	        prev += setLanguage(basic[key]);
	        break;
	      case "gender":
	        prev += '<li>\u6027\u522B: ' + basic[key] + '</li>';
	        break;
	      case 'options':
	        prev += setOptions(basic[key]);
	        break;
	    }

	    return prev;
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u57FA\u672C\u4FE1\u606F</h3>\n      <div class="intro__detail">\n        <ul>' + body + '</ul>\n      </div>\n    </div>\n  ' : '';
	};

	var setEducation = function setEducation(education) {
	  return education.reduce(function (prev, item) {
	    return prev + ('\n      <li>' + item.degree + ': ' + item.school + ' - ' + item.major + '</li>\n    ');
	  }, '');
	};

	var setLanguage = function setLanguage(languages) {
	  return Object.keys(languages).reduce(function (prev, key) {
	    return prev + ('<li>' + key + ': ' + languages[key] + '</li>');
	  }, '');
	};

	var setSkills = function setSkills(skills) {
	  var body = Object.keys(skills).reduce(function (prev, key) {
	    return prev + ('<li>' + key + ': ' + skills[key] + '</li>');
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u6280\u80FD</h3>\n      <div class="intro__detail">\n        <ul>' + body + '</ul>\n      </div>\n    </div>\n  ' : '';
	};

	var setActivities = function setActivities(activities) {
	  var body = activities.reduce(function (prev, activity) {
	    return prev + ('<li>' + activity + '</li>');
	  }, '');

	  return body ? '\n    <div class="intro">\n      <h3>\u6D3B\u52A8\u7ECF\u5386</h3>\n      <div class="intro__detail">\n        <ul>' + body + '</ul>\n      </div>\n    </div>\n  ' : '';
	};

	document.querySelector('.wrapper').innerHTML = '\n  <div class="container">\n    <header>\n      <h1>' + _data2.default.name + '</h1>\n      <span>' + _data2.default.job + '</span>\n      <span>' + _data2.default.city + '</span>\n    </header>\n    <div class="basis-info">\n        ' + setBasic(_data2.default.basic) + '\n        ' + setContact(_data2.default.contact) + '\n    </div>\n    ' + setExperiences(_data2.default.experiences) + '\n    ' + setProjects(_data2.default.projects) + '\n    ' + setSkills(_data2.default.skills) + '\n    ' + setActivities(_data2.default.activities) + '\n  </div>\n';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  background: #FEFEFE;\n  height: 100%;\n  font-family: Arial, 'Simsun', sans-serif;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 8px 0;\n  padding: 0;\n  font-family: \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\",  Arial, sans-serif; }\n\np, span, div {\n  font-family: Arial, 'Simsun', sans-serif; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\na {\n  color: #222;\n  text-decoration: none; }\n  a:active {\n    color: #333; }\n  a:hover {\n    color: #555; }\n\n.wrapper {\n  display: flex;\n  flex-wrap: wrap-reverse;\n  min-height: 100%;\n  padding: 20px;\n  margin: 40px;\n  border: 3px solid #ddd;\n  box-shadow: 2px 3px 3px #888; }\n\n.container {\n  flex: 2.5;\n  min-height: 100%;\n  padding: 10px; }\n\n.sidebar {\n  flex: 1;\n  min-height: 100%;\n  border-left: 1px dashed #ccc;\n  padding: 0 10px; }\n\n.intro {\n  margin-top: 32px; }\n  .intro .intro__detail {\n    margin-top: 24px;\n    padding-left: 16px;\n    border-left: 3px solid #ccc;\n    line-height: normal; }\n    .intro .intro__detail .intro__item {\n      margin-top: 16px; }\n\n.basis-info {\n  display: flex;\n  flex-wrap: wrap; }\n  .basis-info .intro {\n    width: 50%; }\n\n.experiences h4 {\n  display: inline-block; }\n\n.experiences .experiences__time {\n  display: inline-block;\n  font-weight: bold; }\n  .experiences .experiences__time::before {\n    content: '[';\n    margin: 0 4px; }\n  .experiences .experiences__time::after {\n    content: ']';\n    margin: 0 4px; }\n\n.projects__link {\n  margin: 4px 0; }\n\n@media print {\n  .wrapper {\n    margin: 0;\n    border: none;\n    box-shadow: none;\n    padding: 0; }\n  @page {\n    size: A4; }\n  div {\n    page-break-before: avoid;\n    page-break-inside: avoid; } }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isLink;
	function isLink(str) {
	  return (/^https?:\/\//i.test(str)
	  );
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Sky Ao",
		"job": "前端开发",
		"city": "上海",
		"contact": {
			"Name": "Beichu Zhang",
			"Phone": "138***28732",
			"Email": "csvwolf@qq.com",
			"WeChat": "csvwolf"
		},
		"basic": {
			"gender": "女",
			"languages": {
				"English": "六级"
			},
			"education": [
				{
					"degree": "本科",
					"major": "计算机科学与技术",
					"school": "上海海事大学"
				}
			],
			"options": {
				"GitHub": "https://github.com/csvwolf",
				"Blog": "http://codesky.me/"
			}
		},
		"activities": [
			"校编程大赛一等奖",
			"临港三校App制作大赛一等奖",
			"上海市计算机应用能力大赛三等奖",
			"参与过ACM EC-Final - 上大两日游",
			"社团服务器运维",
			"微软技术俱乐部社长",
			"连续两年一等奖学金"
		],
		"skills": {
			"HTML/CSS": "",
			"JavaScript": ""
		},
		"experiences": [
			{
				"position": "前端开发",
				"company": "饿了么",
				"time": "2016.7 - 至今",
				"description": "打杂中。",
				"coreSkill": [
					"Vue",
					"ES6",
					"Node.js"
				]
			},
			{
				"position": "前端开发",
				"company": "Venvy 云视链",
				"time": "2014.12 - 2015.03",
				"description": "主要进行第一版HTML5播放器的开发，解决了视频分片切换问题，实现进度条跳转，缓解内存泄露问题（下降10%），解决了一些IE兼容问题，同时也进行了一些播放页相关组件开发。",
				"coreSkill": [
					"Jade",
					"Stylus",
					"jQuery"
				]
			}
		],
		"projects": [
			{
				"title": "全球港口动态",
				"link": "http://222.44.90.83:3005/",
				"description": "进行大前端技术改建，重写UI，自适应分辨率，解决港口加载慢的问题，新闻由后端爬取。"
			},
			{
				"title": "Sky_MicroBlog",
				"link": "https://github.com/csvwolf/Sky-MicroBlog",
				"description": "使用Pjax技术，在Ajax下也能够正常的进行后退和前进的操作，能够直接通过url打开，使用原生PHP和jQuery实现，数据库使用PDO。"
			},
			{
				"title": "SkyTips",
				"link": "http://test.codesky.me/skytips/",
				"description": "一个可以仅由CSS3驱动的Tooltip轮子，标签设计参考Bootstrap，后在实习期间播放页面也成功的有所应用。"
			}
		]
	};

/***/ }
/******/ ]);