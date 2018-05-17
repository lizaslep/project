var app = new Vue({
        el: '#app',
        data: {
            email: null,
            password: null,
            message: null,
        },
        methods:{
          sign :  function(){
            var payload = {
            email: this.email,
            password: this.password
            };
            var obj = JSON.stringify( payload );
            alert(obj);
            fetch("http://localhost:3000/users/signin/",{
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
            })
            }
         
          }
        
    });