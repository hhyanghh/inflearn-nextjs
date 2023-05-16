import Link from 'next/link';
import { Fragment } from 'react';
import Header from '../../components/common/Header';
import styles from '../../src/styles/header.module.scss';
import { RxCopy, VscFeedback } from 'react-icons/all';

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
            <RxCopy size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main></main>
    </Fragment>
  );
}
