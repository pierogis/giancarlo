<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';
	import type { Inventory, Kitchen } from '$lib/state';

	const {
		inventory,
		cuttingBoard
	}: {
		inventory: Inventory;
		cuttingBoard: Kitchen['cuttingBoard'];
	} = $props();
</script>

<h4>The <u>Cutting Board</u></h4>
{#if cuttingBoard.regarded}
	<p>Bagel crumbs adorn the <u>Cutting Board</u>.</p>

	{#if inventory.lettuce.washed > 0}
		<p><i>You have {inventory.lettuce.washed} <u>Washed Lettuce</u>.</i></p>

		<form action={ACTIONS.chopLettuce_1_kitchen} method="POST" use:enhance>
			<button>
				Chop the <u>Raw Lettuce</u>
			</button>
		</form>
		<br />
	{/if}
{:else}
	<form action={ACTIONS.regardRefridgerator_1_kitchen} method="POST" use:enhance>
		<button>Inspect the <u>Cutting Board</u></button>
	</form>
	<br />
{/if}
