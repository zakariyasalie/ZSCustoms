import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://zscustoms-1.onrender.com/";

export default createStore({
  state: {
    products: [],
    users: null,
    product: null,
    user: null,
    cart: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload || [];
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
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.prod_ID === product.prod_ID);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, prod_ID) {
      state.cart = state.cart.filter(item => item.prod_ID !== prod_ID);
    },
    updateCartQuantity(state, { prod_ID, quantity }) {
      const cartItem = state.cart.find(item => item.prod_ID === prod_ID);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(`${apiURL}products`);
        console.log('API Response:', response.data.results);
        commit("setProducts", response.data.results);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products. Please try again later.");
      }
    }
    ,    
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
        await axios.put(`${apiURL}products/${updatedProduct.prod_ID}`, updatedProduct);
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
    addToCart({ commit }, product) {
      commit('addToCart', product);
      toast.success(`${product.prod_Name} added to cart!`);
    },
    removeFromCart({ commit }, prod_ID) {
      commit('removeFromCart', prod_ID);
      toast.success(`Item removed from cart!`);
    },
    updateCartQuantity({ commit }, { prod_ID, quantity }) {
      commit('updateCartQuantity', { prod_ID, quantity });
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  },
});
