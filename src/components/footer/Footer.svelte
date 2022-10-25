<footer>
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <div><h4 class="col"><a href="#">Contact</a></h4></div>
            </div>
            <div class="footer-col">
                <div><h4 class="col"><a href="#">About Us</a></h4></div>
            </div>
            <div class="footer-col">
                <div><h4 class="col"><a href="#">Privacy Policy</a></h4></div>
            </div>
            <div class="footer-col">
                <div><h4>Socials</h4></div>
                <div class="social-links">
                    <a href="#"><img src="src/assets/github.svg" /></a>
                    <a href="#"><img src="src/assets/youtube.svg" /></a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style type="text/scss">
    footer {
      background-color: #24262b;
      background-image: none;
      padding: 70px 0;

      .container {
        width: 100%;
        margin: auto;

        .row {
          display: flex;
          flex-wrap: wrap;

          .footer-col {
            width: 25%;
            padding: 0 15px;

            @media screen and (max-width: 517px) {
              width: 50%;
            }

            .social-links {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              gap: 15px;

              a:hover img {
                filter: invert(100%);
              }
            }

            div {
              display: flex;
              justify-content: center;

              h4 {
                font-size: 18px;
                color: white;
                text-transform: capitalize;
                margin-bottom: 30px;
                width: fit-content;
                padding-bottom: 10px;
                font-weight: 500;
                border-bottom: 2px solid #e91e63;
                transition: all ease .3s;

                a {
                  transition: all .3s ease;
                  font-weight: 500;
                  text-decoration: none;
                }
              }

              .col:hover {
                  border-color: white;
                  a {
                    color: #e91e63;
                  }
              }
            }
          }
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
      transition: all .3s ease;
    }

    ul {
      list-style: none;
    }
</style>