"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function work() {
  return new Promise(function (res) {
    return setImmediate(function () {
      return res(1);
    });
  });
}

function doWait() {
  return _doWait.apply(this, arguments);
}

function _doWait() {
  _doWait = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return work();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _doWait.apply(this, arguments);
}

function dontWait() {
  return _dontWait.apply(this, arguments);
}

function _dontWait() {
  _dontWait = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", work());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _dontWait.apply(this, arguments);
}

function justReturn() {
  return work();
}

module.exports = {
  doWait: doWait,
  dontWait: dontWait,
  justReturn: justReturn
};
