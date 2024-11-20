import UserGroup from './UserGroup';

import styled, { css } from 'styled-components';
import ScrapButton from 'components/ui/ScrapButton';
import { MD } from 'styles/mixins/styled-responsive';

export default function PhotoCard({ cssName, item, userGroup, scrapButton }) {
  const { imageSrc, userSrc, userName } = item;

  return (
    <StyledPhotoCard className={cssName}>
      <img
        className='photo-card__image'
        src={imageSrc}
        alt=''
      />
      {userGroup && (
        <UserGroup
          src={userSrc}
          name={userName}
        />
      )}
      {scrapButton && <ScrapButton />}
    </StyledPhotoCard>
  );
}

const StyledPhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  &.interior-pic {
    .user-group {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 8px;
    }

    .user-name {
      font-size: 12px;
    }

    .avatar {
      width: 24px;
      height: 24px;
    }

    .scrap-button {
      right: 8px;
      bottom: 8px;
    }
  }

  &.housewarming {
    .scrap-button {
      right: 10px;
      bottom: 10px;
    }
  }

  &.today-deal {
    .scrap-button {
      right: 12px;
      bottom: 12px;
    }
  }

  &.interior-construction {
    flex: 0 0 120px;
    overflow: hidden;
    border-radius: 4px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    ${MD`
      flex: 0 0 auto;
      `}
  }

  &.special-promotion {
    width: 120px;
    height: 80px;

    ${MD`
        width: auto;
        height: auto;
      `}
  }

  &.best-product {
    .scrap-button {
      right: 12px;
      bottom: 12px;
    }
  }
`;
