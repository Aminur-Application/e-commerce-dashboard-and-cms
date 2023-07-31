import primsadb from '@/lib/prismadb'
import React from 'react'

interface DashboardPageProps {
  params: { storeId: string}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params
}) => {
  const store = await primsadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })
  return (
    <div>This is a dashboard
      <p>
        Active store: {store?.id}
      </p>
    </div>
  )
}

export default DashboardPage