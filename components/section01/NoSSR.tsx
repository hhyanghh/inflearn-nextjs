import React from 'react';

export default function NoSSR() {
  return <div>width: {window.innerWidth}</div>;
}

// window라는 객체는 서버에서 알 수 없다.
// import 하는 곳에서 dynamic import 해야함
