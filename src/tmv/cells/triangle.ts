import { Node } from '../node';
import { Cell }  from './cell';
import { Value}  from '../values/value';
import * as THREE from 'three';

export class Triangle extends Cell {

	public static override Material = new THREE.MeshBasicMaterial({
		vertexColors: true,
		side: THREE.DoubleSide
	});

	protected static override readonly Indices = [0, 1, 2];

	public static override readonly Type: number = 5;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Mesh(this.Geometry, Triangle.Material);
	}

	public override get Type() {

		return Triangle.Type;
	}

	protected override get Indices() {

		return Triangle.Indices;
	}

}
