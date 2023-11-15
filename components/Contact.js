import Spacer from './Spacer'
import { contact } from '../data/portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <Spacer height={1} />
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer'>
        <span type='button' className='btn btn--outline'>
          {contact.email}
        </span>
      </a>
      <Spacer height={1} />
      <a href="https://t.me/Andrei27C" target='_blank' rel='noreferrer'>
        <span type='button' className='btn btn--outline'>
          Telegram
        </span>
      </a>
    </section>
  )
}

export default Contact
