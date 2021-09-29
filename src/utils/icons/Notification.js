import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: auto;
  height: 2.75rem;
`
export default function Notification() {
  return (
    <Wrapper width='48' height='48' viewBox='0 0 48 48'>
      <path
        d='M24.0312 48C19.8953 48 16.5312 44.636 16.5312 40.5C16.5312 39.672 17.2032 39 18.0312 39C18.8593 39 19.5312 39.672 19.5312 40.5C19.5312 42.9822 21.5494 45 24.0312 45C26.5134 45 28.5312 42.9822 28.5312 40.5C28.5312 39.672 29.2032 39 30.0312 39C30.8593 39 31.5312 39.672 31.5312 40.5C31.5312 44.636 28.1672 48 24.0312 48Z'
        className='fill'
      />
      <path
        d='M40.5311 42H7.53113C5.6012 42 4.03125 40.4301 4.03125 38.5001C4.03125 37.4758 4.47729 36.5061 5.25513 35.84C8.29724 33.2699 10.0312 29.5342 10.0312 25.5762V19.9999C10.0312 12.2802 16.3114 6 24.0311 6C31.7512 6 38.0314 12.2802 38.0314 19.9999V25.5762C38.0314 29.5342 39.7654 33.2699 42.7874 35.826C43.5853 36.5061 44.0314 37.4758 44.0314 38.5001C44.0314 40.4301 42.4614 42 40.5311 42ZM24.0311 9C17.9652 9 13.0312 13.934 13.0312 19.9999V25.5762C13.0312 30.4178 10.9094 34.99 7.21143 38.116C7.14111 38.176 7.03125 38.3002 7.03125 38.5001C7.03125 38.7719 7.2594 39 7.53113 39H40.5311C40.8032 39 41.0314 38.7719 41.0314 38.5001C41.0314 38.3002 40.9211 38.176 40.8552 38.12C37.1532 34.99 35.0314 30.4178 35.0314 25.5762V19.9999C35.0314 13.934 30.0974 9 24.0311 9Z'
        className='fill'
      />
      <path
        d='M24.0312 9C23.2032 9 22.5312 8.328 22.5312 7.5V1.5C22.5312 0.671997 23.2032 0 24.0312 0C24.8593 0 25.5312 0.671997 25.5312 1.5V7.5C25.5312 8.328 24.8593 9 24.0312 9Z'
        className='fill'
      />
    </Wrapper>
  )
}