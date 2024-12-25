<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Inventory } from '$lib/player';

	import { ACTIONS } from '$lib/ROUTES';
	import type { Kitchen } from './state';

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
	<p><i>You regarded the <u>Cutting Board</u>.</i></p>

	<p>CUTTING BOARD TEXT.</p>

	{#if inventory.lettuce.washed > 0}
		<p><i>You have {inventory.lettuce.washed} <u>Washed Lettuce</u>.</i></p>

		<form action={ACTIONS.chopLettuce_1_kitchen} method="POST" use:enhance>
			<button>
				Chop the <u>Raw Lettuce</u>
			</button>
		</form>
	{/if}
{:else}
	<form action={ACTIONS.regardRefridgerator_1_kitchen} method="POST" use:enhance>
		<button>Inspect the <u>Cutting Board</u></button>
	</form>
{/if}
