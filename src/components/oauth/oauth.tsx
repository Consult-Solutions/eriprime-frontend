import React from 'react'
import ContinueWithGoogle from './with-google.tsx'
import ContinueWithGithub from './with-github.tsx'

function OAuth() {
  return (
    <div className="mt-3 space-y-3">
        <ContinueWithGoogle />
        <ContinueWithGithub />
    </div>
  )
}

export default OAuth