<script lang="ts">
	import { PAGES } from '$lib/ROUTES';

	const { data } = $props();
</script>

<h1>A danderous beast stalks across vinyl flooring..</h1>

<p>With every step, the scratch of couch-filed claws.</p>

<p>
	No one would doubt your experience, you've defied death wrangling larger, lumpier, and stinkier.
	Indeed, you fancy yourself a seasoned beast grabber—lizards, skunks, and boyfriends under your
	belt. You can't shake the feeling that this could be the last you tangle with. The stakes have
	never been higher.
</p>

<p>
	A piss-tinged odor fills the air. Allergens itch at the collar of your psyche. "Am I in over my
	head?".. the mission suddenly seems dubious. You have truly found yourself in the lion's den.
</p>

{#if data.resumePathname}
	<p>
		<a href={data.resumePathname}>Resume</a>
	</p>
	<p>
		<a href={PAGES.reset}>Reset</a>
	</p>
{/if}
<p>
	<a href={PAGES[0]}>Prologue</a>
</p>
