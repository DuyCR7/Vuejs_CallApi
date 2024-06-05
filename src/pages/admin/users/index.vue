<template>
    <a-card title="Tai khoan" style="width: 100%">
      <div class="row mb-3">
        <div class="col-12 d-flex justify-content-end">
          <router-link :to="{ name: 'admin-users-create' }">
            <a-button type="primary"><PlusOutlined/></a-button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
<!--          record tham chieu den cac field cua api users-->
          <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
            <template #bodyCell="{ column, index, record }">
              <template v-if="column.key === 'index'">
                <span>{{ index + 1 }}</span>
              </template>

              <template v-if="column.key === 'status'">
                <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
              </template>

<!--              bien id cua params phai dat trung ten voi bien ta khai bao o path-->
              <template v-if="column.key === 'action'">
                <router-link :to="{ name: 'admin-users-edit', params: { id: record.id } }">
                  <a-button type="primary" class="me-sm-2 mb-2 mb-sm-0">
                    <EditOutlined/>
                  </a-button>
                </router-link>

                <a-button type="primary" danger @click="deleteUser(record.id)">
                  <DeleteOutlined/>
                </a-button>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </a-card>
</template>

<script>
import {defineComponent, ref, createVNode} from "vue";
import {useMenu} from "../../../stores/use-menu.js";
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { message } from "ant-design-vue";

export default defineComponent({
  components: {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined
  },



  setup() {
    const store = useMenu();
    store.onSelectedKeys(['admin-users']);

    const users = ref([]);
    const columns = [
      {
        title: '#',
        key: 'index',
        responsive: ['sm']
      },
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
      },
      {
        title: 'Tai khoan',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Ho va ten',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Phong ban',
        dataIndex: 'departments',
        key: 'departments',
        responsive: ['sm']
      },
      {
        title: 'Vai tro',
        dataIndex: 'roles',
        key: 'roles',
      },
      {
        title: 'Tinh trang',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Cong cu',
        key: 'action',
        fixed: 'right'
      }
    ]

    const getUsers = () => {
      axios.get('http://laravel_and_vuejs.cr7test/api/users')
          .then(function (response) {
            users.value = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    // const getUsers2 = async () => {
    //   try {
    //     const response = await axios.get('/user?ID=12345');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    const deleteUser =  (id) => {
      // alert(id);
      Modal.confirm({
        title: 'Xac nhan?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Ban co chac chan muon xoa tai khoan khong?',
        onOk() {
          axios.delete(`http://laravel_and_vuejs.cr7test/api/users/${id}`)
              .then((response) => {
                // console.log(response);
                if(response.status == 200){
                  message.success('Xoa tai khoan thanh cong');
                  getUsers();
                }
              })
              .catch((error) => {
                console.log(error);
              });
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {},
      });
    };

    getUsers();

    return {
      users,
      columns,
      deleteUser
    }
  }
});

</script>