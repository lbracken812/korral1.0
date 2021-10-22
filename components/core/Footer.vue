<template>
  <div class="flex bg-gray-darker p-2">
    <p class="text-xs text-white opacity-50">
      © korral.me {{ year }}
    </p>
    <p class="text-xs text-white opacity-50">
      |  IP by https://rxs.to/
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
