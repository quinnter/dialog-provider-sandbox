import React from 'react'

const useForm = (callback) => {
  const [values, setValues] = React.useState<{ [key: string]: any }>({})

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleChangeForAutocomplete = (event, value, keyName) => {
    // for TextField we use 'name='whatTheKeyNameWouldBe' but Autocomplete automatically changes the name value to be 'whatTheKeyNameWouldBe-3' since each item in the list is a unique component.
    // Since we want a specific keyname, we provide it
    event.persist()
    setValues((values) => ({
      ...values,
      [keyName]: value,
    }))
  }

  const handleChangeForDatePicker = (value, keyName) => {
    // The MUI date picker doesn't pass back the event
    setValues((values) => ({
      ...values,
      [keyName]: value,
    }))
  }

  return {
    handleChange,
    handleChangeForAutocomplete,
    handleChangeForDatePicker,
    handleSubmit,
    values,
  }
}

export default useForm