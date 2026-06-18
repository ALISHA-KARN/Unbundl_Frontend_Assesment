import { useCallback, useEffect, useState } from 'react'

/**
 * Fetches testimonials for the "Happy Smiles" section.
 *
 * The Whistle design shows short customer quotes with a name and avatar, which
 * maps cleanly onto DummyJSON's /comments endpoint:
 *   comment.body          -> the testimonial quote
 *   comment.user.fullName -> the customer's name (falls back to username)
 * Avatars aren't provided by the API, so we use deterministic picsum images
 * seeded by the comment id (matching the brief's "use placeholder URLs" note).
 */
const ENDPOINT = 'https://dummyjson.com/comments?limit=6'

function mapComment(comment) {
  const name = comment.user?.fullName || comment.user?.username || 'Whistle customer'
  return {
    id: comment.id,
    quote: comment.body,
    name,
    handle: comment.user?.username ? `@${comment.user.username}` : '',
    avatar: `https://picsum.photos/seed/whistle-user-${comment.id}/96/96`,
  }
}

export default function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = useCallback(async (signal) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(ENDPOINT, { signal })
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }
      const data = await res.json()
      const comments = Array.isArray(data?.comments) ? data.comments : []
      if (comments.length === 0) {
        throw new Error('No testimonials were returned')
      }
      setTestimonials(comments.map(mapComment))
    } catch (err) {
      if (err.name === 'AbortError') return
      setError('We couldn’t load reviews right now. Please try again.')
    } finally {
      // Don't flip loading off if the request was aborted by cleanup.
      if (!signal?.aborted) setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    load(controller.signal)
    return () => controller.abort()
  }, [load])

  // exposed so the error state's "Try again" button can re-run the fetch
  const retry = useCallback(() => load(), [load])

  return { testimonials, loading, error, retry }
}
