window.onload = function () {
  var vueInstance = new Vue({
      el: '#login',
      data: {
          username: '',
          password: '',
          error: ''
      },
      methods: {
          login(){
            if (this.username == 'tunganh' && this.password == '12345') {
              this.error = 'Login successful';
            } else {
              this.error = 'Wrong username or password';
            }
          }
        }
  });
}