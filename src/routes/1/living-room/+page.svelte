<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	const { data } = $props();

	const player = $derived(data.player);
	const livingRoom = $derived(data.livingRoom);
</script>

<h3>
	The <u>Living Room</u>
</h3>

<p>
	Through the threshold of the <u>Doorway of the Soul</u>. Scattered are the soles of the reentered;
	you trip and startle Him.
</p>

<p>
	In your peripheral, you can see that the door to the <u>Laboratory of Animal Cruelty</u>
	is wide open past the <a href={PAGES['1_auxilliary_living_room']}>Auxilliary Living Room</a>.
	Something dark lurks within. A sinister invitation..
</p>

{#if livingRoom.observed}
	<p>
		In the <u>Living Room</u>, the first thing you notice is the <u>Couch of Pulled Threads</u>.
		While it's not visible, you sense a <u>Terrible Aura Omitted from the Rug beneath the Couch</u>.
	</p>
{:else}
	<form action={ACTIONS.observe_1_living_room} method="POST" use:enhance>
		<button>
			Observe the <u>Living Room</u>
		</button>
	</form>
{/if}
<hr />

{#if player.inventory.shoes > 0}
	<p><i>You are wearing shoes.</i></p>

	<form action={ACTIONS.takeOffShoes_1_living_room} method="POST" use:enhance>
		<button>
			Take off <u>Shoes</u>
		</button>
	</form>
{:else}
	<p><i>You are not wearing shoes.</i></p>

	{#if livingRoom.inventory.shoes >= 2}
		<form action={ACTIONS.putOnShoes_1_living_room} method="POST" use:enhance>
			<button>
				Put on <u>Shoes</u>
			</button>
		</form>
	{/if}
{/if}
<hr />

{#if livingRoom.observed}
	{#if livingRoom.lizardZone.regarded}
		<p><i>You regarded the <u>Lizard Zone</u></i></p>

		<p>
			You see that the <u>Auxilliary Living Room</u> contains a <u>Lizard Zone</u> and a
			<u>Hotel</u>. Further down the hallway, well.. let's not mention it.
		</p>

		<a href={PAGES['1_auxilliary_living_room']}>Visit the <u>Auxilliary Living Room</u></a>
	{:else}
		<form action={ACTIONS.regardLizard_1_living_room} method="POST" use:enhance>
			<button>
				Check out <u>The Lizard</u>
			</button>
		</form>
	{/if}
	<hr />

	{#if livingRoom.chair.regarded}
		<p><i>You regarded the <u>IKEA POÄNG</u> chair.</i></p>

		<p>
			You regard the <u>IKEA POÄNG</u> chair sitting at the near end of the rug. An apparent comfort
			begs you to take a load off.
		</p>

		<a href={PAGES['1_living_room_poäng']}>Talk to the <u>IKEA POÄNG</u> chair</a>
	{:else}
		<form action={ACTIONS.regardChair_1_living_room} method="POST" use:enhance>
			<button>
				Check out the <u>IKEA POÄNG</u> chair
			</button>
		</form>
	{/if}

	<hr />
	{#each { length: livingRoom.rug.inspections }}
		<p><i>You inspected the <u>Rug</u>. Something seems off about it.</i></p>
	{/each}
	<form action={ACTIONS.inspectRug_1_living_room} method="POST" use:enhance>
		<button>Inspect the rug</button>
	</form>
{/if}
