import {Node} from '../nodes/node';
import * as THREE from 'three';
import {Cell} from './cell';

export class Line extends Cell {

	public static override Material: THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
		vertexColors: true,
		linewidth: 1,
	});

	public static override readonly Type = 3;

	public override ThreeObject: THREE.Line;

	constructor(nodes: Node[]) {

		super(nodes);

		this.ThreeObject = new THREE.Line(this.Geometry, Line.Material);
	}

	public override get Type() {

		return Line.Type;
	}

	protected override  get Indices() {

		return Line.Indices;
	}

}
