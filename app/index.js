require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');

require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');



import Vue from 'vue';
import axios from 'axios';




new Vue({
    el:'#app',
    data:{
        message:"Hello Vue",
        commanShowHide:true,
        addShowHide:false,
        editShowHide:false,
        absentShowHide:false,
        course:[],
        courseStudent:[],
        teacher:[],
        newTeacher:{},
        //student:[],
        newStudent:{},
        newCourse:{},
        editCourse:{},
        editData:{},
    },
   
    mounted() {
        $("#startDate").datepicker().on(
           "changeDate", () => {this.newCourse.start_date = $('#startDate').val()}
        );
        $("#endDate").datepicker().on(
            "changeDate", () => {this.newCourse.end_date = $('#endDate').val()}
         );
         $("#editStartDate").datepicker().on(
            "changeDate", () => {this.editCourse.start_date = $('#editStartDate').val()}
         );
         $("#editEndDate").datepicker().on(
            "changeDate", () => {this.editCourse.end_date = $('#editEndDate').val()}
         );

    },
    created:function(){
        axios.get('http://127.0.0.1:5000/course').then(
           response=>{
               this.course=response.data.result;
        });

        // axios.get('http://127.0.0.1:5000/course/student').then(
        //     response=>{
        //         this.courseStudent=response.data.result;
        //  });

        axios.get('http://127.0.0.1:5000/teacher').then(
            response=>{
                this.teacher=response.data.result;
        });
    },
    methods:{
        saveCourse:function(){
            axios.post('http://127.0.0.1:5000/course',this.newCourse)
            .then(
                response=>{
                    this.newCourse.id=response.data.id;
                    axios.get('http://127.0.0.1:5000/course').then(
                        response=>{
                            this.course=response.data.result;
                     });
                }
            )
        },
        saveTeacher:function(){
            axios.post('http://127.0.0.1:5000/teacher',this.newTeacher).then(
                response=>{
                    axios.get('http://127.0.0.1:5000/teacher').then(
                        response=>{
                            this.teacher=response.data.result;
                            this.newTeacher={};
                        }
                    )
                }
            )

        },
        saveStudent:function(){
            axios.post('http://127.0.0.1:5000/student',this.newStudent)
            .then(
                response=>{
                    // console.log(response.data)
                    this.newStudent=response.data;
                    this.saveCourseStudent();
                }
            )

        },
        saveCourseStudent:function(){
            axios.post('http://127.0.0.1:5000/course/student',{Course_id:this.newCourse.id,Student_id:this.newStudent.id}).then(
                response=>{
                    axios.get('http://127.0.0.1:5000/course/student/'+this.newCourse.id).then(
                        response=>{
                            this.courseStudent=response.data.result;
                            this.newStudent={};
                        });
                }
            )
        },

        findStudent:function(){
              //console.log(this.newStudent.identity) 
              axios.get('http://127.0.0.1:5000/student/'+this.newStudent.identity).then(
                  response=>{
                    this.newStudent=response.data;
                      console.log(response.data);
                  }
              )
        },
        
        showHide:function(item,id){
            switch(item){
                case "add":
                    this.addShowHide=!this.addShowHide;
                    this.commanShowHide=!this.commanShowHide;
                    this.newCourse={};
                    this.courseStudent=[];
                    break;
                case "edit":
                    this.editShowHide=!this.editShowHide;
                    this.commanShowHide=!this.commanShowHide;
                    
                    if(this.editShowHide)
                        {
                            axios.get('http://127.0.0.1:5000/course/'+id).then(
                                
                                               response=>{
                                                   this.editCourse=response.data;
                                                //    console.log(response.data);
                                            });
                        }
                    break;
                case "update":
                    console.log(this.editCourse.status);
                    if(this.editCourse.status=="true")
                        this.editCourse.status=true;
                    else
                        this.editCourse.status=false;
                    
                    axios.put('http://127.0.0.1:5000/course',this.editCourse).then(
                        response=>{
                            axios.get('http://127.0.0.1:5000/course').then(
                                response=>{
                                    this.course=response.data.result;
                             });
                        });    
                    this.editShowHide=!this.editShowHide;
                    this.commanShowHide=!this.commanShowHide;
                    break;
                case "course":
                    //console.log(item);
                    this.commanShowHide=true;
                    this.absentShowHide=false;
                    this.addShowHide=false;
                    this.editShowHide=false;
                    this.editCourse=false;
                    break;
                case "absent":
                    //console.log(item);
                    this.absentShowHide=true;
                    this.commanShowHide=false;
                    this.addShowHide=false;
                    this.editShowHide=false;
                    this.editCourse=false;
                    break;
                default:
            }

        },

    },
    watch: {
        // startDate: function() {
        //     alert("DATA: " + this.startDate);
        // }
      }

});