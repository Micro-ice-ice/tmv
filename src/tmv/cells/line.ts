import { Node } from '../node';
import { Cell }  from './cell';
import { Value}  from '../values/value';
import * as THREE from 'three';

export class Line extends Cell {

	public static override Material: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
		vertexColors: true,
		linewidth: 1,
	});

	public static override readonly Type = 3;

	public override ThreeObject: THREE.Line;

	constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Line(this.Geometry, Line.Material);
	}

	public override get Type() {

		return Line.Type;
	}

	protected override  get Indices() {

		return Line.Indices;
	}

}
