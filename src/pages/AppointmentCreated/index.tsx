import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Container } from './styles';

const AppointmentCreated: React.FC = () => {
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
    </Container>
  );
};

export default AppointmentCreated;
