import { useSelector } from 'react-redux';

const handleCountries = (target) => {
  const globalData = [];
  const allCountries = useSelector((state) => state.country);
  allCountries.map((data) => {
    if (data.name === `${target}`) {
      globalData.push(data);
    }
    return globalData;
  });
  return globalData;
};

export default handleCountries;
