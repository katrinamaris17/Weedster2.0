import React, {Suspense} from 'react'
import {useImage} from 'react-image'
 
function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://bit.ly/3mRm0wg',
  })
 
  return <img src={src} />
}
 
export default function MyComponent() {
  return (
    <Suspense>
      <MyImageComponent />
    </Suspense>
  )
}