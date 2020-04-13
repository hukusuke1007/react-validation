// import { injectable, inject } from 'inversify'
import { injectable, inject } from 'tsyringe'
import { SampleRepository } from '../repository/SampleRepository'

export interface SampleUseCase {
  loadSample(): string 
}

@injectable()
export class SampleUseCaseImpl implements SampleUseCase {
  constructor(
    @inject('SampleRepository') private sampleRepository: SampleRepository
  ) {}

  loadSample(): string {
    return this.sampleRepository.loadData()
  }

}