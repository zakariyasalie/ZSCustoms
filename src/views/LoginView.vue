<template id="Login">
    <section id="login" class="login-section">
      <div class="background-container">
        <img src="https://zakariyasalie.github.io/allimages/images/blueBMW.jpg" alt="Background" loading="lazy" class="background-image">
      </div>
      <div class="container login-container">
        <div class="row justify-content-center">
          <h2 class="text-uppercase mb-4 login-title" data-aos="fade-left">Login</h2>
        </div>
        <div class="row my-2 justify-content-center">
          <form class="form login-form" @submit.prevent="login">
            <div class="content-box">
              <div class="form-control-wrapper mb-3">
                <label for="email" class="form-label text-center"  >Email address</label>
                <input type="email" id="email" class="form-control" placeholder="Email" v-model="payload.user_Email"
                  pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
              </div>
              <div class="form-control-wrapper mb-3">
                <label for="password" class="form-label text-center">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Password" v-model="payload.user_Pass"
                  minlength="4" required />
              </div>
              <div class="form-control-wrapper d-flex justify-content-between align-items-center">
                <button type="submit" class="btn1">Login</button>
              </div>
              <div class="form-control-wrapper mt-3 d-flex justify-content-between">
                <router-link to="/register">
                  <button class="btn1">Sign up</button>
                </router-link>
                <button class="btn1">Forgot Password</button>
              </div>
              <div class="text-center mt-3">
                <router-link to="/register"><a class="btn-link">Don't have an account?</a></router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
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
  .login-section {
    position: relative;
    text-align: center;
    padding: 5rem;
    color: white;
    overflow: hidden;
  }
  
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .content-box {
    border: 2px solid #1abc9c;
    background-color: rgba(44, 62, 80, 0.9);
    padding: 1rem;
    margin-bottom: 1rem;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
  
  .content-box:hover {
    transform: scale(1.05);
    border-color: #1abc9c;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  
  .login-title {
    color: #ecf0f1;
  }
  
  /* Flexbox for form alignment */
  .form-control-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  .form-label {
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  /* Ensuring buttons are the same size */
  .form-control-wrapper button {
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 16px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s, transform 0.3s;
    width: 100%;
  }
  
  .form-control-wrapper button:hover {
    color: #1abc9c;
    background-color: #2c3e50;
    transform: scale(1.05);
  }
  
  .text-center.mt-3 {
    margin-top: 1.5rem;
  }
  
  .btn1 {
    display: inline-block;
    padding: 0.75rem;
    border: 2px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s, transform 0.3s;
  }
  
  .btn1:hover {
    color: #1abc9c;
    background-color: #2c3e50;
    transform: scale(1.05);
  }
  
  .btn-link {
    color: #1abc9c;
    text-decoration: underline;
    cursor: pointer;
  }
  
  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    .login-section {
      padding: 2rem;
    }
  
    .content-box {
      padding: 0.5rem;
    }
  
    .login-title {
      font-size: 1.5rem;
      padding: 0.5rem;
    }
  }
  
  @media (max-width: 576px) {
    .content-box {
      padding: 0.25rem;
    }
  
    .login-title {
      font-size: 1.25rem;
      padding: 0.25rem;
    }
  }
</style>  