import { GenderType } from '../data';
export default class JoinUserForm {
  constructor(
    public readonly name: string,
    public readonly age: number,
    public genderType: GenderType,
  ) {}
}
