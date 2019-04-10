import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router, NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";
import { LearnService } from "../../api/learn/learn.service";

@Component({
  selector: "app-learn",
  templateUrl: "learn.page.html",
  styleUrls: ["learn.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LearnPage implements OnInit {
  tabsWithType = [
    { id: 1, name: "All" },
    { id: 2, name: "Mandatory" },
    { id: 3, name: "Recommended" },
    { id: 4, name: "Aspirational" }
  ];

  buttonGroup = [
    { id: 1, name: "Current Courses" },
    { id: 2, name: "Upcoming Courses" },
    { id: 3, name: "Completed Courses" }
  ];
  selectedTab: any = "Current Courses";

  mainTabType: any;
  // mainTabType: any = 'All';

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
      approval: "pending",
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
      approval: "pending",
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
      approval: false,
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
      approval: true,
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
      approval: "pending",
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
      approval: "pending",
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
      approval: true,
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
      approval: "pending",
      online: "6/7",
      class: "5/7",
      grade: "50",
      points: "92"
    }
  ];

  filterCourseList: any = [];
  currentUserData: any;
  calenderTabData: any;
  otherTabData: any;

  constructor(
    private storage: Storage,
    private router: Router,
    public navCtrl: NavController,
    public learnService: LearnService
  ) {
    this.filterCourseList = this.getCourseListByType("All");
    console.log(this.filterCourseList);
    // this.getUserData();
  }

  ngOnInit() {}

  getUserData() {
    this.currentUserData = JSON.parse(localStorage.getItem("currentUser"));
    // this.getCourses();
  }

  getCourses() {
    const courseData = {
      eId: this.currentUserData.id,
      tId: this.currentUserData.tenantId,
      uId: this.currentUserData.id
    };

    this.learnService.getCourseList(courseData).then(
      res => {
        if (res.type === true) {
          // this.coursesList = res.data;
          this.otherTabData = res.data;
          this.calenderTabData = res.data1;
          console.log("Course list res", res);
          console.log("Other tab Course list", this.otherTabData);
          console.log("Calender tab Course list", this.calenderTabData);
          this.mainTabType = this.otherTabData[0].CourseType;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }

  getCourselist(typename) {
    this.filterCourseList = this.getCourseListByType(typename);
  }

  getCourseListByType(type) {
    return this.coursesList.filter(function(m) {
      return m.type.indexOf(type) !== -1;
    });
  }

  goToModules(currentCourse, currentIndex) {
    console.log(currentIndex, currentCourse);
    // this.router.navigateByUrl('/module');
    // this.navCtrl.navigateForward(['/module'], currentCourse);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        courseData: JSON.stringify(currentCourse)
      }
    };
    this.navCtrl.navigateForward(["/module"], navigationExtras);
  }
}
