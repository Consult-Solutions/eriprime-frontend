import React from 'react'
import ContinueWithGoogle from './with-google.tsx'

interface OauthProps {
  onLoading: (loading: boolean) => void;
  callback: (response: any) => void;
  fallback: (error: any) => void;
}

const OAuth: React.FC<OauthProps> = ({ onLoading, callback, fallback }) => {
  return (
    <div className="mt-3 space-y-3">
      <ContinueWithGoogle onLoading={onLoading} callback={callback} fallback={fallback} />
    </div>
  )
}

export default OAuth