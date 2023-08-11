import { Attribute } from './attribute';
import {Matrix3} from 'three';

//Описывает Скалярные велечины
export class Tensor extends Attribute {

	public override Values: Matrix3[] = [];
}
