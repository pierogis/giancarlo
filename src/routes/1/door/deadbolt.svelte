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

{#if door.deadbolt.regarded === false}
	<form action={ACTIONS.regardDeadbolt_1_door} method="POST" use:enhance>
		<button>Try the <u>deadbolt</u></button>
	</form>
{:else}
	<p>
		<i
			>You have a key to the deadbolt, but you can't remember if the teeth go in facing up or down.</i
		>
	</p>
	<form action={ACTIONS.tryDeadboltTeethUp_1_door} method="POST" use:enhance>
		<button>
			Try the <u>deadbolt</u> with teeth facing up
		</button>
	</form>
	<form action={ACTIONS.tryDeadboltTeethDown_1_door} method="POST" use:enhance>
		<button>
			Try the <u>deadbolt</u> with teeth facing down
		</button>
	</form>
{/if}
