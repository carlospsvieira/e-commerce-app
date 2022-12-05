import React from 'react'
import { Container } from 'react-bootstrap'
import github_icon from '../images/images.png'

export default function About() {
  return (
    <Container className='mt-5 text-muted'
      style={{background: '#fdfdfd',
        textAlign: 'center',
        borderRadius: '5px',
        padding: '5px 10px'
      }}
    >
      <h1>Carlos Vieira</h1>
      <span style={{ color: 'grey', textAlign: 'end'}}>
        Hey, there! <br />
        I'm a fairly new software developer who has a lot of fun programming and learning new technologies.
        I've been attending a tech institution in Brazil for full-stack software development,
        and expect to finish my course this August - 2023.
        If you want to know more about how I got started, future projects and more,
        feel free to connect with me through Github and LinkedIn
        <p align="center" style={{ marginTop: '1rem'}}>
          <a href="https://github.com/carlospsvieira" target="_blank" rel="noreferrer">
            <img src={github_icon} width="32" height="32" style={{ borderRadius: '3px', marginRight: '0.3rem'}}/>
          </a>
          <a href="https://www.linkedin.com/in/carlospsvieira" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" />
          </a>
        </p>
      </span>
    </Container>
  )
}
