import React from 'react';
import _ from 'lodash'
import './SearchForm.css';


const SearchForm = () => {
  const [ search, setSearch ] = React.useState('');
  const [debouncedState, setDebouncedState] = useDebounce(search);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setDebouncedState(event.target.value);
  }

  return (
      <div className = 'search-form'>
        <h1> Search form with debounce </h1>

        <input value = { search } placeholder = 'Search...' onChange = { handleChange } />
        <p> { search } </p>
        <p> { debouncedState } </p>
      </div>
    )
}


const useDebounce = (object = null, wait = 1000) => {
  const [ state, setState ] = React.useState(object);

  const setDebouncedState = (_value) => {
    handleDebounce(_value);
  }

  const handleDebounce = React.useCallback(
    _.debounce((_prop) => {
      console.log("updating search");
      setState(_prop);
    }, wait), [setState])

  return [state, setDebouncedState]
}

export default SearchForm;