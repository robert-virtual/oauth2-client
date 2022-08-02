<script lang="ts">
  import { Link, Route, Router } from "svelte-navigator";
  import Callback from "./pages/callback.svelte";
  import Sheets from "./pages/sheets.svelte";
</script>

<Router>
  <nav>
    <Link to={"/"}>sheets</Link>
    <Link to={"/callback"}>callback</Link>
  </nav>
  <main>
    <Route path="/">
      <Sheets />
    </Route>
    <Route path="/callback">
      <Callback />
    </Route>
  </main>
</Router>

<style>
</style>
