<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import Deadbolt from './deadbolt.svelte';
	import KnobLock from './knob-lock.svelte';

	const { data, form } = $props();

	const player = $derived(data.player);
	const door = $derived(data.door);

	const saltMessages: string[] = $state([]);
</script>

<h3>The <u>Doorway to the Soul</u></h3>

<p>
	At the <u>Doorway to the Soul</u> you see a bag of ice salt, a welcome mat, and a door with two locks.
</p>
<hr />

{#if !door.entered}
	{#each saltMessages as saltMessage}
		<p>{saltMessage}</p>
	{/each}
	<button
		onclick={() => {
			saltMessages.push('The salt is blue.');
		}}
	>
		Inspect the salt
	</button>
	<hr />
{/if}

{#if !door.entered}
	{#if player.inventory.shoes > 0}
		<p><i>You are wearing shoes.</i></p>

		<form action={ACTIONS.takeOffShoes_1_door} method="POST" use:enhance>
			<button>
				Take off <u>Shoes</u>
			</button>
		</form>
	{:else}
		<p><i>You are not wearing shoes.</i></p>

		{#if door.inventory.shoes >= 2}
			<form action={ACTIONS.putOnShoes_1_door} method="POST" use:enhance>
				<button>
					Put on <u>Shoes</u>
				</button>
			</form>
		{/if}
	{/if}
	<hr />
{/if}

{#if !door.entered}
	{#if door.locked || !door.knobLock.regarded || !door.knobLock.triedTeethDown}
		<Deadbolt {door}></Deadbolt>

		<KnobLock {door}></KnobLock>
	{:else if door.open}
		<p>The <u>Door</u> is open.</p>

		<p>Scattered are soles of the reentered; you take mind not to trip and startle <u>Him</u>.</p>

		<form action={ACTIONS.close_1_door} method="POST" use:enhance>
			<button>
				Close <u>Door</u>
			</button>
		</form>
		<form action={ACTIONS.enter_1_door} method="POST" use:enhance>
			<button>Enter</button>
		</form>
	{:else if !door.open}
		<p>The <u>Door</u> is closed.</p>

		<form action={ACTIONS.open_1_door} method="POST" use:enhance>
			<button>
				Open <u>Door</u>
			</button>
		</form>
	{/if}
{:else}
	<p>
		Through the threshold of the <u>Doorway to the Soul</u>. You trip on shoes and startle
		<u>Him</u>.
	</p>

	<form action={ACTIONS.greet_1_door} method="POST" use:enhance>
		<button>Sorry, buddy</button>
		<button>Hello, handsome</button>
		<button>Fuck you, <u>Giancarlo</u></button>
	</form>

	{#if door.open}
		<form action={ACTIONS.leave_1_door} method="POST" use:enhance>
			<button>Leave</button>
		</form>
	{/if}
{/if}

{#if form?.messages && form.messages.length > 0}
	<hr />
	{#each form.messages || [] as message}
		<p><i>{message}</i></p>
	{/each}
{/if}

{#if door.greeted}
	<hr />
	<p>
		Giancarlo runs to his <a href={PAGES['1_laboratory']}>Laboratory of Animal Cruelty</a>, plotting
		retribution for the intrusion, surely.
	</p>
{/if}

{#if door.entered}
	<hr />
	<p>
		Pursue in the <a href={PAGES['1_living_room']}>Living Room ></a>
	</p>
{/if}
