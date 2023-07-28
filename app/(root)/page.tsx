"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/useStoreModal"
import { UserButton } from "@clerk/nextjs"
import { useEffect } from "react"

const RootPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen()
    }
  }, [onOpen, isOpen])
  
  return (
   <div className="p-3"> 
      <p> Admin dashboard. This is a protected page</p>
   </div>
   
  )
}

export default RootPage
