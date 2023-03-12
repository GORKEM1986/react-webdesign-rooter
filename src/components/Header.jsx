import React from 'react'

const Header = () => {
  return (
    <div>
      <section>
        <div className="section-left">
          <p>Subscribe To Our Newsletter</p>
        </div>
        <div className="section-right">
          <input
            className="section-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input
            className="section-input"
            type="submit"
            id="submit"
            defaultValue="Subscribe"
          />
        </div>
      </section>
    </div>
  )
}

export default Header