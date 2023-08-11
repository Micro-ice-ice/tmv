import { Node } from './nodes/node';
import { Data } from './data/data';
import * as CellType from './cells/cellTypes';

type scalar = number;
type vector = [number, number, number]
type tensor = [number, number, number, number, number, number, number, number, number]
type value = scalar | vector | tensor;

interface attribute {

	name: string,
	values: value[]
}

interface meshJson {

	nodes: {x: number, y: number, z: number}[];
	cells: {type: number, nodes: number[]}[];
	nodeData?: attribute[],
	cellData?: attribute[]
}

export class Mesh {

	public Nodes: Node[];

	public NodeData: Data = new Data();

	public Cells: CellType.Cell[];

	public CellData: Data = new Data();

	constructor(nodes: Node[], cells: CellType.Cell[], nodesData?: Data, cellData?: Data) {

		this.Nodes = nodes;
		this.Cells = cells;

		if (nodesData){
			this.NodeData = nodesData;
		}
		if (cellData){
			this.CellData = cellData;
		}
	}

	public get ThreeObjects(){

		return this.Cells.map((cell) => {

			return cell.ThreeObject;
		});
	}

	public static FromJson(mesh: meshJson): Mesh {

		const nodes =  mesh.nodes.map((node) => new Node(node.x, node.y, node.z));
		const cells: CellType.Cell[] = mesh.cells.map((cell => {
			const cell_nodes = cell.nodes.map((node_index: number) => nodes[node_index]);

			//https://vtk.org/wp-content/uploads/2021/08/VTKUsersGuide.pdf

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

				return new CellType.Cell([]);
			}


		}));

		return new Mesh(nodes, cells);
	}
}
