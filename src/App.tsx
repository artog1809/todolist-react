import { Box, styled } from '@mui/material';
import './App.css'
import Background from './Background'
import Home from './Home'

const MainBox = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  height: '100vh'
}))

function App() {

  return (
  <MainBox>
    <Background>
          <Home />
    </Background>
  </MainBox>
  )
}

export default App
