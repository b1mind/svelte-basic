<script>
  let yourName
  let yourAge = 38
</script>

<!--  -->
<template lang="pug">
  .greeting
    slot
    p This is a test of the pug system
    +if ("yourName")
      h1 Hello {yourName} you are {yourAge} years old.
      +else 
        h1 enter name

    input(
      type="text"
      name="name"
      bind:value="{yourName}"
      )

</template>

<style lang="scss">
  .greeting {
    color: #d0d0d0;
    h1 {
      color: skyblue;
    }
  }
</style>
