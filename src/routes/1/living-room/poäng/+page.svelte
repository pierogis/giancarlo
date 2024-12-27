<script lang="ts">
	import { enhance } from '$app/forms';
	import { Destinations, GrabTheCat } from '$lib/components';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	const { data } = $props();

	const {
		player,
		livingRoom: { chair },
		giancarlo
	} = $derived(data.state);
</script>

<h3>
	The <u>IKEA POÄNG</u> Chair
</h3>

<p>An <u>IKEA POÄNG</u> chair with navy blue cushion sits in the living room.</p>

<p>You take a seat and find a great comfort. Your backside starts to itch.</p>
<hr />

{#if !giancarlo.caught}
	<form action={ACTIONS.callForCat_1_living_room_poäng} method="POST" use:enhance>
		<button>
			Call for <u>The Cat</u>
		</button>
	</form>
{/if}

{#if !chair.regarded}
	<form action={ACTIONS.regardItch_1_living_room_poäng} method="POST" use:enhance>
		<button>
			Inspect <u>The Itch</u>
		</button>
	</form>
{:else}
	<p>The <u>IKEA POÄNG</u> chair is covered in cat hair.</p>
{/if}

{#if player.inventory.tweetyBirds > 0}
	<form action={ACTIONS.strikeBird_1_living_room_poäng} method="POST" use:enhance>
		<button>
			Strike <u>Tweety Bird</u>
		</button>
	</form>
	{#if player.inventory.balls > 0 || player.inventory.crinkleFish > 0}
		<br />
	{/if}
{/if}

{#if player.inventory.balls > 0}
	<form action={ACTIONS.throwBall_1_living_room_poäng} method="POST" use:enhance>
		<button>
			Throw <u>1-Inch ⌀ Ball</u>
		</button>
	</form>
	{#if player.inventory.crinkleFish > 0}
		<br />
	{/if}
{/if}

{#if player.inventory.crinkleFish > 0}
	<form action={ACTIONS.throwFish_1_living_room_poäng} method="POST" use:enhance>
		<button>
			Throw <u>Catnip–Infused Crinkle Fish</u>
		</button>
	</form>
{/if}

<GrabTheCat {player} {giancarlo} location="chair"></GrabTheCat>
<br />

<Destinations>
	<span>
		Check in at <a href={PAGES['1_auxilliary_living_room_hotel']({ statusView: data.statusView })}
			>{"Giancarlo's Hotel <"}</a
		>
	</span>
	<span>
		Talk to <a href={PAGES['1_auxilliary_living_room_lizard_zone']({ statusView: data.statusView })}
			>The Lizard ></a
		>
	</span>
</Destinations>
