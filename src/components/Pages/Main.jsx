import styled from 'styled-components';
import SectionMain from 'components/sections/section-main/SectionMain';
import SectionBestProduct from 'components/sections/section-best-product/SectionBestProduct';
import SectionHousewarming from 'components/sections/SectionHousewarming';
import SectionInteriorPic from 'components/sections/section-interior-pic/SectionInteriorPic';
import SectionInteriorContruction from 'components/sections/section-interior-construction/SectionInteriorContruction';
import SectionPopularSearchTerms from 'components/sections/SectionPopularSearchTerms';
import SectionProductCategory from 'components/sections/section-product-category/SectionProductCategory';
import SectionSpecialPromotion from 'components/sections/section-special-promotion/SectionSpecialPromotion';
import SectionTodayDeal from 'components/sections/section-today-deal/SectionTodayDeal';
import { MD } from 'styles/mixins/styled-responsive';
import 'styles/base/font.css';
import { Mobile } from 'styles/react-responsive';

export default function Main() {
  return (
    <StyledMain id='main'>
      <SectionMain />
      <Hr />
      <SectionInteriorPic />
      <Hr />
      <SectionHousewarming />
      <Hr />
      <SectionProductCategory />
      <Hr />
      <SectionTodayDeal />
      <Hr />
      <SectionInteriorContruction />
      <Hr />
      <SectionSpecialPromotion />
      <Hr />
      <SectionBestProduct />
      <Hr />
      <Mobile>
        <SectionPopularSearchTerms />
      </Mobile>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
  z-index: 0;
  padding-top: 20px;
  background: ${({ theme }) => theme.colors.white};

  ${MD`
    padding-top: 30px;
  `}
`;

const Hr = styled.hr`
  width: 100%;
  height: 10px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background1};
  border: 0;

  ${MD`display:none`}
`;
