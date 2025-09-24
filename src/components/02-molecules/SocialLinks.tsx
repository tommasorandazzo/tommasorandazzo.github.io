import SocialLinks from '../../../content/_SocialLinks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ hideLocal = false }) => {
  if (hideLocal) {
    SocialLinks.forEach((link, i) => {
      if (!link.url.startsWith('http')) {
        delete SocialLinks[i];
      }
    })
  }
  return (
    <ul className='flex m-1 justify-center gap-0.5'>
      {SocialLinks.map(link => (
        <li key={link.id}>
          <a href={link.url} className='text-white bg-none grid place-items-center aspect-square border-1 border-transparent p-0.25 hover:text-secondary-1 focus:text-secondary-1 hover:border-current focus:border-current rounded-2xl'>
            <span className="visually-hidden">{link.name}</span>
            <FontAwesomeIcon size='2xl' icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
