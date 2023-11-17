import { Button } from '@nextui-org/button'

import PageHeader from '../_components/dashboard/PageHeader'

export default function Dashboard() {
  return (
    <div>
      <PageHeader title='Dashboard' />
      <Button variant='solid' color='danger'>
        Press me
      </Button>
    </div>
  )
}
