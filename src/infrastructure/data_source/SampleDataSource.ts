import { injectable } from 'inversify'
import { SampleRepository } from '../../domain/repository/SampleRepository'

@injectable()
export class SampleDataSource implements SampleRepository {

  loadData(): string {
    return 'SampleDataSource'
  }
}