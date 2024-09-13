<template>
    <section class="product-section">
      <div class="background-container">
        <img src="https://zakariyasalie.github.io/allimages/images/blueR8.jpg" alt="Background" loading="lazy" class="background-image">
      </div>
      <div class="content-container mt-4">
        <div v-if="product">
          <h1 class="display-2">{{ product.name }}</h1>
          <p class="lead">{{ product.description }}</p>
          <p class="price">Price: ${{ product.price }}</p>
          <img :src="product.image" alt="Product Image" class="product-image">
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  const apiURL = "https://zscustoms-1.onrender.com/";
  
  export default {
    data() {
      return {
        product: null
      };
    },
    async created() {
      const prod_ID = this.$route.params.id;
      try {
        const response = await fetch(`${apiURL}products/${prod_ID}`);
        if (response.ok) {
          this.product = await response.json();
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-section {
    position: relative;
    padding: 20px 0;
    min-height: 100vh;
    overflow: hidden;
    margin-top: 100px;
  }
  
  .background-container {
    position: fixed;
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
    -webkit-filter: blur(8px);
  }
  
  .content-container {
    position: relative;
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: rgba(44, 62, 80, 0.9);
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .display-2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }
  
  .lead {
    font-size: 18px;
    color: white;
  }
  
  .price {
    font-size: 18px;
    color: white;
    margin-top: 10px;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  