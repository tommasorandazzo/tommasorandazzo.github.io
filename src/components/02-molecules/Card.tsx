import type { ReactNode } from "react"
import Button from "../01-atoms/Button"

export default ({ imageAlt, imageSrc, heading, description, ctaLink, ctaOnclick, ctaText, classes }: { imageAlt?: string, imageSrc?: string, heading: string, description?: string|ReactNode, ctaLink?: string, ctaOnclick?: Function, ctaText?: string|ReactNode, classes?: string[] }) => {
  return (
    <div className={`border-1 rounded-xl p-0 overflow-hidden ${classes && typeof classes === 'string' ? classes : classes?.join('')}`}>
      {imageSrc && (
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
      )}
      <div className="p-1 pb-2 flex flex-col items-start justify-start">
        <h3 className="mt-0">{heading}</h3>
        {description}
        {ctaText && ctaLink || ctaOnclick && <Button onclick={ctaOnclick} classes={['mt-0.5']}>{ctaText}</Button>}
      </div>
    </div>
  )
}
