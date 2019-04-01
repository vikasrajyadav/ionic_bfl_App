import { Injectable } from '@angular/core';

@Injectable()
export class Config {

}

// export const baseUrl =  'http://localhost:9845/';

export const webApi = {
    // baseUrl : 'http://localhost:9845/',               // localhost
    // baseUrl: 'https://webapi.edgelearning.co.in',            // DEV New
    baseUrl: 'http://13.233.59.0:9845',            // Test New
    apiUrl: {
        /********************* Auth ********************/
        login: 'api/studentPortal/userLogin',
        /********************* INTERESTS ********************/
        getInterestList: 'api/studentPortal/interests',
        addInterests: 'api/studentPortal/addInterests',
        /********************* LEARN ********************/
        get_all_course_list: 'api/studentPortal/learn',
        get_all_learn_modules_list: 'api/studentPortal/learnModules',
        get_all_modules_activities_list: 'api/studentPortal/moduleActivity',
        add_learn_feedback_data: 'api/studentPortal/addLearnFeedback',
        remove_learn_feedback_data: 'api/studentPortal/removeLearnFeedback',
        check_quiz_for_user: 'api/studentPortal/checkQuizUser',
        get_quiz_questions: 'api/studentPortal/getQuizQuestions',
        // getVideo: 'api/studentPortal/getActivityVideo',
        get_streaming: 'api/studentPortal/getActivityVideo',
    }
};
