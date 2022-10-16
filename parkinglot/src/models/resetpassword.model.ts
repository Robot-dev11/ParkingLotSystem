import {Model, model, property} from '@loopback/repository';

@model()
export class Resetpassword extends Model {
  @property({
    type: 'string',
    required: true,
  })
  email: string;


  constructor(data?: Partial<Resetpassword>) {
    super(data);
  }
}

export interface ResetpasswordRelations {
  // describe navigational properties here
}

export type ResetpasswordWithRelations = Resetpassword & ResetpasswordRelations;
