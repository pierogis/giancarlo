<script lang="ts">
	import { PAGES } from '$lib/ROUTES';

	import Messages from '$lib/messages.svelte';

	const { data } = $props();

	const player = $derived(data.player);
	const poang = $derived(data.poang);

	const messages: string[] = $state([]);
</script>

<h3>
	The <u>IKEA POÄNG</u> Chair
</h3>

<p>An <u>IKEA POÄNG</u> chair with navy blue cushion sits in the living room.</p>

<p>You take a seat and find a great comfort. Your backside starts to itch.</p>

<Messages {messages}></Messages>

<button
	onclick={() => {
		messages.push('You called for the cat.');
		messages.push("Giancarlo didn't like that.");
	}}
>
	Call for <u>The Cat</u>
</button>

{#if !poang.regarded}
	<button
		onclick={() => {
			messages.push('You regarded The Itch');
			poang.regarded = true;
		}}
	>
		Inspect <u>The Itch</u>
	</button>
{:else}
	<p>The <u>IKEA POÄNG</u> chair is covered in cat hair.</p>
{/if}

{#if player.inventory.tweetyBirds > 0}
	<button
		onclick={() => {
			messages.push('You struck Tweety Bird');
			messages.push('Tweety Bird chirps and writhes');
		}}
	>
		Strike <u>Tweety Bird</u>
	</button>
{/if}

{#if player.inventory.balls > 0}
	<button
		onclick={() => {
			messages.push('You threw 1-Inch ⌀ Ball');
			player.inventory.crinkleFish -= 1;
		}}
	>
		Throw <u>1-Inch ⌀ Ball</u>
	</button>
{/if}

{#if player.inventory.crinkleFish > 0}
	<button
		onclick={() => {
			messages.push('You threw Crinkle Fish');
			player.inventory.crinkleFish -= 1;
		}}
	>
		Throw <u>Crinkle Fish</u>
	</button>
{/if}

<a href={PAGES['1_auxilliary_living_room_hotel']}>Visit The Hotel</a>
<a href={PAGES['1_auxilliary_living_room_lizard_zone']}>Talk to <u>The Lizard</u></a>
