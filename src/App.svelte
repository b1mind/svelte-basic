<script>
  import Pug from './Pug.svelte'
  export let userName
  export let age

  let val = 420
</script>

<main>
  <h1>This is a {val} test smoke it</h1>

  {#if userName}
    <h2>Hello {userName} you are {age} years old</h2>
  {:else}
    <h2>Hello nerd</h2>
  {/if}

  <aside>
    <p>see you on the other side</p>
    <Pug />
  </aside>
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
      max-width: none;
      h2 {
        color: greenyellow;
      }
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
