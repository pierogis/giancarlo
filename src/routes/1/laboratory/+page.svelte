<script lang="ts">
	import { Destinations } from '$lib/components';
	import { PAGES } from '$lib/ROUTES.js';

	const { data } = $props();

	const { giancarlo } = $derived(data.state);
</script>

<h3>
	The <u>Laboratory of Animal Cruelty</u>
</h3>

<p>Tucked into the boiler closet</p>
<p>
	Through the years, the villagers have speculated on the devilish purpose of this lab. Some say
	that there are machines used in developing a process to reanimate mice. Others believe that it's a
	refinement of a gas that can cause antisocial behaviors and incontinence.
</p>
<p>
	While the direction of <u>His</u> devilish purpose remains unknown.. we can be certain of its magnitude.
</p>

{#if giancarlo.location === 'laboratory'}
	<p><u>Giancarlo</u> is deep within his lab.</p>
{:else}
	<p><u>Giancarlo</u> is on the loose!</p>
{/if}

<Destinations>
	<span>
		Chop it up in the <a href={PAGES['1_kitchen']({ statusView: data.statusView })}>Kitchen ^</a>
	</span>
	<span>
		Recoup in the <a href={PAGES['1_auxilliary_living_room']({ statusView: data.statusView })}
			>Auxilliary Living Room v</a
		>
	</span>
	<span>
		Get the scoop in the <a href={PAGES['1_bathroom']({ statusView: data.statusView })}
			>{'Bathroom <'}</a
		>
	</span>
</Destinations>
