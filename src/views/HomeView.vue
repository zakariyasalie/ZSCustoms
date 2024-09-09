<template>
  <div class="home">
    <section class="hero">
      <div class="content-box">
        <div class="hero-content">
          <h1>Welcome to Safety.<br>Your Abode of Peace Awaits...</h1>
          <div class="btnbox">
            <router-link to="/about" class="btn">Get Started</router-link>
          </div>
        </div>
      </div>
    </section>

    <div>
      <!-- Header Section -->
      <section class="header-section">
        <p class="location">MOST RECENT, TOP SELLERS</p>
        <h2 class="title">Problems I can help with</h2>
        <div class="divider"></div>
      </section>

      <!-- Grid Section -->
      <section class="grid-section">
        <div class="grid-container">
          <div class="grid-item">
            <img src="https://zakariyasalie.github.io/allimages/images/TacticalFlashlight.png" alt="Problem 1" loading="lazy">
            <h3>Tactical Flashlight</h3>
            <p>This device can be used to blind & shock any threats.</p>
          </div>
          <div class="grid-item">
            <img src="https://mquanaazi.github.io/huluImages/stungun.jpg" alt="Problem 2" loading="lazy">
            <h3>StunGun</h3>
            <p>This can be used to shock any threats leaving them useless for aproximately 15 minutes.</p>
          </div>
          <div class="grid-item">
            <img src="https://mquanaazi.github.io/huluImages/bladeknife.jpg" alt="Problem 3" loading="lazy">
            <h3>Blade Knife</h3>
            <p>This can be used to stab any threats.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    }
  }
};
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

/* Navbar Styles */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.navbar-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: logoAnimation 5s infinite linear;
}

.navbar-toggle {
  display: none;
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
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
  border-radius: 4px;
  font-weight: bold;
}

.nav-links a:hover {
  color: #2c3e50;
  background-color: #1abc9c;
  transform: scale(1.05);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  background: url('https://zakariyasalie.github.io/allimages/images/background1.png') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
}

.home {
  width: 100%;
  overflow-x: hidden;
}

.btn {
  padding: 10px 10px;
  background-color: #1abc9c;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
}

.btn:hover {
  background-color: rgba(44, 62, 80, 0.9);
}

/* Header Section */
.header-section {
  text-align: center;
  padding: 50px 20px;
}

.location {
  font-size: 0.9rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title {
  font-size: 2.5rem;
  margin: 10px 0;
  color: #111;
}

.divider {
  width: 60px;
  height: 3px;
  background-color: #008000;
  margin: 20px auto;
}

/* Grid Section */
.grid-section {
  padding: 50px 20px;
  background: url('https://zakariyasalie.github.io/allimages/images/background1.png') no-repeat center center/cover;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.grid-item {
  position: relative;
  background: rgba(44, 62, 80, 0.9);
  border: 2px solid #1abc9c;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  text-align: center;
}

.grid-item:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.grid-item img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item h3 {
  margin-top: 15px;
  color: #ecf0f1;
  font-size: 1.5rem;
  font-weight: bold;
}

.grid-item p {
  margin-top: 10px;
  color: #ecf0f1;
  font-size: 1rem;
  line-height: 1.5;
}

.grid-item:hover img {
  transform: scale(1.05);
}

/* Button Box */
.btnbox {
  position: relative;
  margin-top: 15px;
}

.content-box {
  border: 2px solid #1abc9c;
  background-color: rgba(44, 62, 80, 0.9);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  color: #fff;
}

.content-box:hover {
  transform: scale(1.05);
  border-color: #1abc9c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  color: #1abc9c;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
