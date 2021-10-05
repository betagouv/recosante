import React, { useState, useEffect } from 'react'

import UXContext from 'utils/UXContext'

export default function UXProvider(props) {
  const [embedOpen, setEmbedOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [typeShare, setTypeShare] = useState('simulator')
  const [details, setDetails] = useState(false)

  const [installPrompt, setInstallPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setInstallPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])

  const [binFlight, setBinFlight] = useState(false)

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        toggleEmbedOpen: () => {
          setShareOpen(false)
          setContactOpen(false)
          setTypeShare('simulator')
          setEmbedOpen((prevOpen) => !prevOpen)
        },
        shareOpen,
        toggleShareOpen: () => {
          setEmbedOpen(false)
          setContactOpen(false)
          setTypeShare('simulator')
          setShareOpen((prevOpen) => !prevOpen)
        },
        contactOpen,
        toggleContactOpen: (value) => {
          setShareOpen(false)
          setEmbedOpen(false)
          setTypeShare('simulator')
          setContactOpen((prevOpen) => !prevOpen)
        },
        details,
        setDetails,
        typeShare,
        setTypeShare,
        installPrompt,
        binFlight,
        setBinFlight,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
