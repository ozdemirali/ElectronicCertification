require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import Vue from 'vue';
import axios from 'axios';

// let deneme={};


new Vue({
    el:'#app',
    data:{
        message:"Hello Vue",
        addShowHide:false,
        editShowHide:false,
        educator:["Ali Özdemir","Cantekin Çelikhası","Fatih Şahinbaş"],
        editData:{},
        selected:[],
        kursData:[
            {name:"İş Güvenliği",state:"Devam Ediyor",educator:"Cantekin Çelikhası",quota:"30",startDate:"01.08.2017",endDate:"15.08.2017",hour:"30"},
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
        deneme:function(){
            console.log("asd");
            axios.get('http://127.0.0.1:5000/course').then(
                
               response=>{
                console.log(response.data)
            })

        },
        showHide:function(item,index){
            switch(item){
                case "add":
                    this.addShowHide=!this.addShowHide;
                    // this.styleObject.cursor='not-allowed';
                    // console.log(item);
                    break;
                case "edit":
                    this.editShowHide=!this.editShowHide;
                    if(this.editShowHide)  
                    this.editData=this.kursData[index];

                    console.log(this.editData);
                    console.log(this.kursData[index].educator)
                    break;
                case "update":
                    this.editShowHide=!this.editShowHide;
                    console.log("update");
                    console.log( this.editData);    
                default:
            }

        },
        
    }
});