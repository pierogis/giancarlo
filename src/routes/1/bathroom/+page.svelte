<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations, GrabTheCat } from '$lib/components';

	const { data } = $props();

	const { player, giancarlo, bathroom } = $derived(data.state);
</script>

<h3>The Bathroom</h3>

<p>
	In the <u>Bathroom</u>, you look down and find a <u>Litter Box</u> bestinked. It reminds you of
	the
	<u>Terrible Aura Omitted from the Rug beneath the Couch</u>. As for the rest of the
	<u>Bathroom</u>, the shower is running with a man inside, and the <u>Cabinet</u> and
	<u>Pantry</u> glow with a suggestion of relavant items.
</p>
<hr />

{#if bathroom.observed}
	<p>
		It's just a fricken <u>Bathroom</u>.{#if bathroom.inventory.crinkleFish > 0}
			But it does have <b>{bathroom.inventory.crinkleFish} <u>Catnip–Infused Crinkle Fish</u></b> on
			the ground.{/if}
	</p>
	{#if bathroom.inventory.crinkleFish > 0}
		<form action={ACTIONS.pickUpFish_1_bathroom} method="POST" use:enhance>
			<button>
				Pick up <u>Catnip Infused–Crinkle Fish</u>
			</button>
		</form>
	{/if}
{:else}
	<form action={ACTIONS.observe_1_bathroom} method="POST" use:enhance>
		<button>
			Observe the <u>Bathroom</u>
		</button>
	</form>
{/if}

{#if bathroom.observed}
	<h4>Pantry</h4>
	{#if bathroom.pantry.regarded}
		<p>
			You regarded the <u>Pantry</u> to find useful items. Beside the
			<u>American Crew Hair Spray</u>, you find a green bottle of <u>Zyrtec</u>.
		</p>

		{#if bathroom.pantry.inventory.zyrtec > 0}
			<form action={ACTIONS.takeZyrtec_1_bathroom} method="POST" use:enhance>
				<button>
					Take a <u>Zyrtec</u>
				</button>
			</form>
		{:else}
			<p>
				There is no more <u>Zyrtec</u>, you animal.
			</p>
		{/if}
	{:else}
		<form action={ACTIONS.regardPantry_1_bathroom} method="POST" use:enhance>
			<button>
				Check out the <u>Pantry</u>
			</button>
		</form>
	{/if}

	<h4>Cabinet</h4>
	{#if bathroom.cabinet.regarded}
		<p>
			You regarded the <u>Cabinet</u> to find useful items. You saw a
			<u>Thoroughly Exhausted Toothbrush</u>.
		</p>

		{#if bathroom.cabinet.inventory.toothbrushes > 0}
			<form action={ACTIONS.grabToothbrush_1_bathroom} method="POST" use:enhance>
				<button>
					Grab the <u>Thoroughly Exhausted Toothbrush</u>
				</button>
			</form>
		{/if}
	{:else}
		<form action={ACTIONS.regardCabinet_1_bathroom} method="POST" use:enhance>
			<button>
				Check out the <u>Cabinet</u>
			</button>
		</form>
		<br />
	{/if}
{/if}

<GrabTheCat {player} {giancarlo} catchPercentage={data.giancarloCatchPercentage} location="pantry"
></GrabTheCat>

<Destinations>
	<span>
		Chop it up in the <a href={PAGES['1_kitchen']({ statusView: data.statusView })}>Kitchen ^</a>
	</span>
	<span>
		Test your luck at the <a href={PAGES['1_laboratory']({ statusView: data.statusView })}
			>Laboratory of Animal Cruelty ></a
		>
	</span>
	<span>
		Recoup in the <a href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
			>Auxilliary Living Room v</a
		>
	</span>
</Destinations>
