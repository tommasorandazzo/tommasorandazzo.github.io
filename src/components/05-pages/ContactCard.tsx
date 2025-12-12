import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import QrCode from "../03-organisms/QrCode"

const contactItems: {id: string, icon: IconProp, label: string, value: string, link: string }[] = [
  {
    id: 'email',
    icon: 'at',
    label: 'Email',
    value: 'tommaso@tommaso.cc',
    link: 'mailto:tommaso@tommaso.cc',
  },
  {
    id: 'website',
    icon: 'globe',
    label: 'Website',
    value: 'tommaso.cc',
    link: 'https://tommaso.cc/',
  },
  {
    id: 'linkedin',
    icon: ['fab', 'linkedin'],
    label: 'LinkedIn',
    value: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tommasorandazzo/',
  },
  {
    id: 'github',
    icon: ['fab', 'github'],
    label: 'GitHub',
    value: 'GitHub',
    link: 'https://github.com/tommasorandazzo',
  },
  {
    id: 'drupal',
    icon: ['fab', 'drupal'],
    label: 'Drupal',
    value: 'Drupal',
    link: 'https://www.drupal.org/u/tommasorandazzo',
  },
]

const vCard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Randazzo;Tommaso;;;",
  "FN:Tommaso Randazzo",
  "TITLE:Web Developer",
  "ORG:tommaso.cc",
  "EMAIL:tommaso@tommaso.cc",
  "URL:https://tommaso.cc",
  "URL:https://www.linkedin.com/in/tommasorandazzo",
  "URL:https://github.com/tommasorandazzo",
  "END:VCARD"
].join("\n");

export default () => {
  return (
    <div className="text-center w-md max-w-full my-2 mx-auto">
      <div className="border-primary-3 border-2 rounded-4xl shadow-2xl shadow-primary-5 overflow-hidden aspect-[4/7]">
        <div className="relative after:content-[''] after:block after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-linear-0 after:from-nearblack after:from-0% after:to-60% after:to-transparent">
          <img className="w-full aspect-[2/1] object-cover object-center" src="/social.jpg" alt="" />
        </div>
        <div className="relative -mt-2 pb-2 px-2">
          <h1 className="text-[40px] mb-0">Tommaso Randazzo</h1>
          <p className="mt-0">Full-Stack Web Developer</p>
          <ul className="list-none flex justify-center gap-1 font-bold uppercase my-1">
            <li>React</li>
            <li>Drupal</li>
            <li>Wordpress</li>
            <li>Headless</li>
          </ul>
          <hr />
          <dl className="list-none mx-auto w-xs mt-2 text-base grid grid-cols-[56px_1fr] items-center gap-x-1 gap-y-1.5">
            {contactItems.map(item => (
              <>
                <dt className="text-md leading-0 border-primary-3 rounded-2xl border-2 py-0.75 px-0.5" title={item.label}><FontAwesomeIcon className="text-primary-3" icon={item.icon} /><span className="visually-hidden">{item.label}</span></dt>
                <dd className="text-left"><a href={item.link} className="animated-underline-reverse font-bold text-offwhite">{item.value}</a></dd>
              </>
            ))}
          </dl>
        </div>
      </div>
      <div className="bg-primary-5 border-primary-3 border-2 rounded-4xl shadow-2xl shadow-primary-5 overflow-hidden p-2 my-2 flex items-center justify-center">
        <div>
          <p className="font-bold">Scan to save to your contacts</p>
          <QrCode data={vCard} />
        </div>
      </div>
    </div>

  )
}
