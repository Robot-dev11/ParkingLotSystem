import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkinglotDbDataSource} from '../datasources';
import {Users, UsersRelations} from '../models';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {
  constructor(
    @inject('datasources.parkinglotDB') dataSource: ParkinglotDbDataSource,
  ) {
    super(Users, dataSource);
  }
}
