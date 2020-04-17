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
    <element.Container.SampleContainer
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
        <element.Div.SampleDiv style={{
          width: '90%',
          height: '100%',
        }}>
          <div style={style}>
            <element.Divider.SampleDivider /> 
          </div>
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
          <div style={{
            margin: 'auto',
            display: 'flex',
            width: '260px',
          }}>
            <element.Input.SampleInput
              placeholder='Aa'
              onChange={(e) => {
                console.log(e)
              }}
            />
          </div>
          <div style={style}>
            <element.Toggle.SampleToggle 
              onClick={(e) => {
                console.log(e)
              }}/>
          </div>
          <div style={style}>
            <element.CheckButton.SampleCheckButton 
              onClick={(e) => {
                console.log(e)
              }}>
                {/* https://material-ui.com/components/material-icons/ */}
                <i className='material-icons'>power_settings_new</i>
              </element.CheckButton.SampleCheckButton>
          </div>
          <div style={style}>
            <element.Divider.SampleDivider /> 
          </div>
        </element.Div.SampleDiv>
      </div>
    </element.Container.SampleContainer>
  )
}
