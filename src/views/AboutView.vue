<!-- src/views/Home.vue -->
<template>
  <section id="about" class="about-me">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="container">
      <div class="grid gap-3 row-gap-1">
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
        <div class="p-2 g-col-3 border-bottom">
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 about-me-title" id="about-me-heading" data-aos="fade-left">About me</h2>
            <p class="text-center about-me-description" id="text-about-me">
              Welcome to EmpowerGear, your trusted source for high-quality self-defense products. At EmpowerGear, we are committed to empowering individuals with the tools they need to stay safe and protect themselves in any situation. From compact and discreet items like the Concealed Self-Defense Ring and Personal Alarm to powerful options like Stun Guns and Tactical Flashlights, our curated selection is designed to offer peace of mind and security. Whether you're looking for everyday carry items or advanced tactical gear, EmpowerGear is here to provide you with reliable products that you can depend on when it matters most.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="content-box">
            <p class="about-me-content">Company Name:</p>
            <p class="about-me-content">Address:</p>
            <p class="about-me-content">Established in:</p>
            <p class="about-me-content">Number:</p>
            <p class="about-me-content">Email:</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="content-box">
            <p class="about-me-content">EmpowerGear</p>
            <p class="about-me-content">Landsdowne, Cape Town, 7764, Western Cape, South Africa</p>
            <p class="about-me-content">2015-2024</p>
            <p class="about-me-content">(021) 699 8000</p>
            <p class="about-me-content">EmpowerGear.contact.us@gmail.com</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 mb-4">
          <div class="content-box">
            <div class="d-flex flex-column about-me-actions">
              <a class="btn1 about-me-contact-btn mb-4" href="/products" id="link1button">View Products</a>
              <a class="btn1 about-me-download-btn" href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-me {
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

.about-me-title {
  color: #ecf0f1;
}

.about-me-description {
  color: #ecf0f1;
}

.about-me-content {
  margin-bottom: 1rem;
  color: #ecf0f1;
  transition: color 0.3s;
}

.about-me-content:hover {
  color: #1abc9c;
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
}

.btn1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  color: #2c3e50;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(20, end) infinite;
}

.btn1:hover::after {
  color: #1abc9c;
}

.btn1:hover {
  color: #1abc9c;
  background-color: #2c3e50;
  transform: scale(1.05);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .about-me {
    padding: 2rem;
  }

  .container {
    padding: 1rem;
  }

  .content-box {
    padding: 0.5rem;
  }

  .about-me-title {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  .about-me-description {
    font-size: 0.875rem;
  }

  .about-me-content {
    font-size: 0.875rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .btn1 {
    padding: 0.5rem;
  }
}

@media (max-width: 576px) {
  .content-box {
    padding: 0.25rem;
  }

  .about-me-title {
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  .about-me-description {
    font-size: 0.75rem;
  }

  .about-me-content {
    font-size: 0.75rem;
  }

  .btn1 {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
