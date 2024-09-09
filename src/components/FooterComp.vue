<template>
    <footer>
      <a href="#" @click="scrollToTop">&copy; {{ currentYear }} EmpowerGear</a>
      <a href="https://github.com/zakariyasalie" target="_blank" class="github-icon">
        <i class="fab fa-github"></i>
      </a>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #2c3e50;
    color: white;
  }
  
  footer a {
    color: white;
    text-decoration: none;
    margin: 0 10px; /* Add margin between text and icon */
  }
  
  footer a:hover {
    color: #1abc9c;
  }
  
  .github-icon {
    font-size: 1.5rem; /* Adjust icon size */
    margin-left: 10px; /* Adjust spacing */
  }
  </style>
  