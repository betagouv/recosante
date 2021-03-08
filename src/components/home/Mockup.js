import React, { useRef } from 'react'
import styled from 'styled-components'

import useOnScreen from 'src/hooks/useOnScreen'
import Images from './mockup/Images'

const Wrapper = styled.div`
  position: relative;
  height: 40.5rem;
  padding-bottom: 5.5rem;

  ${(props) => props.theme.mq.medium} {
    height: 26.5rem;
    overflow-x: hidden;
  }

  ${(props) => props.theme.mq.small} {
    height: auto;
  }
`
const Steps = styled.div`
  position: relative;
  top: 0;
  left: 50%;

  ${(props) => props.theme.mq.small} {
    top: auto;
    left: auto;
  }
`
const Step = styled.div`
  position: absolute;
  top: ${(props) => (props.index === 1 ? '7.75rem' : '15.6rem')};
  left: ${(props) => (props.index === 1 ? '-20rem' : '-26.3rem')};
  width: ${(props) => (props.index === 1 ? '29.6rem' : '34rem')};
  overflow: hidden;

  ${(props) => props.theme.mq.medium} {
    top: ${(props) => (props.index === 1 ? '5rem' : '10.2rem')};
    left: ${(props) => (props.index === 1 ? '-15.5rem' : '-18.9rem')};
    width: ${(props) => (props.index === 1 ? '23rem' : '25rem')};
  }

  ${(props) => props.theme.mq.small} {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    display: flex;
    align-items: flex-start;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.text};
    transform: scaleX(${(props) => (props.isOnScreen ? 1 : 0)});
    transform-origin: right;
    transition: transform 400ms ease-out ${(props) => props.index * 600}ms;

    ${(props) => props.theme.mq.small} {
      display: none;
    }
  }
`
const Icon = styled.svg`
  display: none;
  width: ${(props) => (props.index === 1 ? '1.5rem' : '2rem')};
  height: auto;
  margin: ${(props) =>
    props.index === 1 ? '0.3rem 0.5rem 0 0.3rem' : '0.2rem 0.3rem 0 0'};

  ${(props) => props.theme.mq.small} {
    display: block;
  }

  path,
  rect {
    fill: ${(props) => props.theme.colors.main};
  }
`
const Text = styled.p`
  width: ${(props) => (props.index === 1 ? '19.5em' : '21.5em')};
  font-size: 1.25rem;
  margin: 0;
  padding-bottom: 0.75rem;
  transform: translateY(${(props) => (props.isOnScreen ? 0 : '100%')});
  transition: transform ${(props) => (props.index === 1 ? 500 : 700)}ms ease-out
    ${(props) => props.index * 600 + 300}ms;

  ${(props) => props.theme.mq.medium} {
    font-size: 1rem;
  }
  ${(props) => props.theme.mq.small} {
    transform: none;
    margin-bottom: 1rem;
    padding-bottom: 0;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
`
export default function Mockup() {
  const ref = useRef()

  const isOnScreen = useOnScreen(ref, '0px', 0.7)
  return (
    <Wrapper ref={ref}>
      <Images isOnScreen={isOnScreen} />
      <Steps>
        <Step index={1} isOnScreen={isOnScreen}>
          <Icon index={1} x='0px' y='0px' viewBox='0 0 512 512'>
            <path d='M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392    c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188    h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z' />
            <rect x='76' y='230' width='40' height='40' />
            <rect x='156' y='230' width='40' height='40' />
            <rect x='236' y='230' width='40' height='40' />
            <rect x='316' y='230' width='40' height='40' />
            <rect x='396' y='230' width='40' height='40' />
            <rect x='76' y='310' width='40' height='40' />
            <rect x='156' y='310' width='40' height='40' />
            <rect x='236' y='310' width='40' height='40' />
            <rect x='316' y='310' width='40' height='40' />
            <rect x='76' y='390' width='40' height='40' />
            <rect x='156' y='390' width='40' height='40' />
            <rect x='236' y='390' width='40' height='40' />
            <rect x='316' y='390' width='40' height='40' />
            <rect x='396' y='310' width='40' height='40' />
          </Icon>

          <Text index={1} isOnScreen={isOnScreen}>
            Recevez chaque jour par <Color>email</Color> une{' '}
            <Color>recommandation</Color> adaptée à votre profil.
          </Text>
        </Step>
        <Step index={2} isOnScreen={isOnScreen}>
          <Icon index={2} height='512' viewBox='0 0 512 512' width='512'>
            <path d='m184.743 95.179c8.284 0 15-6.716 15-15v-30.205c0-8.284-6.716-15-15-15s-15 6.716-15 15v30.205c0 8.284 6.716 15 15 15z' />
            <path d='m48.661 150.086-26.159-15.103c-7.175-4.144-16.349-1.684-20.49 5.49-4.142 7.175-1.684 16.349 5.49 20.49l26.159 15.103c7.158 4.134 16.339 1.701 20.49-5.49 4.142-7.175 1.684-16.349-5.49-20.49z' />
            <path d='m33.661 315.881-26.159 15.102c-7.174 4.142-9.632 13.315-5.49 20.49 4.163 7.21 13.35 9.614 20.49 5.49l26.159-15.103c7.174-4.142 9.632-13.315 5.49-20.49-4.142-7.173-13.314-9.634-20.49-5.489z' />
            <path d='m335.824 176.066 26.159-15.103c7.174-4.142 9.632-13.315 5.49-20.49-4.142-7.174-13.314-9.634-20.49-5.49l-26.159 15.103c-7.174 4.142-9.632 13.315-5.49 20.49 4.163 7.21 13.35 9.614 20.49 5.49z' />
            <path d='m398.906 267.268c-17.171-42.432-58.823-70.488-104.645-70.29-18.777-41.809-60.796-71.005-109.519-71.005-66.168 0-119.999 53.832-119.999 120 0 42.451 22.168 79.809 55.525 101.147-35.567 56.188 4.873 129.853 71.41 129.853 236.012-.246 223.098.604 227.208-.672 52.427-5.913 93.114-50.379 93.114-104.327 0-61.607-52.642-109.441-113.094-104.706zm-304.163-21.294c0-49.626 40.374-90 90-90 33.465 0 62.705 18.37 78.211 45.547-47.399 13.889-80.31 57.162-80.838 106.81-14.9 1.635-28.949 7.202-41.049 16.301-27.605-15.389-46.324-44.874-46.324-78.658zm318.469 200.742c-5.343.434-141.464.182-221.534.258-49.461 0-73.564-61.31-36.763-94.916 11.046-10.087 25.755-15.454 41.783-13.996 9.669.872 17.548-7.493 16.213-17.02-6.954-49.631 31.479-94.068 81.689-94.068 37.144 0 69.882 25.002 79.612 60.801 2.08 7.649 9.753 12.356 17.512 10.755 46.753-9.669 90.276 26.071 90.276 73.444 0 38.756-30.215 71.587-68.788 74.742z' />
          </Icon>
          <Text index={2} isOnScreen={isOnScreen}>
            Consultez les <Color>indicateurs environnementaux</Color> (qualité
            de l’air, épisodes de pollution et risque pollinique) liés à votre
            localisation afin d’adapter vos habitudes.
          </Text>
        </Step>
      </Steps>
    </Wrapper>
  )
}
