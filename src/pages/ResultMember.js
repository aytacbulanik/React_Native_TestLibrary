import {SafeAreaView, Text} from 'react-native';
import React from 'react';

const ResultMember = ({route}) => {
  const sendUser = route.params.user;
  return (
    <SafeAreaView>
      <Text>User Name: {sendUser.userName}</Text>
      <Text>User Surname: {sendUser.userSurname}</Text>
      <Text>User Age: {sendUser.userAge}</Text>
      <Text>User Mail: {sendUser.userMail}</Text>
    </SafeAreaView>
  );
};

export default ResultMember;
