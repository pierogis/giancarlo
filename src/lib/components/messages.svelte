<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	const { messages }: { messages: { id: string; text?: string }[] } = $props();
</script>

{#if messages.length > 0}
	{#each messages.toReversed() as message (message.id)}
		<div transition:fly={{ y: -10, duration: 500 }} animate:flip={{ duration: 400 }}>
			{#if message.text}
				> {message.text}
			{:else}
				<br />
			{/if}
		</div>
	{/each}
{/if}

<style>
	div {
		font-family: monospace;
	}
</style>
