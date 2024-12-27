<script>
	import { page } from '$app/state';

	import './style.css';
	import { States } from '$lib/components';

	const { data, children } = $props();
</script>

<svelte:head>
	<title>{page.data.title || "Giancarlo's Tale"}</title>
	<meta
		name="description"
		content={page.data.description ||
			`A piss-tinged odor fills the air. Allergens itch at the collar of your psyche. "Am I in over my head?".. the mission suddenly seems dubious. You have truly found yourself in the lion's den.`}
	/>
</svelte:head>

<div>
	{@render children()}

	<hr />

	<States
		view={data.statusView}
		url={page.url}
		messages={page.form?.messages || []}
		state={data.state}
	></States>
</div>
