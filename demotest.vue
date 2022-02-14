<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ computerNum }}</p>
    <p ref="watchNum"></p>
    <p>{{ obj.a }}</p>
    <p>{{ obj.b }}</p>
    <test-demo />
    <VmodelTest v-model:value="counter" @updata:value="changeValue" />
  </div>
</template>
<script lang="ts" setup>
  import VmodelTest from './vModelTest.vue';
  import { computed, onMounted, onUnmounted, ref, reactive, watch } from 'vue';
  const counter = ref(10);
  const watchNum = ref(null); //元素引用
  interface ObjInterFace {
    a: number;
    b: string;
  }
  const obj: ObjInterFace = reactive({
    a: 123,
    b: 'test',
  });
  const changeValue = (v) => {
    console.log(v);
    // counter.value = v;
  };
  const computerNum = computed(() => counter.value * 2);
  watch(
    () => counter.value, //当watch监视非响应式数据时需要使用回掉函数的方式
    (val, oldVal) => {
      const pEle = watchNum.value; //ref元素引用后使用.value获取dom元素
      // console.log(pEle);
      pEle.textContent = `${oldVal} => ${val}`;
      obj.b = 'change';
    },
  );
  let timer: any = null;
  onMounted(() => {
    timer = setInterval(() => {
      // counter.value++;
      obj.a++;
    }, 3000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
</script>
