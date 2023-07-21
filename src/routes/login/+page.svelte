<script lang="ts">
    import { auth, user } from '$lib/firebase';

    import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const credential = await signInWithPopup(auth, provider);

        const idToken = await credential.user.getIdToken();

        const res = await fetch("/api/signin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'CSRF-Token': csrfToken // HANDLED by sveltekit automatically
            },
            body: JSON.stringify({ idToken }),
        });
    }

    async function signOutSSR() {
        const res = await fetch("/api/signin", { method: "DELETE" });
        await signOut(auth);
    }
</script>
<h2>Login</h2>

{#if $user}
    <h2 class="font-bold text-2xl">Welcome, <span class="text-accent">{$user.displayName}</span></h2>
    <p>You are logged in!</p>
    <a href="/login/username" class="btn btn-primary">Choose Username</a>
    <button class="btn btn-error" on:click={() => signOutSSR()}>Sign Out</button>
{:else}
<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google!</button>
{/if}