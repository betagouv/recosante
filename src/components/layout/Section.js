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
      : '49rem'};
  margin: 0 auto 5.5rem;

  ${(props) => props.theme.mq.medium} {
    max-width: ${(props) =>
      props.small ? '36.5rem' : props.tiny ? '24rem' : '36.5rem'};
  }
`

Section.Title = styled.h2`
  font-size: 2.5em;

  ${(props) => props.theme.mq.small}  {
    font-size: 1.5em;
  }
`

export default Section
