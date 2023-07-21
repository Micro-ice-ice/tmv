import {VCell} from './vcell';

export class Triangle extends VCell {

	protected static override readonly Indices = [0, 1, 2];

	public static override readonly Type: number = 5;

	public override get Type() {

		return Triangle.Type;
	}

	protected override get Indices() {

		return Triangle.Indices;
	}

}
