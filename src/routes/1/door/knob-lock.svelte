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

{#if door.knobLock.regarded === false}
	<form action={ACTIONS.regardKnobLock_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				onaction(
					"You have a key to the knob lock, but you can't remember if the teeth go in facing up or down."
				);
			}}>Try the <u>knob lock</u></button
		>
	</form>
{:else}
	<form action={ACTIONS.tryKnobLockTeethUp_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				onaction("The key won't go in");
			}}
		>
			Try the <u>knob lock</u> with teeth facing up
		</button>
	</form>
	<form action={ACTIONS.tryKnobLockTeethDown_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				if (!door.locked) {
					onaction('The key fits and you lock the door. It was already unlocked.');
				} else {
					onaction('The key fits and you unlock the door.');
				}
			}}
		>
			Try the <u>knob lock</u> with teeth facing down
		</button>
	</form>
{/if}
