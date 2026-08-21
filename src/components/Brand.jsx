export default function Brand({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#home" aria-label="American Purity Air Systems home">
      <img className="brand__logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="American Purity Air Systems" />
    </a>
  )
}
