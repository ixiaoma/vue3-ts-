<template>
  <div>{{ value }}</div>
  <a-button @click="changeData"> 改变父组件v-model的值</a-button>
</template>
<script>
  export default {
    props: ['value'],
    // emits: ['update:value'],
    methods: {
      changeData() {
        console.log('---------');
        this.$emit('update:value', 666);
      },
    },
  };
</script>
