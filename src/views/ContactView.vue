<template>
  <section id="contact" class="about-me">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
      <!-- Main Content -->
      <div class="row">
        <div class="col-12 text-center">
          <div class="content-box">
            <h2 class="text-uppercase mb-4 about-me-title" id="about-me-heading" data-aos="fade-left">Contact</h2>
            <p class="text-center about-me-description" id="text-about-me">
              Let's get in touch! Fill out the form below to send me a message.
            </p>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3">
          <form @submit.prevent="handleSubmit" class="content-box">
            <div class="form-group">
              <label for="name" class="about-me-content">Name:</label>
              <input type="text" id="name" v-model="form.name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="email" class="about-me-content">Email:</label>
              <input type="email" id="email" v-model="form.email" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="message" class="about-me-content">Message:</label>
              <textarea id="message" v-model="form.message" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn1 about-me-contact-btn ">Submit</button>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.name && this.form.email && this.form.message) {
        // Handle form submission
        alert('Form submitted successfully!');
        this.form = { name: '', email: '', message: '' };
      } else {
        alert('Please fill in all fields.');
      }
    }
  }
};
</script>

<style scoped>
.about-me {
  position: relative;
  text-align: center;
  padding: 5rem;
  color: #1abc9c; /* Text color */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px); /* For Safari */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-box {
  border: 2px solid #2c3e50; /* Border style */
  background-color: rgba(44, 62, 80, 0.9); /* Background similar to navbar */
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; /* Smooth transitions */
}

.content-box:hover {
  transform: scale(1.05); /* Slightly increase size on hover */
  border-color: #1abc9c; /* Light green border color on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
}

.about-me-title {
  color: #1abc9c; /* Light text color */
}

.about-me-description {
  color: #1abc9c; /* Light text color */
}

.about-me-content {
  margin-bottom: 1rem;
  color: #1abc9c; /* Light text color */
  transition: color 0.3s; /* Smooth color transition */
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  outline: none;
  border-color: #1abc9c;
  box-shadow: 0 0 0 0.2rem rgba(26, 188, 156, 0.25);
}

.btn1 {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid #2c3e50; /* Border style */
  color: #1abc9c; /* Text color */
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  position: relative; /* Ensure the relative positioning for the pseudo-element */
  overflow: hidden; /* Hide overflow from typing animation */
  transition: color 0.3s, background-color 0.3s, transform 0.3s; /* Smooth transitions */
}

.btn1::after {
  content: attr(data-text); /* Display content from data-text attribute */
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  color: #2c3e50; /* Text color */
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(20, end) infinite; /* Adjust steps as needed */
}

.btn1:hover::after {
  color: #1abc9c; /* Light green text color on hover */
}

.btn1:hover {
  color: #1abc9c; /* Light green text color on hover */
  background-color: #ecf0f1; /* Light background color on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
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
    padding: 3rem 1rem; /* Adjust padding */
  }

  .container {
    padding: 1rem;
  }

  .content-box {
    padding: 0.75rem;
  }

  .about-me-title {
    font-size: 1.5rem; /* Adjust font size */
    padding: 0.5rem;
  }

  .about-me-description {
    font-size: 0.875rem; /* Adjust font size */
  }

  .about-me-content {
    font-size: 0.875rem; /* Adjust font size */
  }

  .form-control {
    font-size: 0.875rem; /* Adjust font size */
  }

  .btn1 {
    padding: 0.5rem 1rem; /* Adjust padding */
    font-size: 0.875rem; /* Adjust font size */
  }
}

@media (max-width: 576px) {
  .about-me {
    padding: 2rem 1rem; /* Adjust padding */
  }

  .container {
    padding: 0.5rem;
  }

  .content-box {
    padding: 0.5rem;
  }

  .about-me-title {
    font-size: 1.25rem; /* Adjust font size */
    padding: 0.25rem;
  }

  .about-me-description {
    font-size: 0.75rem; /* Adjust font size */
  }

  .about-me-content {
    font-size: 0.75rem; /* Adjust font size */
  }

  .form-control {
    font-size: 0.75rem; /* Adjust font size */
  }

  .btn1 {
    padding: 0.5rem; /* Adjust padding */
    font-size: 0.75rem; /* Adjust font size */
  }
}
</style>
