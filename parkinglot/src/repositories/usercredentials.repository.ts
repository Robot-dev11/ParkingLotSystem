import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ParkinglotDbDataSource} from '../datasources';
import {Usercredentials, UsercredentialsRelations} from '../models';

export class UsercredentialsRepository extends DefaultCrudRepository<
  Usercredentials,
  typeof Usercredentials.prototype.id,
  UsercredentialsRelations
> {
  constructor(
    @inject('datasources.parkinglotDB') dataSource: ParkinglotDbDataSource,
  ) {
    super(Usercredentials, dataSource);
  }
}
