<script lang="ts">
    export let className;

    let name = [
            {
                 price: 100,
                 name: "Hoodie"
            },
             {
                 price: 50,
                 name: "T-Shirt"
            },
             {
                 price: 250,
                 name: "Jacket"
            },
             {
                 price: 120,
                 name: "Pants"
            }
    ]

    const shuffle = name.sort(() => 0.5 - Math.random());

     let select = shuffle.slice(0, 1);
</script>

<article class={className}>
    <div>
        <img src="src/assets/test-tshirt.png" />
    </div>
    <div>
        <h3>
            {className}
        </h3>
        <h4>
            {select[0].price} PLN
        </h4>
    </div>
</article>

<style type="text/scss">
    article {
      width: fit-content;

      img {
        width: 350px;
        transform: scale(.8);

        @media screen and (max-width: 517px) {
          transform: scale(.8);
          width: 180px;
        }
      }

      h3, h4 {
        text-align: center;
        
        @media screen and (max-width: 800px) {
          font-size: .8em;
        }
      }
    }
</style>