import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to RANShop',
  description: 'eCommerce Web App by Rudy Asa Nurafif',
  keywords: 'ecommerce, ranshop, rudy nurafif, rudy asa nurafif, web portfolio',
}

export default Meta
