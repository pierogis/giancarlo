<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS, PAGES } from '$lib/ROUTES';
	import { fade } from 'svelte/transition';

	const { data, form } = $props();

	const player = $derived(data.player);
	const lizardZone = $derived(data.lizardZone);
</script>

<h3>
	The <u>Lizard Zone</u>
</h3>

<p>
	Given the width of <u>The Lizard</u>, you calculate that he has been roasting for
	<b>{data.hoursSinceStart} hours</b>
	since he was turned on.. making it the witching hours for the cat.. ominous.
</p>

<hr />

{#if !lizardZone.talkedTo}
	<form
		action={ACTIONS.talkToLizard_1_auxilliary_living_room_lizard_zone}
		method="POST"
		use:enhance
		in:fade
	>
		<button>
			Talk to <u>The Lizard</u>
		</button>
	</form>
{:else}
	<p in:fade><i>You talked to <u>The Lizard.</u></i></p>

	<p in:fade>
		<u>The Lizard</u> opens his mouth. He says, "You have sexed me incorrectly; you can tell by inspecting
		my gonads".
	</p>
	<p in:fade>It's dubious, you probably hallucinated that.</p>
	{#if player.inventory.lettuce.chopped > 0}
		<form
			action={ACTIONS.giveLizardLettuce_1_auxilliary_living_room_lizard_zone}
			method="POST"
			use:enhance
			in:fade
		>
			<button>Give <u>The Lizard</u> some <u>Chopped Lettuce</u></button>
		</form>
	{/if}
	{#if !lizardZone.ignored}
		<form
			action={ACTIONS.ignoreLizard_1_auxilliary_living_room_lizard_zone}
			method="POST"
			use:enhance
			in:fade
		>
			<button>That was a waste of time</button>
		</form>
	{/if}
{/if}

{#if lizardZone.ignored}
	<hr />
	<p in:fade><i>You ignored <u>The Lizard</u>.</i></p>
	<p in:fade>Suddenly, something stirs in the <u>Laboratory of Animal Cruelty</u>.</p>
{/if}

<hr />
{#if form?.messages && form.messages.length > 0}
	{#each form.messages || [] as message}
		<p in:fade><i>{message}</i></p>
	{/each}
	<hr />
{/if}

<p>
	Recoup in the <a href={PAGES['1_auxilliary_living_room']}>{'Auxilliary Living Room \<'}</a>
</p>

<p>
	Check in at <a href={PAGES['1_auxilliary_living_room_hotel']}>{"Giancarlo's Hotel \<"}</a>
</p>
