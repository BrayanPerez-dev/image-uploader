import Main from './components/Main';
import './App.css';
import 'antd/dist/antd.css';
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Main/>
    </Wrapper>
  );
}
const Wrapper = styled.div`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

`
export default App;
