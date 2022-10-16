import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkinglotDbDataSource} from '../datasources';
import {Userwithpassword, UserwithpasswordRelations} from '../models';

export class UserwithpasswordRepository extends DefaultCrudRepository<
  Userwithpassword,
  typeof Userwithpassword.prototype.id,
  UserwithpasswordRelations
> {
  constructor(
    @inject('datasources.parkinglotDB') dataSource: ParkinglotDbDataSource,
  ) {
    super(Userwithpassword, dataSource);
  }
}
