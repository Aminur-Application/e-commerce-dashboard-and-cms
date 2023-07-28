import { UserButton } from "@clerk/nextjs"

const RootPage = () => {
  return (
   <div className="p-3"> 
      <UserButton afterSignOutUrl="/" />
      <p> Admin dashboard. This is a protected page</p>
   </div>
   
  )
}

export default RootPage
