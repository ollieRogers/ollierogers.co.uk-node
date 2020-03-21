import React from 'react'

export const FormContainer = () => {
  return (
    <form name="contact" netlify>
      <div className="row uniform 50%">
        <div className="6u 12u$(xsmall)">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="6u 12u$(xsmall)">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="12u">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
      </div>
      <input className="submit" type="submit" value="Send Message" />
    </form>
  )
}
