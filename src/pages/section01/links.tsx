import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// export default function Links() {
//   const router = useRouter();
//   useEffect(() => {
//     router.prefetch('/section01/getStaticProps');
//   }, [router]);
//   return (
//     <main>
//       <h1>Links</h1>
//       <button
//         onClick={() => {
//           router.push('/section01/getStaticProps');
//         }}
//       >
//         /getStaticProps
//       </button>
//     </main>
//   );
// }

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      <Link href="/section01/getStaticProps">/getStartProps</Link>
    </main>
  );
}
