import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  max-width: ${(props) =>
    props.small
      ? '36.5rem'
      : props.tiny
      ? '24rem'
      : props.large
      ? '61.5rem'
      : props.xlarge
      ? '73rem'
      : '49rem'};
  margin: 0 auto 5.5rem;

  ${(props) => props.theme.mq.medium} {
    max-width: ${(props) =>
      props.small ? '36.5rem' : props.tiny ? '24rem' : '36.5rem'};
  }
`

Section.Title = styled.h2`
  font-size: ${(props) => (props.tiny ? '1.5em' : '2.5em')};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  ${(props) => props.theme.mq.small} {
    font-size: 1.5em;
  }
`

export default Section
