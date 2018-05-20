var app = new Vue({
  el: '#app',
  data: {
    email: null,
    password: null,
    message: null,
  },
  methods:{
    signup :  function(){
      var payload = {
      email: this.email,
      password: this.password
      };
      var obj = JSON.stringify( payload );
      alert(obj);
      fetch("http://localhost:3000/users/signup/",{
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: obj
      })
      .then(function(response){ 
      alert("!!!");
      if(response.status(200)){
        window.location.href = "signin.html";
      }
      return response;
      })
      .then(function(data){
        if(data.token)
        {
        localStorage.setItem('token', data.token);
        alert(localStorage.getItem('token'));
        console.log(localStorage.getItem('token'))
        window.location.href = "signin.html";
        }
        else{
        alert("!!!");
        }
      })
    }         
  }        
});