import React from 'react'
import renderer from 'react-test-renderer'
import App from './app'

describe('App (Snapshot)', () => {
  it('App renders Hello World!', () => {
    const component = renderer.create(<App />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
