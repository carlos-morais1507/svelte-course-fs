<script lang="ts">
    import type { PageData } from './$types';
    import UserLink from '$lib/components/UserLink.svelte';
    import { user } from '$lib/firebase';
    
    export let data: PageData;
</script>

<svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center flex flex-col justify-center items-center mt-8">
    <h1 class="text-7xl text-purple-500 font-bold mb-3">
        @{data.username}
    </h1>

    <img
        src={data.photoURL ?? 'user.png'}
        alt="photoURL"
        width="256"
        class="mx-auto rounded-full"
    />

    <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none">
        {#each data.links as item}
            <li class="my-2 sm:w-1/3 w-full">
                <UserLink {...item} />
            </li>
        {/each}
    </ul>

    {#if $user}
        <a href="/edit" class="btn btn-secondary mt-5">Edit Profile</a>
    {/if}

</main>

