<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations, GrabTheCat } from '$lib/components';

	const { data } = $props();

	const { giancarlo, player, livingRoom } = $derived(data.state);

	const auxilliaryLivingRoomHref = $derived(
		PAGES['1_auxilliary_living_room']({ statusView: data.statusView })
	);
	const poangHref = $derived(PAGES['1_living_room_poäng']({ statusView: data.statusView }));
</script>

<h3>
	The <u>Living Room</u>
</h3>

<p>
	Through the threshold of the <u>Doorway of the Soul</u>. Scattered are the soles of the reentered;
	you trip and startle Him.
</p>

<p>
	In your periphery, you can see that the door to the <u>Laboratory of Animal Cruelty</u>
	is wide open past the
	<a href={auxilliaryLivingRoomHref}>Auxilliary Living Room</a>. Something dark lurks within. A
	sinister invitation..
</p>

<hr />

{#if livingRoom.observed}
	<p>
		In the <u>Living Room</u>, the first thing you notice is the
		<u>Couch of One Thousand Pulled Threads</u>. While it's not visible, you sense a
		<u>Terrible Aura Omitted from the Rug beneath the Couch</u>.
	</p>
{:else}
	<form action={ACTIONS.observe_1_living_room} method="POST" use:enhance>
		<button>
			Observe the <u>Living Room</u>
		</button>
	</form>
{/if}

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

{#if livingRoom.observed}
	{#if livingRoom.lizardZone.regarded}
		<p>
			You see that the <u>Auxilliary Living Room</u> contains a <u>Lizard Zone</u> and a
			<u>Hotel</u>. Further down the hallway, well.. let's not mention it.
		</p>
	{:else}
		<br />
		<form action={ACTIONS.regardLizard_1_living_room} method="POST" use:enhance>
			<button>
				Check out <u>The Lizard</u>
			</button>
		</form>
		<br />
	{/if}

	{#if livingRoom.chair.regarded}
		<p>
			You regard the <u>IKEA POÄNG</u> chair sitting at the near end of the rug. An apparent comfort
			begs you to take a load off.
		</p>
	{:else}
		<form action={ACTIONS.regardChair_1_living_room} method="POST" use:enhance>
			<button>
				Check out the <u>IKEA POÄNG</u> chair
			</button>
		</form>
		<br />
	{/if}

	<form action={ACTIONS.inspectRug_1_living_room} method="POST" use:enhance>
		<button>Inspect the rug</button>
	</form>

	<GrabTheCat
		{player}
		{giancarlo}
		catchPercentage={data.giancarloCatchPercentage}
		location="living room"
	></GrabTheCat>
	<br />

	{#if livingRoom.lizardZone.regarded || livingRoom.chair.regarded}
		<Destinations>
			{#if livingRoom.lizardZone.regarded}
				<span>
					Recoup in the <a href={auxilliaryLivingRoomHref}>Auxilliary Living Room ^</a>
				</span>
			{/if}
			{#if livingRoom.chair.regarded}
				<span>
					Talk to the <a href={poangHref}>IKEA POÄNG ></a> chair
				</span>
			{/if}
		</Destinations>
	{/if}
{/if}
