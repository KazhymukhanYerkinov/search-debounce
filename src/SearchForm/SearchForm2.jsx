import React from 'react';
import { debounce } from 'lodash'


const SearchFormSecond = ({ onSearch }) => {

  const [ value, setValue ] = React.useState('')

  const debouncedSearch = React.useMemo(() => 
    debounce(value => {
      onSearch(value);
    }, 1500),
    [ onSearch ]
  )

  const handleChange = React.useCallback(
    e => {
      setValue(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  )

  return <input value = { value } type = 'text' onChange = { handleChange } />
}

export default SearchFormSecond;