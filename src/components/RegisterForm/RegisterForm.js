import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Input,
  Box,
  FormLabel,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" mt={6} pl={4} onSubmit={handleSubmit}>
      <FormLabel>
        Username
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineUser color="gray.300" />}
            />
            <Input type="text" name="name" required />
          </InputGroup>
        </Stack>
      </FormLabel>
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
        Register
      </Button>
    </Box>
  );
};
