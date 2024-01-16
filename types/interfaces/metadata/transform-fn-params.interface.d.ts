import { TransformationType } from '../../enums';
import { ClassTransformOptions } from '../class-transformer-options.interface';
export interface TransformFnParams {
  value: any;
  key: string;
  obj: any;
  valueKey: string;
  type: TransformationType;
  options: ClassTransformOptions;
}
