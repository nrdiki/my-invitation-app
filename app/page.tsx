import { Suspense } from 'react'
import Splash from './components/sections/Splash'
import BackgroundMusic from './components/sections/BackgroundMusic'

export default function Page() {
  return (
<>
  {/* <BackgroundMusic /> */}
  <Suspense fallback={<div className="text-center text-mono-50">Memuat undangan...</div>}>
      <Splash />
    </Suspense>
</>
  )
}
