import { Mesh } from '../tmv/mesh';

describe('sum module', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect((() => {
			const input = {
				'nodes': [
					{ 'x': 7.0, 'y': 0.0, 'z': 0.0, 'value': 0 },
					{ 'x': 0.0, 'y': 0.0, 'z': -17.0, 'value': 0 }
				],
				'cells': [
					{ 'type': 1, 'nodes': [0], 'value': 0 },
					{ 'type': 1, 'nodes': [1], 'value': 0 }
				]
			};

			const mesh = new Mesh(input);
			return mesh.Nodes[0].x;
		})()).toBe(7.0);
	});
});
