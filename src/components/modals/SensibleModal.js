import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ModalContext from 'src/utils/ModalContext'
import Modal from 'src/components/base/Modal'

export default function SensibleModal() {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(slug: { eq: "modal-sensible" }) {
          body
        }
      }
    `
  )

  const { sensible, setSensible } = useContext(ModalContext)

  return (
    <Modal open={sensible} setOpen={setSensible}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Modal>
  )
}
