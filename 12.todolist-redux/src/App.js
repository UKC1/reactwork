import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';


function App() {
  // const [todos, setTodos] = useState(tmpData)

  return (
    <div className="App">
      <Header/>
      <Editor/>
      <List/>
    </div>
  );
}

export default App;