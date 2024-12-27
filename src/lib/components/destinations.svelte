<script lang="ts">
	const { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 8px;

		border: 1px solid grey;
		border-bottom-width: 2px;
		border-radius: 4px;

		font-family: monospace;
	}
</style>
