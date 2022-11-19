import {View, Text} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';

// promise yapıları navigasyon içerisinde route için saklanmaktadoır.
const Detail = ({route}) => {
  const {id} = route.params; // burada her bir yi parçalayarak alıyoruz.
  const {loading, error, data} = useFetch(Config.API_URL + '/' + id);
  // custom hook yapısını kullanarak yeni bir sorgu yapıyoruz ve değerleri çekiyoruz.
  console.log(data);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text>{data.price}</Text>
    </View>
  );
};

export default Detail;
