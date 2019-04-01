import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  EmployeeList = [
		{ empCode: 1, empName: "Raymond Shaw", course: 'Course-22', startDate: '15 Mar 19', approval: "pending" },
		{ empCode: 10, empName: "Arthur James", course: 'Course-2', startDate: '20 Mar 19', approval: true },
		{ empCode: 1, empName: "Raymond Shaw", course: 'Course-11', startDate: '15 Apr 19', approval: "pending" },
		{ empCode: 21, empName: "Eric Vasquez", course: 'Course-101', startDate: '31 Mar 19', approval: "pending" },
		{ empCode: 3, empName: "Raymond Shaw", course: 'Course-201', startDate: '28 May 19', approval: true },
		{ empCode: 10, empName: "Arthur James", course: 'Course-222', startDate: '23 Mar 19', approval: false },
		{ empCode: 7, empName: "Stephen Haward", course: 'Course-125', startDate: '11 Apr 19', approval: "pending" },
	];


}
