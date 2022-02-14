<template>
  <div>{{ value }}</div>
  <a-button @click="changeData"> 改变父组件v-model的值</a-button>
  <render-test v-model="renderData" />
</template>
<script lang="ts" setup>
  import { h, ref } from 'vue';
  const parentProps = defineProps({
    value: { type: Number, default: 1 },
  });
  const renderData = ref(999);
  let number = 0;
  const emit = defineEmits(['update:value']);
  function changeData() {
    console.log('---------');
    let { value } = parentProps;
    const num = number++;
    console.log(value);
    emit('update:value', num);
  }
  const renderTest = {
    props:{},
    render() {
      return h(
        'div',
        {
          onClick() {
            console.log('render' + props.value);
            emit('update:value', 333);
          },
        },
        '123',
      );
    },
  };
</script>
