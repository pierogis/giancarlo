<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title || "Giancarlo's Tale"}</title>
</svelte:head>

<slot></slot>
