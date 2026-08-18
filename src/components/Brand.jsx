export default function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#home" aria-label="American Purity Air Systems home">
      <span className="brand__mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="brand__type"><strong>AMERICAN PURITY</strong><small>AIR SYSTEMS</small></span>
    </a>
  )
}
