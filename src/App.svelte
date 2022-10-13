<script lang="ts">
    import Home from "./routes/Home.svelte";
    import { Router, Route } from "svelte-navigator";
    import About from "./routes/About.svelte";
    import Gallery from "./routes/Gallery.svelte";
    import Sklep from "./routes/Sklep.svelte";
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
    </main>
</Router>

<style>

</style>