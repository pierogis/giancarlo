<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS, PAGES } from '$lib/ROUTES';

	const { data } = $props();

	const player = $derived(data.player);
	const lizardZone = $derived(data.lizardZone);
</script>

<h3>
	The <u>Lizard Zone</u>
</h3>

<p>
	Given that the lizard has been roasting for 30 hours, you calculate that it has been 1 day and 6
	hours since he was turned on at the start of the day yesterday.. making it 6pm.
</p>

<p>Ominous.. these are witching hours for the cat.</p>

<p>
	<a href={PAGES['1_auxilliary_living_room']}>Return to the <u>Auxilliary Living Room</u></a>
</p>

<hr />

{#if !lizardZone.talkedTo}
	<form
		action={ACTIONS.talkToLizard_1_auxilliary_living_room_lizard_zone}
		method="POST"
		use:enhance
	>
		<button
			onclick={() => {
				lizardZone.talkedTo = true;
				player.inventory.lizardAdvice += 1;
			}}
		>
			Talk to <u>The Lizard</u>
		</button>
	</form>
{:else}
	<p><i>You talked to <u>The Lizard.</u></i></p>
	<p><i>You put <u>Lizard Advice</u> in your Inventory.</i></p>

	<p>
		<u>The Lizard</u> opens his mouth. He says, "You have sexed me incorrectly; you can tell by inspecting
		my gonads".
	</p>
	<p>It's dubious, you probably hallucinated that.</p>
	{#if !lizardZone.ignored}
		<form
			action={ACTIONS.ignoreLizard_1_auxilliary_living_room_lizard_zone}
			method="POST"
			use:enhance
		>
			<button
				onclick={() => {
					lizardZone.ignored = true;
				}}
			>
				That was a waste of time
			</button>
		</form>
	{/if}
{/if}

{#if lizardZone.ignored}
	<hr />
	<p><i>You ignored <u>The Lizard</u>.</i></p>
	<p>Suddenly, something stirs in the <u>Laboratory of Animal Cruelty</u>.</p>
{/if}
