import cx from 'classnames'

import { MainHeading } from '../screens/home-screen/index'

export function SectionHeading({ children, sup, className }) {
  return (
    <div className={cx('text-slate-700', className)}>
      {!sup ? null : <div className='text-sm tracking-widest'>{sup}</div>}
      <h2 className='text-4xl'>
        <MainHeading>{children}</MainHeading>
      </h2>
    </div>
  )
}
