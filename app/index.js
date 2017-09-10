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
        kursData1:[],
        kursData:[],
        studentList:[
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
            {id:"12564698523",name:"Can",surName:"Demir",class:"Tl-12V"},
        ],

    },
    created:function(){
        axios.get('http://127.0.0.1:5000/course').then(

           response=>{
               this.kursData=response.data.result;
               console.log(this.kursData);
               console.log(response.data.result);
        })
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

                    // console.log(this.editData);
                    // console.log(this.kursData[index].educator)
                    break;
                case "update":
                    this.editShowHide=!this.editShowHide;
                    // console.log("update");
                    // console.log( this.editData);
                default:
            }

        },

    }
});