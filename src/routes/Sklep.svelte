<script>
    import Header from "../components/header/Header.svelte";
    import SearchBar from "../components/header/SearchBar.svelte";
    import ProductsView from "../components/home/ProductsView.svelte";
    import { filtered } from "../components/js/stores.js";

    // TODO:
    // https://stackoverflow.com/questions/65604254/how-to-make-a-search-filter-in-svelte
</script>

<section class="shop">
    <div class="header">
        <Header back={true} />
    </div>
    <main>
        <article class="logo-article">
            <div class="logo">
                <img src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png" />
            </div>
        </article>
        <article class="products">
            {#each $filtered as item, i}
                <div class="child" id={i}>
                    <ProductsView className={item} />
                </div>
            {/each}
        </article>
    </main>
    <div class="searchbar">
        <SearchBar />
    </div>
</section>

<style type="text/scss">
    header {
      @media screen and (max-width: 517px) {
        width: 15%;
      }
    }

    .shop {
      width: 100%;
      height: 200vh;
      display: flex;
      justify-content: center;

      @media screen and (min-width: 800px) {
        .header {
          position: absolute;
          top: 14vh;
          left: 0;
        }
      }

      .products {

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        @media screen and (max-width: 800px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 517px) {
          grid-template-columns: 1fr;
            :nth-of-type(1n+9) {
              display: none;
            }
        }

        .child {
          width: 350px;
          height: 350px;
          margin: 1px 10px;
          cursor: pointer;
          border: 1px solid transparent;
          overflow: hidden;
          transition: all .2s ease;

          @media screen and (max-width: 800px) {
            width: fit-content;
            height: fit-content;
          }



          &:hover {
            border-color: white;
          }
        }
      }

      @media screen and (max-width: 800px) {
        justify-content: right;
      }

      .searchbar {
        position: fixed;
        right: 50px;
        top: 0;
        height: 100%;

        @media screen and (max-width: 800px) {
          display: none;
        }
      }

      main {
        width: 80%;

        @media screen and (min-width: 800px) {
          display: flex;
          flex-direction: column;
          gap: 5em;
        }

        @media screen and (max-width: 800px) {
          width: 90%;
        }

        .logo-article {
          .logo {
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 517px) {
                width: 90%;
            }
            img {
              width: 443px;
              height: 274px;

              @media screen and (max-width: 517px) {
                width: 213px;
                height: 134px;
              }
            }
          }

          @media screen and (max-width: 517px) {
            display: block;
          }
        }
      }
    }
</style>