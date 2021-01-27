import React from "react"
import './Footer.css'

export default function CustomFooter() {

  return (
    <div className="footer">
      <span>Created by VSwerts</span>

      <div className="contact">
        <a href="https://github.com/VanessaSwerts" >
          <i className="fab fa-github-square" />
        </a>

        <a href="https://www.linkedin.com/in/vanessaswerts/" >
          <i className="fab fa-linkedin" />
        </a>

      </div>
    </div>
  )
}