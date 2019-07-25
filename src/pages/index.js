// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Title>Freeway Progression Framework</Title>
          </DescriptionTitleGroup>
          <Description>
             <DescriptionText>This is a preview of the Progression framework in use at Freeway insurance.</DescriptionText>
             <DescriptionText>It's based on the excellent Monzo Progression Framework: <a href="https://github.com/monzo/progression-framework">Here</a></DescriptionText>
             <DescriptionText>Source code is <a href="https://github.com/Tall-Paul/progression-framework">Here</a> </DescriptionText>
             <DescriptionText>Deployments to the Master Branch are automatically built and deployed on netlify </DescriptionText>
             <DescriptionText><img src="https://api.netlify.com/api/v1/badges/fa5ab270-44ed-42d9-bea9-d46e8d0ef7d0/deploy-status"></img> </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
