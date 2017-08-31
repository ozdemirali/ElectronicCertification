require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css'); 
import Vue from 'vue';


new Vue({
    el:'#app',
    data:{
        message:"Hello Vue",
       
       
        showHide:false,
        kursData:[
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Ali Özdemir",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Ali Özdemir",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Ali Özdemir",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Ali Özdemir",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Ali Özdemir",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
        ],
        studentList:[
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
        ],

    },
    methods:{
        showHideAddKursForm:function(){
            this.showHide=!this.showHide;
            this.styleObject.cursor='not-allowed';
        }
    }
});