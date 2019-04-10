import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-chat",
  templateUrl: "chat.page.html",
  styleUrls: ["chat.page.scss"]
})
export class ChatPage implements OnInit {
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  tabsWithType = [
    { id: 1, name: "Approved" },
    { id: 2, name: "Pending" },
  ];

  ToggleStatusType = "Approved";

StatusType(status){
this.ToggleStatusType = status;
console.log(this.ToggleStatusType);
}

  mainTabType: any;

  coursesList: any = [
    {
      icon: "assets/icon/purpleIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Mandatory", "All"],
      typename: "Mandatory",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 50,
      isOnline: true,
      empCode: 7,
      empName: "Stephen Haward",
      course: "Course-125",
      startDate: "11 Apr 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "70"
    },
    {
      icon: "assets/icon/OrangeIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Aspirational", "All"],
      typename: "Aspirational",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 46,
      isOnline: false,
      empCode: 7,
      empName: "Stephen Haward",
      course: "Course-125",
      startDate: "11 Apr 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "80"
    },
    {
      icon: "assets/icon/purpleIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Recommended", "All", "Mandatory"],
      typename: "Recommended",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 22,
      empCode: 10,
      empName: "Arthur James",
      course: "Course-222",
      startDate: "23 Mar 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "90"
    },
    {
      icon: "assets/icon/OrangeIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Mandatory", "All"],
      typename: "Mandatory",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 35,
      empCode: 3,
      empName: "Raymond Shaw",
      course: "Course-201",
      startDate: "28 May 19",
      approval: "Approved",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "85"
    },
    {
      icon: "assets/icon/purpleIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Aspirational", "All"],
      typename: "Aspirational",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 90,
      isOnline: true,
      empCode: 21,
      empName: "Eric Vasquez",
      course: "Course-101",
      startDate: "31 Mar 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "65"
    },
    {
      icon: "assets/icon/OrangeIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Recommended", "All"],
      typename: "Recommended",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 67,
      isOnline: false,
      empCode: 1,
      empName: "Raymond Shaw",
      course: "Course-11",
      startDate: "15 Apr 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "95"
    },
    {
      icon: "assets/icon/purpleIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Mandatory", "All"],
      typename: "Mandatory",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 56,
      isOnline: false,
      empCode: 10,
      empName: "Arthur James",
      course: "Course-2",
      startDate: "20 Mar 19",
      approval: "Approved",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "97"
    },
    {
      icon: "assets/icon/OrangeIcon.png",
      title: "Sales and Marketing",
      stage: "Market Analysis",
      type: ["Aspirational", "All"],
      typename: "Aspirational",
      courseNo: 3,
      targetDate: Date.now(),
      progressValue: 43,
      isOnline: true,
      empCode: 1,
      empName: "Raymond Shaw",
      course: "Course-22",
      startDate: "15 Mar 19",
      approval: "Pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "92"
    }
  ];





}
