<template id="Profile">
    <section id="profile" class="login-section">
      <div class="background-container">
        <img src="https://zakariyasalie.github.io/allimages/images/blueBMW.jpg" alt="Background" loading="lazy" class="background-image">
      </div>
      <div class="container login-container">
        <div class="row justify-content-center">
          <h2 class="text-uppercase mb-4 login-title">Logout</h2>
        </div>
        <div class="row my-4 justify-content-center">
          <div class="col-md-6">
            <div class="content-box">
              <div class="card-body">
                <h5 class="card-title">User Details</h5>
                <p class="card-text"><strong>First Name:</strong> {{ userDetails?.user_Name }}</p>
                <p class="card-text"><strong>Age:</strong> {{ userDetails?.userAge }}</p>
                <p class="card-text"><strong>Gender:</strong> {{ userDetails?.Gender }}</p>
                <p class="card-text"><strong>Email:</strong> {{ userDetails?.user_Email }}</p>
                <p class="card-text"><strong>Profile:</strong> {{ userDetails?.userProfile }}</p>
                <button class="btn1 mt-3" @click="logOut">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  import { useCookies } from 'vue3-cookies';
  
  const { cookies } = useCookies()
  const store = useStore()
  
  // Get the logged-in user's details from the state
  const userDetails = computed(() => cookies.get('LegitUser')?.result)
  
  function logOut() {
    console.log(cookies.get('verifiedUser')?.result);
    store.dispatch('logOut')
  }
  </script>
  
  <style scoped>
  /* Reuse LoginView and RegisterView styling */
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
  
  .btn1 {
    display: inline-block;
    padding: 0.75rem;
    border: 2px solid white;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s, transform 0.3s;
    width: 100%;
    background-color: #2c3e50;
  }
  
  .btn1:hover {
    color: #1abc9c;
    background-color: #2c3e50;
    transform: scale(1.05);
  }
  
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
  