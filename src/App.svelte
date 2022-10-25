<script lang="ts">
    import Home from "./routes/Home.svelte";
    import { Router, Route } from "svelte-navigator";
    import About from "./routes/About.svelte";
    import Gallery from "./routes/Gallery.svelte";
    import Sklep from "./routes/Sklep.svelte";
    import Footer from "./components/footer/Footer.svelte";
</script>

<Router>
    <main>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/gallery">
            <Gallery />
        </Route>
        <Route path="/sklep">
            <Sklep />
        </Route>
        <div class="footer">
            <Footer />
        </div>
    </main>
</Router>

<style type="text/scss">
    main {
        height: 200vh;
    }

    .footer {
        position: absolute;
        bottom: -150vh;
        width: 100%;

        @media screen and (max-width: 800px) {
          bottom: -220vh;
        }
    }
</style>