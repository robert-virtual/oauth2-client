<script lang="ts">
  import { sheetsApi } from "../axios/sheetsApi";

  import { useLocation, useNavigate } from "svelte-navigator";

  import { OAUTH2_SERVER } from "../constantes";
  let title = "" 
  async function createSheet() {
    const userData = JSON.parse(localStorage.userData);
    const {data} = await sheetsApi.post(
      "",
      {
        properties: {
          title,
        },
      },
      {
        params: {
          access_token: userData.access_token,
        },
      }
    );
    console.log({data})
  }
  let params = {
    redirect_uri: "http://localhost:3000",
    client_id:
      "1047629314149-f5sp9o7ol8ta174r41hur8untntt188j.apps.googleusercontent.com",
    response_type: "token",
    include_granted_scopes: "true",
    state: "pass-through value",
    scope: "https://www.googleapis.com/auth/spreadsheets",
  };
  const location = useLocation();
  $: {
    console.log($location);
    if ($location.hash) {
      const hash = $location.hash.slice(1).split("&");
      const userData = {};
      hash.forEach((e) => {
        const pair = e.split("=");
        userData[pair[0]] = pair[1];
      });
      console.log(userData);
      localStorage.userData = JSON.stringify(userData);
    }
  }
  const navigate = useNavigate();
  function goto(page: string) {
    navigate(page, {
      state: {
        hola: "Mundo",
      },
    });
  }
</script>

<h2>oauth client</h2>
<form action={OAUTH2_SERVER} method="get">
  {#each Object.keys(params) as k}
    <input type="text" name={k} value={params[k]} hidden />
  {/each}
  <button>login</button>
</form>

<button on:click={() => goto("callback")}>go to callback</button>
<hr />
<input type="text" bind:value={title} />
<button on:click={createSheet}>Create sheet</button>

<style>
</style>
