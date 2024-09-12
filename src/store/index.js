// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://zscustoms-1.onrender.com";

export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    user: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    deleteProduct(state, prod_ID) {
      state.products = state.products.filter(product => product.prod_ID !== prod_ID);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.prod_ID === updatedProduct.prod_ID);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    createUser(state, user) {
      state.users.push(user);
    },
    deleteUser(state, user_ID) {
      state.users = state.users.filter(user => user.user_ID !== user_ID);
    },
    updateUser(state, updatedUser) {
      const index = state.users.findIndex(user => user.user_ID === updatedUser.user_ID);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let results = await (await axios.get(`${apiURL}products`)).data;
        const uniqueProducts = Array.from(new Map(results.map(product => [product.prod_ID, product])).values());
        commit("setProducts", uniqueProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products. Please try again later.");
      }
    },
    async createProduct({ commit }, newProduct) {
      try {
        const response = await axios.post(`${apiURL}products`, newProduct);
        commit('addProduct', response.data);
        toast.success("Product created successfully!");
      } catch (error) {
        console.error("Error creating product:", error);
        toast.error("Failed to create product. Please try again later.");
      }
    },
    async updateProduct({ commit }, updatedProduct) {
      try {
        await axios.patch(`${apiURL}products/${updatedProduct.prod_ID}`, updatedProduct);
        commit('updateProduct', updatedProduct);
        toast.success("Product updated successfully!");
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error("Failed to update product. Please try again later.");
      }
    },
    async deleteProduct({ commit }, prod_ID) {
      try {
        await axios.delete(`${apiURL}products/${prod_ID}`);
        commit('deleteProduct', prod_ID);
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product. Please try again later.");
      }
    },
    async getUsers({ commit }) {
      try {
        const response = await axios.get(`${apiURL}users`);
        commit('setUsers', response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users. Please try again later.");
      }
    },
    async createUser({ commit }, createUser) {
      try {
        const response = await axios.post(`${apiURL}users/`, createUser);
        commit('addUser', response.data);
        toast.success("User created successfully!");
      } catch (error) {
        console.error("Error creating user:", error);
        toast.error("Failed to create user. Please try again later.");
      }
    },
    async updateUser({ commit }, updatedUser) {
      try {
        await axios.patch(`${apiURL}users/${updatedUser.user_ID}`, updatedUser);
        commit('updateUser', updatedUser);
        toast.success("User updated successfully!");
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Failed to update user. Please try again later.");
      }
    },
    async deleteUser({ commit }, user_ID) {
      try {
        await axios.delete(`${apiURL}users/${user_ID}`);
        commit('deleteUser', user_ID);
        toast.success("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user. Please try again later.");
      }
    },
  }
});
