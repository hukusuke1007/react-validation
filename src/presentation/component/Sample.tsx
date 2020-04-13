import React, {   
  useState,
  useEffect, 
} from 'react'
import { 
  useTranslation,
  Trans,
} from 'react-i18next'
import { useTheme } from '../theme/ThemeContext'
import '../../App.css'

/**
 * DarkMode
 */
export const DarkModeSample = () => {
  const { colorMode, setColorMode } = useTheme()
  return (
    <div>
      <p>current color mode: {colorMode}</p>
      <button onClick={setColorMode}>toggle color mode</button>
    </div>
  )
}

/**
 * 多言語化
 */
export const LocalizedSample = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState('ja')
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])
  const name = 'Shohei'
  return (
    <div>
      <p>{t('title')}</p>
      <p>
        <Trans i18nKey='hello'>
          {{name: 'Shohei'}}
        </Trans>
      </p>
      <p>
        <Trans i18nKey='hello'>
         {{name}}
        </Trans>
      </p>
      <p>
        <Trans i18nKey='hello'>
          Some newlines <strong>{{name}}</strong>
        </Trans>
      </p>
      <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>
        <p>{t('changeLang')}</p>
      </button>
    </div>
  )  
}



/**
 * テキストエリア
 */
export type SampleTextAreaProps = {
  text: string,
  onClear: () => void,
}

export const SampleTextArea = (props: SampleTextAreaProps) => {
  const [text, onTextChange] = useState(props.text)
  return (
    <div className="App">
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
      <div style={{
        margin: '8px',
      }}>
        <button type='button' onClick={() => {
          onTextChange('')
          props.onClear()
        }}>
          clear
        </button>
      </div>
    </div>
  )
}