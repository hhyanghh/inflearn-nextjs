import Map from './Map';
import Markers from './Markers';
import useMap from '../../hooks/useMap';
import type { NaverMap } from '../../types/map';
import useCurrentStore from '../../hooks/useCurrentStore';
const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map); // map을 전역 상태롸 관리
    naver.maps.Event.addEventListner(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};
export default MapSection;
