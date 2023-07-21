<script lang="ts">
  import { user, userData } from "$lib/firebase";


</script>
<main class="p-24 flex flex-col items-center min-h-[90vh]">
  <h1 class="text-5xl font-bold text-accent">My FKit LinkTree 🔥🌳</h1>
  <div>
    <a href="/login" class="btn btn-primary mt-5">Sign in</a>
    {#if $user}
      <a href={`/${$userData?.username}/edit`} class="btn btn-secondary ml-3">Edit Profile</a>
    {/if}
  </div>
</main>