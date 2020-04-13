import 'reflect-metadata'
import { Container } from 'inversify'

import { SampleDataSource } from './infrastructure/data_source/SampleDataSource'

import { SampleRepository } from './domain/repository/SampleRepository'

import { SampleUseCase, SampleUseCaseImpl } from './domain/use_case/SampleUseCase'

const container = new Container()

// Repository bind DataSource
container.bind<SampleRepository>('SampleRepository').to(SampleDataSource)

// UseCase bind UseCaseImpl
container.bind<SampleUseCase>('SampleUseCase').to(SampleUseCaseImpl)

export default container