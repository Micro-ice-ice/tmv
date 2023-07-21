import {VCell} from './vcell';

export class Pixel extends VCell {

	protected static override  readonly Indices = [0, 1, 2, 1, 2, 3];

	public static override  readonly Type: number = 8;

	public override  get  Type() {

		return Pixel.Type;
	}

	protected override get Indices() {

		return Pixel.Indices;
	}

}
