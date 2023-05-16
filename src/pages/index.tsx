import Link from 'next/link';
import { Fragment } from 'react';
import Header from '../../components/common/Header';
import styles from '../../src/styles/header.module.scss';
// TODO : icon import 확인하기
// import { RxCopy, VscFeedback } from 'react-icons/all';
import MapSection from '../../components/home/MapSection';

export default function Home() {
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
