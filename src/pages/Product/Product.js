import React from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native';
import ProductCard from '../../Components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';

const allProductURL = Config.API_URL;

const Product = ({navigation}) => {
  const {data, loading, error} = useFetch(allProductURL);
  //parametreli bir fonksiyon yazdık bunun içindeki id yi diğer sayfaya göndermek için
  const goToDetail = id => {
    navigation.navigate('Detail', {id}); // navigate yapısında id yi karşı sayfaya gönderiyoruz.
  };
  const ProductCardItem = ({item}) => (
    <ProductCard
      productData={item}
      //parametreli bir fonksiyon olarak item içerisindeki id yi gönderiyoruz.
      onSelect={() => goToDetail(item.id)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={ProductCardItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
export default Product;
