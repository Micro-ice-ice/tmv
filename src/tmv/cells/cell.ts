import {Node} from '../nodes/node';
import * as THREE from 'three';
import {BufferGeometry} from 'three';

export class Cell {

	protected static readonly Indices: number[] = [];

	public static Material: THREE.Material = new THREE.Material();

	public static readonly Type: number = 0;

	public Nodes: Node[];

	public ThreeObject: THREE.Object3D = new THREE.Object3D();

	public Geometry: THREE.BufferGeometry = new BufferGeometry();

	constructor(nodes: Node[]) {

		this.Nodes = nodes;

		const vertices = ([] as number[]).concat(...this.Nodes.map((node: Node) => node.toArray()));

		const colors: number[] = [];

		for (let i = 0; i < this.Nodes.length; ++i) {

			colors.push(0, 0, 1);
		}

		this.Geometry.setIndex(this.Indices);
		this.Geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
		this.Geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
		this.Geometry.computeVertexNormals();
	}

	public get Type() {

		return Cell.Type;
	}

	protected get Indices() {

		return Cell.Indices;
	}

	public SetColorByValueInNodes() {

		// const colors: number[] = [];
		//
		// for (let i = 0; i < this.Nodes.length; ++i) {
		//
		// 	const scalar: Scalar = <Scalar>this.Nodes[i].Data.Attributes[attribute_index];
		// 	colors.push((1 - scalar.Data), (0.5 - Math.abs(0.5 - scalar.Data) * 2), scalar.Data);
		// }
		//
		// this.Geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
	}

	public SetColorByValueInCell() {

		//
	}


}
