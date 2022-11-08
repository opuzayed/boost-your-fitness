import './App.css';

import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
function App() 
{
  return (
    <div className='container'>
     <div className='leftside-bg'> <LeftSide></LeftSide></div>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
