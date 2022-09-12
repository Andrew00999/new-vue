<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openModal() {
        this.show = this.show = true
    },
    hideModal() {
        this.$emit('update:show', false)
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  .modal_content {
    width: 60%;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
  }
}
</style>