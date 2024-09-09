<template>
  <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Optional props for card header, body, etc.
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #1abc9c;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0;
  background-color: #2c3e50;
  margin: 20px 0;
  color: white;
  height: 450px; /* Fixed height for uniform card size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.card-header {
  height: 250px; /* Adjusted height for image consistency */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the header without stretching */
}

.card-body {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h5.card-title {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

p.lead {
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
}

.button-wrapper .btn {
  margin: 10px;
}

button.btn-success {
  background-color: #1abc9c;
  border-color: #1abc9c;
}

button.btn-dark {
  background-color: #2c3e50;
  border-color: #2c3e50;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
