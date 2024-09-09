<template>
  <section class="products-section">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>
    <!-- Main Content Container -->
    <div class="content-container mt-4">
      <h2 class="display-2 text-center mb-4">Products</h2>

      <!-- Search and Sort Bar -->
      <div class="d-flex justify-content-between mb-4">
        <!-- Search Bar -->
        <input 
          type="text" 
          v-model="searchQuery" 
          class="form-control w-50" 
          placeholder="Search for products..."
          @input="filterProducts"
        />
        
        <!-- Sort By Dropdown -->
        <select class="form-select w-25" v-model="sortOption" @change="sortProducts">
          <option value="default">Sort By</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <!-- Product Grid -->
      <div class="row">
        <!-- Use col-12 col-md-4 to create a 3-column layout on medium to larger screens -->
        <div class="col-12 col-md-4 mb-4" v-for="product in filteredProducts" :key="product.productID">
          <CardComp>
            <template #cardHeader>
              <img 
                :src="product.prodUrl" 
                loading="lazy" 
                :alt="product.prodName"
                class="img-fluid"
              />
            </template>
            <template #cardBody>
              <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
              <p class="lead">
                <span class="text-success fw-bold">Amount</span>: ${{ product.amount }}
              </p>
              <div class="button-wrapper d-flex justify-content-between mt-3">
                <router-link :to="{ name: 'product', params: { id: product.productID } }">
                  <button class="btn btn-success">View</button>
                </router-link>
                <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
              </div>
            </template>
          </CardComp>
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-if="filteredProducts.length === 0">
        <SpinnerComp />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp1.vue';

export default {
  components: {
    CardComp,
    SpinnerComp,
  },
  setup() {
    const store = useStore();
    const searchQuery = ref('');
    const sortOption = ref('default');
    const products = computed(() => store.state.products);
    const filteredProducts = ref([]);

    // Watch for changes in products, searchQuery, and sortOption to update filteredProducts
    watch([products, searchQuery, sortOption], () => {
      filterProducts();
      sortProducts();
    }, { deep: true });

    // Fetch products on mount
    onMounted(() => {
      store.dispatch('getProducts').then(() => {
        filteredProducts.value = [...products.value];
      });
    });

    // Method to add products to the cart
    const addToCart = (product) => {
      store.dispatch('addToCart', product);
    };

    // Method to filter products based on search query
    const filterProducts = () => {
      const query = searchQuery.value.toLowerCase();
      filteredProducts.value = products.value.filter(product =>
        product.prodName.toLowerCase().includes(query)
      );
    };

    // Method to sort products based on selected option
    const sortProducts = () => {
      if (filteredProducts.value.length === 0) return;

      if (sortOption.value === 'nameAsc') {
        filteredProducts.value.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (sortOption.value === 'nameDesc') {
        filteredProducts.value.sort((a, b) => b.prodName.localeCompare(a.prodName));
      } else if (sortOption.value === 'priceAsc') {
        filteredProducts.value.sort((a, b) => a.amount - b.amount);
      } else if (sortOption.value === 'priceDesc') {
        filteredProducts.value.sort((a, b) => b.amount - a.amount);
      }
    };

    return {
      searchQuery,
      sortOption,
      filteredProducts,
      addToCart,
      filterProducts,
      sortProducts,
    };
  },
};
</script>

<style scoped>
.products-section {
  position: relative;
  padding: 20px 0;
  min-height: 100vh;
  overflow: hidden;
  margin-top: auto;
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

.card-title, .lead {
  font-size: 18px;
  color: white;
}

.button-wrapper {
  margin-top: 20px;
}

.btn-success {
  background-color: #1abc9c;
  border-color: #1abc9c;
  color: #fff;
}

.btn-dark {
  background-color: #2c3e50;
  border-color: #2c3e50;
  color: #fff;
}

.btn {
  margin: 10px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
