<template>
  <form @submit.prevent="updateUser()">
    <a-card title="Cap nhat tai khoan" style="width: 100%;">
      <div class="row mb-3">
        <div class="col-12 col-sm-4">

          <div class="row">
            <div class="col-12 d-flex justify-content-center mb-3">
              <a-avatar shape="square" :size="200">
                <template #icon>
                  <UserOutlined/>
                </template>
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
            <div class="col-12 col-sm-4 text-start text-sm-end">
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
            <div class="col-12 col-sm-4 text-start text-sm-end">
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
            <div class="col-12 col-sm-4 text-start text-sm-end">
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
            <div class="col-12 col-sm-4 text-start text-sm-end">
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
            <div class="col-12 col-sm-4 text-start text-sm-end">
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
            <div class="col-12 col-sm-4 text-start text-sm-end">

            </div>

            <div class="col-12 col-sm-5">
              <a-checkbox v-model:checked="change_password">
                Doi mat khau
              </a-checkbox>
            </div>
          </div>

          <div class="row mb-3" v-if="change_password === true">
            <div class="col-12 col-sm-4 text-start text-sm-end">
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

          <div class="row mb-3" v-if="change_password === true">
            <div class="col-12 col-sm-4 text-start text-sm-end">
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

          <div class="row mb-3">
            <div class="col-12 col-sm-4 text-start text-sm-end">
              <label>
              <span>
                Lan dang nhap gan day:
              </span>
              </label>
            </div>

            <div class="col-12 col-sm-5">
              <span>{{ login_at }}</span>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12 col-sm-4 text-start text-sm-end">
              <label>
              <span>
                Lan doi mat khau gan day:
              </span>
              </label>
            </div>

            <div class="col-12 col-sm-5">
              <span>{{ change_password_at }}</span>
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
import {defineComponent, ref, reactive, toRefs} from "vue";
import {useMenu} from "../../../stores/use-menu.js";
import {UserOutlined, PlusOutlined} from "@ant-design/icons-vue";
import {message} from 'ant-design-vue';
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import dayjs from "dayjs";

export default defineComponent({
  components: {
    UserOutlined,
    PlusOutlined
  },

  setup() {
    useMenu().onSelectedKeys(['admin-users']);

    const router = useRouter();
    const route = useRoute();

    const users_status = ref([]); //su dung phuong thuc ref nen can tham chieu den value
    const departments = ref([]);
    const users = reactive({      //reactive nen khong can tham chieu den value ma tham chieu truc tiep den cac doi tuong ben trong
      username: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      department_id: [],
      status_id: [],
      change_password: false,
      login_at: "",
      change_password_at: ""
    });

    const errors = ref([]);

    const getUsersEdit = () => {
      // console.log('User co id la: ', route.params.id);  //params ta khai bao o route-link, params co ten la id
      axios.get(`http://laravel_and_vuejs.cr7test/api/users/${route.params.id}/edit`)
          .then((response) => {
            // console.log(response);

            users.username = response.data.user.username
            users.name = response.data.user.name
            users.email = response.data.user.email
            users.department_id = response.data.user.department_id
            users.status_id = response.data.user.status_id

            response.data.user.login_at ? users.login_at = dayjs(response.data.user.login_at).format('DD/MM/YYYY - HH:mm') : users.login_at = 'Chua co luot dang nhap gan day';
            response.data.user.change_password_at ? users.change_password_at = dayjs(response.data.user.change_password_at).format('DD/MM/YYYY - HH:mm') : users.change_password_at = 'Chua co luot doi mat khau gan day';

            users_status.value = response.data.users_status;
            departments.value = response.data.departments;
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const updateUser = () => {
      axios.put(`http://laravel_and_vuejs.cr7test/api/users/${route.params.id}`, users)
          .then((response) => {
            // console.log(response);
            if(response.status == 200){
              message.success('Cap nhat thanh cong');
              router.push({ name: 'admin-users' });
            }
          })
          .catch((error) => {
            // console.log(error);
            errors.value = error.response.data.errors;
          })
    };

    getUsersEdit();

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      users_status,
      departments,
      ...toRefs(users),
      errors,
      filterOption,
      updateUser
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