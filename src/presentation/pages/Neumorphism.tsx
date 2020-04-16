import React, { useEffect, useCallback } from 'react'
import '../../App.css'
import * as element from '../element'

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
 * Div
 * Button, CircleButton
 * Input
 * RadioButton
 * Switch
 * Avatar
 * Driver
 */

const style = {
  margin: '8px'
}

export const Neumorphism = () => {
  return (
    <div className='App'>
      <h1>Neumorphismページ</h1>
      {/* Neumorphism */}
      <div style={{
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <element.Div.SampleDiv style={{
          width: '90%',
          height: 300,
        }}>
          <div style={style}>
            <element.Button.SampleButton 
              style={{
                width: 120
              }}
              onClick={(e) => console.log(e)} 
            >
              Button
            </element.Button.SampleButton>
          </div>
          <div style={style}>
            <element.Button.SampleCircleButton onClick={(e) => console.log(e)} >
              ！
            </element.Button.SampleCircleButton>
          </div>
          <div style={style}>
            <element.Input.SampleInput
              placeholder='Aa'
              onChange={(e) => {
                console.log(e)
              }}
            />
          </div>
        </element.Div.SampleDiv>
      </div>
    </div>
  )
}
