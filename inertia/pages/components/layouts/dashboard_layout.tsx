import { usePage } from '@inertiajs/react'
import { Menu, User } from 'lucide-react'
import { useState } from 'react'
import DashboardMenu from '../dashboard/dashbord_menu'

interface User {
  username: string
  email: string
  role: string
}
interface DashboardLayoutProps {
  children: JSX.Element
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { props } = usePage()
  const currentUser = props.currentUser as User
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="bg-primary-500 p-5 w-auto min-h-full md:flex box-border gap-5">
      {/* Menu (visible on mobile) */}
      <div className="md:hidden color-white px-2">
        <div className="py-4 flex justify-between border-b-solid border-b-1 mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-dark-100 px-2 py-1.5 rounded-full color-black">
              <User size={30} />
            </div>
            <p className="font-semibold">{currentUser.username}</p>
          </div>
          <button className="border-none bg-transparent color-white" onClick={toggleMobileMenu}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Visible on Mobile */}
      <DashboardMenu isMobileMenuOpen={isMobileMenuOpen} userRole={currentUser.role} />

      {/* Visible on tablet and Desktop */}
      <div className="md:block md:h-full md:max-w-[200px] color-white p-2 hidden">
        <div className="py-4 border-b-solid border-b-1 flex items-center gap-3 mb-3">
          <div className="bg-dark-100 px-2 py-1.5 rounded-full color-black">
            <User size={30} />
          </div>
          <p className="font-semibold">{currentUser.username}</p>
        </div>
        <DashboardMenu isMobileMenuOpen={true} userRole={currentUser.role} />
      </div>

      <div className="mt-5 p-5 bg-white min-h-15 md:w-full rounded-lg custom-shadow gradient-background">
        <div className="h-full">{children}</div>
      </div>
    </div>
  )
}
