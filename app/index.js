require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import Vue from 'vue';
import axios from 'axios';

// let deneme={};


new Vue({
    el:'#app',
    data:{
        message:"Hello Vue",
        commanShowHide:true,
        addShowHide:false,
        editShowHide:false,
        educator:["Ali Özdemir","Cantekin Çelikhası","Fatih Şahinbaş"],
        course:[],
        teacher:[],
        student:[],
        newCourse:{},
        editData:{},
        selected:[],
       
    },
   
    created:function(){
        axios.get('http://127.0.0.1:5000/course').then(
           response=>{
               this.course=response.data.result;
            //    console.log(this.kursData);
            //    console.log(response.data.result);
        });
        axios.get('http://127.0.0.1:5000/teacher').then(
            response=>{
                this.teacher=response.data.result;
        });
        axios.get('http://127.0.0.1:5000/student').then(
            response=>{
                this.student=response.data.result;
        });
    },
    methods:{
        saveCourse:function(){
            console.log(this.newCourse);
            axios.post('http://127.0.0.1:5000/course',this.newCourse)
            .then(
                response=>{
                    axios.get('http://127.0.0.1:5000/course').then(
                        response=>{
                            this.course=response.data.result;
                     });
                }
            )
        },
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
                    this.commanShowHide=!this.commanShowHide;
                    break;
                case "edit":
                    console.log(index);
                    this.editShowHide=!this.editShowHide;
                    this.commanShowHide=!this.commanShowHide;
                    if(this.editShowHide)
                    // this.editData=this.kursData[index];
                    break;
                case "update":
                    this.editShowHide=!this.editShowHide;
                default:
            }

        },

    }
});