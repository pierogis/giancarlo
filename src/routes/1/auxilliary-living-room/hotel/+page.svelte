<script lang="ts">
	import { enhance } from '$app/forms';
	import { Destinations, GrabTheCat } from '$lib/components';

	import { ACTIONS, PAGES } from '$lib/ROUTES.js';

	const { data } = $props();

	const {
		player,
		giancarlo,
		auxilliaryLivingRoom: { hotel }
	} = $derived(data.state);

	const hotelHasBirds = $derived(hotel.inventory.tweetyBirds > 0);
	const hotelHasBalls = $derived(hotel.inventory.balls > 0);
	const hotelHasFish = $derived(hotel.inventory.crinkleFish > 0);
	const hotelHasInventory = $derived(hotelHasBirds || hotelHasBalls || hotelHasFish);
</script>

<h3>
	<u>Giancarlo's Hotel</u>
</h3>
<p>
	You approach the shabby looking cardboard boxes in the <a
		href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
		>Auxilliary Living Room</a
	>.
</p>

<p>
	The boxes are vertically joined by blue painter's tape, and you can see a cutout on the upper box.
	Perhaps a turret slit in a <u>Forward Operating Base</u> for the <u>Beast</u> to launch his
	beastly <u>Stink Attack</u>s. {#if hotelHasInventory}
		On top of the box are {#if hotelHasBirds}
			<b>
				{hotel.inventory.tweetyBirds}
				<u>Tweety Bird</u>{#if hotel.inventory.tweetyBirds > 1}s{/if}
			</b>
			{#if hotelHasBalls && hotelHasFish},{/if}
		{/if}
		{#if hotelHasBalls}
			{#if hotel.inventory.crinkleFish <= 0}and{/if}

			<b>
				{hotel.inventory.balls}
				<u>1-Inch ⌀ Ball</u>
			</b>{#if hotel.inventory.balls > 1}s{/if}{#if hotelHasBirds && hotelHasFish},{/if}
		{/if}
		{#if hotelHasFish}
			{#if hotelHasBirds && hotelHasBalls}and{/if}
			<b>{hotel.inventory.crinkleFish} <u>Catnip–Infused Crinkle Fish</u></b>
		{/if}.
	{/if}
</p>
{#if hotelHasInventory}
	<p>Your beast wrangling instincts and inner monologue tell you that you may need them.</p>
{/if}
<hr />

{#if hotelHasBirds}
	<form action={ACTIONS.pickUp_1_auxilliary_living_room_hotel} method="POST" use:enhance>
		<input hidden name="item" value="bird" />
		<button>
			Pick up <u>Tweety Bird</u>
		</button>
	</form>
	<br />
{/if}

{#if hotelHasBalls}
	<form action={ACTIONS.pickUp_1_auxilliary_living_room_hotel} method="POST" use:enhance>
		<input hidden name="item" value="ball" />
		<button>
			Pick up <u>1-Inch ⌀ Ball</u>
		</button>
	</form>
	<br />
{/if}

{#if hotelHasFish}
	<form action={ACTIONS.pickUp_1_auxilliary_living_room_hotel} method="POST" use:enhance>
		<input hidden name="item" value="fish" />
		<button>
			Pick up <u>Catnip Infused–Crinkle Fish</u>
		</button>
	</form>
	<br />
{/if}

<GrabTheCat {player} {giancarlo} location="hotel"></GrabTheCat>
<br />

<Destinations>
	<span>
		Talk to <a href={PAGES['1_auxilliary_living_room_lizard_zone']({ statusView: data.statusView })}
			>The Lizard ></a
		>
	</span>
	<span>
		Excuse yourself to <a href={PAGES['1_bathroom']({ statusView: data.statusView })}
			>The Bathroom ^</a
		>
	</span>
	<span>
		Recoup in the <a href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
			>Auxilliary Living Room v</a
		>
	</span>
</Destinations>
