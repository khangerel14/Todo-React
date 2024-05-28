"use client"
import { Navbar, Aside, Drawstack } from "../../components/index"

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto w-[1440px]">
        <Aside />
        <Drawstack />
      </div>
    </div>
  )
}

export default Dashboard