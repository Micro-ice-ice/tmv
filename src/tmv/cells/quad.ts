import {VCell} from './vcell';

export class Quad extends VCell {

	protected static override readonly Indices = [0, 1, 2, 0, 3, 2];

	public static override readonly Type: number = 9;

	public override get Type() {

		return Quad.Type;
	}

	protected override get Indices() {

		return Quad.Indices;
	}

}
