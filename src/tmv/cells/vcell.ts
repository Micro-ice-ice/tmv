import {Node} from '../nodes/node';
import * as THREE from 'three';
import {Cell} from './cell';

export class VCell extends Cell {

	public static override Material: THREE.Material = new THREE.MeshBasicMaterial({
		vertexColors: true,
		side: THREE.DoubleSide
	});

	constructor(nodes: Node[]) {

		super(nodes);

		this.ThreeObject = new THREE.Mesh(this.Geometry, VCell.Material);
	}

}
