import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"

class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "" }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)
        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post">
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FlavorForm
