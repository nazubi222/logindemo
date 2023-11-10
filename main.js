window.onload = function () {
var vueInstance = new Vue({
  el: '#login',
  data: {
    username: '',
    password: '',
    error: ''
  },
  methods: {
    async login() {
        // if (this.username == 'tunganh' && this.password == '12345') {
        //   this.error = 'Login successful';
        // } else {
        //   this.error = 'Wrong username or password';
        // }
        const article = { "Username": username, "Password": password };
        const response = await axios.post("https://localhost:44300/api/accounts/login", article);
        console.log(response);
      }
    }    
});
}