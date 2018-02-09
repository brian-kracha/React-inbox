import React from 'react'
import { connect } from 'react-redux'


export createMessage=async(message) =>{
    const response = await fetch(`${localHost}/api/messages`, {
      method: 'POST',
      body: JSON.stringify({
        subject:message.subject,
        body:message.body
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      const newMessage = await response.json()
          this.setState({messages:[newMessage,...this.state.messages]})
          return {
            type: 'CREATE_MESSAGE',
            payload:
          }
          }
