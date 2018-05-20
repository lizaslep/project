
var app = new Vue({
    el: '#app',
    data: {
      nameCom:null,
            email:null,
            country:null,
            city:null,
            companyType:null,
             devices:[{}]
    },
    created: function(){
      this.load();          
      this.loada();
    },
    methods:{
      loada : function(){
        fetch("http://localhost:3000/users/iot/5af48fc0f4e8001a500f5e6a", {
          method: "GET",
          headers: {'Content-Type': 'application/json'}
        })
        .then(function(response){
          // alert(response.status);
          return response.json();
        })
        .then(iot=>{
                          
          this.devices=iot;
          alert(this.devices);
        })                
      },
      load : function(id){
        var header = new Headers();
        header.append('Content-Type',' application/json');
        headers.append('Authorization', 'JWT ' + this.auth.token);
        fetch("http://localhost:3000/users/user", {
          method: "get",
          headers: header
        })
        .then(function(response){
          return response.json();
        })
        .then(user=>{              
          this.nameCom=user.name;
          this.email=user.email;
          this.country=user.country;
          this.city=user.city;
          this.companyType=user.companyType;
        })                
      },
      update : function(){
        var payload = {
          name:this.nameCom,
          country:this.country,
          city:this.city,
          companyType:this.companyType
        };
        var obj = JSON.stringify( payload );
        fetch("http://localhost:3000/users/user/5af48fc0f4e8001a500f5e6a", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body:obj
        })
        .then(function(response){
          alert(response.status);
        })
      },
      }
});    
//"http://localhost:3000/users/user/5af48fc0f4e8001a500f5e6a"