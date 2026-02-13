import {
  collection, doc, setDoc, getDocs, query, orderBy, limit, serverTimestamp
} from 'firebase/firestore'
import { db, isConfigured } from '../firebase'

const COLLECTION = 'leaderboard'

/**
 * Submit or update a player's score on the leaderboard.
 * Uses the Firebase Auth UID as document ID (unique per Google account).
 */
export async function submitScore(user, scores) {
  if (!isConfigured || !db || !user?.uid) return false

  try {
    const ref = doc(db, COLLECTION, user.uid)

    await setDoc(ref, {
      name: user.displayName || 'Detective',
      photoURL: user.photoURL || null,
      puzzlesSolved: scores.puzzlesSolved || 0,
      secretsSolved: scores.secretsSolved || 0,
      metaSolved: scores.metaSolved || 0,
      totalScore: (scores.puzzlesSolved || 0) + (scores.secretsSolved || 0) * 2 + (scores.metaSolved || 0) * 3,
      lastUpdated: serverTimestamp(),
    }, { merge: true })

    return true
  } catch (e) {
    console.warn('Failed to submit score:', e.message)
    return false
  }
}

/**
 * Get the top players from the leaderboard.
 */
export async function getLeaderboard(maxResults = 50) {
  if (!isConfigured || !db) return null

  try {
    const q = query(
      collection(db, COLLECTION),
      orderBy('totalScore', 'desc'),
      limit(maxResults)
    )

    const snapshot = await getDocs(q)
    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      id: doc.id,
      ...doc.data(),
    }))
  } catch (e) {
    console.warn('Failed to fetch leaderboard:', e.message)
    return null
  }
}
