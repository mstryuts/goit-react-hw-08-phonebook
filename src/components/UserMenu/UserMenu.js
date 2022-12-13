import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Flex, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex w={220} alignItems="center" justifyContent="space-between">
      <p>Welcome, {user.name}</p>
      <Button
        size="xs"
        variant="outline"
        _hover={{ color: 'green.400' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};
