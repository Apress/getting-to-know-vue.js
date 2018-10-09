<template>
    <h1>
        Title: {{ displayText }}
    </h1>
</template>

<script>
export default {
  data() {
    return {
      displayText: 'Getting to Know Vue.js'
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>