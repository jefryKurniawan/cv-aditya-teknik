import Link from "next/link";

export default function Footer () {
  return (
    <footer className="bg-blue-500 dark:bg-blue-950 text-white py-8 mt-auto w-full absolute button-0">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CV Aditya Teknik</p>
        <nav className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service </Link>
        </nav>
      </div>
    </footer>
  )
}
