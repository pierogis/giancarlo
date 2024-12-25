<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';
	import CuttingBoard from './cutting-board.svelte';
	import Refridgerator from './refridgerator.svelte';
	import Sink from './sink.svelte';

	const { data, form } = $props();

	const player = $derived(data.player);
	const kitchen = $derived(data.kitchen);
</script>

<h3>The <u>Kitchen</u></h3>

<p>
	You find yourself in the <u>Kitchen</u> behind you is the
	<a href={PAGES['1_laboratory']}>Laboratory of Animal Cruelty</a>
	and the <a href={PAGES['1_bathroom']}>Bathroom</a>. Ahead of you you can see a <u>Window</u>.
</p>

<hr />

{#if kitchen.observed}
	<p><i>You observed the <u>Kitchen</u></i></p>
	<p>
		In the <u>Kitchen</u> there is the <u>Refridgerator</u>, the <u>Sink</u>, and the
		<u>Cutting Board</u>.
	</p>
	<hr />
	<Sink inventory={player.inventory} sink={kitchen.sink}></Sink>

	<hr />
	<Refridgerator refridgerator={kitchen.refridgerator}></Refridgerator>

	<hr />
	<CuttingBoard inventory={player.inventory} cuttingBoard={kitchen.refridgerator}></CuttingBoard>
{:else}
	<form action={ACTIONS.observe_1_kitchen} method="POST" use:enhance>
		<button>Observe the <u>Kitchen</u></button>
	</form>
{/if}

<hr />

{#if form && form.messages.length > 0}
	{#each form.messages || [] as message}
		<p><i>{message}</i></p>
	{/each}
	<hr />
{/if}

<p>
	<a href={PAGES['1_bathroom']}>Get the scoop in the <u>Bathroom</u></a>
</p>
<p>
	<a href={PAGES['1_laboratory']}>Test your luck at the <u>Laboratory of Animal Cruelty</u></a>
</p>
<p>
	<a href={PAGES['1_auxilliary_living_room']}>Recoup in the <u>Auxilliary Living Room</u></a>
</p>
