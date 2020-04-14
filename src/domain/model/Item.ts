import { 
  Doc,
  Field,
  CollectionReference,
  firestore
} from '@1amageek/ballcap'

export class Item extends Doc {
  static docName: string = 'item'
  static collectionReference(): CollectionReference {
		return firestore.collection('version').doc('1').collection(Item.docName)
  }
  
	@Field name?: string
}