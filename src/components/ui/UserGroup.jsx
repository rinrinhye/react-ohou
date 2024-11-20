import styled, { css } from 'styled-components';
import Avatar from 'components/ui/Avatar';

export default function UserGroup({ src, name }) {
  return (
    <StyledUserGroup className='user-group'>
      <a href=''>
        <Avatar src={src} />
        <Name className='user-name'>{name}</Name>
      </a>
    </StyledUserGroup>
  );
}

const StyledUserGroup = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.userGroup};

  & > a {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;
