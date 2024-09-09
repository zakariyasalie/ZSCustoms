<template>
  <section class="admin-section">
    <!-- Background Image Container -->
    <div class="background-container">
      <img src="https://zakariyasalie.github.io/allimages/images/background1.png" alt="Background" loading="lazy" class="background-image">
    </div>

    <!-- Main Content Container -->
    <div class="container">
      <div class="admin-header content-box">
        <h1 class="admin-title">Admin Dashboard</h1>
      </div>

      <!-- User Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">User Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>
                <button @click="openEditUserModal(user)" class="btn btn-primary btn-sm">Edit</button>
                <button @click="deleteUser(user.userID)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openUserModal" class="btn1">
            <i class="fas fa-plus"></i> Add New User
          </button>
        </div>
      </div>

      <!-- Product Management Section -->
      <div class="admin-section content-box">
        <h2 class="admin-subtitle">Product Management</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.productID">
              <td>{{ product.productID }}</td>
              <td>{{ product.prodName }}</td>
              <td>${{ product.amount }}</td>
              <td>
                <button @click="openEditProductModal(product)" class="btn btn-primary btn-sm">Edit</button>
                <button @click="deleteProduct(product.productID)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="action-buttons">
          <button @click="openProductModal" class="btn1">
            <i class="fas fa-plus"></i> Add New Product
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for Adding New Product -->
    <div v-if="showProductModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Add New Product</h2>
        <form @submit.prevent="submitProduct">
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input v-model="newProduct.prodName" type="text" id="productName" required>
          </div>
          <div class="form-group">
            <label for="productQuantity">Quantity</label>
            <input v-model="newProduct.quantity" type="number" id="productQuantity" required>
          </div>
          <div class="form-group">
            <label for="productAmount">Amount</label>
            <input v-model="newProduct.amount" type="number" id="productAmount" required>
          </div>
          <div class="form-group">
            <label for="productCategory">Category</label>
            <input v-model="newProduct.Category" type="text" id="productCategory" required>
          </div>
          <div class="form-group">
            <label for="productUrl">Product URL</label>
            <input v-model="newProduct.prodUrl" type="text" id="productUrl" required>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button @click="closeProductModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Modal for Editing Product -->
    <div v-if="showEditProductModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit Product</h2>
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label for="editProductName">Product Name</label>
            <input v-model="productToEdit.prodName" type="text" id="editProductName" required>
          </div>
          <div class="form-group">
            <label for="editProductQuantity">Quantity</label>
            <input v-model="productToEdit.quantity" type="number" id="editProductQuantity" required>
          </div>
          <div class="form-group">
            <label for="editProductAmount">Amount</label>
            <input v-model="productToEdit.amount" type="number" id="editProductAmount" required>
          </div>
          <div class="form-group">
            <label for="editProductCategory">Category</label>
            <input v-model="productToEdit.Category" type="text" id="editProductCategory" required>
          </div>
          <div class="form-group">
            <label for="editProductUrl">Product URL</label>
            <input v-model="productToEdit.prodUrl" type="text" id="editProductUrl" required>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
          <button @click="closeEditProductModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>

    <!-- Modal for Editing User -->
    <div v-if="showEditUserModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit User</h2>
        <form @submit.prevent="updateUser">
          <div class="form-group">
            <label for="UserFirstName">First Name</label>
            <input v-model="newUser.firstName" type="text" id="UserName" required>
          </div>
          <div class="form-group">
            <label for="editUserLastName">Last Name</label>
            <input v-model="newUser.lastName" type="text" id="UserLastName" required>
          </div>
          <div class="form-group">
            <label for="editUserEmail">Email</label>
            <input v-model="newUser.emailAdd" type="email" id="UserEmail" required>
          </div>
          <div class="form-group">
            <label for="editUserPassword">Password</label>
            <input v-model="newUser.password" type="password" id="UserPassword" required>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
          <button @click="closeEditUserModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>
    <!-- Modal for adding new user -->
    <div v-if="showEditUserModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Edit User</h2>
        <form @submit.prevent="submitUser">
          <div class="form-group">
            <label for="UserFirstName">First Name</label>
            <input v-model="userToEdit.firstName" type="text" id="editUserFirstName" required>
          </div>
          <div class="form-group">
            <label for="editUserLastName">Last Name</label>
            <input v-model="userToEdit.lastName" type="text" id="editUserLastName" required>
          </div>
          <div class="form-group">
            <label for="editUserEmail">Email</label>
            <input v-model="userToEdit.emailAdd" type="email" id="editUserEmail" required>
          </div>
          <div class="form-group">
            <label for="editUserPassword">Password</label>
            <input v-model="userToEdit.password" type="password" id="editUserPassword" required>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
          <button @click="closeEditUserModal" type="button" class="btn btn-secondary">Cancel</button>
        </form>
      </div>
    </div>

  </section>
</template>

<script>
import { computed, reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from "vue3-toastify";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);

    const showProductModal = ref(false);
    const showEditProductModal = ref(false);
    const showUserModal = ref(false);
    const showEditUserModal = ref(false);

    const newProduct = reactive({
      prodName: '',
      amount: '',
      quantity: '',
      Category: '',
      prodUrl: ''
    });

    const productToEdit = reactive({
      prodName: '',
      amount: '',
      quantity: '',
      Category: '',
      prodUrl: ''
    });

    const userToEdit = reactive({
      userID: '',
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    const newUser = reactive({
      firstName: '',
      lastName: '',
      emailAdd: '',
      password: ''
    });

    onMounted(async () => {
      await store.dispatch('getProducts');
      await store.dispatch('getUsers');
    });

    const openProductModal = () => {
      showProductModal.value = true;
    };

    const closeProductModal = () => {
      showProductModal.value = false;
      resetProductForm();
    };

    const openEditProductModal = (product) => {
      Object.assign(productToEdit, product);
      showEditProductModal.value = true;
    };

    const closeEditProductModal = () => {
      showEditProductModal.value = false;
      resetProductForm();
    };

    const openUserModal = () => {
      showUserModal.value = true;
    };

    const closeUserModal = () => {
      showUserModal.value = false;
      resetUserForm();
    };

    const openEditUserModal = (user) => {
      Object.assign(userToEdit, user);
      showEditUserModal.value = true;
    };

    const closeEditUserModal = () => {
      showEditUserModal.value = false;
      resetUserForm();
    };

    const submitProduct = async () => {
      try {
        await store.dispatch('createProduct', newProduct);
        toast.success("Product added successfully");
        closeProductModal();
      } catch (error) {
        toast.error("Error adding product");
      }
    };
    const submitUser = async () => {
      try {
        await store.dispatch('createUser', newUser);
        toast.success("User added successfully");
        closeProductModal();
      } catch (error) {
        toast.error("Error adding User");
      }
    };


    const updateProduct = async () => {
      try {
        await store.dispatch('updateProduct', productToEdit);
        toast.success("Product updated successfully");
        closeEditProductModal();
      } catch (error) {
        toast.error("Error updating product");
      }
    };

    const deleteProduct = async (productID) => {
      try {
        await store.dispatch('deleteProduct', productID);
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error("Error deleting product");
      }
    };

    const updateUser = async () => {
      try {
        await store.dispatch('updateUser', userToEdit);
        toast.success("User updated successfully");
        closeEditUserModal();
      } catch (error) {
        toast.error("Error updating user");
      }
    };

    const deleteUser = async (userID) => {
      try {
        await store.dispatch('deleteUser', userID);
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Error deleting user");
      }
    };

    const resetProductForm = () => {
      Object.assign(newProduct, {
        prodName: '',
        amount: '',
        quantity: '',
        Category: '',
        prodUrl: ''
      });
    };

    const resetUserForm = () => {
      Object.assign(newUser, {
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
      Object.assign(userToEdit, {
        userID: '',
        firstName: '',
        lastName: '',
        emailAdd: '',
        password: ''
      });
    };

    return {
      products,
      users,
      showProductModal,
      showEditProductModal,
      showUserModal,
      showEditUserModal,
      newProduct,
      productToEdit,
      userToEdit,
      // createUser,
      openProductModal,
      closeProductModal,
      openEditProductModal,
      closeEditProductModal,
      openUserModal,
      closeUserModal,
      openEditUserModal,
      closeEditUserModal,
      submitProduct,
      updateProduct,
      deleteProduct,
      updateUser,
      deleteUser,
      submitUser,
      newUser,

    };
  }
};
</script>

<style scoped>
.admin-section {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: white;
}

.admin-title {
  margin-bottom: 20px;
}

.admin-subtitle {
  margin-bottom: 10px;
}

.table th, .table td {
  text-align: center;
}

.action-buttons {
  text-align: center;
  margin-top: 10px;
}

.btn1 {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn1:hover {
  background-color: #0056b3;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
}

.modal-content h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
