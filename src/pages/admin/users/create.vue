<template>
  <form @submit.prevent="createUser()">
  <a-card title="Tao moi tai khoan" style="width: 100%;">
    <div class="row mb-3">
      <div class="col-12 col-sm-4">

        <div class="row">
          <div class="col-12 d-flex justify-content-center mb-3">
            <a-avatar shape="square" :size="200">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </div>

          <div class="col-12 d-flex justify-content-center">
            <a-button type="primary">
              <span>
                <PlusOutlined class="me-1"/> Chon anh
              </span>
            </a-button>
          </div>
        </div>

      </div>
      <div class="col-12 col-sm-8">
        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.status_id
              }">
                Tinh trang:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-select
                show-search
                placeholder="Tinh trang"
                style="width: 100%"
                :options="users_status"
                :filter-option="filterOption"
                allow-clear
                v-model:value="status_id"
                :class="{
                  'select-danger': errors.status_id
                }"
            ></a-select>

            <div class="w-100"></div>
            <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.username
              }">
                Ten tai khoan:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Nhap ten tai khoan ..."
                allow-clear
                v-model:value="username"
                :class="{
                  'input-danger': errors.username
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                'text-danger': errors.name
              }">
                Ho va ten:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Nhap ho va ten ..."
                allow-clear
                v-model:value="name"
                :class="{
                  'input-danger': errors.name
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                  'text-danger': errors.email
                }">
                Email:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input
                placeholder="Nhap Email ..."
                allow-clear
                v-model:value="email"
                :class="{
                  'input-danger': errors.email
                }"/>

            <div class="w-100"></div>
            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                  'text-danger': errors.department_id
                }">
                Phong ban:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-select
                show-search
                placeholder="Phong ban"
                style="width: 100%"
                :options="departments"
                :filter-option="filterOption"
                allow-clear
                v-model:value="department_id"
                :class="{
                  'select-danger': errors.department_id
                }"
            ></a-select>

            <div class="w-100"></div>
            <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span :class="{
                  'text-danger': errors.password
                }">
                Mat khau:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Nhap mat khau ..."
                allow-clear
                v-model:value="password"
                :class="{
                  'input-danger': errors.password
                }"
            />

            <div class="w-100"></div>
            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-sm-3 text-start text-sm-end">
            <label>
              <span class="text-danger me-1">*</span>
              <span>
                Nhap lai mat khau:
              </span>
            </label>
          </div>

          <div class="col-12 col-sm-5">
            <a-input-password
                placeholder="Nhap lai mat khau ..."
                allow-clear
                v-model:value="password_confirmation"
                />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
        <a-button class="me-0 me-sm-2 mb-2 mb-sm-0">
          <router-link :to="{ name: 'admin-users' }">
            <span>Huy</span>
          </router-link>
        </a-button>

        <a-button type="primary" html-type="submit">
          <span>Luu</span>
        </a-button>
      </div>
    </div>
  </a-card>
  </form>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import {useMenu} from "../../../stores/use-menu.js";
import { UserOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import { useRouter } from "vue-router";

export default defineComponent({
    components: {
      UserOutlined,
      PlusOutlined
    },

    setup() {
        useMenu().onSelectedKeys(['admin-users']);

        const router = useRouter();

        const users_status = ref([]);
        const departments = ref([]);
        const users = reactive({
            username: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            department_id: [],
            status_id: []
        });

        const errors = ref([]);

        const getUsersCreate = () => {
            axios.get('http://laravel_and_vuejs.cr7test/api/users/create')
                .then((response) => {
                    users_status.value = response.data.users_status;
                    departments.value = response.data.departments;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const filterOption = (input, option) => {
          return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        const createUser = () => {
          axios.post('http://laravel_and_vuejs.cr7test/api/users', users)
              .then((response) => {
                if(response.status == 200){
                  message.success('Them moi tai khoan thanh cong');
                  router.push({ name: 'admin-users' });
                }
              })
              .catch((error) => {
                errors.value = error.response.data.errors;
              });
        }

        getUsersCreate();

        return {
          users_status,
          departments,
          ...toRefs(users),
          errors,
          filterOption,
          createUser
        }
    },
});
</script>

<style>
.select-danger {
  border: 1px solid red;
}
.input-danger {
  border-color: red;
}
</style>