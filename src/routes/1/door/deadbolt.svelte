<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS } from '$lib/ROUTES';
	import type { Door } from './state';

	const {
		door = $bindable(),
		onaction
	}: {
		door: Door;
		onaction: (message: string) => void;
	} = $props();
</script>

{#if door.deadbolt.regarded === false}
	<form action={ACTIONS.regardDeadbolt_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				onaction(
					"You have a key to the deadbolt, but you can't remember if the teeth go in facing up or down."
				);
			}}>Try the <u>deadbolt</u></button
		>
	</form>
{:else}
	<form action={ACTIONS.tryDeadboltTeethUp_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				onaction("The deadbolt sticks and won't turn.");
			}}
		>
			Try the <u>deadbolt</u> with teeth facing up
		</button>
	</form>
	<form action={ACTIONS.tryDeadboltTeethDown_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				onaction("The key won't go in.");
				door.deadbolt.triedTeethDown = true;
			}}
		>
			Try the <u>deadbolt</u> with teeth facing down
		</button>
	</form>
{/if}
