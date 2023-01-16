import React from 'react'
import { PreviewData } from 'next'

function HomePage() {
  if(PreviewData()){
    return <div>Preview mode</div>
  }
  return (
    <div>
      
    </div>
  )
}

export default HomePage