<script lang="ts">
	import { enhance } from '$app/forms';
	import { ACTIONS, PAGES } from '$lib/ROUTES';

	const { data } = $props();

	const auxilliaryLivingRoom = $derived(data.auxilliaryLivingRoom);
</script>

<h3>
	The <u>Auxilliary Living Room</u>
</h3>

<p>
	Two shabby looking cardboard boxes stand offset from the wall in the <u>Auxilliary Living Room</u
	>: <a href={PAGES['1_auxilliary_living_room_hotel']}>Giancarlo's Hotel</a>. At your other flank is
	the
	<a href={PAGES['1_auxilliary_living_room_lizard_zone']}>Lizard Zone</a>
	and straight ahead lie the
	<a href={PAGES['1_kitchen']}>Kitchen</a>
	and
	<a href={PAGES['1_bathroom']}>Bathroom</a>. A <u>Dust–Collecting Domino Set</u> collects dust on
	the coffee table. Because this <u>Living Room</u> is generally considered <u>Auxilliary</u>, you
	could also return to the <a href={PAGES['1_living_room']}>Living Room</a>
</p>

<p>
	In your peripheral, you can see that the door to the <a href={PAGES['1_laboratory']}
		>Laboratory of Animal Cruelty</a
	> is wide open. Something dark lurks within. A sinister invitation..
</p>
<hr />

{#if auxilliaryLivingRoom.lizardZone.regarded}
	<p><i>You regarded <u>The Lizard</u>.</i></p>

	<p>
		You regarded <u>The Lizard</u> and his
		<a href={PAGES['1_auxilliary_living_room_lizard_zone']}>Zone</a> to get a sense of the time of
		day. He's looking rather oblate. A sure sign that he has been roasting under his artificial sun
		for <b>{data.hoursSinceStart}</b>
		hours.
	</p>

	<form action={ACTIONS.regardLizard_1_auxilliary_living_room} method="POST" use:enhance>
		<button>Check out <u>The Lizard</u></button>
	</form>

	<p>
		<a href={PAGES['1_auxilliary_living_room_lizard_zone']}>Talk to <u>The Lizard</u></a>
	</p>
{/if}

<hr />

<p>
	<a href={PAGES['1_auxilliary_living_room_hotel']}>Check in at Giancarlo's Hotel</a>
</p>
