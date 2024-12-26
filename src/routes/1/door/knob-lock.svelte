<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS } from '$lib/ROUTES';
	import type { Door } from './state';

	const {
		door
	}: {
		door: Door;
	} = $props();
</script>

{#if door.knobLock.regarded === false}
	<form action={ACTIONS.regardKnobLock_1_door} method="POST" use:enhance>
		<button>Try the <u>knob lock</u></button>
	</form>
{:else}
	<p>
		<i
			>You have a key to the knob lock, but you can't remember if the teeth go in facing up or down.</i
		>
	</p>
	<form action={ACTIONS.tryKnobLockTeethUp_1_door} method="POST" use:enhance>
		<button>
			Try the <u>knob lock</u> with teeth facing up
		</button>
	</form>
	<form action={ACTIONS.tryKnobLockTeethDown_1_door} method="POST" use:enhance>
		<button>
			Try the <u>knob lock</u> with teeth facing down
		</button>
	</form>
{/if}
