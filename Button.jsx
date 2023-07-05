import useExperiment from '@/hooks/use-experiment'

const Button = () => {
  const EXPERIMENT_ID = 'experiment_id'
  const DEFAULT_VARIANT = '0'
  const variant = useExperiment(EXPERIMENT_ID, DEFAULT_VARIANT)

  return (
    <button>
      {variant === '0' && 'Text 1'}
      {variant === '1' && 'Text 2'}
      {variant === '2' && 'Text 3'}
    </button>
  )
}

export default Button
