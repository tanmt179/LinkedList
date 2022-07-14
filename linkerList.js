"use strict";
exports.__esModule = true;
exports.LinkerList = void 0;
var quanlydiemsinhvien_1 = require("./quanlydiemsinhvien");
var LinkerList = /** @class */ (function () {
    function LinkerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkerList.prototype.insertFirst = function (name, score) {
        var node = new quanlydiemsinhvien_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkerList.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        var node = new quanlydiemsinhvien_1.Node(name, score);
        this.tail.next = node;
        this.tail = node;
        this.size++;
    };
    LinkerList.prototype.showList = function () {
        var listStudent = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listStudent.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listStudent;
    };
    LinkerList.prototype.totalStudentsFail = function () {
        var currentNode = this.head;
        var count = 0;
        while (currentNode !== null) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    };
    LinkerList.prototype.listStudentMaxScore = function () {
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() == this.findMaxScore()) {
                console.log(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
    };
    LinkerList.prototype.findByName = function (name) {
        var currentNode = this.head;
        for (var i = 0; i < this.size; i++) {
            if (name === currentNode.getName()) {
                console.log(currentNode.readData());
            }
            currentNode = currentNode.next;
        }
    };
    LinkerList.prototype.findMaxScore = function () {
        var currentNode = this.head;
        var max = currentNode.getScore();
        for (var i = 0; i < this.size; i++) {
            var currentNode1 = currentNode.next;
            if (max < currentNode1.getScore()) {
                max = currentNode1.getScore();
            }
        }
        return max;
    };
    return LinkerList;
}());
exports.LinkerList = LinkerList;
