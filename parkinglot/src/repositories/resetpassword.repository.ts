import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkinglotDbDataSource} from '../datasources';
import {Resetpassword, ResetpasswordRelations} from '../models';

export class ResetpasswordRepository extends DefaultCrudRepository<
  Resetpassword,
  typeof Resetpassword.prototype.id,
  ResetpasswordRelations
> {
  constructor(
    @inject('datasources.parkinglotDB') dataSource: ParkinglotDbDataSource,
  ) {
    super(Resetpassword, dataSource);
  }
}
