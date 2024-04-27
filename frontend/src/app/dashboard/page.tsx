"use client"
import { Navbar, Aside, Drawstack } from "../../components/index"

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto max-w-screen-xl">
        <Aside />
        <Drawstack />
      </div>
    </div>
  )
}

export default Dashboard