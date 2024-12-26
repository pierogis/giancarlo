<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	const { data, form } = $props();

	const bathroom = $derived(data.bathroom);
</script>

<h3>The Bathroom</h3>

<p>BATHROOM PLACEHOLDER TEXT.</p>
<hr />

{#if bathroom.observed}
	<p><i>You observed the <u>Bathroom</u></i></p>
	<p>
		In the <u>Bathroom</u>, you look down and find a <u>Litter Box</u> bestinked. It reminds you of
		the
		<u>Terrible Aura Omitted from the Rug beneath the Couch</u>. As for the rest of the
		<u>Bathroom</u>, the shower is running with a man inside, and the <u>Cabinet</u> and
		<u>Pantry</u> shimmer with the promise of inventory–addable items.
	</p>
{:else}
	<form action={ACTIONS.observe_1_bathroom} method="POST" use:enhance>
		<button>
			Observe the <u>Bathroom</u>
		</button>
	</form>
{/if}

<hr />

{#if bathroom.observed}
	<h4>Pantry</h4>
	{#if bathroom.pantry.regarded}
		<p><i>You regarded the <u>Pantry</u></i></p>

		<p>
			You regard the <u>Pantry</u> to find useful items. Among the <u>American Crew Hair Spray</u>,
			you find a green bottle of <u>Zyrtec</u>.
		</p>

		{#if bathroom.pantry.inventory.zyrtec > 0}{/if}
	{:else}
		<form action={ACTIONS.regardPantry_1_bathroom} method="POST" use:enhance>
			<button>
				Check out the <u>Pantry</u>
			</button>
		</form>
	{/if}
	<hr />

	<h4>Cabinet</h4>
	{#if bathroom.cabinet.regarded}
		<p><i>You regarded the <u>Cabinet</u></i></p>
		<p>
			You regard the <u>Cabinet</u> to find useful items. Among the <u>American Crew Hair Spray</u>,
			you find a <u>Thoroughly Exhausted Toothbrush</u>.
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
	{/if}
	<hr />
{/if}

{#if form && form.messages.length > 0}
	{#each form.messages || [] as message}
		<p><i>{message}</i></p>
	{/each}
	<hr />
{/if}

<p>
	Chop it up in the <a href={PAGES['1_kitchen']}>Kitchen ^</a>
</p>
<p>
	Test your luck at the <a href={PAGES['1_laboratory']}>Laboratory of Animal Cruelty ></a>
</p>
<p>
	Recoup in the <a href={PAGES['1_auxilliary_living_room']}>Auxilliary Living Room v</a>
</p>
