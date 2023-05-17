import Map from './Map';
import Markers from './Markers';
import useMap from '../../hooks/useMap';
import type { NaverMap } from '../../types/map';

const MapSection = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map); // map을 전역 상태롸 관리
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};
export default MapSection;
