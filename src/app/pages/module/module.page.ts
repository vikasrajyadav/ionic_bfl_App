import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-module",
  templateUrl: "./module.page.html",
  styleUrls: ["./module.page.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModulePage implements OnInit {
  courseData = {
    courseIcon: "assets/icon/courselogo.svg",
    courseName: "User Experience Beginner Course",
    // tslint:disable-next-line:max-line-length
    courseDesc:
      "As someone who transitioned into UX from a non-design career with actionable things beginners can do to land their first job in this amazing industry.",
    courseCompDate: "26 Jan 2018",
    courseModCount: "3",
    courseStageCount: "4"
  };

  currentActivities = [];
  currentModIndex: any;
  currentCourseData: any;

  modulesList: any = [
    {
      id: 1,
      name: "module 1",
      status: true,
      activities: [
        {
          id: 1,
          imageUrl: "assets/img/card/1.jpg",
          title: "Design Reporting Analysis",
          // tslint:disable-next-line:max-line-length
          description:
            "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.",
          saved: false
        }
      ]
    },
    {
      id: 2,
      name: "module 2",
      status: false,
      activities: [
        {
          id: 1,
          imageUrl: "assets/img/card/nin-live.png",
          title: "Design Reporting Analysis",
          // tslint:disable-next-line:max-line-length
          description:
            "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.",
          saved: false
        },
      ]
    },
    {
      id: 3,
      name: "module 3",
      status: false,
      activities: [
        {
          id: 1,
          imageUrl: "assets/img/card/1.jpg",
          title: "Design Reporting Analysis",
          // tslint:disable-next-line:max-line-length
          description:
            "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.",
          saved: false
        },
      ]
    },
    {
      id: 4,
      name: "module 4",
      status: false,
      activities: [
        {
          id: 1,
          imageUrl: "assets/img/card/nin-live.png",
          title: "Design Reporting Analysis",
          // tslint:disable-next-line:max-line-length
          description:
            "Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum.",
          saved: false
        },
      ]
    }
  ];

  savedAct: any = [];

  constructor(
    public router: Router,
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    this.listActivities(0, null);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // this.refresh = params["refresh"];
      this.currentCourseData = JSON.parse(params["courseData"]);
    });
    console.log("currentCourseData ", this.currentCourseData);
  }

  goToCourse() {
    this.router.navigateByUrl("/tabs/learn");
  }

  goToActivity(activty) {
    this.router.navigateByUrl("/activity");
  }

  shareCourse() {}

  saveActivity(currentActvity) {
    if (currentActvity.saved) {
      currentActvity.saved = false;
    } else {
      currentActvity.saved = true;
    }
  }

  listActivities(currentModIndex, currentModule) {
    this.currentModIndex = currentModIndex;
    for (let i = 0; i < this.modulesList.length; i++) {
      if (currentModIndex === i) {
        this.modulesList[i].status = true;
      } else {
        this.modulesList[i].status = false;
      }
    }
  }
}
