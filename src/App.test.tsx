import 'jest'
import 'reflect-metadata'
import container from './di_container/tsyringe.config_for_test'
import { SampleUseCase } from './domain/use_case/SampleUseCase'

test('renders learn react link', () => {
  const useCase = container.resolve<SampleUseCase>('SampleUseCase')
  const result = useCase.loadSample()
  console.log('result', result)
  expect(result).toBe('SampleDataSource')
});
