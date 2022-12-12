import PropTypes from 'prop-types';
import { Heading, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contact/selectors';
import { Loader } from '../Loader';

const Section = ({ header, title, children }) => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      {' '}
      {header && (
        <Flex justifyContent="center">
          <Heading as="h1">{header}</Heading>
        </Flex>
      )}
      {title &&
        (isLoading && !error ? (
          <Flex justifyContent="center">
            <Loader />
          </Flex>
        ) : (
          <Flex justifyContent="center">
            <Heading as="h2" size="xl">
              {title}
            </Heading>
          </Flex>
        ))}
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
