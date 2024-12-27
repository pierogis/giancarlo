<script lang="ts">
	import { enhance } from '$app/forms';

	import { ACTIONS, PAGES } from '$lib/ROUTES';

	import { Destinations } from '$lib/components';

	const { data } = $props();

	const { auxilliaryLivingRoom } = $derived(data.state);

	const hotelHref = $derived(
		PAGES['1_auxilliary_living_room_hotel']({ statusView: data.statusView })
	);
	const kitchenHref = $derived(PAGES['1_kitchen']({ statusView: data.statusView }));
	const lizardZoneHref = $derived(
		PAGES['1_auxilliary_living_room_lizard_zone']({ statusView: data.statusView })
	);
	const bathroomHref = $derived(PAGES['1_bathroom']({ statusView: data.statusView }));
	const livingRoomHref = $derived(PAGES['1_living_room']({ statusView: data.statusView }));
	const laboratoryHref = $derived(PAGES['1_laboratory']({ statusView: data.statusView }));
</script>

<h3>
	The <u>Auxilliary Living Room</u>
</h3>

<p>
	After a long and arduous journey, you find yourself on the precipice of the the <u
		>Auxilliary Living Room</u
	>.
</p>

<p>
	Two shabby looking cardboard boxes stand offset from the wall in the <u>Auxilliary Living Room</u
	>:
	<a href={hotelHref}>Giancarlo's Hotel</a>. At your other flank is the
	<a href={lizardZoneHref}>Lizard Zone</a>
	and straight ahead lie the
	<a href={kitchenHref}>Kitchen</a>
	and
	<a href={bathroomHref}>Bathroom</a>. A
	<u>Dust–Collecting Domino Set</u>
	collects dust on the coffee table. Because this <u>Living Room</u> is generally considered
	<u>Auxilliary</u>, you could also return to the
	<a href={livingRoomHref}>Living Room</a>.
</p>

<p>
	In your peripheral, you can see that the door to the <a href={laboratoryHref}
		>Laboratory of Animal Cruelty</a
	> is wide open. Something dark lurks within. A sinister invitation..
</p>
<hr />

{#if auxilliaryLivingRoom.lizardZone.regarded}
	<p>
		You regarded <u>The Lizard</u> and his
		<a href={lizardZoneHref}>Zone</a>
		to get a sense of the time of day. He's looking rather <span class="oblate">oblate</span>. A
		sure sign that he has been roasting under his artificial sun for <b>{data.hoursSinceStart}</b>
		hours.
	</p>
{/if}

<form action={ACTIONS.regardLizard_1_auxilliary_living_room} method="POST" use:enhance>
	<button>Check out <u>The Lizard</u></button>
</form>

<br />

<Destinations>
	<span>
		Excuse yourself to <a href={bathroomHref}>The Bathroom ^</a>
	</span>
	<span>
		Talk to <a href={lizardZoneHref}>The Lizard ></a>
	</span>
	<span>
		Check in at <a href={hotelHref}>{"Giancarlo's Hotel <"}</a>
	</span>
	<span>
		Return to the <a href={livingRoomHref}>Living Room v</a>
	</span>
</Destinations>

<style>
	.oblate {
		transition: font-weight 400ms;
	}
	.oblate:hover {
		font-weight: 700;
	}
</style>
