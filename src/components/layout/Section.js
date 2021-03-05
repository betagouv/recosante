import styled from 'styled-components'

const Section = styled.section`
  max-width: ${(props) =>
    props.small ? '36.5rem' : props.tiny ? '24rem' : '49rem'};
  margin: 0 auto 5.5rem;
`

Section.Title = styled.h2`
  font-size: 2.5em;

  ${(props) => props.theme.mq.small}  {
    font-size: 1.75em;
  }
`

export default Section
