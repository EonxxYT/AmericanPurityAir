export default function Button({ href, children, variant = 'primary', className = '', ...props }) {
  return <a className={`button button--${variant} ${className}`} href={href} {...props}>{children}<span aria-hidden="true">↗</span></a>
}
