<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations, GrabTheCat } from '$lib/components';
	import CuttingBoard from './cutting-board.svelte';
	import Refridgerator from './refridgerator.svelte';
	import Sink from './sink.svelte';

	const { data } = $props();

	const { giancarlo, player, kitchen } = $derived(data.state);
</script>

<h3>The <u>Kitchen</u></h3>

<p>
	You find yourself in the <u>Kitchen</u> behind you is the
	<a href={PAGES['1_laboratory']({ statusView: data.statusView })}>Laboratory of Animal Cruelty</a>
	and the <a href={PAGES['1_bathroom']({ statusView: data.statusView })}>Bathroom</a>. Ahead of you,
	you can see a <u>Window</u>.
</p>

<hr />

{#if kitchen.observed}
	<p>
		In the <u>Kitchen</u> there is a <u>Refridgerator</u>, a <u>Sink</u>, and a
		<u>Cutting Board</u>. {#if kitchen.inventory.balls > 0}As a result of careless throwing, you see
			<b>
				{kitchen.inventory.balls}
				<u>1-Inch ⌀ Ball</u>
			</b>{#if kitchen.inventory.balls > 1}s{/if} on the ground{/if}
	</p>

	{#if kitchen.inventory.balls > 0}
		<form action={ACTIONS.pickUpBall_1_kitchen} method="POST" use:enhance>
			<button>
				Pick up <u>1-Inch ⌀ Ball</u>
			</button>
		</form>
	{/if}

	<Sink inventory={player.inventory} sink={kitchen.sink}></Sink>

	<Refridgerator refridgerator={kitchen.refridgerator}></Refridgerator>

	<CuttingBoard inventory={player.inventory} cuttingBoard={kitchen.refridgerator}></CuttingBoard>
{:else}
	<form action={ACTIONS.observe_1_kitchen} method="POST" use:enhance>
		<button>Observe the <u>Kitchen</u></button>
	</form>
	<br />
{/if}

<GrabTheCat {player} {giancarlo} location="kitchen"></GrabTheCat>
<br />

<Destinations>
	<span>
		Get the scoop in the <a href={PAGES['1_bathroom']({ statusView: data.statusView })}
			>Bathroom v</a
		>
	</span>
	<span>
		Test your luck at the <a href={PAGES['1_laboratory']({ statusView: data.statusView })}
			>Laboratory of Animal Cruelty v</a
		>
	</span>
	<span>
		Recoup in the <a href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
			>Auxilliary Living Room v</a
		>
	</span>
</Destinations>
