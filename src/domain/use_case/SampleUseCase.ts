import { injectable, inject } from 'tsyringe'
import { 
  Dispatch,
} from 'redux'
import { ActyonType, Action }from '../../presentation/redux/modules/Counter'
import { SampleRepository } from '../repository/SampleRepository'
import { Batch } from '@1amageek/ballcap'
import Item from '../model/Item'

export interface SampleUseCase {
  loadSample(): string 
  increment(dispatch: Dispatch<Action>): void
  saveItem(): Promise<void>
  loadItems(): Promise<Item[]>
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

  async saveItem() {
    const item = new Item()
    item.name = 'aaaa'
    let batch = new Batch()
    batch.save(item)
    await batch.commit()
  }

  async loadItems() {
    const snapshot = await Item.collectionReference().get()
    if (snapshot.empty) return []
    const items = snapshot.docs.map((d) => Item.fromSnapshot<Item>(d))
    return items
  }
}