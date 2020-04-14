import { injectable } from 'tsyringe'
import { SampleRepository } from '../../domain/repository'

@injectable()
export class SampleDataSource implements SampleRepository {

  loadData(): string {
    return 'SampleDataSource'
  }
}