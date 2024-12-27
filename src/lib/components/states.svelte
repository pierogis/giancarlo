<script lang="ts">
	import { writable } from 'svelte/store';

	import { nanoid } from 'nanoid';

	import type { State } from '$lib/state';

	import Giancarlo from './giancarlo.svelte';
	import Messages from './messages.svelte';
	import Player from './player.svelte';

	const {
		view,
		url,
		messages,
		state
	}: {
		view: 'messages' | 'player' | 'giancarlo';
		url: URL;
		messages: string[];
		state: State;
	} = $props();

	const messagesHref = $derived.by(() => {
		const searchParams = new URLSearchParams(url.searchParams);
		searchParams.set('statusView', 'messages');

		return url.pathname.toString() + '?' + searchParams;
	});
	const playerHref = $derived.by(() => {
		const searchParams = new URLSearchParams(url.searchParams);
		searchParams.set('statusView', 'player');

		return url.pathname.toString() + '?' + searchParams;
	});
	const giancarloHref = $derived.by(() => {
		const searchParams = new URLSearchParams(url.searchParams);
		searchParams.set('statusView', 'giancarlo');

		return url.pathname.toString() + '?' + searchParams;
	});

	const accummulated = writable<{ id: string; text?: string }[]>([]);
	$effect(() => {
		if (messages) {
			accummulated.update(($accummulated) => {
				messages.forEach((m) => {
					$accummulated.push({ id: nanoid(), text: m });
				});
				if (messages.length > 0) {
					$accummulated.push({ id: nanoid() });
				}
				return $accummulated;
			});
		}
	});
</script>

<div>
	<a
		href={messagesHref}
		data-sveltekit-replacestate
		class="view-option"
		class:current={view === 'messages'}>Messages</a
	>
	<a
		href={playerHref}
		data-sveltekit-replacestate
		class="view-option"
		class:current={view === 'player'}>Player</a
	>
	<a
		href={giancarloHref}
		data-sveltekit-replacestate
		class="view-option"
		class:current={view === 'giancarlo'}>Giancarlo</a
	>
</div>

<br />

{#if view === 'messages'}
	<Messages messages={$accummulated}></Messages>
{:else if view === 'player'}
	<Player player={state.player}></Player>
{:else if view === 'giancarlo'}
	<Giancarlo giancarlo={state.giancarlo}></Giancarlo>
{/if}

<style>
	.view-option {
		color: blue;
		font-weight: bold;
		font-size: 16px;
	}
	.view-option.current {
		color: unset;
	}
</style>
