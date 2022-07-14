"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Node.prototype.readData = function () {
        return { name: this.name,
            score: this.score };
    };
    Node.prototype.getScore = function () {
        return this.score;
    };
    Node.prototype.getName = function () {
        return this.name;
    };
    return Node;
}());
exports.Node = Node;
