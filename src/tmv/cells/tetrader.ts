import Node  from '../node';
import Cell  from './cell';
import Value from '../values/value';
import * as THREE from 'three';

export default class Tetrader extends Cell {

	public static Material = new THREE.MeshBasicMaterial({
		vertexColors: true,
		side: THREE.DoubleSide
	});

	protected static readonly Indices = [
		0, 1, 2,
		0, 1, 3,
		0, 2, 3,
		1, 2, 3];

	public static readonly Type: number = 10;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Mesh(this.Geometry, Tetrader.Material);
	}

	public get Type() {

		return Tetrader.Type;
	}

	protected get Indices() {

		return Tetrader.Indices;
	}
}
