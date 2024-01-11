import './App.css';
import { Todo } from './components/index';

function App() {
  return (
    <>
      <h1 className='mobile'>Use In Desktop Mode...</h1>
      <div className='desktop'><Todo /></div>
    </>
  );
}

export default App;