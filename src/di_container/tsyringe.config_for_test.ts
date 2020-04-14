import 'reflect-metadata'
import { container } from 'tsyringe'

import { SampleDataSource } from '../infrastructure/data_source'
import { SampleUseCaseImpl } from '../domain/use_case'
/**
 * issue
 * https://github.com/microsoft/tsyringe/issues/70
 */
// UseCase bind UseCaseImpl
container.register('SampleUseCase', { useValue: new SampleUseCaseImpl(new SampleDataSource()) })

export default container