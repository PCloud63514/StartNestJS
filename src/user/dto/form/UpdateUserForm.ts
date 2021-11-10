import { GenderType } from '../data';
export default class UpdateUserForm {
  constructor(
    public readonly name: string,
    public readonly age: number,
    public genderType: GenderType,
  ) {}
}
