import { injectable, inject } from 'tsyringe'
import { 
  Dispatch,
} from 'redux'
import { Batch } from '@1amageek/ballcap'
import { SampleRepository } from '../repository'
import { Item } from '../model'
import * as modules from '../redux/modules'

export interface SampleUseCase {
  loadSample(): string 
  increment(dispatch: Dispatch<modules.Counter.Action>): void
  saveItem(dispatch: Dispatch<modules.Item.Action>): Promise<void>
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

  increment(dispatch: Dispatch<modules.Counter.Action>) {
    dispatch({ type: modules.Counter.ActyonType.INCREMENT })
  }

  async saveItem(dispatch: Dispatch<modules.Item.Action>) {
    const item = new Item()
    item.name = 'aaaa'
    let batch = new Batch()
    batch.save(item)
    await batch.commit()
    dispatch({ type: modules.Item.ActyonType.SAVE, item: item })
  }

  async loadItems() {
    const snapshot = await Item.collectionReference().get()
    if (snapshot.empty) return []
    const items = snapshot.docs.map((d) => Item.fromSnapshot<Item>(d))
    return items
  }
}