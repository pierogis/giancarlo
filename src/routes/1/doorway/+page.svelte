<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations } from '$lib/components';
	import Deadbolt from './deadbolt.svelte';
	import KnobLock from './knob-lock.svelte';

	const { data } = $props();

	const { player, doorway } = $derived(data.state);

	const saltMessages: string[] = $state([]);
</script>

<h3>The <u>Doorway to the Soul</u></h3>

<p>
	At the <u>Doorway to the Soul</u> you see a bag of ice salt, a welcome mat, and a doorway with two
	locks.
</p>
<hr />

{#if !doorway.entered}
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
{/if}

{#if player.inventory.shoes > 0}
	<p><i>You are wearing shoes.</i></p>

	<form action={ACTIONS.takeOffShoes_1_doorway} method="POST" use:enhance>
		<button>
			Take off <u>Shoes</u>
		</button>
	</form>
{:else}
	<p><i>You are not wearing shoes.</i></p>

	{#if doorway.inventory.shoes >= 2}
		<form action={ACTIONS.putOnShoes_1_doorway} method="POST" use:enhance>
			<button>
				Put on <u>Shoes</u>
			</button>
		</form>
	{/if}
{/if}

{#if doorway.locked || !doorway.knobLock.regarded || !doorway.knobLock.triedTeethDown}
	<Deadbolt {doorway}></Deadbolt>

	<KnobLock {doorway}></KnobLock>
	<br />
{:else}
	<p>
		Scattered are soles of the reentered; you took mind to avoid tripping and startling <u>Him</u>.
	</p>
	{#if doorway.open}
		<p><i>The <u>Door</u> is open.</i></p>

		<form action={ACTIONS.close_1_doorway} method="POST" use:enhance>
			<button>
				Close <u>Door</u>
			</button>
		</form>

		{#if !doorway.entered}
			<br />
			<form action={ACTIONS.enter_1_doorway} method="POST" use:enhance>
				<button>Enter</button>
			</form>
		{/if}
	{:else if !doorway.open}
		<p><i>The <u>Door</u> is closed.</i></p>

		<form action={ACTIONS.open_1_doorway} method="POST" use:enhance>
			<button>
				Open <u>Door</u>
			</button>
		</form>
	{/if}
{/if}

{#if doorway.entered}
	<p>
		Through the threshold of the <u>Doorway to the Soul</u>. You trip on shoes and startle
		<u>Him</u>.
	</p>

	<form action={ACTIONS.greet_1_doorway} method="POST" use:enhance>
		<button>Sorry, buddy</button>
		<button>Hello, handsome</button>
		<button>Fuck you, <u>Giancarlo</u></button>
	</form>

	{#if doorway.open}
		<br />
		<form action={ACTIONS.leave_1_doorway} method="POST" use:enhance>
			<button>Leave</button>
		</form>
	{/if}
{/if}

{#if doorway.greeted}
	<p>
		Giancarlo runs to his <a href={PAGES['1_laboratory']({ statusView: data.statusView })}
			>Laboratory of Animal Cruelty</a
		>, plotting retribution for the intrusion, surely.
	</p>
{/if}

{#if doorway.entered && doorway.greeted}
	<Destinations>
		<span>
			Pursue in the <a href={PAGES['1_living_room']({ statusView: data.statusView })}
				>Living Room ></a
			>
		</span>
	</Destinations>
{/if}
