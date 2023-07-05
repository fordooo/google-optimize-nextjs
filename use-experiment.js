import { useState, useEffect } from 'react'

const useExperiment = (experimentId, defaultVariant) => {
  const [variant, setVariant] = useState(defaultVariant)
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'optimize.activate' })
    }
    const intervalId = setInterval(() => {
      if (window.google_optimize !== undefined) {
        const variantLoaded = window.google_optimize.get(experimentId)
        setVariant(variantLoaded || defaultVariant)
        clearInterval(intervalId)
      }
    }, 100)
  }, [experimentId, defaultVariant])
  return variant
}

export default useExperiment
