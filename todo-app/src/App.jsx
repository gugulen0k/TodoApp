import TodoForm from './TodoForm';
import TodoList from './TodoList';

import styled from 'styled-components';

const Block = styled('div') `
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  return (
    <Block>
      <TodoForm />
      <TodoList />
    </Block>
  );
}

export default App;
