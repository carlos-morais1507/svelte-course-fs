<script lang="ts">
    import { page } from "$app/stores";
  import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<nav class="w-full flex items-center justify-center h-32 pt-20">
    <ul class="steps">
        <a href="/login" class="step step-primary">Sign In</a>
        <a href="/login/username" class="step" class:step-primary={$page.route.id?.match(/username|photo/g)} >Choose Username</a>
        <a href="/login/photo" class="step" class:step-primary={$page.route.id?.match(/photo/g)}>Upload Photo</a>
    </ul>
</nav>

<AnimatedRoute>
<main class="card w-4/6 bg-neutral text-neutral-content mx-auto mt-5">
    <div class="card-body items-center text-center">
        <slot></slot>
    </div>
</main>
</AnimatedRoute>