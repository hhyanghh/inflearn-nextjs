import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import Header from '../../components/common/Header';
import styles from '../../src/styles/header.module.scss';
// TODO : icon import 확인하기
// import { RxCopy, VscFeedback } from 'react-icons/all';
import MapSection from '../../components/home/MapSection';
import useStores from '../../hooks/useStores';
import { Store } from '../../types/store';

export default function Home({ stores }) {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert('복사 >>>');
            }}
            className={styles.box}
            key="button"
          >
            {/* <RxCopy size={20} /> */}
            아이콘자리1
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            {/* <VscFeedback size={20} /> */}
            아이콘자리2
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기
   */
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60, // 아예 주지 않아도 상관없다. (업데이트 자주 받아야할 데이터가 아니기 때문에)
  };
}
