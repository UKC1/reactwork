import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';
import { useSelector } from 'react-redux';
function App() {
    const todos = useSelector(state => state.todos);

    return (
        <div className="App">
            <Header/>
            <Editor/>
            <List todos={todos}/>
        </div>
    );
}

export default App;
