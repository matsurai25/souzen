import * as React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import ResponsiveWrapper from '../../components/ResponsiveWrapper'

function encode(data) {
  return Object.keys(data)
    .map(
      key =>
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(data[key])
    )
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <ResponsiveWrapper>
          <h1>Contact</h1>
          <form
            name='contact'
            method='post'
            action='/contact/thanks/'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input
              type='hidden'
              name='form-name'
              value='contact'
            />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input
                  name='bot-field'
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor={'name'}>Your name</label>
              <div>
                <input
                  type={'text'}
                  name={'name'}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label htmlFor={'email'}>Email</label>
              <div>
                <input
                  type={'email'}
                  name={'email'}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <label htmlFor={'message'}>Message</label>
              <div>
                <textarea
                  name={'message'}
                  onChange={this.handleChange}
                  id={'message'}
                  required={true}
                />
              </div>
            </div>
            <div>
              <button type='submit'>Send</button>
            </div>
          </form>
        </ResponsiveWrapper>
      </Layout>
    )
  }
}
