import "./App.css"
import { PropsWithChildren } from 'react';

export default function Border({ children }: PropsWithChildren) {
  return (
    <div className='border'>
        {children}
    </div>
  )
}
