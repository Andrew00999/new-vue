<template>
  <select class="custom_select" v-model="modelValue" @change="changeOption">
    <option disabled value="">Sort list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "post-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_select {
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
}
</style>