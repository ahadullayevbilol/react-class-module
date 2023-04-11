import './App.module.scss'
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import SearchPanel from '../Components/SearchPanel/SearchPanel';

function App() {
  return (
    <div>
      <Header /> 
      <SearchPanel /> 
      <Main />  
    </div>
  )
}

export default App;
