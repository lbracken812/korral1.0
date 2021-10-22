<template>
  <div class="flex bg-gray-darker p-2">
    <p class="text-xs text-white opacity-50">
      © korral.me {{ year }}   
    </p>
    <p class="text-xs text-white opacity-50">
      |  IP by <a href="https://rxs.to/" target="_blank" class="text-green-lighter border-b border-green-lighter opacity-75 duration-100 ease-in-out hover:opacity-100">rxsto</a>
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
