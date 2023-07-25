import Widges from './Widges';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widges />
    </div>
  );
}

export default App;
