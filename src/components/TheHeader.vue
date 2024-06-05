<template>
  <div class="container-fuild">
    <div class="row text-white" style="background-color: #0c713d; padding: 1rem">
      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawer()">
          <MenuOutlined/>
        </span>
      </div>

      <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
        <img src="../assets/vue.svg" alt="" height="32" width="34" class="ms-3 me-3">
        <span class="d-none d-sm-flex">Quan tri</span>
      </div>

      <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
        <span>Admin</span>
      </div>

      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawerUser()">
          <UserOutlined/>
        </span>
      </div>
    </div>
  </div>

  <a-drawer
      v-model:open="open"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      title="Danh Muc"
      placement="left"
  >
    <TheMenu/>
  </a-drawer>

  <a-drawer
      v-model:open="open_user"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      title="Admin"
      placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script setup>
import {defineComponent, ref} from 'vue';
import TheMenu from "./TheMenu.vue";
import { MenuOutlined, UserOutlined } from '@ant-design/icons-vue';

defineComponent({
  components: {
    MenuOutlined,
    UserOutlined,
    TheMenu
  }
});

const open = ref(false);
const open_user = ref(false);
const showDrawer = () => {
  open.value = true;
};

const showDrawerUser = () => {
  open_user.value = true;
};
</script>