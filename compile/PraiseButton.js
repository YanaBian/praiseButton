(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.PraiseButton = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var PraiseButton = function () {
		function PraiseButton(praiseNum, element) {
			_classCallCheck(this, PraiseButton);

			this.praiseNum = praiseNum;
			this.element = element;
		}

		_createClass(PraiseButton, [{
			key: 'praiseAddOne',
			value: function praiseAddOne() {
				var _this = this;

				this.element.click(function () {
					$('#resultId').addClass('num');
					_this.praiseNum = add(_this.praiseNum);
					$('#clickNum').html(_this.praiseNum);
					setTimeout(function () {
						$('#resultId').removeClass('num');
					}, 1000);
				});
			}
		}]);

		return PraiseButton;
	}();

	var Thumb = function (_PraiseButton) {
		_inherits(Thumb, _PraiseButton);

		function Thumb(num, element) {
			_classCallCheck(this, Thumb);

			return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, element));
		}

		return Thumb;
	}(PraiseButton);

	exports.default = { Thumb: Thumb };
});