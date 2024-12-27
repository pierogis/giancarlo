<script lang="ts">
	import type { Giancarlo } from '$lib/state';

	const { giancarlo }: { giancarlo: Giancarlo } = $props();
</script>

<table>
	<tbody>
		<tr>
			<td>Happiness</td>
			<td><b>{giancarlo.happiness}</b></td>
		</tr>
		<tr>
			<td>Location</td>
			<td><b>?</b></td>
		</tr>
		<tr>
			<td>Caught</td>
			<td><b>{giancarlo.caught}</b></td>
		</tr>
	</tbody>
</table>
