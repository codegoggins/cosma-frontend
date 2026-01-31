import { Outlet, Link } from "react-router-dom";
import { ThemeToggle } from "../../theme/ThemeToggle";
import { Badge } from "antd";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import CosmaLogo from "../shared/CosmaLogo";

export function PublicLayout() {
  const cartItemCount = 3; // This would come from a cart context/state

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2">
          <CosmaLogo />
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            to="/products"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-primary transition-colors"
          >
            <Badge count={cartItemCount} size="small">
              <RiShoppingCart2Line className="w-5 h-5" />
            </Badge>
          </Link>
          <Link to="/profile" className="hover:text-primary transition-colors">
            <FiUser className="w-5 h-5" />
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© 2026 Cosma Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
