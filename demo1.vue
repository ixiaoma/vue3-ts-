<template>
  <div>
    <h1>reactive</h1>
    <h2>{{user.name}}</h2>
    <h2>{{user.cars}}</h2>
    <button @click="updateUser">改变数据</button>
  </div>
</template>
<script lang='ts' setup>
  // export default {
  //   data() {
  //     return {
  //       user: {
  //         name: '小明',
  //         cars: ['奔驰', '宝马']
  //       }
  //     }
  //   },
  //   methods:{
  //     updateUser() {
  //       this.user.name = '阿黄'
  //       this.user.cars[0] = '黑猫'
  //     }
  //   }
  // }
  import { reactive } from 'vue'
  const user = reactive({
    name: '小明',
    cars: ['奥迪','奔驰']
  })
  const updateUser = ()=> {
    user.cars[0] = '宝马'
  }
</script>