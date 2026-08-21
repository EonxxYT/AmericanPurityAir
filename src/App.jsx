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

function App() {
  const contactAvailable = COMPANY.phone || COMPANY.email || COMPANY.serviceArea
  return <>
    <Navbar />
    <main>
      <section className="hero" id="home">
        <div className="hero__glow" aria-hidden="true" /><div className="airflow" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">HEATING · COOLING · INDOOR AIR</p>
            <h1>Pure comfort.<br /><em>Built for home.</em></h1>
            <p className="hero__lead">Local heating, cooling, and indoor air specialists focused on comfort, clear guidance, and the people who live there.</p>
            <div className="button-group"><Button href="#contact">Get a Free Estimate</Button><Button href="#services" variant="secondary">Explore Our Services</Button></div>
            <p className="trust-line"><span>Professional solutions</span><span>Straightforward recommendations</span><span>Quality installation</span></p>
          </div>
          <div className="hero__visual">
            <img src={`${import.meta.env.BASE_URL}images/home-comfort.jpg`} alt="An HVAC technician showing a homeowner how to use a modern smart thermostat" fetchPriority="high" />
            <div className="comfort-card"><span className="comfort-card__label">HOME COMFORT</span><strong>Made simple.</strong><p>One thoughtful system.<br />Every room in balance.</p><div className="comfort-scale"><i /><i /><i /><i /><i /></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our values"><div className="shell trust-grid">
        {[['Built around your home', 'Solutions tailored to your space, not a one-size-fits-all recommendation.'], ['Professional installation', 'Attention to workmanship, performance, and the details that matter.'], ['Comfort that lasts', 'Systems designed around efficiency, reliability, and long-term comfort.']].map((item, index) => <div className="trust-item" key={item[0]}><span>0{index + 1}</span><div><h2>{item[0]}</h2><p>{item[1]}</p></div></div>)}
      </div></section>

      <section className="section services" id="services"><div className="shell">
        <Reveal><SectionHeader eyebrow="What we do" title="Everything your home needs to stay comfortable" text="From everyday service to a complete system replacement, we make the next step easy to understand." /></Reveal>
        <div className="services-grid">{services.map(([number, title, text]) => <Reveal className="service-card" key={title}><span>{number}</span><div className="service-icon" aria-hidden="true">↗</div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}>Learn more <b aria-hidden="true">→</b></a></Reveal>)}</div>
      </div></section>

      <section className="section why" id="why-us"><div className="shell why__grid">
        <Reveal className="why__intro"><SectionHeader light eyebrow="The American Purity approach" title="Home comfort without the guesswork" text="You shouldn’t have to understand HVAC equipment to make a good decision. We make the process clear from the first conversation onward." /><div className="why__statement">A better recommendation begins by listening to the people who live there.</div></Reveal>
        <div className="principles">{principles.map(([title, text], index) => <Reveal className="principle" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
      </div></section>

      <section className="section personal"><div className="shell personal__grid">
        <Reveal className="personal__photo"><img src={`${import.meta.env.BASE_URL}images/personal-service.jpg`} alt="A clean residential HVAC condenser installation with neatly routed lines" loading="lazy" /></Reveal>
        <Reveal className="personal__copy"><p className="eyebrow">Service that still feels personal</p><h2>Your home isn’t another service ticket.</h2><p className="personal__lead">American Purity takes the time to understand the home, explain what is happening, and recommend the right path forward without unnecessary pressure.</p><div className="personal__principles">{personalPrinciples.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></Reveal>
      </div></section>

      <section className="section replacement"><div className="shell replacement__grid">
        <Reveal className="replacement__visual"><img src={`${import.meta.env.BASE_URL}images/system-installation.jpg`} alt="A technician carefully checking residential air conditioning equipment" loading="lazy" /><div className="replacement__overlay" /><p>A quieter system.<br />A more even home.<br /><strong>A better everyday.</strong></p></Reveal>
        <Reveal className="replacement__copy"><p className="eyebrow">System replacement</p><h2>When it’s time for something better</h2><p>Uneven temperatures, rising energy costs, frequent repairs, and loud or aging equipment can be signs that it is time to look ahead.</p><ul><li>Understand what your home actually needs</li><li>Compare options without the technical overload</li><li>Choose around your budget and comfort goals</li></ul><Button href="#contact">Request a System Estimate</Button></Reveal>
      </div></section>

      <section className="section process-section"><div className="shell">
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
    <footer><div className="shell footer__top"><div><Brand inverse /><p>Heating · Cooling · Indoor Air Quality</p></div><div className="footer__links"><div><strong>Explore</strong>{NAV_LINKS.slice(1).map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div><div><strong>Services</strong><a href="#services">Air Conditioning</a><a href="#services">Heating</a><a href="#services">System Replacement</a></div><div><strong>Information</strong><span>Privacy</span><span>Terms</span></div></div></div><div className="shell footer__bottom"><p>© {new Date().getFullYear()} American Purity Air Systems</p><a href="#home">Back to top ↑</a></div></footer>
  </>
}

export default App
