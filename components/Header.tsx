import Logo from "@/components/icons/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white fixed w-full z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-primary">
          <Logo />
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#faq"
            className="text-muted-foreground hover:text-primary transition duration-300"
          >
            FAQ
          </Link>
          {/* <Link href="/landing" className="text-gray-300 hover:text-cyan-400 transition duration-300">Landing</Link>
          <Link href="/gnosis/incident/abc123" className="text-gray-300 hover:text-cyan-400 transition duration-300">Sample Incident</Link>
          <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition duration-300">Features</Link>
          <Link href="#blockchains" className="text-gray-300 hover:text-cyan-400 transition duration-300">Blockchains</Link>*/}
          {/* <Link
            href="#priceSimulator"
            className="text-muted-foreground hover:text-primary transition duration-300"
          >
            Price Simulator
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
