import { useState, useEffect, useCallback } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, isConfigured } from '../firebase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isConfigured || !auth) {
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName || 'Detective',
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = useCallback(async () => {
    if (!isConfigured || !auth || !googleProvider) return false
    try {
      await signInWithPopup(auth, googleProvider)
      return true
    } catch (e) {
      // User closed the popup or error occurred
      console.warn('Sign-in failed:', e.message)
      return false
    }
  }, [])

  const logOut = useCallback(async () => {
    if (!auth) return
    try {
      await signOut(auth)
    } catch (e) {
      console.warn('Sign-out failed:', e.message)
    }
  }, [])

  return {
    user,
    loading,
    isAuthenticated: Boolean(user),
    signIn,
    logOut,
    isConfigured,
  }
}
