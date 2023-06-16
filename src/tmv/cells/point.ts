import { Node } from '../node';
import { Cell }  from './cell';
import { Value}  from '../values/value';
import * as THREE from 'three';

export class Points extends Cell {

	public static override Material: THREE.PointsMaterial = new THREE.PointsMaterial({
		vertexColors: true
	});

	public static override readonly Type: number = 2;

	public override ThreeObject: THREE.Points;

	public constructor(nodes: Node[], value: Value) {

		super(nodes, value);

		this.ThreeObject = new THREE.Points(this.Geometry, Points.Material);
	}

	public override get Type() {

		return Points.Type;
	}

	protected override get Indices() {

		return Points.Indices;
	}
}
