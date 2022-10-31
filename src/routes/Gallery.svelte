<script lang="ts">
    import Header from "../components/header/Header.svelte";
    import Videos from "../components/gallery/Videos.svelte";

    /*
    *       3 / 1 / 5 / 3;
            2 / 1 / 3 / 2;
            1 / 1 / 2 / 2;
            1 / 2 / 2 / 3;
            2 / 2 / 3 / 3;
    * */

    //GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAiLfjNXkNv24uhpzUgPa6A&maxResults=5&order=date&key=[YOUR_API_KEY]
</script>

<section class="gallery">
    <div class="header" >
        <Header back={true} />
    </div>
    <main>
        <article class="logo-article">
            <div class="logo">
                <img src="src/assets/Zrzut_ekranu_2022-09-27_o_19.29-fococlipping-standard.png" />
            </div>
        </article>
        <Videos
               h3="najnowsze"
               sort="date"
        />
        <div class="popular-desk">
            <Videos
                    --height="50vh"
                    --div1="1 / 3 / 3 / 5"
                    --div2="1 / 1 / 2 / 2"
                    --div3="1 / 2 / 2 / 3"
                    --div4="2 / 1 / 3 / 2"
                    --div5="2 / 2 / 3 / 3"
                    --justify-content="right"
                    h3="popularne"
                    sort="viewCount"
            />
        </div>
        <div class="popular-mob">
            <Videos
                    --height="50vh"
                    --div1="3 / 1 / 5 / 3"
                    --div2="2 / 1 / 3 / 2"
                    --div3="1 / 1 / 2 / 2"
                    --div4="1 / 2 / 2 / 3"
                    --div5="2 / 2 / 3 / 3"
                    --justify-content="right"
                    h3="popularne"
                    sort="viewCount"
            />
        </div>
    </main>
</section>

<style type="text/scss">
  @media screen and (min-width: 800px) {
    .header {
      position: absolute;
      top: 14vh;
      left: 0;
    }
  }

  @media screen and (max-width: 800px) {
    .header {
      width: 20%;
    }
  }

  @media screen and (max-width: 800px) {
    .popular-desk {
      display: none;
    }

    .popular-mob {
      width: 95%;
    }
  }

  @media screen and (min-width: 800px) {
    .popular-mob {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    main {
      height: 255vh;
      display: flex;
      flex-direction: column;
      align-items: end;
    }
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
          width: 273px;
          height: 184px;
        }
      }
    }

    @media screen and (max-width: 517px) {
      display: block;
      position: absolute;
      top: 0;
      left: 25%;
    }
  }

  :root {
    --div1:  1 / 1 / 3 / 3;
    --div2:  1 / 3 / 2 / 4;
    --div3:  1 / 4 / 2 / 5;
    --div4:  2 / 3 / 3 / 4;
    --div5:  2 / 4 / 3 / 5;

    @media screen and (max-width: 800px) {
      --div1:  1 / 1 / 3 / 3;
      --div2:  3 / 1 / 4 / 2;
      --div3:  3 / 2 / 4 / 3;
      --div4:  4 / 1 / 5 / 2;
      --div5:  4 / 2 / 5 / 3;
      --height: 150vh;
    }

    --height: 100vh;
    --justify-content: left;
  }
</style>