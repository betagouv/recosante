import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  width: ${(props) =>
    props.small
      ? '36.5rem'
      : props.tiny
      ? '24rem'
      : props.large
      ? '61.5rem'
      : props.xlarge
      ? '74rem'
      : '49rem'};
  max-width: 100%;
  margin: 0 auto 5.5rem;
  padding-top: ${(props) => (props.first ? '12rem' : 0)};
  ${(props) => props.theme.mq.medium} {
    width: ${(props) =>
      props.small ? '36.5rem' : props.tiny ? '24rem' : '36.5rem'};
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
