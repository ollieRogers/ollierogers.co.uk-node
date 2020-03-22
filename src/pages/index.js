import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Icons from '../components/Icons'

import { CvDownload } from '../components/CvDownload'


const HomeIndex = () => {
  const siteTitle = 'Ollie Rogers'
  const siteDescription = 'Front End Developer, & Designer, based in Bournemouth, UK'

  return (
    <Layout>

      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Keen coder, people person, rapid learner.</h2>
          </header>
          <p>
            Front End Developer with a strong background in UI design, UX and
            project management.
          </p>
          <Icons />
          <h3>Skills</h3>
          <p>
            Team leadership, Front end development, UI design, Project
            management, Mentorship, Coaching, Critical thinking.
          </p>
          <h3>Tools</h3>
          <p>
            Javascript, Typescript, React, Redux, Jest, GraphQL, Apollo, Gatsby,
            Webpack, Ruby, Rails, Node, Contentful, CSS, (LESS/SASS/stylus),
            Bootstrap, Sketch, InVision, Adobe CS, Trello, Asana, Jira.
          </p>
          <CvDownload />
        </section>

        <section id="two">
          <h2>Projects</h2>
          <Gallery />
          <section id="three">
            <a href="mailto:ollie.rog@gmail.com" className="button">Get in touch</a>
          </section>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
