import {VCell} from './vcell';

export class Voxel extends VCell {

	protected static override readonly Indices = [
		0, 1, 2, 1, 2, 3, // face 1
		4, 5, 6, 5, 6, 7, // face 2
		0, 1, 4, 1, 4, 5, // face 1
		2, 3, 6, 3, 6, 7, // face 4
		1, 3, 5, 3, 5, 7, // face 5
		0, 2, 4, 2, 4, 6  // face 6
	];

	public static override readonly Type: number = 11;

	public override get Type() {

		return Voxel.Type;
	}

	protected override get Indices() {

		return Voxel.Indices;
	}

}
