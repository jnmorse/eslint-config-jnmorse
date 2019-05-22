class Example {
  state = {
    firstName: 'Joseph',
    lastName: 'Morse'
  }

  setFirstName = (firstName) => {
    this.state = { ...this.state, firstName }
  }
}

export default Example
