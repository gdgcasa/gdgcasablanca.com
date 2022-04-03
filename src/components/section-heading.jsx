import cx from 'classnames'

import { MainHeading } from '../screens/home-screen/index'

export function SectionHeading({ children, sup, className }) {
  return (
    <h2 className={cx('text-slate-700', className)}>
      {!sup ? null : <div className='text-sm tracking-widest'>{sup}</div>}
      <div className='text-4xl'>
        <MainHeading>{children}</MainHeading>
      </div>
    </h2>
  )
}
