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
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addUserModal">Add New User</button>
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
                  <button class="btn btn-dark" @click="populateEditUser(user)" data-bs-toggle="modal" data-bs-target="#editUserModal">Edit</button>
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
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">Add New Product</button>
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
                  <button class="btn btn-dark" @click="populateEditProduct(product)" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button>
                  <button class="btn btn-danger" @click="deleteProduct(product.prod_ID)">Delete</button>
                </div>
              </template>
            </CardComp>
          </div>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addUserModalLabel">Add New User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitUserForm">
              <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input type="text" v-model="userName" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="userEmail" class="form-label">Email</label>
                <input type="email" v-model="userEmail" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="userAge" class="form-label">Age</label>
                <input type="number" v-model="userAge" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <input type="text" v-model="userRole" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="userProfile" class="form-label">Profile Picture URL</label>
                <input type="text" v-model="userProfile" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success">Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit User Modal -->
    <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editUserModalLabel">Edit User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitUserForm">
              <!-- Same form structure as Add User but populated with existing data -->
              <div class="mb-3">
                <label for="userName" class="form-label">Name</label>
                <input type="text" v-model="userName" class="form-control" required>
              </div>
              <!-- Add other fields here -->
              <button type="submit" class="btn btn-dark">Update User</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitProductForm">
              <div class="mb-3">
                <label for="productName" class="form-label">Name</label>
                <input type="text" v-model="productName" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="productPrice" class="form-label">Price</label>
                <input type="number" v-model="productPrice" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="productCategory" class="form-label">Category</label>
                <input type="text" v-model="productCategory" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="productUrl" class="form-label">Image URL</label>
                <input type="text" v-model="productUrl" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Product Modal -->
    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitProductForm">
              <!-- Same form structure as Add Product but populated with existing data -->
              <div class="mb-3">
                <label for="productName" class="form-label">Name</label>
                <input type="text" v-model="productName" class="form-control" required>
              </div>
              <!-- Add other fields here -->
              <button type="submit" class="btn btn-dark">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      userSearchQuery: '',
      productSearchQuery: '',
      // Form fields
      userName: '',
      userEmail: '',
      userAge: '',
      userRole: '',
      userProfile: '',
      productName: '',
      productPrice: '',
      productCategory: '',
      productUrl: '',
      // Dummy data for now
      users: [
        { user_ID: 1, user_Name: 'John Doe', user_Email: 'john@example.com', userAge: 28 },
        { user_ID: 2, user_Name: 'Jane Smith', user_Email: 'jane@example.com', userAge: 24 }
      ],
      products: [
        { prod_ID: 1, prod_Name: 'Pepper Spray', price: 10, Category: 'Safety', prod_Url: 'https://via.placeholder.com/150' },
        { prod_ID: 2, prod_Name: 'Tactical Flashlight', price: 20, Category: 'Defense', prod_Url: 'https://via.placeholder.com/150' }
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.user_Name.toLowerCase().includes(this.userSearchQuery.toLowerCase()));
    },
    filteredProducts() {
      return this.products.filter(product => product.prod_Name.toLowerCase().includes(this.productSearchQuery.toLowerCase()));
    }
  },
  methods: {
    submitUserForm() {
      // Handle add/edit user logic here
    },
    submitProductForm() {
      // Handle add/edit product logic here
    },
    populateEditUser(user) {
      // Pre-fill user data for editing
      this.userName = user.user_Name;
      this.userEmail = user.user_Email;
      this.userAge = user.userAge;
      this.userRole = 'Admin'; // Add actual field if necessary
      this.userProfile = 'https://via.placeholder.com/150'; // Add actual field if necessary
    },
    populateEditProduct(product) {
      // Pre-fill product data for editing
      this.productName = product.prod_Name;
      this.productPrice = product.price;
      this.productCategory = product.Category;
      this.productUrl = product.prod_Url;
    },
    deleteUser(userId) {
      // Handle user deletion logic
    },
    deleteProduct(productId) {
      // Handle product deletion logic
    }
  }
};
</script>

<style scoped>
.admin-section {
  padding: 20px;
}

.background-container {
  position: relative;
}

.background-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.content-container {
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
