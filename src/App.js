
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import theme from './themes/theme';
import Wrapper from './components/Wrapper';
import StyledHeader from './components/Header';
import StyledMain from './components/Main';
import { useSelector } from 'react-redux';

function App() {
  const activeTimer = useSelector(state => state.activeTimer)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <StyledHeader activeTimer={activeTimer} />
        <StyledContainer>
          <StyledMain />
        </StyledContainer>

      </Wrapper>
    </ThemeProvider>


  );
}

export default App;

const StyledContainer = styled.div`
  position: fixed;
  top: 60px;
  overflow: auto;
  max-height: calc(100vh - calc(100vh - 100%) - 60px);
  height: calc(100vh - calc(100vh - 100%) - 60px);
  width: 100%;
  background-color: ${props => props.theme.color.lightGray};
`;