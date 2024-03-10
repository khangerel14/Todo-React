"use cient"
import Link from "next/link";


const menus = [
  {
    link: "login",
    title: "Login"
  },
  {
    link: "signUp",
    title: "Sign up"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24 w-52 min-h-screen">
      {
        menus.map((menu, index) => {
          return (
            <Link key={menu.link + index } href={menu.link}>
              {menu.title}
            </Link>
          )
        })
      }
    </div>
  );
}
