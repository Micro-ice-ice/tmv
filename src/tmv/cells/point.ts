import Node from '../node';
import Cell  from './cell';
import Value from '../values/value';
import * as THREE from 'three';

export default class Points extends Cell {

	public static Material: THREE.PointsMaterial = new THREE.PointsMaterial({
		vertexColors: true
	});

	public static readonly Type: number = 2;

	public ThreeObject: THREE.Points;

	public constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Points(this.Geometry, Points.Material);
	}

	public get Type() {

		return Points.Type;
	}

	protected get Indices() {

		return Points.Indices;
	}
}
