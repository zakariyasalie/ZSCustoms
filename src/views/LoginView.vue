<template id="Login">
    <div class="container login-container">
      <div class="row justify-content-center">
        <h2 class="display-2">Login</h2>
      </div>
      <div class="row my-2 justify-content-center">
        <form class="form login-form" @submit.prevent="login">
          <div class="form-control-wrapper mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" id="email" class="form-control" placeholder="Email" v-model="payload.user_Email"
              pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
          </div>
          <div class="form-control-wrapper mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" placeholder="Password" v-model="payload.user_Pass"
              minlength="4" required />
          </div>
          <div class="form-control-wrapper d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-success">Login</button>
            <router-link to="/register">
              <a class="btn btn-link">Don't have an account?</a>
            </router-link>
          </div>
          <div class="form-control-wrapper mt-3 d-flex justify-content-between">
            <button class="btn btn-link">Forgot Password</button>
            <router-link to="/register">
              <button class="btn btn-dark">Sign up</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { reactive } from 'vue'
  
  const store = useStore()
  
  const payload = reactive({
    user_Email: '',
    user_Pass: ''
  })
  
  function login() {
    store.dispatch('login', { user_Email: payload.user_Email, user_Pass: payload.user_Pass })
  }
  </script>
  
  <style scoped>
  .login-container {
    padding: 40px;
    background-image: url(''); /* Apply same background as other pages */
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    background-color: rgba(255, 255, 255, 0.8); /* Similar transparency to the other pages */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-control {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .form-label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }
  
  .btn-success {
    background-color: #28a745;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  
  .btn-dark {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  
  .btn-link {
    background: none;
    color: #007bff;
    font-size: 14px;
    text-decoration: underline;
    padding: 0;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .login-form {
      padding: 15px;
      width: 100%;
    }
  }
  </style>
  