<script setup>
import axios from "../../../config/axios.js";

const goLink = async () => {
  location.href = '/board';
}
</script>

<template>
  <h1>홈</h1>
  <RouterLink to="/board"><button>게시판으로</button></RouterLink>
</template>

<style scoped>

</style>