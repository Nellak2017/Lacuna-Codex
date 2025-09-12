import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useRedirectIfUnauthorized = (user, loading) => {
  const router = useRouter()
  useEffect(() => { if (loading || (!loading && user !== null)) { return } router.push('/') }, [user, loading, router])
}