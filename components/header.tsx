import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          FarmBuddy
        </Link>
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Input type="search" placeholder="I am looking for..." className="w-full pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart
          </Button>
          <Button variant="ghost">
            <User className="mr-2 h-5 w-5" />
            Login
          </Button>
          <Button className="bg-green-600">Sign Up</Button>
        </nav>
      </div>
    </header>
  )
}

