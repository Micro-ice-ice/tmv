import Node from '../node';
import Cell from './cell';
import Value from '../values/value';
import * as THREE from 'three';

export default class Line extends Cell {

	public static Material: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
		vertexColors: true,
		linewidth: 1,
	});

	public static readonly Type = 3;

	public ThreeObject: THREE.Line;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Line(this.Geometry, Line.Material);
	}

	public get Type() {

		return Line.Type;
	}

	protected get Indices() {

		return Line.Indices;
	}

}
