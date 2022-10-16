import {model, property} from '@loopback/repository';
import {Users} from '.';

@model({settings: {strict: false}})
export class Userwithpassword extends Users {
  @property({
    type: 'string',
    required: true,
  })
  password: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Userwithpassword>) {
    super(data);
  }
}

export interface UserwithpasswordRelations {
  // describe navigational properties here
}

export type UserwithpasswordWithRelations = Userwithpassword & UserwithpasswordRelations;
