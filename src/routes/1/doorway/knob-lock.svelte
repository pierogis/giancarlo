<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';

	import type { Doorway } from '$lib/state';

	const {
		doorway
	}: {
		doorway: Doorway;
	} = $props();
</script>

{#if doorway.knobLock.regarded === false}
	<form action={ACTIONS.regardKnobLock_1_doorway} method="POST" use:enhance>
		<button>Try the <u>knob lock</u></button>
	</form>
{:else}
	<p>
		<i
			>You have a key to the knob lock, but you can't remember if the teeth go in facing up or down.</i
		>
	</p>
	<form action={ACTIONS.tryKnobLockTeethUp_1_doorway} method="POST" use:enhance class="try">
		<button>
			Try the <u>knob lock</u> with teeth facing up
		</button>
	</form>
	<form action={ACTIONS.tryKnobLockTeethDown_1_doorway} method="POST" use:enhance class="try">
		<button>
			Try the <u>knob lock</u> with teeth facing down
		</button>
	</form>
{/if}

<style>
	.try {
		display: inline;
	}
</style>
