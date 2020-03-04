import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import ourlogo from "../../assets/img/RUSSIANL.png"
const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  const style = {
    p:{
      fontSize:16,
      color:'#FCC'
    }
  }
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
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
    <section className='section'>
      <div className='container'>
        <ContactForm />
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
