import dynamic from 'next/dynamic'

const Button = dynamic(() => import('./Button'))

const Parent = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

export default Parent
