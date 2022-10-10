<script lang="ts">
    import Header from "../components/header/Header.svelte";
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
            <img src="src/assets/magnifying-glass-solid.svg" width="25" height="25" />
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
      justify-content: center;

      .logo {
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          transform: scale(.7);

          @media screen and (max-width: 675px) {
            transform: scale(.45);
            width: 470px;
            height: 300px;
          }
        }
      }
    }

    .header {
      width: auto;
      min-height: 100%;
    }

    .searchbar {
      width: 5%;
      margin-right: 1em;

      nav {
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          filter: invert(100%);
        }
      }
    }
</style>