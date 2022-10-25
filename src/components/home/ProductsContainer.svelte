<script lang="ts">
    import ProductsView from "./ProductsView.svelte";
     let componentClass: string;
     let componentQuery: string;
     let componentName: string;

    function scrollLeft() {
        var left = document.querySelector(componentQuery);

        left.scrollBy(350, 0);
    }

    function scrollRight() {
        var right = document.querySelector(componentQuery);

        right.scrollBy(-350, 0);
    }

    export { componentClass, componentQuery, componentName }
</script>

<div class="wyroznione">
    <h1 class="wyroznione-h1">{componentName}</h1>
    <div class="icons">
        <div>
            <button class="icon" on:click={scrollRight}>
                <img src="src/assets/less-than-solid.svg" />
            </button>
        </div>
        <div>
            <button class="icon" on:click={scrollLeft}>
                <img src="src/assets/greater-than-solid.svg" />
            </button>
        </div>
    </div>
</div>
<div class="products">
    <div class="cover">
        <div class="{componentClass}">
            <div class="child"><ProductsView /></div>
            <div class="child"><ProductsView /></div>
            <div class="child"><ProductsView /></div>
            <div class="child"><ProductsView /></div>
            <div class="child"><ProductsView /></div>
            <div class="child"><ProductsView /></div>
        </div>
    </div>
</div>

<style type="text/scss">
  .products {
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      z-index: -1;
    }

    .cover {
      position: relative;
      width: 100%;
      height: 90%;

      .scroll-products {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: left;
        align-items: center;
        overflow: auto;
        position: relative;
        scroll-behavior: smooth;

        @media screen and (max-width: 800px) {
          flex-direction: column;
        }

        &::-webkit-scrollbar {
          -webkit-appearance: none;
        }

        .child {
          min-width: 350px;
          height: 350px;
          margin: 1px 10px;
          cursor: pointer;
          border: 1px solid transparent;
          overflow: hidden;
          transition: all .2s ease;

          @media screen and (max-width: 800px) {
            min-width: 200px;
            height: 200px;

            &:nth-of-type(1n + 4) {
              display: none;
            }
          }

          &:hover {
            border-color: white;
          }
        }
      }


      .scroll-products-nowosc {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: left;
        align-items: center;
        overflow: auto;
        position: relative;
        scroll-behavior: smooth;

        @media screen and (max-width: 800px) {
          flex-direction: column;
        }

        &::-webkit-scrollbar {
          -webkit-appearance: none;
        }

        .child {
          min-width: 350px;
          height: 350px;
          margin: 1px 10px;
          cursor: pointer;
          border: 1px solid transparent;
          overflow: hidden;
          transition: all .3s ease;

          @media screen and (max-width: 800px) {
            min-width: 200px;
            height: 200px;

            &:nth-of-type(1n + 4) {
              display: none;
            }
          }

          &:hover {
            border-color: white;
          }
        }
      }
    }
  }

  .wyroznione {
    display: inline-flex;
    width: 90%;
    height: 7vh;
    justify-content: space-between;
    border-bottom: 3px solid white;

    @media screen and (max-width: 800px) {
      align-items: center;
    }

    .icons {
      display: inline-flex;
      gap: 2em;
    }

    .icon {
      border: none;
      outline: none;
      background: transparent;
      transition: all .3s ease;
      width: 50px;
      height: 50px;
      cursor: pointer;

      @media screen and (max-width: 800px) {
        display: none;
      }

      img {
        width: 30px;
        height: 30px;
        filter: invert(100%);
      }

    }
    h1 {
      text-transform: uppercase;
      font-size: 2em;

      @media screen and (max-width: 800px) {
        font-size: 1em;
      }
    }
  }
</style>