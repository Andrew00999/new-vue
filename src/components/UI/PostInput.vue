<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "post-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid rgb(13, 109, 187);
  border-radius: 0.25rem;
  outline: 0;
  outline-offset: 0;
}
</style>