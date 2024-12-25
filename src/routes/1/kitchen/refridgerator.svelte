<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';
	import type { Kitchen } from './state';

	const {
		refridgerator
	}: {
		refridgerator: Kitchen['refridgerator'];
	} = $props();
</script>

<h4>The <u>Refridgerator</u></h4>
{#if refridgerator.regarded}
	<p><i>You regarded the <u>Refridgerator</u>.</i></p>

	<p>REFRIDGERATOR TEXT.</p>

	{#if !refridgerator.open}
		<p><i>The <u>Refridgerator</u> is closed.</i></p>
		<form action={ACTIONS.openRefridgerator_1_kitchen} method="POST" use:enhance>
			<button>
				Open the <u>Refridgerator</u>
			</button>
		</form>
	{:else}
		<p><i>The <u>Refridgerator</u> is open.</i></p>

		{#if refridgerator.inventory.beer > 0}
			<p><i>There is {refridgerator.inventory.beer} <u>Beer</u>.</i></p>

			<form action={ACTIONS.drinkBeer_1_kitchen} method="POST" use:enhance>
				<button>
					Drink the <u>Beer</u>
				</button>
			</form>
		{/if}
		{#if refridgerator.inventory.lettuce.raw > 0}
			<p><i>There is {refridgerator.inventory.lettuce.raw} <u>Raw Lettuce</u>.</i></p>

			<form action={ACTIONS.takeLettuce_1_kitchen} method="POST" use:enhance>
				<button>
					Take the <u>Raw Lettuce</u>
				</button>
			</form>
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
