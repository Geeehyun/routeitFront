<script setup>
import axios from "../../../config/axios.js";

const testFn = async () => {
  return await axios.get(`/api/test/index`);
}
</script>

<template>
  <h1>홈</h1>
  <button @click="testFn">테스트</button>
</template>

<style scoped>

</style>