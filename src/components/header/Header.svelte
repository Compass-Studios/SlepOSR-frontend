<script lang="ts">

</script>

<header>
    <article class="navbar">
        <nav>
            <ul>
                <li>
                    <a href="#">Sklep</a>
                </li>
                <li>
                    <a href="#">O nas</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
            </ul>
            <div class="burger">
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

            li {
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 2px;

              a {
                text-decoration: none;
              }
            }

            @media screen and (max-width: 800px) {
              display: none;
            }
          }
          .burger {
            display: none;

            div {
              width: 25px;
              height: 2px;
              background-color: white;
              margin: 3px;
            }
          }
        }
      }
    }
</style>