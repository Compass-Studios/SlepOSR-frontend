<script>
    import Header from "../components/header/Header.svelte";
    import SearchBar from "../components/header/SearchBar.svelte";
    import ProductsContainer from "../components/home/ProductsContainer.svelte";
</script>

<main>
    <section class="header">
        <Header />
    </section>
    <section class="sklep">
        <article class="logo-article">
            <div class="logo">
                <img src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png" />
            </div>
        </article>
        <article class="oferty">
            <article class="products-container">
                <ProductsContainer
                        componentName="wyróżnione"
                        componentClass="scroll-products"
                        componentQuery=".scroll-products"
                />
            </article>
            <article class="products-container">
                <ProductsContainer
                        componentName="nowość"
                        componentClass="scroll-products-nowosc"
                        componentQuery=".scroll-products-nowosc"
                />
            </article>
        </article>
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
      display: flex;
      height: 200vh;
      align-items: end;
      flex-direction: column;

      @media screen and (min-width: 517px) {
        gap: 14vh;
        width: 100%;
      }

      .oferty {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 30vh;

        @media screen and (max-width: 800px) {
          flex-direction: column;
        }
      }

      .logo-article {
        width: 100%;
      }

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

          @media screen and (max-width: 517px) {
            transform: scale(.40);
          }
        }
      }

      @media screen and (max-width: 800px) {
        justify-content: right;
        .logo {
          width: 500px;
          justify-content: left;

          @media screen and (max-width: 800px) {
            justify-content: center;
            width: 300px;
          }
        }
      }

      @media screen and (max-width: 800px) {
        height: 250vh;
        display: grid;
        justify-content: center;
        align-items: normal;

        @media screen and (max-width: 517px) {
          display: block;
          justify-content: normal;

          .logo-article {
            z-index: -100;
          }
        }

        .products-container {
          height: 50%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .logo-article {
          display: block;
          width: 300px;
          height: 250px;
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

        @media screen and (min-width: 800px) {
          position: fixed;
          right: 3em;
        }
      }

      @media screen and (max-width: 800px) {
        display: none;
      }
    }
</style>