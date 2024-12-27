<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';

	import type { Giancarlo, Player } from '$lib/state';

	const {
		player,
		giancarlo,
		location
	}: { player: Player; giancarlo: Giancarlo; location: Giancarlo['location'] } = $props();
</script>

{#if giancarlo.location === location && !giancarlo.caught}
	<p><u>Giancarlo</u> is in here!</p>

	{#if giancarlo.happiness > -10}
		<form action={ACTIONS.grabCat_1} method="POST" use:enhance>
			<input hidden name="location" value={location} />
			<button>
				Grab the <u>Cat</u>!
			</button>
		</form>
	{/if}
{/if}
{#if giancarlo.caught}
	<p><b>You are holding <u>Giancarlo</u>! Congratulations!</b></p>
	{#if player.inventory.toothbrushes > 0}
		<form action={ACTIONS.brushCatTeeth_1} method="POST" use:enhance class="inline">
			<button>Brush his teeth</button>
		</form>
	{/if}
	<form action={ACTIONS.releaseCat_1} method="POST" use:enhance class="inline">
		<button>
			Release the <u>Cat</u>
		</button>
	</form>
	<br />
{/if}
