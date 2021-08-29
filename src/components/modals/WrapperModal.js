import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ModalContext from 'src/utils/ModalContext'
import Modal from 'src/components/base/Modal'

export default function WrapperModal() {
  const data = useStaticQuery(
    graphql`
      query {
        PM25: mdx(slug: { eq: "polluants/pm25" }) {
          body
          frontmatter {
            title
          }
        }
        PM10: mdx(slug: { eq: "polluants/pm10" }) {
          body
          frontmatter {
            title
          }
        }
        O3: mdx(slug: { eq: "polluants/o3" }) {
          body
          frontmatter {
            title
          }
        }
        NO2: mdx(slug: { eq: "polluants/no2" }) {
          body
          frontmatter {
            title
          }
        }
        SO2: mdx(slug: { eq: "polluants/so2" }) {
          body
          frontmatter {
            title
          }
        }
        sensible: mdx(slug: { eq: "populationvulnerablesensible" }) {
          body
          frontmatter {
            title
          }
        }
        notifications: mdx(slug: { eq: "notifications-modal" }) {
          body
          frontmatter {
            title
          }
        }
        suppressioncompte: mdx(slug: { eq: "suppressioncompte" }) {
          body
          frontmatter {
            title
          }
        }
      }
    `
  )

  const { modal, setModal } = useContext(ModalContext)

  return (
    <Modal open={modal} setOpen={setModal}>
      {modal && data[modal.replaceAll('.', '')] && (
        <>
          <h3>{data[modal.replaceAll('.', '')].frontmatter.title}</h3>
          <MDXRenderer>{data[modal.replaceAll('.', '')].body}</MDXRenderer>
        </>
      )}
    </Modal>
  )
}
