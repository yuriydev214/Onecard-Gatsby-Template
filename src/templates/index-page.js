import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { FaExternalLinkAlt } from 'react-icons/fa'

import Layout from '../components/Layout'
import CardsHorizontalGrid from '../components/CardsHorizontalGrid'

export const IndexPageTemplate = ({
  image,
  title,
   heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="content">
          <div className="cards-wrapper">
            <h2 className="cards-wrapper-header">
              <span itemProp="headline">Blogs</span>
            </h2>
            
            <h5 style={{ margin: 0 }}>
              <Link to='/blogs' itemProp="url" style={{ color: '#8C5ACC' }}>
                View All <FaExternalLinkAlt />
              </Link>
            </h5>
          </div>
          <CardsHorizontalGrid gridItems={intro.blurbs} />
          <div className="cards-wrapper">
            <h2 className="cards-wrapper-header">
              <span itemProp="headline">Videos</span>
            </h2>
            
            <h5 style={{ margin: 0 }}>
              <Link to='/videos' itemProp="url" style={{ color: '#8C5ACC' }}>
                View All <FaExternalLinkAlt />
              </Link>
            </h5>
          </div>
          <CardsHorizontalGrid gridItems={intro.blurbs} />
          <div className="cards-wrapper">
            <h2 className="cards-wrapper-header">
              <span itemProp="headline">Podcasts</span>
            </h2>
            
            <h5 style={{ margin: 0 }}>
              <Link to='/podcasts' itemProp="url" style={{ color: '#8C5ACC' }}>
                View All <FaExternalLinkAlt />
              </Link>
            </h5>
          </div>
          <CardsHorizontalGrid gridItems={intro.blurbs} />
          <div className="cards-wrapper">
            <h2 className="cards-wrapper-header">
              <span itemProp="headline">Socials</span>
            </h2>
            
            <h5 style={{ margin: 0 }}>
              <Link to='/socials' itemProp="url" style={{ color: '#8C5ACC' }}>
                View All <FaExternalLinkAlt />
              </Link>
            </h5>
          </div>
          <CardsHorizontalGrid gridItems={intro.blurbs} />
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
