<template>
  <div class="w-100">
    <div class="flex flex-1 flex-col">
      <label class="font-bold" :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :name="name"
        class="bg-input p-2 rounded-lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Input',
    },
    id: {
      type: String,
      default: 'input',
    },
    name: {
      type: String,
      default: 'name',
    },
    type: {
      type: String,
      default: 'name',
    },
    model: {
      type: String,
      default: '',
    },
  },
}
</script>
