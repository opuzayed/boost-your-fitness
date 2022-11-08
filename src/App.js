import './App.css';

import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
function App() 
{
  return (
    <div className='container'>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
