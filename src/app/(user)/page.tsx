import React from 'react'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'

function HomePage() {
  if(previewData()){
    return <div>Preview mode</div>
  }
  return (
    <div>
      <h1>Not in preview mode</h1>
    </div>
  )
}

export default HomePage