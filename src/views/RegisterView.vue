<template>
    <!-- User Management -->
    <div class="user-management">
      <h2>User Management</h2>
      <!-- Form to Add or Update a User -->
      <div class="user-form">
        <h3>{{ isEditingUser ? 'Edit User' : 'Add New User' }}</h3>
        <form @submit.prevent="isEditingUser ? updateUser() : addUser()">
          <div class="form-group">
            <label for="user_Name">First Name</label>
            <input type="text" v-model="userForm.user_Name" required />
          </div>
          <div class="form-group">
            <label for="userAge">Age</label>
            <input type="number" v-model="userForm.userAge" required />
          </div>
          <div class="form-group">
            <label for="Gender">Gender</label>
            <input type="text" v-model="userForm.Gender" required />
          </div>
          <div class="form-group">
            <label for="user_Email">Email</label>
            <input type="email" v-model="userForm.user_Email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="userForm.user_Pass" required />
          </div>
          <div class="form-group">
            <label for="userProfile">Profile</label>
            <textarea v-model="userForm.userProfile"></textarea>
          </div>
          <div class="form-actions">
            <button type="submit">{{ isEditingUser ? 'Update User' : 'Add User' }}</button>
            <button v-if="isEditingUser" type="button" @click="cancelEditUser">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </template>
    <script>
    import { ref, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import sweet from 'sweetalert'
    export default {
      setup() {
        const store = useStore();
        // User state and methods
        const userForm = ref({
          user_Name: '',
          lastName: '',
          userAge: '',
          Gender: '',
          userRole: '',
          user_Email: '',
          user_Pass: '',
          userProfile: ''
        });
        const isEditingUser = ref(false);
        const editingUser_Id = ref(null);
        onMounted(() => {
          store.dispatch('fetchUsers');
        });
        const users = computed(() => store.getters.allUsers);
        const addUser = async () => {
          await store.dispatch('addUser', userForm.value);
          resetUserForm();
          sweet("User Added!", "The user has been successfully added.", "success");
        };
        const editUser = (user) => {
          userForm.value = { ...user };
          isEditingUser.value = true;
          editingUser_Id.value = user.user_ID;
        };
        const updateUser = async () => {
          await store.dispatch('updateUser', { ...userForm.value, user_ID: editingUser_Id.value });
          resetUserForm();
          sweet("User Updated!", "The user has been successfully updated.", "success");
        };
        const deleteUser = async (user_ID) => {
          await store.dispatch('deleteUser', user_ID);
          sweet("User Deleted!", "The user has been successfully deleted.", "success");
        };
        const cancelEditUser = () => {
          resetUserForm();
        };
        const resetUserForm = () => {
          userForm.value = {
            user_Name: '',
            lastName: '',
            userAge: '',
            Gender: '',
            userRole: '',
            user_Email: '',
            user_Pass: '',
            userProfile: ''
          };
          isEditingUser.value = false;
          editingUser_Id.value = null;
        };
        return {
          userForm,
          users,
          isEditingUser,
          addUser,
          editUser,
          updateUser,
          deleteUser,
          cancelEditUser
        };
      }
    };
    </script>