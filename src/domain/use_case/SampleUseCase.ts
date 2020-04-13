import { injectable, inject } from 'inversify'
import { SampleRepository } from '../repository/SampleRepository'

export interface SampleUseCase {
  loadSample(): string 
}

@injectable()
export class SampleUseCaseImpl implements SampleUseCase {
  // private sampleRepository: SampleRepository

  constructor(
    // @inject('SampleRepository') sampleRepository: SampleRepository,
  ) {
    // this.sampleRepository = sampleRepository
  }

  loadSample(): string {
    return 'Hello'
//    return this.sampleRepository.loadData()
  }

}