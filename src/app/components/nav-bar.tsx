import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between">
      <Link
        href={'/'}
        className="w-fit rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        K-GO
      </Link>
      <div className="inline-block">
        <Link
          href={'/'}
          className="inline-block w-fit items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          Sign Up
        </Link>
        <Link
          href={'/'}
          className="inline-block w-fit items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
