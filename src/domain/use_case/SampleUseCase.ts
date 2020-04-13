import { injectable, inject } from 'tsyringe'
import { 
  useSelector,
  useDispatch,
} from 'react-redux'
import { 
  Dispatch,
} from 'redux'
import { ActyonType, Action }from '../../presentation/redux/modules/Counter'
import { SampleRepository } from '../repository/SampleRepository'

export interface SampleUseCase {
  loadSample(): string 
  increment(dispatch: Dispatch<Action>): void
}

@injectable()
export class SampleUseCaseImpl implements SampleUseCase {
  constructor(
    @inject('SampleRepository') private sampleRepository: SampleRepository
  ) {}

  loadSample(): string {
    return this.sampleRepository.loadData()
  }

  increment(dispatch: Dispatch<Action>) {
    dispatch({ type: ActyonType.INCREMENT })
  }

}