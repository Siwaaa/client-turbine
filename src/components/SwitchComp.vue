<template>
  <div class="w-min">
    <button
      type="button"
      :aria-checked="isEnabled"
      class="w-8 h-4 flex items-center focus:outline-none"
      :class="{ 'switch' : isEnabled, 'switch-off' : !isEnabled}"
      @click.prevent="toggle"
      role="switch"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'SwitchComp',
  //позволяет настроить входной параметр и событие, используемые для работы v-model
  model: {
    prop: "isEnabled",
    event: "toggle"
  },
  props: {
    isEnabled: Boolean
  },
  methods: {
    toggle() {
      this.$emit("toggle", !this.isEnabled);
    }
  }
};
</script>

<style lang="postcss">
.switch {
  transition: all 0.2s ease-in-out 0s;
  background-color: #0487af;
  border-radius: 10rem;
  border: none;
  margin: 0px;
  padding: 0px;
  outline: none;
}
.switch:hover {
  background-color: #036c8c;
}
.switch::after {
  content: "";
  width: 12px;
  height: 12px;
  position: relative;
  left: 2px;
  background-color: #ffffff;
  display: block;
  border-radius: 50%;
  transition: all 0.25s ease 0s;
  opacity: 1;
  transform: translateX(1rem);
}

.switch-off {
  transition: all 0.2s ease-in-out 0s;
  background-color: #bbbbbb;
  border-radius: 10rem;
  border: none;
  margin: 0px;
  padding: 0px;
  outline: none;
}
.switch-off:hover {
  background-color: #969696;
}
.switch-off::after {
  content: "";
  width: 12px;
  height: 12px;
  position: relative;
  left: 2px;
  background-color: #ffffff;
  display: block;
  border-radius: 50%;
  transition: all 0.25s ease 0s;
  opacity: 1;
}
</style>