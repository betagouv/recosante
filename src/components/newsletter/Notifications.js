import React, { useRef } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Button from 'src/components/base/Button'
import Section from 'src/components/base/Section'
import Images from './notifications/Images'

import useOnScreen from 'src/hooks/useOnScreen'

const StyledSection = styled(Section)`
  display: flex;
  width: 60.5rem;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
  }
`
const Content = styled.div`
  width: 29.25rem;
  margin-left: 2rem;

  ${(props) => props.theme.mq.medium} {
    width: 31rem;
    margin: 0 0 2rem;
  }
  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 0 1rem;
  }
  p {
    margin-bottom: 1em;
  }
  h2 {
    padding-left: 2.2rem;
    color: ${(props) => props.theme.colors.main};
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M11.5752 29.1133C12.3264 30.8115 14.0264 32.0001 15.9996 32.0001C17.9729 32.0001 19.6728 30.8115 20.424 29.1133H11.5752Z' fill='%23000091'/%3E%3Cpath d='M15.9992 3.05729C17.3014 3.05729 18.5517 3.28704 19.712 3.70767V3.56475C19.712 1.59914 18.1128 0 16.1473 0H15.8519C13.8862 0 12.2871 1.59914 12.2871 3.56475V3.70586C13.4468 3.28648 14.6967 3.05729 15.9992 3.05729Z' fill='%23000091'/%3E%3Cpath d='M27.7169 27H4.28217C3.83881 27 3.4327 26.701 3.34049 26.2673C3.24921 25.8379 3.44491 25.4141 3.84194 25.2306C3.93616 25.1695 4.64533 24.6737 5.35531 23.1734C6.65927 20.4182 6.93297 16.5371 6.93297 13.7664C6.93297 8.76726 11.0001 4.70024 15.9992 4.70024C20.9865 4.70024 25.0461 8.74766 25.0654 13.7304C25.0659 13.7424 25.0661 13.7544 25.0661 13.7664C25.0661 16.5371 25.3398 20.4182 26.6438 23.1734C27.3538 24.6737 28.0629 25.1696 28.1571 25.2306C28.5542 25.4141 28.7499 25.8378 28.6586 26.2673C28.5664 26.7009 28.1603 27 27.7169 27Z' fill='%23000091'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 0 0.4rem;

    ${(props) => props.theme.mq.small} {
      background-position: 0;
      background-size: 1.5rem;
    }
  }
`
const MockupWrapper = styled.div`
  flex: 1;
  position: relative;

  ${(props) => props.theme.mq.medium} {
    min-height: 14rem;
  }

  ${(props) => props.theme.mq.small} {
    min-height: auto;
  }
`
const StyledButton = styled(Button)`
  font-size: 1.125rem;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
export default function Notifications() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "introduction-notifications" }) {
          body
        }
      }
    `
  )

  const ref = useRef()
  const isOnScreen = useOnScreen(ref)

  return (
    <StyledSection ref={ref}>
      <MockupWrapper>
        <Images isOnScreen={isOnScreen} />
      </MockupWrapper>
      <Content>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Button.Wrapper right>
          <StyledButton hollow to='/notifications'>
            Découvrir
          </StyledButton>
        </Button.Wrapper>
      </Content>
    </StyledSection>
  )
}
