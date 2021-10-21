import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title color='green'>Console cmd 2021. Vladyk Dev</Title>
      </Flex>
      <Flex direction='column' margin='10px 0px'>
        <Console />
        <Button color='yellow' background='green' align='flex-end'>
          Send
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
