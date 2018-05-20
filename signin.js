
    var app = new Vue({
      el: '#app',
      data: {
          email: null,
          password: null,
          message: null,
          weather: null,
          ip: "http://localhost"//адресс нашего сервера в локальной сети
      },
      methods:{
        ShowOrderDetail : function(id){
          console.log(id);
        },
        signIn :  function(){
          var payload = {
          email: this.email,
          password: this.password
          };
          var obj = JSON.stringify( payload );
         
         // this.ip+":3012/user/signin/"
          fetch("http://localhost:3000/users/signin",{
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: obj
          })
          .then(function(response){ 
            return response.json();
           })
          .then(function(data){
            if(data.token)
            {
            localStorage.setItem('token', data.token);
            localStorage.setItem('mail', app.$data.email);
            alert(localStorage.getItem('token'));
            alert(localStorage.getItem('mail'));
            window.location.href = "index.html";
          }
          })},
           signUp :  function(){
          var payload = {
          email: this.email,
          password: this.password
          };
          var obj = JSON.stringify( payload );
          alert(obj);
          fetch(this.ip+":3012/user/signup/",{
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: obj
          })
          .then(function(res){ 
            return res.json();
           })
          .then(function(data){
            if(data.token)
            {
            localStorage.setItem('token', data.token);
            alert(localStorage.getItem('token'));
            console.log(localStorage.getItem('token'))
            window.location.href = "index.html";
          }
          })},
        }
      
  });