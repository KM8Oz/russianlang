import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ourlogo from "../../assets/img/RUSSIANL.png"
const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold is-small'>
        <div className='hero-body'>
          <div className='container'>
          <div className='columns'>
            <div className='column is-5 is-offset-1'>
             <img alt='' src={ourlogo} />
            </div>
            <div className='column is-5'>
            <h2 class="subtitle titlesub" >
                {title}
             </h2>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
