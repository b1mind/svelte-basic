<script>
  export let userName
  export let age

  let val = 420
</script>

<main>
  <h1>This is a {val} test smoke it</h1>

  {#if userName}
    <h2>Hello {userName} you are {age} years old</h2>
  {:else}
    <h2>Hello World</h2>
  {/if}

  <aside>
    <p>see you on the other side</p>
  </aside>

  <!-- pug still has some vscode issues but compiles fine -->
  <!-- prettier-ignore  
    <template lang="pug">
    +if ("name")
      h1 Hello {name}
      +else 
        h1 Hello enter name
    p This is a test of the pug system
  </template> 
  -->
</main>

<style lang="scss">
  // todo add some style

  main {
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    max-width: 240px;

    h2 {
      color: skyblue;
      font-weight: 700;
    }

    @media (min-width: 640px) {
      h2 {
        color: greenyellow;
      }
      max-width: none;
    }
  }

  h1 {
    color: red;
    text-transform: uppercase;
    font-weight: 100;

    @media (min-width: 640px) {
      color: white;
      font-size: 4rem;
    }
  }
</style>
