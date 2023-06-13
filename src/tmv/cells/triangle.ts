import Node  from '../node';
import  Cell  from './cell';
import Value  from '../values/value';
import * as THREE from 'three';

export default class Triangle extends Cell {

	public static Material = new THREE.MeshBasicMaterial({
		vertexColors: true,
		side: THREE.DoubleSide
	});

	protected static readonly Indices = [0, 1, 2];

	public static readonly Type: number = 5;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Mesh(this.Geometry, Triangle.Material);
	}

	public get Type() {

		return Triangle.Type;
	}

	protected get Indices() {

		return Triangle.Indices;
	}

}
