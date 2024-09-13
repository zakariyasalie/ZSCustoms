<template>
  <section class="products-section">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/blueR8.jpg" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="content-container mt-4">
      <h2 class="display-2 text-center mb-4">Products</h2>

      <div class="d-flex justify-content-between mb-4">
        <input 
          type="text" 
          v-model="searchQuery" 
          class="form-control w-50" 
          placeholder="Search for products..."
        />
        <select class="form-select w-25" v-model="sortOption">
          <option value="default">Sort By</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      <div class="row">
        <div class="col-12 col-md-4 mb-4" v-for="product in filteredProducts" :key="product.prod_ID">
          <CardComp>
            <template #cardHeader>
              <img 
                :src="product.prod_Url" 
                loading="lazy" 
                :alt="product.prod_Name"
                class="img-fluid"
              />
            </template>
            <template #cardBody>
              <h5 class="card-title fw-bold">{{ product.prod_Name }}</h5>
              <p class="lead">
                <span class="text-success fw-bold">price</span>: ${{ product.price }}
              </p>
              <div class="button-wrapper d-flex justify-content-between mt-3">
                <router-link :to="{ name: 'product', params: { id: product.prod_ID } }">
                  <button class="btn btn-success">View</button>
                </router-link>
                <button class="btn btn-dark" @click="addToCart(product)">Add to Cart</button>
              </div>
            </template>
          </CardComp>
        </div>
      </div>
      <div v-if="filteredProducts.length === 0 && searchQuery.length > 0">
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
    const products = computed(() => store.state.products || []);
    const filteredProducts = ref([]);

    onMounted(async () => {
      await store.dispatch('getProducts');
      filterProducts();
    });

    watch([searchQuery, sortOption], () => {
      filterProducts();
      sortProducts();
    });

    const addToCart = (product) => {
      store.dispatch('addToCart', product);
    };

    const filterProducts = () => {
      const query = searchQuery.value.toLowerCase();
      filteredProducts.value = products.value.filter(product =>
        product.prod_Name.toLowerCase().includes(query)
      );
    };

    const sortProducts = () => {
      if (filteredProducts.value.length === 0) return;

      if (sortOption.value === 'nameAsc') {
        filteredProducts.value.sort((a, b) => a.prod_Name.localeCompare(b.prod_Name));
      } else if (sortOption.value === 'nameDesc') {
        filteredProducts.value.sort((a, b) => b.prod_Name.localeCompare(a.prod_Name));
      } else if (sortOption.value === 'priceAsc') {
        filteredProducts.value.sort((a, b) => a.price - b.price);
      } else if (sortOption.value === 'priceDesc') {
        filteredProducts.value.sort((a, b) => b.price - a.price);
      }
    };

    return {
      searchQuery,
      sortOption,
      filteredProducts,
      addToCart,
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
