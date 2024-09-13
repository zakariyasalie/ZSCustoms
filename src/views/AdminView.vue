<template>
  <section class="admin-section">
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/blueR8.jpg" alt="Background" loading="lazy" class="background-image">
    </div>
    <div class="content-container mt-4">
      <h2 class="display-2 text-center mb-4">Admin Dashboard</h2>

      <!-- User Management -->
      <div class="mb-4">
        <h3 class="text-center mb-3 ">Manage Users</h3>
        <div class="d-flex justify-content-between mb-4">
          <input 
            type="text" 
            v-model="userSearchQuery" 
            class="form-control w-50" 
            placeholder="Search for users..."
          />
          <button class="btn btn-success" @click="addUser">Add New User</button>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 mb-4" v-for="user in filteredUsers" :key="user.user_ID">
            <CardComp>
              <template #cardHeader>
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="User Profile"
                  class="img-fluid"
                />
              </template>
              <template #cardBody>
                <h5 class="card-title fw-bold">{{ user.user_Name }}</h5>
                <p class="lead">
                  <span class="text-success fw-bold">Age</span>: {{ user.userAge }}<br>
                  <span class="text-success fw-bold">Email</span>: {{ user.user_Email }}
                </p>
                <div class="button-wrapper d-flex justify-content-between mt-3">
                  <button class="btn btn-dark" @click="editUser(user.user_ID)">Edit</button>
                  <button class="btn btn-danger" @click="deleteUser(user.user_ID)">Delete</button>
                </div>
              </template>
            </CardComp>
          </div>
        </div>
      </div>

      <!-- Product Management -->
      <div>
        <h3 class="text-center mb-3">Manage Products</h3>
        <div class="d-flex justify-content-between mb-4">
          <input 
            type="text" 
            v-model="productSearchQuery" 
            class="form-control w-50" 
            placeholder="Search for products..."
          />
          <button class="btn btn-success" @click="addProduct">Add New Product</button>
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
                  <span class="text-success fw-bold">Price</span>: ${{ product.price }}<br>
                  <span class="text-success fw-bold">Category</span>: {{ product.Category }}
                </p>
                <div class="button-wrapper d-flex justify-content-between mt-3">
                  <button class="btn btn-dark" @click="editProduct(product.prod_ID)">Edit</button>
                  <button class="btn btn-danger" @click="deleteProduct(product.prod_ID)">Delete</button>
                </div>
              </template>
            </CardComp>
          </div>
        </div>
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
    const userSearchQuery = ref('');
    const productSearchQuery = ref('');
    const users = computed(() => store.state.users || []);
    const products = computed(() => store.state.products || []);
    const filteredUsers = ref([]);
    const filteredProducts = ref([]);

    onMounted(async () => {
      await store.dispatch('getUsers');
      await store.dispatch('getProducts');
      filterUsers();
      filterProducts();
    });

    watch([userSearchQuery, productSearchQuery], () => {
      filterUsers();
      filterProducts();
    });

    const addUser = () => {
      // Logic to add a new user
    };

    const editUser = (user_ID) => {
      // Logic to edit user
    };

    const deleteUser = (user_ID) => {
      // Logic to delete user
      store.dispatch('deleteUser', user_ID).then(() => filterUsers());
    };

    const addProduct = () => {
      // Logic to add a new product
    };

    const editProduct = (prod_ID) => {
      // Logic to edit product
    };

    const deleteProduct = (prod_ID) => {
      // Logic to delete product
      store.dispatch('deleteProduct', prod_ID).then(() => filterProducts());
    };

    const filterUsers = () => {
      const query = userSearchQuery.value.toLowerCase();
      filteredUsers.value = users.value.filter(user =>
        user.user_Name.toLowerCase().includes(query)
      );
    };

    const filterProducts = () => {
      const query = productSearchQuery.value.toLowerCase();
      filteredProducts.value = products.value.filter(product =>
        product.prod_Name.toLowerCase().includes(query)
      );
    };

    return {
      userSearchQuery,
      productSearchQuery,
      filteredUsers,
      filteredProducts,
      addUser,
      editUser,
      deleteUser,
      addProduct,
      editProduct,
      deleteProduct,
    };
  },
};
</script>

<style scoped>
.admin-section {
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

.btn-danger {
  background-color: #e74c3c;
  border-color: #e74c3c;
  color: #fff;
}

.btn {
  margin: 10px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
