<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS } from '$lib/ROUTES';
	import type { Player, Kitchen } from '$lib/state';

	const {
		inventory,
		sink
	}: {
		inventory: Player['inventory'];
		sink: Kitchen['sink'];
	} = $props();
</script>

<h4>The <u>Sink</u></h4>
{#if sink.regarded}
	<p>
		You take a look at the <u>Sink</u>. It occurs to you that this would be the perfect place to
		wash some vegetables.
	</p>

	{#if !sink.faucetRunning}
		<p><i>The <u>Faucet</u> is not running.</i></p>
		<form action={ACTIONS.turnOnFaucet_1_kitchen} method="POST" use:enhance>
			<button>
				Turn on the <u>Faucet</u>
			</button>
		</form>
	{:else}
		<p><i>The <u>Faucet</u> is running.</i></p>
		<div class="forms">
			{#if inventory.lettuce.raw > 0}
				<form action={ACTIONS.washLettuce_1_kitchen} method="POST" use:enhance>
					<button>
						Wash the <u>Raw Lettuce</u>
					</button>
				</form>
			{/if}
			<form action={ACTIONS.turnOffFaucet_1_kitchen} method="POST" use:enhance>
				<button>
					Turn off the <u>Faucet</u>
				</button>
			</form>
		</div>
	{/if}
{:else}
	<form action={ACTIONS.regardSink_1_kitchen} method="POST" use:enhance>
		<button>Inspect the <u>Sink</u></button>
	</form>
{/if}
