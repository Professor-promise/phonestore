import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background: none;
  border: 0.125rem solid
    ${(props) => (props.color ? 'var(--mainBlue)' : 'var(--mainColor)')};
  padding: 0.5rem;
  margin-right: 0.2rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--mainColor);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: cursive;

  a {
    color: ${(props) => (props.color ? 'var(--mainBlue)' : 'var(--mainColor)')};
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: var(--mainWhite);
    }
  }

  &:hover {
    background: ${(props) =>
      props.color ? 'var(--mainBlue)' : 'var(--mainColor)'};
    color: var(--mainWhite);
  }
`;
