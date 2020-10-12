<script>
  export let name
  let val = 420
</script>

<main>
  <h1>This is a {val} test smoke it</h1>

  <aside>
    <h2>aside bar</h2>
  </aside>

  <!-- prettier-ignore -->
  <template lang="pug">
    +if ('name')
      h1 Hello {name}
      +else 
        h1 Hello enter name
    p This is a test of the pug system
  </template>
</main>

<style lang="scss">
  ::placeholder {
    color: red;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    h1 {
      color: skyblue;
    }
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
