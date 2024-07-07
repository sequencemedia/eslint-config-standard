import standard from '#eslint-config-standard'

export default function merge (alpha) {
  return (
    standard
      .map((omega) => ({
        ...omega,
        ...alpha
      }))
  )
}
