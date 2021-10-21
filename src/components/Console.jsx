import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }
  @media ${(props) => props.theme.media.phone} {
    border: 5px solid yellowgreen;
  }
  @media ${(props) => props.theme.media.tablet} {
    border: 2px solid blanchedalmond;
  }
`
const Console = ({ color, ...props }) => {
  debugger
  const [lines, setLines] = useState(['C/users/Vladyk_Dev>'])
  const onKeyPress = (e) => {
    if (e.charCode == 13) {
      setLines([...lines, 'C/users/Vladyk_Dev>'])
    }
  }
  return (
    <Flex>
      <Flex direction='column' margin='0px 10px'>
        {lines.map((line) => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} {...props} color={color} />
    </Flex>
  )
}

export default Console
