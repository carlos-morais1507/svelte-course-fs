<script lang="ts">
  import { user, userData } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { getAuth } from "firebase/auth";
  import "../app.css";
  
  $user;
  $userData;

  async function signOutSSR() {
    const auth = getAuth();
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }
</script>
  <nav class="navbar fixed bg-base-100 z-50">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl font-bold">FKit 🔥🌳</a>
    </div>
    <div class="flex-none">
      {#if $user}
        <a href={`/${$userData?.username}`} class="btn btn-ghost text-lg normal-case font-semibold">My Profile</a>
        <button on:click={() => signOutSSR()} class="btn btn-ghost text-lg normal-case font-semibold">Sign Out</button>
      {:else}
        <a href="/login" class="btn btn-ghost text-lg normal-case font-semibold">Sign In</a>
      {/if}
    </div>
  </nav>

<slot/>

<footer class="footer sm:p-10 p-5 bg-neutral text-neutral-content fixed bottom-0 z-50">
  <div>
    <h2>Desenvolvido com 💜 por Carlos Morais 👾</h2>
    <a href="https://cmorais.dev.br" class="link link-hover" target="_blank">Website</a>
  </div>
</footer>