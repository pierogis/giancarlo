<script lang="ts">
	import { fade } from 'svelte/transition';

	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations, GrabTheCat } from '$lib/components';

	const { data } = $props();

	const {
		player,
		giancarlo,
		auxilliaryLivingRoom: { lizardZone }
	} = $derived(data.state);
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
	<p in:fade>
		You talked to <u>The Lizard</u>, and he opened his mouth. He looked hungry.
	</p>

	{#if player.inventory.lettuce.chopped > 0}
		<form
			action={ACTIONS.giveLizardLettuce_1_auxilliary_living_room_lizard_zone}
			method="POST"
			use:enhance
			in:fade
		>
			<button>Give <u>The Lizard</u> some <u>Chopped Lettuce</u></button>
		</form>
		<br />
	{/if}
	{#if lizardZone.fed}
		<p in:fade>
			You opened <u>The Lizard</u> tank and dumped a bunch of <u>Chopped Lettuce</u> into his bowl/plate.
		</p>
		<p in:fade>
			Then <u>The Lizard</u> opened his mouth again. He said,
			<b>"You have sexed me incorrectly; you can tell by inspecting my gonads". </b>
		</p>

		{#if !lizardZone.ignored}
			<form
				action={ACTIONS.ignoreLizard_1_auxilliary_living_room_lizard_zone}
				method="POST"
				use:enhance
				in:fade
			>
				<button>That was a waste of time</button>
			</form>
			<br />
		{:else}
			<p in:fade>
				It's dubious, you probably hallucinated that. But nonetheless, you added <u>Lizard Advice</u
				>
				to your <u>Inventory</u>.
			</p>
		{/if}
	{/if}
{/if}

{#if lizardZone.ignored}
	<p in:fade>
		He continues, <b
			>"Oh.. while you're here, the secret to catching the <u>Cat</u> is that you have to get his
			<u>Happiness</u> above a certain threshold for him to come out of the closet. Then anything you
			can do to make him happier will increase your chances of catching him if you're in the same room
			as him."</b
		>
	</p>
	{#if giancarlo.happiness > -10}
		<p in:fade>
			Suddenly, something stirs in the <u>Laboratory of Animal Cruelty</u>. Of course! There was a
			whole chapter about it in one of your first year <u>Cat Snatching Textbook</u>s:
			<b>
				the <u>Cat</u> cannot resist a chance to sniff
				<u>The Lizard</u>
			</b>.
		</p>
		<p in:fade>Time to get in position.</p>
	{/if}
{/if}

<GrabTheCat
	{player}
	{giancarlo}
	catchPercentage={data.giancarloCatchPercentage}
	location="lizard zone"
></GrabTheCat>

<Destinations>
	<span>
		Recoup in the <a href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
			>{'Auxilliary Living Room <'}</a
		>
	</span>

	<span>
		Check in at <a href={PAGES['1_auxilliary_living_room_hotel']({ statusView: data.statusView })}
			>{"Giancarlo's Hotel <"}</a
		>
	</span>
</Destinations>
