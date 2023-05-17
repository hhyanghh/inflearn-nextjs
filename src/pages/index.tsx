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

// import() 함수 : 동적으로 모듈을 가져올 때 사용한다.
// 이 함수는 Promise를 반환하며 , 모듈을 비동기적으로 가져오는데 사용된다.

// 모듈이 기본적으로 export default로 내보내진 경우
// import 함수를 사용하여 해당 모듈을 가져올 때
// .default를 통해 기본 내보내기 (default export) 값을 참조한다.

// 따라서 import('../public/stores.json').default 코드는 Next.js에서
// stores.json 파일을 가져올 때 해당 모듈의 기본 내보내기 값을 가져오는 것을 의미합니다.

// 코드 스플리트
