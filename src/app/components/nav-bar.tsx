import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-light-purple h-16">
      <Link
        href={'/'}
        className="rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        K-GO
      </Link>
      <div className="inline-block content-evenly">
        <button
          type="button"
          className="cursor-pointer w-[115px] h-[45px] text-primary-purple text-xl text-center bg-light-yellow hover:bg-primary-yellow active:bg-primary-purple active:text-light-yellow shadow-md mr-3"
        >
          <Link href={'/'}>Sign Up</Link>
        </button>
        <button
          type="button"
          className="cursor-pointer w-[115px] h-[45px] text-primary-purple text-xl text-center  bg-light-yellow hover:bg-primary-yellow active:bg-primary-purple active:text-light-yellow shadow-md mr-3"
        >
          <Link href={'/'}>Login</Link>
        </button>
      </div>
    </nav>
  );
}
