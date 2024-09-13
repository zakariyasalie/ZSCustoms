<template>
  <nav :class="{ 'nav-open': isNavOpen }">
   <div class="navbar-header">
     <img src="https://zakariyasalie.github.io/allimages/images/logo1.png" alt="Logo" class="navbar-logo">
     <button class="navbar-toggle" @click="toggleNav" aria-label="Toggle Navigation">
       &#9776; <!-- Hamburger menu icon -->
     </button>
   </div>
   <div class="nav-links">
     <router-link to="/" @click="closeNav">Home</router-link>
     <router-link to="/about" @click="closeNav">About</router-link>
     <router-link to="/contact" @click="closeNav">Contact</router-link>
     <router-link to="/Register" @click="closeNav">Register</router-link>
     <router-link to="/Login" @click="closeNav">Login</router-link>
     <router-link to="/products" @click="closeNav">Products</router-link>
     <router-link to="/checkout" @click="closeNav">Checkout</router-link>
     <router-link to="/Profile" @click="closeNav">Profile</router-link>
     <router-link to="/admin" @click="closeNav">Admin</router-link>
   </div>
 </nav>
 </template>
 
 <script>
 export default {
   name: 'NavbarComp',
   data() {
     return {
       isNavOpen: false,
     };
   },
   methods: {
     toggleNav() {
       this.isNavOpen = !this.isNavOpen;
     },
     closeNav() {
       this.isNavOpen = false;
     },
   },
 };
 </script>
 
 <style scoped>
 @keyframes logoAnimation {
   0%, 100% {
     transform: rotate(0deg) scale(1);
   }
   50% {
     transform: rotate(360deg) scale(1.1);
   }
 }
 
 nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #2c3e50; /* Darker background for better contrast */
   padding: 1rem 2rem;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 1000;
   transition: transform 0.3s ease; /* Smooth transition for opening/closing */
 }
 
 .navbar-logo {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   animation: logoAnimation 5s infinite linear; /* Infinite animation */
 }
 
 .navbar-toggle {
   display: none; /* Hide toggle button by default */
   font-size: 1.5rem;
   color: #ecf0f1;
   background: none;
   border: none;
   cursor: pointer;
 }
 
 .nav-links {
   display: flex;
   justify-content: space-around;
   width: 100%;
 }
 
 .nav-links a {
   color: #ecf0f1; /* Light text color */
   text-decoration: none;
   padding: 0.5rem 1rem;
   transition: color 0.3s, background-color 0.3s, transform 0.3s; /* Smooth transitions */
   border-radius: 4px; /* Slightly rounded corners */
   font-weight: bold; /* Bold font for better readability */
 }
 
 .nav-links a:hover {
   color: #2c3e50; /* Darker text color on hover */
   background-color: #1abc9c; /* Light green background on hover */
   transform: scale(1.05); /* Slightly increase size on hover */
 }
 
 .nav-links a:focus {
   outline: none;
   background-color: #3498db; /* Light blue background on focus */
   color: white; /* Ensure text is readable on blue background */
 }
 
 .nav-links a:active {
   transform: scale(0.95); /* Slightly decrease size when active (clicked) */
 }
 
 /* Media Queries */
 @media (max-width: 768px) {
   .navbar-header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
   }
 
   .navbar-toggle {
     display: block; /* Show the toggle button on mobile */
   }
 
   .nav-links {
     display: none; /* Hide links by default on mobile */
     flex-direction: column;
     align-items: center;
     position: absolute;
     top: 100%;
     left: 0;
     width: 100%;
     background-color: #2c3e50; /* Darker background for better contrast */
     z-index: 999;
     transform: translateY(-100%);
     transition: transform 0.3s ease;
   }
 
   .nav-open .nav-links {
     transform: translateY(0); /* Slide down animation when navbar is open */
   }
 
   .nav-links a {
     margin: 0.5rem 0;
     width: 100%;
     text-align: center;
   }
 }
 
 @media (max-width: 480px) {
   nav {
     padding: 0.5rem;
   }
 
   .navbar-logo {
     width: 40px;
     height: 40px;
   }
 
   .navbar-toggle {
     font-size: 1.2rem;
   }
 
   .nav-links a {
     font-size: 0.9rem;
     padding: 0.4rem 0.8rem;
   }
 }
 </style>
 