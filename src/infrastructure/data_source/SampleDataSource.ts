import { injectable } from 'tsyringe'
import { SampleRepository } from '../../domain/repository/SampleRepository'

@injectable()
export class SampleDataSource implements SampleRepository {

  loadData(): string {
    return 'SampleDataSource'
  }
}