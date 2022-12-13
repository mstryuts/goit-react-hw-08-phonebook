import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Input,
  Box,
  FormLabel,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" mt={6} pl={4} onSubmit={handleSubmit}>
      <FormLabel>
        Email
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineMail color="gray.300" />}
            />
            <Input type="text" name="email" required />
          </InputGroup>
        </Stack>
      </FormLabel>
      <FormLabel>
        Password
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<RiLockPasswordFill color="gray.300" />}
            />
            <Input type="password" name="password" required />
          </InputGroup>
        </Stack>
      </FormLabel>
      <Button
        backgroundColor={'green.100'}
        _hover={{ bg: 'green.200' }}
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.50"
        type="submit"
      >
        Log In
      </Button>
    </Box>
  );
};
