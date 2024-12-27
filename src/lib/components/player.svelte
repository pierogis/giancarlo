<script lang="ts">
	import type { Player } from '$lib/state';

	const { player }: { player: Player } = $props();
</script>

<table>
	<tbody>
		<tr>
			<th rowspan={2} scope="rowgroup">Emotions</th>
			<td>Allergy Resistance</td>
			<td colspan={2}><b>{player.emotions.allergyResistance}</b></td>
		</tr>
		<tr>
			<td>Drunkenness</td>
			<td colspan={2}><b>{player.emotions.drunkenness}</b></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th rowspan={11} scope="rowgroup">Inventory</th>
			<td>Shoes</td>
			<td colspan={2}><b>{player.inventory.shoes}</b></td>
		</tr>
		<tr>
			<td>1-Inch ⌀ Balls</td>
			<td colspan={2}><b>{player.inventory.balls}</b></td>
		</tr>
		<tr>
			<td>Crinkle Fish</td>
			<td colspan={2}><b>{player.inventory.crinkleFish}</b></td>
		</tr>
		<tr>
			<td>Tweety Birds</td>
			<td colspan={2}><b>{player.inventory.tweetyBirds}</b></td>
		</tr>
		<tr>
			<td>Toothbrushes</td>
			<td colspan={2}><b>{player.inventory.toothbrushes}</b></td>
		</tr>
		<tr>
			<td rowspan={3}>Lettuce</td>
			<td>Raw</td>
			<td><b>{player.inventory.lettuce.raw}</b></td>
		</tr>
		<tr>
			<td>Washed</td>
			<td><b>{player.inventory.lettuce.washed}</b></td>
		</tr>
		<tr>
			<td>Chopped</td>
			<td><b>{player.inventory.lettuce.chopped}</b></td>
		</tr>

		<tr>
			<td>Lizard Advice</td>
			<td colspan={2}><b>{player.inventory.lizardAdvice}</b></td>
		</tr>
		<tr>
			<td>Ultrasonic Sonar Gloves</td>
			<td colspan={2}><b>{player.inventory.gloves}</b></td>
		</tr>
		<tr>
			<td>Giancarlos</td>
			<td colspan={2}><b>{player.inventory.giancarlo}</b></td>
		</tr>
	</tbody>
</table>
