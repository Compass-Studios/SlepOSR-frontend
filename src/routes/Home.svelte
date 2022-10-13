<script lang="ts">
    import Header from "../components/header/Header.svelte";
    import SearchBar from "../components/header/SearchBar.svelte";
</script>

<main>
    <section class="header">
        <Header />
    </section>
    <section class="sklep">
        <div class="logo">
            <img src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png" />
        </div>
    </section>
    <article class="searchbar">
        <nav>
            <SearchBar />
        </nav>
    </article>
</main>

<style type="text/scss">
    main {
      height: 100vh;
      display: flex;
    }

    .sklep {
      width: 100%;
      display: flex;
      height: 300vh;
      justify-content: center;

      .logo {
        height: 25vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;

        img {
          transform: scale(.7);

          @media screen and (max-width: 800px) {
            transform: scale(.55);
          }
        }
      }
      @media screen and (max-width: 800px) {
        justify-content: right;
        .logo {
          width: 500px;
          justify-content: left;
        }
      }

      @media screen and (max-width: 517px) {
        .logo {
          display: none;
        }
      }
    }

    .header:global {
      width: auto;
      min-height: 100%;
    }

    .searchbar {
      margin-right: 4em;
      nav {
        height: 10%;
      }

      @media screen and (max-width: 800px) {
        display: none;
      }
    }
</style>