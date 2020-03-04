import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookShareCount,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  VKIcon,VKShareCount,VKShareButton,
  WhatsappShareButton,WhatsappIcon,
  OKShareButton,OKIcon,OKShareCount
} from 'react-share'
import config from '../../../config'
import './styles.sass'

class Share extends Component {
  render () {
    const { title, slug, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : '')

    return (
      <div className='social-links'>
      <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>
        <OKShareButton url={url} quote={excerpt}>
        <OKIcon round size={iconSize} />
        <OKShareCount url={url}>
        {count => <div className='share-count'>{filter(count)}</div>}
        </OKShareCount>
        </OKShareButton>
        <VKShareButton url={url} quote={excerpt}>
        <VKIcon round size={iconSize} />
        <VKShareCount url={url}>
        {count => <div className='share-count'>{filter(count)}</div>}
        </VKShareCount>
        </VKShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    )
  }
}

export default Share
