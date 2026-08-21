import Navbar from './components/Navbar.jsx'
import Brand from './components/Brand.jsx'
import Button from './components/Button.jsx'
import ContactForm from './components/ContactForm.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import { COMPANY, NAV_LINKS } from './config.js'

const services = [
  ['01', 'Air Conditioning', 'Installation, replacement, repair, and cooling solutions designed for dependable comfort.'],
  ['02', 'Heating', 'Reliable heating systems and professional service for the colder months.'],
  ['03', 'HVAC Replacement', 'Clear guidance when it is time to replace aging equipment with a modern system.'],
  ['04', 'Indoor Air Quality', 'Thoughtful solutions for the air circulating throughout your home.'],
  ['05', 'Preventative Maintenance', 'Routine care focused on reliability, performance, and fewer unnecessary breakdowns.'],
  ['06', 'Comfort & Efficiency', 'Modern upgrades that help your system work smarter and your home feel more consistent.'],
]
const principles = [
  ['Clear recommendations', 'Options explained in plain English, without unnecessary complexity.'],
  ['Built for your home', 'Recommendations shaped by your space, needs, and daily routines.'],
  ['Quality workmanship', 'Professional installation with care for performance and appearance.'],
  ['Long-term comfort', 'A focus on how your home feels long after the work is complete.'],
]
const process = [
  ['01', 'Talk with us', 'Tell us what is happening in your home and what you would like to improve.'],
  ['02', 'Evaluate', 'We look at the home, current equipment, and comfort needs.'],
  ['03', 'Review your options', 'Receive clear recommendations without unnecessary confusion.'],
  ['04', 'Get comfortable', 'Professional installation and a system built around your home.'],
]
const personalPrinciples = [
  ['We listen before recommending', 'The right answer starts with understanding what you are experiencing at home.'],
  ['We explain your options clearly', 'You get a straightforward view of the choices, without pressure or technical overload.'],
  ['We treat your home with care', 'Thoughtful service means respecting your space as much as the equipment inside it.'],
]
const trustItems = [
  ['pin', 'Local Experts', 'Proudly serving homeowners in our community.'],
  ['chat', 'Straightforward Guidance', 'We explain your options clearly—no pressure, just honest answers.'],
  ['shield', 'Quality Workmanship', 'Installed with care for dependable comfort that lasts.'],
  ['home', 'Built Around You', 'Solutions designed for your home, your family, and your comfort.'],
]

function LineIcon({ name }) {
  const paths = {
    pin: <><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    chat: <><path d="M5 18 3 21l1-5a8 8 0 1 1 3 3" /><path d="M8 11h8M8 8h5" /></>,
    shield: <><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    cooling: <><circle cx="12" cy="12" r="2" /><path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" /></>,
    heating: <path d="M13 2s3 4 0 7c-2 2-1 4 1 5 2-1 4-3 4-6 3 3 4 7 2 10-3 5-12 5-15 0-2-4 0-8 3-10 0 4 2 5 4 6 0-4 1-7 5-12Z" />,
    replacement: <><path d="M20 7h-7V2" /><path d="M20 7a9 9 0 1 0 1 8" /></>,
    air: <><path d="M3 8h11c4 0 4-5 1-5-2 0-3 1-3 2" /><path d="M3 12h16c4 0 4 6 0 6-2 0-3-1-3-2M3 16h8" /></>,
    maintenance: <><path d="m14 6 4-4 4 4-4 4" /><path d="M18 6h-7a7 7 0 1 0 6.7 9" /></>,
    efficiency: <><path d="M20 4C10 4 5 9 5 16c4 1 11 0 15-12Z" /><path d="M4 21c2-6 6-9 12-12" /></>,
  }
  return <svg className="line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function App() {
  const contactAvailable = COMPANY.phone || COMPANY.email || COMPANY.serviceArea
  return <>
    <Navbar />
    <main>
      <section className="hero" id="home">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">LOCAL HEATING · COOLING · INDOOR AIR</p>
            <h1>Pure comfort.<br /><em>Built for home.</em></h1>
            <p className="hero__lead">Heating, cooling, and air quality solutions designed for the way you live. Right here in your community.</p>
            <div className="button-group"><Button href="#contact">Request an Estimate</Button><Button href="#process" variant="secondary">See Our Process</Button></div>
          </div>
          <div className="hero__visual">
            <img src={`${import.meta.env.BASE_URL}images/home-comfort.jpg`} alt="An HVAC technician showing a homeowner how to use a modern smart thermostat" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why homeowners choose American Purity"><div className="shell trust-grid">
        {trustItems.map(([icon, title, text]) => <div className="trust-item" key={title}><LineIcon name={icon} /><div><h2>{title}</h2><p>{text}</p></div></div>)}
      </div></section>

      <section className="section services" id="services"><div className="shell">
        <Reveal><SectionHeader eyebrow="Residential HVAC services" title="Complete Comfort Solutions" text="From everyday comfort to system replacements, we provide expert solutions for a healthier, more comfortable home." /></Reveal>
        <div className="services-grid">{services.map(([number, title, text], index) => <Reveal className="service-card" key={title}><span>{number}</span><LineIcon name={['cooling', 'heating', 'replacement', 'air', 'maintenance', 'efficiency'][index]} /><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}>Learn more <b aria-hidden="true">→</b></a></Reveal>)}</div>
      </div></section>

      <section className="section why" id="why-us"><div className="shell why__grid">
        <Reveal className="why__intro"><SectionHeader light eyebrow="The American Purity approach" title="Home comfort without the guesswork" text="You shouldn’t have to understand HVAC equipment to make a good decision. We make the process clear from the first conversation onward." /><div className="why__statement">A better recommendation begins by listening to the people who live there.</div></Reveal>
        <div className="principles">{principles.map(([title, text], index) => <Reveal className="principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
      </div></section>

      <section className="section personal" id="about"><div className="shell personal__grid">
        <Reveal className="personal__photo"><img src={`${import.meta.env.BASE_URL}images/personal-service.jpg`} alt="A clean residential HVAC condenser installation with neatly routed lines" loading="lazy" /></Reveal>
        <Reveal className="personal__copy"><p className="eyebrow">Service that still feels personal</p><h2>Your home isn’t another service ticket.</h2><p className="personal__lead">American Purity takes the time to understand the home, explain what is happening, and recommend the right path forward without unnecessary pressure.</p><div className="personal__principles">{personalPrinciples.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></Reveal>
      </div></section>

      <section className="section replacement"><div className="shell replacement__grid">
        <Reveal className="replacement__visual"><img src={`${import.meta.env.BASE_URL}images/system-installation.jpg`} alt="A technician carefully checking residential air conditioning equipment" loading="lazy" /><div className="replacement__overlay" /><p>A quieter system.<br />A more even home.<br /><strong>A better everyday.</strong></p></Reveal>
        <Reveal className="replacement__copy"><p className="eyebrow">System replacement</p><h2>When it’s time for something better</h2><p>Uneven temperatures, rising energy costs, frequent repairs, and loud or aging equipment can be signs that it is time to look ahead.</p><ul><li>Understand what your home actually needs</li><li>Compare options without the technical overload</li><li>Choose around your budget and comfort goals</li></ul><Button href="#contact">Request a System Estimate</Button></Reveal>
      </div></section>

      <section className="section process-section" id="process"><div className="shell">
        <Reveal><SectionHeader eyebrow="How it works" title="A better HVAC experience" text="Clear at every step. Considered from start to finish." /></Reveal>
        <div className="process-grid">{process.map(([number, title, text]) => <Reveal className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className="section financing" id="financing"><div className="shell financing__inner">
        <Reveal><p className="eyebrow">Flexible ways forward</p><h2>Comfort shouldn’t<br />have to wait.</h2></Reveal>
        <Reveal className="financing__copy"><p>Financing options can make replacing or upgrading a home comfort system easier to manage.</p><Button href="#contact" variant="light">Explore Financing Options</Button><small>Financing is subject to approval and applicable lender terms.</small></Reveal>
      </div></section>

      <section className="section perspective"><div className="shell perspective__inner"><Reveal><p className="eyebrow">Our measure of good work</p><blockquote>The best comfort system is the one you barely have to think about.</blockquote><p className="perspective__note">Quiet. Consistent. Thoughtfully selected for the home it serves.</p></Reveal></div></section>

      <section className="section final-cta"><div className="shell final-cta__inner"><Reveal><p className="eyebrow">Let’s talk about your home</p><h2>Ready to feel<br />the difference?</h2></Reveal><Reveal className="final-cta__copy"><p>Whether your system needs attention or you’re considering something entirely new, American Purity Air Systems can help you find the right path forward.</p><div className="button-group"><Button href="#contact" variant="light">Get a Free Estimate</Button>{COMPANY.phone && <Button href={`tel:${COMPANY.phone}`} variant="outline-light">Call American Purity</Button>}</div></Reveal></div></section>

      <section className="section contact" id="contact"><div className="shell contact__grid">
        <Reveal className="contact__intro"><SectionHeader eyebrow="Start a conversation" title="Tell us how your home could feel better" text="Share a few details and the American Purity team can help you understand the right next step." />{contactAvailable && <div className="contact-details">{COMPANY.phone && <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>}{COMPANY.email && <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>}{COMPANY.serviceArea && <p>{COMPANY.serviceArea}</p>}</div>}<p className="contact__privacy">Your information is used only to respond to your request.</p></Reveal>
        <Reveal><ContactForm /></Reveal>
      </div></section>
    </main>
    <footer><div className="shell footer__top"><div className="footer__brand"><Brand inverse /><p>Local heating, cooling &amp; indoor air specialists. Clear guidance and professional workmanship, built around your home.</p></div><div className="footer__links"><div><strong>Explore</strong>{NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div><div><strong>Services</strong><a href="#services">Air Conditioning</a><a href="#services">Heating</a><a href="#services">System Replacement</a><a href="#services">Indoor Air Quality</a></div>{contactAvailable && <div><strong>Contact</strong>{COMPANY.phone && <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>}{COMPANY.email && <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>}{COMPANY.serviceArea && <span>{COMPANY.serviceArea}</span>}</div>}</div></div><div className="shell footer__bottom"><p>© {new Date().getFullYear()} American Purity Air Systems</p><a href="#home">Back to top ↑</a></div></footer>
  </>
}

export default App
