import Link from 'next/link';

export default () => (
  <div>
    <p>This is the client 1 page</p>
    <div>
      <Link href="/api/client2">
        <a>Client 2</a>
      </Link>
    </div>
  </div>
);
