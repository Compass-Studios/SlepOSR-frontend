<script lang="ts">
    import { term } from '../js/stores.js';
    let val = '';

    $: term.set(val);
</script>

<form class="search-box">
    <input bind:value={val} type="text" placeholder=" " />
    <button type="reset">

    </button>
</form>

<style type="text/scss">

  .search-box {
    $font-size: 15px;
    $frame-color: #ffffff;
    $size: 2.5em;
    $open-width: 18em;
    $open-padding: 0.3em 2.1em 0.3em 0.4em;
    $frame-thickness: 0.3em;
    $handle-height: 1.4em;
    $open-trans-time: 800ms;
    $close-trans-time: 150ms;

    @media screen and (max-width: 800px) {
      transform: translateY(0%) scale(.8);
    }

    font-size: $font-size;
    cursor: pointer;
    border: solid $frame-thickness $frame-color;
    display: inline-block;
    position: relative;
    border-radius: $size;
    transform: translateY(8vh) scale(.9);

    input[type="text"] {
      cursor: pointer;
      background: transparent;
      font-family: inherit;
      font-weight: bold;
      width: $size;
      height: $size;
      padding: $open-padding;
      border: none;
      box-sizing: border-box;
      border-radius: $size;
      transition:
              width $open-trans-time cubic-bezier(0.68, -0.55, 0.27, 1.55) $close-trans-time;
      &:focus {
        outline: none;
      }
      &:focus, &:not(:placeholder-shown) {
        width: $open-width;
        transition: width $open-trans-time cubic-bezier(0.68, -0.55, 0.27, 1.55);
        + button[type="reset"] {
          transform: rotate(-45deg) translateY(0);
          transition:
                  transform $close-trans-time ease-out $open-trans-time;
        }
        + button[type="reset"]:after {
          opacity: 1;
          transition:
                  top $close-trans-time ease-out ($open-trans-time + $close-trans-time),
                  right $close-trans-time ease-out ($open-trans-time + $close-trans-time),
                  opacity $close-trans-time ease ($open-trans-time + $close-trans-time);
        }
      }
    }
    button[type="reset"] {
      cursor: pointer;
      background-color: transparent;
      width: $handle-height;
      height: $handle-height;
      border: 0;
      padding: 0;
      outline: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: ($size / 2) - ($handle-height / 2);
      right: ($size / 2) - ($handle-height / 2);
      transform: rotate(-45deg) translateY($size - $frame-thickness);
      transition:
              transform $close-trans-time ease-out $close-trans-time;
      &:before, &:after {
        content: "";
        background-color: $frame-color;
        width: $frame-thickness;
        height: $handle-height;
        position: absolute;
      }
      &:after {
        transform: rotate(90deg);
        opacity: 0;
        transition:
                transform $close-trans-time ease-out,
                opacity $close-trans-time ease-out;
      }
    }
  }

</style>