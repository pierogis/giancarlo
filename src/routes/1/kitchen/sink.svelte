<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Player } from '$lib/player';
	import { ACTIONS } from '$lib/ROUTES';

	import type { Kitchen } from './state';

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
	<p><i>You regarded the <u>Sink</u></i></p>

	<p>
		You take a look at the <u>Lizard Zone</u> to get a sense of the time of day. He's looking rather
		oblate. A sure sign that he has been roasting under his artificial sun for the last 30 hours.
	</p>

	{#if !sink.faucetRunning}
		<p>The <u>Faucet</u> is not running.</p>
		<form action={ACTIONS.turnOnFaucet_1_kitchen} method="POST" use:enhance>
			<button>
				Turn on the <u>Faucet</u>
			</button>
		</form>
	{:else}
		<p>The <u>Faucet</u> is running.</p>
		{#if inventory.lettuce.raw > 0}
			<form action={ACTIONS.turnOffFaucet_1_kitchen} method="POST" use:enhance>
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
	{/if}
{:else}
	<form action={ACTIONS.regardSink_1_kitchen} method="POST" use:enhance>
		<button>Inspect the <u>Sink</u></button>
	</form>
{/if}
