import 'reflect-metadata'
import { container } from 'tsyringe'

import { SampleDataSource } from '../infrastructure/data_source'
import { SampleUseCaseImpl } from '../domain/use_case'

// Repository bind DataSource
container.register('SampleRepository', { useClass: SampleDataSource })

// UseCase bind UseCaseImpl
container.register('SampleUseCase', { useClass: SampleUseCaseImpl })

export default container