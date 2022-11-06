import './App.css';
import ChattingComponant from "./pages/ChattingComponant";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <img className='logo' alt='' src='logo.png'/>
          <div className="name">
            AI chat
          </div>
        </div>
      </header>
      <ChattingComponant />
    </div>
  );
}

export default App;
