import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <div className="py-8 px-12 bg-slate-800">
      <Link href="/">
        <a className='text-white'>aaa</a>
      </Link>
    </div>
  );
};

export default Footer;
