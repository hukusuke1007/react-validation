import React from 'react'
import '../../App.css'
import * as element from '../element'
import { DarkModeSample } from '../component/Sample'
import DeleteIcon from '@material-ui/icons/Delete'

/**
 *  White 
 * https://dribbble.com/shots/10867870-ui-neumorphism-elements
 * https://dribbble.com/shots/9890709-Neumorphism-UI-Trend-2020
 * https://dribbble.com/shots/9517002--Light-Mode-Simple-Music-Player
 * https://dribbble.com/shots/10057655-Neumorphism-in-user-interfaces
 * https://dribbble.com/shots/9706742-Neumorph-Skeuomorph-Anicorn-Watches-Light-Mode
 * 
 * Block
 * https://dribbble.com/shots/10795116-Community-App-Neumorphism
 * https://dribbble.com/shots/10484965-Shazam-redesign-in-dark-neomorphism
 * https://dribbble.com/shots/10881121-Pink-Notes
 * https://dribbble.com/shots/10494263-Skeuomorph-Smart-Home-App
 * https://dribbble.com/shots/10135483-Music-App-Neumorphism
 * 
 * Avatar
 */

const style = {
  margin: '32px'
}

export const Neumorphism = () => {
  return (
    <element.Container.Container
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Neumorphismページ</h1>
       {/* DarkMode */}
      <DarkModeSample />

      {/* Neumorphism */}
      <div style={{
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <element.Div.Div style={{
          width: '90%',
          height: '100%',
        }}>
          <div style={style}>
            <element.Divider.Divider /> 
          </div>
          <div style={style}>
            <element.Button.Button 
              style={{
                width: 120
              }}
              onClick={(e) => console.log(e)} 
            >
              Button
            </element.Button.Button>
          </div>
          <div style={style}>
            <element.Button.CircleButton onClick={(e) => console.log(e)} >
              ！
            </element.Button.CircleButton>
          </div>
          <div style={{
            margin: 'auto',
            display: 'flex',
            width: '260px',
          }}>
            <element.Input.Input
              placeholder='Aa'
              onChange={(e) => {
                console.log(e)
              }}
            />
          </div>
          <div style={style}>
            <element.Toggle.Toggle 
              onClick={(e) => {
                console.log(e)
              }}/>
          </div>
          <div style={style}>
            <element.CheckButton.CheckButton 
              onClick={(e) => {
                console.log(e)
              }}>
                {/* https://material-ui.com/components/material-icons/ */}
                <i className='material-icons'>power_settings_new</i>
              </element.CheckButton.CheckButton>
          </div>
          <div style={{
            margin: 'auto',
            display: 'flex',
            width: '300px',
          }}>
            <element.TextArea.TextArea
              placeholder='Aa'
              onChange={(e) => {
                console.log(e)
              }}
            />
          </div>
          <div style={style}>
            <element.Card.Card
              type={'concave'}
              style={{
                margin: 'auto',
                width: 200,
                height: 100,
                textAlign: 'left',
              }}
            >
              Card
            </element.Card.Card>
          </div>
          <div style={style}>
            <element.Card.Card
              style={{
                margin: 'auto',
                width: 200,
                height: 100,
                textAlign: 'left',
              }}
            >
              Card
            </element.Card.Card>
          </div>
          <div style={style}>
            <element.Divider.Divider /> 
          </div>
        </element.Div.Div>
      </div>
    </element.Container.Container>
  )
}
