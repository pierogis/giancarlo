<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import Messages from '$lib/messages.svelte';
	import Deadbolt from './deadbolt.svelte';
	import KnobLock from './knob-lock.svelte';

	const { data } = $props();

	const player = $derived(data.player);
	const door = $derived(data.door);

	const messages: string[] = $state([]);
</script>

<h4>
	At the <u>Doorway to the Soul</u> you see a bag of ice salt, a welcome mat, and a door with two locks.
</h4>

<p>{door.inventory.shoes} shoes</p>

<Messages {messages}></Messages>

{#if !door.entered}
	<button
		onclick={() => {
			messages.push('The salt is blue.');
		}}
	>
		Inspect the salt
	</button>
{/if}

{#if player.inventory.shoes > 0}
	<form action={ACTIONS.takeOffShoes_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				messages.push('You removed Shoes from your inventory.');
			}}
		>
			Take off <u>Shoes</u>
		</button>
	</form>
{/if}

{#if !door.entered}
	{#if door.locked || !door.knobLock.regarded || !door.knobLock.triedTeethDown}
		<Deadbolt
			{door}
			onaction={(message) => {
				messages.push(message);
			}}
		></Deadbolt>

		<KnobLock
			{door}
			onaction={(message) => {
				messages.push(message);
			}}
		></KnobLock>
	{:else}
		<form action={ACTIONS.enter_1_door} method="POST" use:enhance>
			<button
				onclick={() => {
					messages.push('You enter.');
				}}
			>
				Enter
			</button>
		</form>
	{/if}
{:else}
	<p>
		Through the threshold of <u>The Doorway to the Soul</u>. Scattered are the soles of the
		reentered; you trip and startle Him.
	</p>

	<form action={ACTIONS.greet_1_door} method="POST" use:enhance>
		<button
			onclick={() => {
				messages.push("Giancarlo didn't like that.");
			}}>Sorry, buddy</button
		>
		<button
			onclick={() => {
				messages.push("Giancarlo didn't like that.");
			}}>Hello, handsome</button
		>
		<button
			onclick={() => {
				messages.push("Giancarlo didn't like that.");
			}}>Fuck you, Giancarlo</button
		>
	</form>

	{#if door.open}
		<form action={ACTIONS.leave_1_door}>
			<button
				onclick={() => {
					messages.push('You leave.');
				}}
			>
				Leave
			</button>
		</form>
	{/if}
{/if}

{#if door.greeted}
	<p>Giancarlo runs to his laboratory, plotting retribution for the intrusion, surely.</p>

	<a href={PAGES['1_living_room']}>Pursue in the living room</a>
{/if}
