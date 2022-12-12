import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex w={120} justifyContent="space-between">
        <Link
          as={NavLink}
          to="/"
          _hover={{ color: 'green.400' }}
          _activeLink={{ color: 'green.400' }}
        >
          Home
        </Link>
        {isLoggedIn && (
          <Link
            as={NavLink}
            to="/contacts"
            _hover={{ color: 'green.400' }}
            _activeLink={{ color: 'green.400' }}
          >
            Contacts
          </Link>
        )}
      </Flex>
    </nav>
  );
};
