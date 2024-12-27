<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';
	import type { Kitchen } from '$lib/state';

	const {
		refridgerator
	}: {
		refridgerator: Kitchen['refridgerator'];
	} = $props();
</script>

<h4>The <u>Refridgerator</u></h4>
{#if refridgerator.regarded}
	<p>
		The Refridgerator hums with the promise of some stuff inside, though when you reach for the
		door, you can tell from your <u>Ultrasonic Sonar Gloves</u> that there is suprisingly little inside.
	</p>

	{#if !refridgerator.open}
		<p><i>The <u>Refridgerator</u> is closed.</i></p>
		<form action={ACTIONS.openRefridgerator_1_kitchen} method="POST" use:enhance>
			<button>
				Open the <u>Refridgerator</u>
			</button>
		</form>
	{:else}
		<p>
			<i>
				The <u>Refridgerator</u> is open. There {refridgerator.inventory.beer > 1 ? 'are' : 'is'}
				{refridgerator.inventory.beer || 'no'} <u>Beer</u>{refridgerator.inventory.beer > 1
					? 's'
					: ''}. There is {refridgerator.inventory.lettuce.raw || 'no'} <u>Raw Lettuce</u>.
			</i>
		</p>

		{#if refridgerator.inventory.beer > 0}
			<form action={ACTIONS.drinkBeer_1_kitchen} method="POST" use:enhance class="inline">
				<button>
					Drink the <u>Beer</u>
				</button>
			</form>

			{#if refridgerator.inventory.lettuce.raw <= 0}
				<br />
				<br />
			{/if}
		{/if}

		{#if refridgerator.inventory.lettuce.raw > 0}
			<form action={ACTIONS.takeLettuce_1_kitchen} method="POST" use:enhance class="inline">
				<button>
					Take the <u>Raw Lettuce</u>
				</button>
			</form>
			<br />
			<br />
		{/if}

		<form action={ACTIONS.closeRefridgerator_1_kitchen} method="POST" use:enhance>
			<button>
				Close the <u>Refridgerator</u>
			</button>
		</form>
	{/if}
{:else}
	<form action={ACTIONS.regardRefridgerator_1_kitchen} method="POST" use:enhance>
		<button>Inspect the <u>Refridgerator</u></button>
	</form>
{/if}
