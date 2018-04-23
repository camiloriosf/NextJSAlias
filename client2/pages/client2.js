import Link from 'next/link';

export default () => (
  <div>
    <p>This is the client 2 page</p>
    <div>
      <Link href="/">
        <a>Client 1</a>
      </Link>
    </div>
  </div>
);
