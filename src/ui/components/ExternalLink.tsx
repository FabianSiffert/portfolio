import React from 'react'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  const isInPageProtocol = href.startsWith('mailto:') || href.startsWith('tel:')

  return (
    <a
      href={href}
      className={className}
      target={isInPageProtocol ? undefined : '_blank'}
      rel={isInPageProtocol ? undefined : 'noopener noreferrer'}
    >
      {children}
      {!isInPageProtocol && <span aria-hidden='true'> ↗</span>}
    </a>
  )
}
