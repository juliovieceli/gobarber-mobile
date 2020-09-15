import React from 'react';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Button onPress={signOut}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
