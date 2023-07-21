import {VCell} from './vcell';

export class Tetrader extends VCell {

	protected static override readonly Indices = [
		0, 1, 2,
		0, 1, 3,
		0, 2, 3,
		1, 2, 3];

	public static override readonly Type: number = 10;

	public override get Type() {

		return Tetrader.Type;
	}

	protected override get Indices() {

		return Tetrader.Indices;
	}
}
