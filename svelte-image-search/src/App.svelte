<script>
  import getImages from "./api";

  let loading = false;
  let images = [];
  let searchTerm = "";

  async function handleSubmit(e) {
    e.preventDefault();

    loading = true;

    images = await getImages(searchTerm);

    loading = false;
  }
</script>

<style>
  .images {
    column-count: 3;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1200px) {
    .images {
      column-count: 2;
    }
  }

  @media (max-width: 800px) {
    .images {
      column-count: 1;
    }
  }
</style>

<div class="app">
  <h1>Svelte Image Search</h1>
  <form on:submit={handleSubmit}>
    <label for="searchTerm">Search Term</label>
    <input
      class="u-full-width"
      type="text"
      id="searchTerm"
      name="searchTerm"
      bind:value={searchTerm} />
    <button type="submit">Search</button>
  </form>

  {#if loading}
    <img id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif" />
  {/if}

  <section class="images">
    {#each images as image}
      <img src={image} />
    {/each}
  </section>
</div>
