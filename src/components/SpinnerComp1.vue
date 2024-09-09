<template>
    <div class="spinner-container">
      <img src="https://zakariyasalie.github.io/allimages/images/logo1.png" alt="Logo" class="spinner-logo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp'
  };
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
  }
  
  .spinner-logo {
    width: 100px; /* Adjust size as needed */
    height: 100px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  