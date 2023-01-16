import React from 'react'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from 'lib/sanity.client'
import PreviewSuspense from "@/components/PreviewSuspense"

const query = groq`
  *[_type=='post']{
    ...,
    author,
    categories[]->
  } | order(_createdAt desc)
`

async function HomePage() {
  if(previewData()){
    return <div>Preview mode</div>
  }

  const posts = await client.fetch(query)
  return (
    <div>
      <h1>Not in preview mode</h1>
    </div>
  )
}

export default HomePage