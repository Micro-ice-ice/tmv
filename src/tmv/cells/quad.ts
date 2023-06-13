import Node  from '../node';
import Cell  from './cell';
import Value from '../values/value';
import * as THREE from 'three';

export default class Quad extends Cell {

	protected static readonly Indices = [0, 1, 2, 0, 3, 2];

	public static readonly Type: number = 9;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Mesh(this.Geometry, Quad.Material);
	}

	public get Type() {

		return Quad.Type;
	}

	protected get Indices() {

		return Quad.Indices;
	}

}
