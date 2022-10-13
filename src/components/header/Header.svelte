<script lang="ts">
    import SearchBar from "./SearchBar.svelte";
    import { Link } from "svelte-navigator";

    let slide = false;

    function navSlide() {
        slide = !slide;
        console.log(slide);
    }
</script>

<header>
    <article class="navbar">
        <nav>
            <ul class:nav-active={slide}>
                <li>
                    <Link to="/sklep" style="text-decoration: none">
                        Sklep
                    </Link>
                </li>
                <li>
                    <Link to="/about" style="text-decoration: none">
                        O nas
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" style="text-decoration: none">
                        Galeria
                    </Link>
                </li>
                <li class="searchbar">
                    <nav>
                        <SearchBar />
                    </nav>
                </li>
                <li>
                    <div class="burger" on:click="{navSlide}" style="margin: 0">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </li>
            </ul>
            <div class="burger" on:click="{navSlide}">
                 <div class="line1"></div>
                 <div class="line2"></div>
                 <div class="line3"></div>
            </div>
        </nav>
    </article>
</header>

<style type="text/scss">
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20%;
      width: 100%;

      .navbar {
        margin-left: 1em;
        text-transform: uppercase;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        nav {
          ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            height: 100%;

            @media screen and (max-width: 800px) {
              body {
                overflow-x: hidden;
              }

              position: absolute;
              left: 0;
              height: 60vh;
              width: 40vh;
              top: 0;
              background: black;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 5vh;
              transform: translateX(-100%);
              transition: transform .3s ease-in;
            }
            
            @media screen and (min-width: 800px) {
              .searchbar {
                display: none;
              }
            }

            @media screen and (max-width: 517px) {
              width: 100%;
            }

            li {
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 2px;

              .line1 {
                transform: rotate(-45deg) translate(-6px, 6px);
              }

              .line2 {
                opacity: 0;
              }

              .line3 {
                transform: rotate(45deg) translate(-12px, -12px);
              }

              a {
                text-decoration: none;
              }
            }

            img {
              filter: invert(100%);
            }

          }
          .burger {
            display: none;

            button {
              background: transparent;
              outline: none;
              border: none;
              padding: 0;

            }

            div {
              width: 35px;
              height: 3px;
              border-radius: 5px;
              background-color: white;
              margin: 5px;
            }
          }

          @media screen and (max-width: 800px) {
            .burger {
              display: flex;
              flex-direction: column;
              align-items: end;
              margin-top: 11vh;
              cursor: pointer;
            }
          }

          .nav-active {
            transform: translateX(0%);
          }
        }
      }
      @media screen and (max-width: 800px) {
        nav {
          height: 100%;
        }
      }
    }
</style>