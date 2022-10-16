import {Entity, model, property} from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname?: string
  
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'array',
    itemType: 'string'
  })
  roles?: string[]

  @property({
    type: 'date',
    required: true,
  })
  dat_created: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
