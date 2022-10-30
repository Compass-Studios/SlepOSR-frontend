<script lang="ts">
    import { onMount } from "svelte";
    export let h3;
    export let sort;

    let displayData = [];

    /*
    *
    * <iframe
                        id="player"
                        style="width: 100%"
                        src="https://www.youtube.com/embed/{data.url}"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen>

                </iframe>
    *
    * */

    onMount(async () => {
        let res = await fetch(`
            https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAiLfjNXkNv24uhpzUgPa6A&maxResults=5&order=${sort}&key=AIzaSyCyIod8HBXSaAZCp5ntu6p86QC4VuKhoCU
        `);
        let data = await res.json();

        let displayDataAwait = [];

        let videos = data.items;

        videos.forEach(video => {
            displayDataAwait.push({
                thumbnail: video.snippet.thumbnails.high.url,
                url: video.id.videoId
            })
        })
        displayData = [... displayDataAwait];
    })
</script>

<article class="new-videos">
    <div class="new-header">
        <h1>
            {h3} <span>filmy</span>
        </h1>
        <div class="linkbar">
            <div class="info"><h3>Zobacz {h3} filmy</h3></div>
            <div class="cross"></div>
            <div class="subscribe">
                <a href="https://www.youtube.com/c/BeastPhilanthropyOfficial">
                    <img src="src/assets/youtube.svg" style="width: 30px; height: 30px" />
                    <h3>Visit youtube</h3>
                </a>
            </div>
        </div>
    </div>
    <div class="video-container">
        {#each displayData as data, i}
            <div class="div{i + 1}" id="wrapper">
                <a href="https://www.youtube.com/watch?v={data.url}" target="_blank">
                    <img src={data.thumbnail} />
                </a>
            </div>
        {/each}
    </div>
    <div class="subscribe">
        <a href="https://www.youtube.com/c/BeastPhilanthropyOfficial">
            <img src="src/assets/youtube.svg" style="width: 23px; height: 23px" />
            <h3>Visit youtube</h3>
        </a>
    </div>
</article>

<style type="text/scss">
  .new-videos {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5vh;
    height: var(--height);

    @media screen and (max-width: 800px) {
      width: 95%;
    }

    .subscribe {
      display: inline-flex;
      background-color: red;
      border-radius: 4px;
      cursor: pointer;

      @media screen and (min-width: 800px) {
        display: none;
      }

      a {
        display: inline-flex;
        gap: .8em;
        padding: .3em;
        text-decoration: none;
      }

      h3 {
        font-size: .9rem;
        font-weight: bold;
      }

      img {
        filter: invert(100%);
        width: 20px;
        height: 20px;
      }
    }

    iframe {
      display: none;
    }

    h3 {
      text-transform: uppercase;
    }

    .new-header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 45px;
        text-transform: uppercase;
        font-weight: bold;

        @media screen and (max-width: 800px) {
          font-size: 30px;
        }

        span {
          color: #e91e63;
          font-weight: bold;
        }
      }

      .linkbar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: 80%;

        .subscribe {
          display: inline-flex;
          background-color: red;
          border-radius: 4px;
          cursor: pointer;
          
          @media screen and (max-width: 800px) {
            display: none;
          }

          a {
            display: inline-flex;
            gap: 1em;
            padding: .5em;
            text-decoration: none;
          }

          h3 {
            font-size: 1.1rem;
            font-weight: bold;
          }

          img {
            filter: invert(100%);
          }
        }

        .cross {
          width: 50%;
          border-bottom: 1px solid white;
          height: fit-content;
          
          @media  screen and (max-width: 800px) {
            display: none;
          }
        }
      }
    }

    .video-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0;
      grid-row-gap: 0;
      gap: 0;
      width: 69%;

      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
      }
    }

    #wrapper {
      position: relative;

    }

    .div1 {
      grid-area: var(--div1);

      display: flex;
      justify-content: var(--justify-content);
      align-items: center;
      width: 97%;

      img {
        width: 100%;
      }

      iframe {
        display: block;
        width: 90%;
        height: 100%;
      }
    }

    .div2 {
      grid-area: var(--div2);
    }
    .div3 {
      grid-area: var(--div3);
    }
    .div4 {
      grid-area: var(--div4);
    }
    .div5 {
      grid-area: var(--div5);
    }

    .div2,.div3,.div4,.div5 {
      width: fit-content;
      height: fit-content;
      img {
        width: 85%;
        height: 85%;
      }
    }
  }
</style>