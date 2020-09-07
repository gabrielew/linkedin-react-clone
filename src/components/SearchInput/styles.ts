import styled from "styled-components";

export const SearchInput = styled.input`
  margin-left: 12px;
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`;
