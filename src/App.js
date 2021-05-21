import './App.css';
import SearchFormSecond from './SearchForm/SearchForm2';

function App() {
  const onSearch = (value) => {
    console.log(value);
  }

  return (
    <div className="App">
      <SearchFormSecond onSearch = { onSearch } />
    </div>
  );
}

export default App;
