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

{#if doorway.deadbolt.regarded === false}
	<br />
	<form action={ACTIONS.regardDeadbolt_1_doorway} method="POST" use:enhance>
		<button>Try the <u>deadbolt</u></button>
	</form>
{:else}
	<p>
		<i
			>You have a key to the deadbolt, but you can't remember if the teeth go in facing up or down.</i
		>
	</p>
	<div>
		<form action={ACTIONS.tryDeadboltTeethUp_1_doorway} method="POST" use:enhance class="try">
			<button>
				Try the <u>deadbolt</u> with teeth facing up
			</button>
		</form>
		<form action={ACTIONS.tryDeadboltTeethDown_1_doorway} method="POST" use:enhance class="try">
			<button>
				Try the <u>deadbolt</u> with teeth facing down
			</button>
		</form>
	</div>
{/if}

<style>
	.try {
		display: inline;
	}
</style>
