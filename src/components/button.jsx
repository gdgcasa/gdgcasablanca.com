import cx from 'classnames'

export function getBtnClasses({ outline, uppercase } = {}) {
  return cx(
    'rounded border border-glue-500 px-4 py-2 text-sm transition-colors focus-visible:outline-offset-4 focus-visible:outline-glue-500',
    {
      'text-glue-500 hover:bg-glue-50 active:bg-glue-100': outline,
      'bg-glue-500 text-white hover:bg-glue-600 hover:border-glue-600 active:bg-glue-700':
        !outline,
      uppercase: uppercase,
    },
  )
}

export default function Button({
  type = 'button',
  onClick,
  children,
  outline,
  uppercase = true,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={getBtnClasses({ outline, uppercase })}
    >
      {children}
    </button>
  )
}
