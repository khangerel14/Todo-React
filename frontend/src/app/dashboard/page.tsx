"use client"
import Aside from "@/components/Aside"
import Drawstack from "@/components/Drawstack"

const Dashboard = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto">
        <Aside />
        <Drawstack />
    </div>
  )
}

export default Dashboard