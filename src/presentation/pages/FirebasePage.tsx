import React, {
  useEffect, 
  useState,
} from 'react'
import '../../App.css'
import { firestore } from '@1amageek/ballcap'
import container from '../../di_container/tsyringe.config'
import { SampleUseCase } from '../../domain/use_case'

export const FirebasePage = () => {

  useEffect(() => {
    console.log('mounted')
  }, [])

  const writeData = async (text: string) => {
    try {
      const collection = firestore.collection('version/1/memo')
      const id: string = collection.doc().id
      await collection.doc(id).set({
        uid: id,
        text,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, { merge: true })
    } catch (error) {
      console.error('firebase error', error)
    }
  }

  const readFirestore = async () => {
    try {
      const items = await firestore.collection('version/1/memo').get()
      items.docs.forEach((item: firebase.firestore.QueryDocumentSnapshot) => {
        if (item.exists) {
          const data = item.data()
          console.log(data)
        }
      })
    } catch (error) {
      console.error('firebase error', error)
    }
  }

  const [text, onTextChange] = useState('')
  return (
    <div className='App'>
      <h1>FirebasePageページ</h1>
      <div style={{
        margin: '8px',
      }}>
        <input 
          type="text" 
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value)
          }}
        />
      </div>
      <div>
        <button type='button' style={{margin: '8px',}} onClick={ async () => {
          await writeData(text)
          onTextChange('')
        }}>
          write
        </button>
        <button type='button' style={{margin: '8px',}} onClick={readFirestore}>
          read
        </button>
      </div>
      <div>
        <button type='button' style={{margin: '8px',}} onClick={ async () => {
          const useCase = container.resolve<SampleUseCase>('SampleUseCase')
          await useCase.saveItem()
        }}>
          itemWrite
        </button>
        <button type='button' style={{margin: '8px',}} onClick={ async () => {
          const useCase = container.resolve<SampleUseCase>('SampleUseCase')
          const items = await useCase.loadItems()
          items.forEach((d) => {
            console.log(d)
          })
        }}>
          itemRead
        </button>
      </div>
    </div>
  )
}
