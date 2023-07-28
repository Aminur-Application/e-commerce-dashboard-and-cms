"use client"
import { Modal } from "@/components/ui/modal"
import { UserButton } from "@clerk/nextjs"

const RootPage = () => {
  return (
   <div className="p-3"> 
      <Modal title="test" description="test" isOpen onClose={() => {}}>
        children
      </Modal>
      <p> Admin dashboard. This is a protected page</p>
   </div>
   
  )
}

export default RootPage
