import Node from './node';
import Value from './values/value';
import * as CellType from './cells/cellTypes';

interface InputMesh {

	nodes: {x: number, y: number, z: number}[];
	cells: {type: number, nodes: number[]}[];
}

export default class Mesh {

	public Nodes: Node[] = [];

	public Cells: CellType.Cell[] = [];

	constructor(mesh : InputMesh) {

		const nodes = mesh.nodes.map((node: Node) => new Node(node.x, node.y, node.z, node.Value));
		const cells = mesh.cells.map((cell => {
			const cell_nodes = cell.nodes.map((node_index: number) => nodes[node_index]);

			switch (cell.type) {

			case 1:
			case 2:

				return new CellType.Points(cell_nodes);

				break;

			case 3:
			case 4:

				return new CellType.Cell(cell_nodes);

				break;

			case 5:

				return new CellType.Triangle(cell_nodes);

				break;

			case 6:

				return undefined;

				break;

			case 8:

				return new CellType.Pixel(cell_nodes);

				break;

			case 9:

				return new CellType.Quad(cell_nodes);

				break;

			case 10:

				return new CellType.Tetrader(cell_nodes);

				break;

			case 11:

				return new CellType.Voxel(cell_nodes);

				break;

			default:

				return undefined;
			}


		}));

		this.Cells = cells;
		this.Nodes = nodes;
	}
}