import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  width: ${(props) => (props.small ? '35.5rem' : '73rem')};
  max-width: 100%;
  margin: 0 auto 10rem;
  padding-top: ${(props) => (props.first ? '12rem' : 0)};

  ${(props) => props.theme.mq.medium} {
    width: ${(props) => (props.small ? '31rem' : '100%')};
  }
  ${(props) => props.theme.mq.small} {
    width: 100%;
    margin-bottom: 5rem;
  }
`

Section.Title = styled.h2`
  font-size: 2.5em;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  ${(props) => props.theme.mq.small} {
    font-size: 1.5em;
  }
`
Section.Subtitle = styled.h3`
  margin-top: -1rem;
  font-size: 1.5em;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  ${(props) => props.theme.mq.small} {
    font-size: 1.5em;
  }
`

export default Section
