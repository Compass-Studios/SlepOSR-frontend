<script>
    import Header from "../components/header/Header.svelte";
    let x;
    let y;
    let position = [];

    function mouseMove(e) {
        for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect();
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
</script>

<section class="about">
    <div class="header">
        <Header back={true} />
        <h1>
            O nas
        </h1>
    </div>
    <div id="cards" on:mousemove={mouseMove}>
        <div class="card big">
            <div class="card-content">
                <div class="card-info-wrapper">
                    <div class="card-info">
                        <div class="card-info-title">
                            <h3>Lorem ipsum</h3>
                            <h4>
                                loremloremloremloremloremloremloremlor
                                emloremloremloremloremloremloremloremloremloremlor
                                emloremloremloremloremloremloremlore
                                mloremlorem
                                loremloremloremloremloremloremloremloremlorem
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="card-image logo" style="display: flex;">
                    <img
                            src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png"
                            style="
                                width: 245px;
                                height: 175px;
                            "
                    />
                </div>
                <div class="card-info-wrapper">
                    <div class="card-info">
                        <img
                                src="src/assets/image-regular.svg"
                                style="
                                width: 30px;
                                height: 30px;
                                filter: invert(21%);
                            "
                        />
                        <div class="card-info-title">
                            <h3>Gallery</h3>
                            <h4>Visit gallery</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="card-image logo" style="display: flex;">
                    <img
                            src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png"
                            style="
                                width: 245px;
                                height: 175px;
                            "
                    />
                </div>
                <div class="card-info-wrapper">
                    <div class="card-info">
                        <img
                                src="src/assets/cart-shopping-solid.svg"
                                style="
                                width: 30px;
                                height: 30px;
                                filter: invert(21%);
                            "
                        />
                        <div class="card-info-title">
                            <h3>Shop</h3>
                            <h4>Visit merch store</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="card-image">
                    <img
                            src="src/assets/github.svg"
                            style="
                                width: 135px;
                                height: 135px;
                                filter: invert(21%);
                            "
                    />
                </div>
                <div class="card-info-wrapper">
                    <div class="card-info">
                        <img
                                src="src/assets/github.svg"
                                style="
                                width: 30px;
                                height: 30px;
                                filter: invert(21%);
                            "
                        />
                        <div class="card-info-title">
                            <h3>S4vyss</h3>
                            <h4>Website developer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="card-image">
                    <img
                            src="src/assets/youtube.svg"
                            style="
                                width: 160px;
                                height: 160px;
                                filter: invert(21%) sepia(99%) saturate(2450%) hue-rotate(324deg) brightness(62%) contrast(90%);
                            "
                    />
                </div>
                <div class="card-info-wrapper">
                    <div class="card-info">
                        <img
                                src="src/assets/youtube.svg"
                                style="
                                width: 30px;
                                height: 30px;
                                filter: invert(21%) sepia(99%) saturate(2450%) hue-rotate(324deg) brightness(62%) contrast(90%);
                            "
                        />
                        <div class="card-info-title">
                            <h3>OSR</h3>
                            <h4>Youtube channel</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style type="text/scss">
  @media screen and (min-width: 800px) {
    .header {
      position: absolute;
      top: 14vh;
      left: 0;

      h1 {
        display: none;
      }
    }
  }

  :root {
    --bg-color: rgb(20, 20, 20);
    --card-color: rgb(23, 23, 23);
  }

  .about {
    width: 100%;
    height: 225vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
  }

  #cards {
    @media screen and (min-width: 1000px) {
      margin-top: 20vh;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 610px;
    width: calc(100% - 20px);
    pointer-events: auto;
    transition: all 1s ease-in-out;

    .big {
      width: 100%;
      height: 520px;
    }
  }

  #cards:hover > .card::after {
    opacity: 1;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 300px;

    .logo {
      @media screen and (min-width: 1000px) {
        justify-content: right;
      }
    }
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  .card::before {
    background: radial-gradient(
                    800px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255, 255, 255, 0.06),
                    transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
                    600px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255, 255, 255, 0.4),
                    transparent 40%
    );
    z-index: 1;
  }

  .card > .card-content {
    background-color: var(--card-color);
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }

  /* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */

  h1, h2, h3, h4, span {
    color: rgb(240, 240, 240);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
  }

  i {
    color: rgb(240, 240, 240);
  }

  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
  }

  .card-image > i {
    font-size: 6em;
    opacity: 0.25;
  }

  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
  }

  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }

  .card-info > i {
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }

  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }

  .card-info-title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }

  /* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

  @media(max-width: 1000px) {
    body {
      align-items: flex-start;
      overflow: auto;
    }

    #cards {
      max-width: 1000px;
      padding: 10px 0px;
    }

    .card {
      flex-shrink: 1;
      width: calc(50% - 4px);

      img {
        transform: scale(.8);
      }

      .card-image {
        img {
          transform: scale(.6);
        }
      }
    }

    .header {
      height: 20%;
      width: 100%;

      h1 {
        position: absolute;
        bottom: 60%;
        left: 37%;

        font-size: 35px;
        text-transform: uppercase;
        border-bottom: 3px solid #e91e63;
        display: block;
      }
    }
  }

  @media(max-width: 500px) {
    .card {
      height: 180px;
    }

    .card-image {
      height: 80px;
    }

    .card-image > i {
      font-size: 3em;
    }

    .card-info-wrapper {
      padding: 0px 10px;
    }

    .card-info > i {
      font-size: 0.8em;
    }

    .card-info-title > h3 {
      font-size: 0.9em;
    }

    .card-info-title > h4 {
      font-size: 0.8em;
      margin-top: 4px;
    }
  }

  @media(max-width: 320px) {
    .card {
      width: 100%;
    }
  }
</style>