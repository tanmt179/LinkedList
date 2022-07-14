"use strict";
exports.__esModule = true;
var linkerList_1 = require("./linkerList");
var linkerStudent = new linkerList_1.LinkerList();
linkerStudent.insertFirst('tuyen', 8);
linkerStudent.insertFirst('tan', 10);
linkerStudent.insertFirst('tan', 9);
linkerStudent.insertFirst('thao', 8);
linkerStudent.insertLast('kiet', 6);
// console.log(linkerStudent.showList());
// console.log(linkerStudent.totalStudentsFail())
//linkerStudent.listStudentMaxScore()
linkerStudent.findByName('tan');
