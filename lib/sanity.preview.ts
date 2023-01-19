"use client"

import {definePreview} from "next-sanity/preview"
import { projectId, dataset } from "./sanity.client" 

console.log("Nigger: ",  {projectId, dataset})

function onPublicAccessOnly(){
  throw new Error(`Unable to load preview as you're not logged in`)
}

if(!projectId || !dataset){
  throw new Error(
    `Missssing projectId or datawsset. Check your ssanssity.jsson or .env`
  )
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly
})