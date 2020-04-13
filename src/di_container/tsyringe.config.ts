import 'reflect-metadata'
import { container } from 'tsyringe'

import { SampleDataSource } from '../infrastructure/data_source/SampleDataSource'
import { SampleUseCaseImpl } from '../domain/use_case/SampleUseCase'

// Repository bind DataSource
container.register('SampleRepository', { useClass: SampleDataSource })

// UseCase bind UseCaseImpl
container.register('SampleUseCase', { useClass: SampleUseCaseImpl})

export default container