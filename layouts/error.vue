<template>
<div class="container">
  <div class="page_error">
    <h1 v-if="error.statusCode === 404">Sorry | Page not found</h1>
  </div>
</div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>
  .page_error{
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
  }
</style>

