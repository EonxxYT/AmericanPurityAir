import { useState } from 'react'

const services = ['HVAC Replacement', 'Air Conditioning', 'Heating', 'HVAC Repair', 'Indoor Air Quality', 'Maintenance', 'Other']

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) { event.currentTarget.reportValidity(); return }
    setSent(true)
  }
  if (sent) return <div className="form-success" role="status"><span>✓</span><h3>Thanks for reaching out.</h3><p>Your request is ready to connect to the company’s form service. Until that integration is configured, no information has been sent.</p><button type="button" className="text-button" onClick={() => setSent(false)}>Return to form</button></div>
  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <div className="form-row"><label>First Name<input name="firstName" autoComplete="given-name" required /></label><label>Last Name<input name="lastName" autoComplete="family-name" required /></label></div>
      <div className="form-row"><label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label><label>Email<input type="email" name="email" autoComplete="email" required /></label></div>
      <label>Service Needed<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
      <label>How can we help?<textarea name="message" rows="4" required /></label>
      <button className="button button--primary form-submit" type="submit">Request My Free Estimate <span aria-hidden="true">↗</span></button>
      <p className="form-note">By submitting, you agree to be contacted about your request.</p>
    </form>
  )
}
