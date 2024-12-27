<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';

	import type { Giancarlo, Player } from '$lib/state';

	const {
		player,
		giancarlo,
		catchPercentage,
		location
	}: {
		player: Player;
		giancarlo: Giancarlo;
		catchPercentage: number;
		location: Giancarlo['location'];
	} = $props();
</script>

{#if giancarlo.location === location && !giancarlo.caught}
	<p><u>Giancarlo</u> is in here!</p>
	{#if location === 'lizard zone'}
		<p>He's on top of <u>The Lizard</u>'s <u>Cage</u>!</p>
	{:else if location === 'hotel'}
		<p>He's checking in guests at the <u>Concierge Desk</u> of <u>Giancarlo's Hotel</u>!</p>
	{:else if location === 'chair'}
		<p>He's hiding under the chair, waiting for you to play toy with Him!</p>
	{:else if location === 'kitchen'}
		<p>He's standing in the <u>Window</u> yelling at squirrels!</p>
	{:else if location === 'living room'}
		<p>He's hiding under the <u>Couch of One Thousand Pulled Threads</u>!</p>
	{:else if location === 'pantry'}
		<p>He's lounging in the <u>Lower Shelf</u>, anticipating your next move!</p>
	{/if}

	{#if giancarlo.happiness > -10}
		<form action={ACTIONS.grabCat_1} method="POST" use:enhance>
			<input hidden name="location" value={location} />
			<button>
				Grab the <u>Cat</u>! ({catchPercentage}%)
			</button>
		</form>
		<br />
	{:else}
		<p>He's so pissed at you that he won't let you near him.</p>
	{/if}
{/if}
{#if giancarlo.caught}
	<p><b>You are holding <u>Giancarlo</u>! Congratulations!</b></p>
	<img src="/gc.png" width={500} height={500} alt="giancarlo standing" />
	<div class="forms">
		{#if player.inventory.toothbrushes > 0}
			<form action={ACTIONS.brushCatTeeth_1} method="POST" use:enhance>
				<button>Brush his teeth</button>
			</form>
		{/if}
		<form action={ACTIONS.releaseCat_1} method="POST" use:enhance>
			<button>
				Release the <u>Cat</u>
			</button>
		</form>
	</div>
	<br />
{/if}
