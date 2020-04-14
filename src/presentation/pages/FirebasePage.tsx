import React, {
  useEffect, 
  useRef, 
  useState,
} from 'react'
import '../../App.css'
import firebase from 'firebase/app'


export const FirebasePage = () => {

  useEffect(() => {
    console.log('mounted')
  }, [])

  const writeData = async (text: string) => {
    try {
      const db: firebase.firestore.Firestore = firebase.firestore()
      const collection: firebase.firestore.CollectionReference = db.collection('version/1/memo')
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
      const db: firebase.firestore.Firestore = firebase.firestore()
      const items: firebase.firestore.QuerySnapshot = await db.collection('version/1/memo').get()
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
  )
}
