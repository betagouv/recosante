import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'
import Social from 'src/components/misc/Social'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 0.5rem 2rem;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: center;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.theme.mq.small} {
    align-items: center;
    margin-bottom: 1rem;
  }
`
const Title = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0 0 0.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.title};
  text-decoration: none;
  transition: color 300ms ease-out;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.colors.main};
  }
  &:hover {
    color: ${(props) => props.theme.colors.main};
    &:before {
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
  }
`
const Item = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0 0 0.5rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 300ms ease-out;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.colors.main};
  }
  &:hover {
    color: ${(props) => props.theme.colors.main};
    &:before {
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
  }
`
export default function Menu(props) {
  return (
    <Wrapper>
      <Column>
        <Title to={'/#sectors'}>Secteurs</Title>
        <Item to='/alimentation'>Alimentation</Item>
        <Item to='/transport'>Transport</Item>
        <Item to='/logement'>Logement</Item>
      </Column>
      <Column>
        <Title to={'/#applications'}>Simulateurs</Title>
        {props.data.applications.edges.map((page) => (
          <Item
            key={page.node.fields.slug}
            to={`/apps${page.node.fields.slug}`}
          >
            {page.node.frontmatter.title}
          </Item>
        ))}
      </Column>
      <Column>
        <Title to={'/'}>Datagir</Title>
        <Item to={'/jeux-de-donnees'}>Jeux de données</Item>
        <Item to={'/qui-sommes-nous'}>Qui sommes nous</Item>
        <Item to={'/blog'}>Blog</Item>
        <Item to={'https://datagir.gitbook.io/documentation/'}>
          Documentation
        </Item>
        <Item to={'/statistiques'}>Statistiques</Item>
        <Social black />
      </Column>
    </Wrapper>
  )
}
