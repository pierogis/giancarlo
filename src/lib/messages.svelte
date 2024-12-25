<script lang="ts">
	import { fade } from 'svelte/transition';

	const { messages }: { messages: string[] } = $props();
</script>

<hr />
<div>
	{#each messages as action}
		<p in:fade>{action}</p>
	{:else}
		<p><i>no messages</i></p>
	{/each}
</div>
<hr />

<style>
	div {
		height: 50vh;
		overflow-y: auto;
	}
</style>
