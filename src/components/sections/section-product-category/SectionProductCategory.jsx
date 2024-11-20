import styled from 'styled-components';
import SectionTitle from 'components/ui/SectionTitle';
import ProductCategoryShortcutSlide from './ProductCategoryShortcutSlide';
import SectionWrap from 'components/sections/SectionWrap';

export default function SectionProductCategory() {
  return (
    <section className='section section--product-category'>
      <StyledSectionWrap>
        <SectionTitle title={'카테고리 별 상품 찾기'} />
        <SectionContent>
          <ProductCategoryShortcutSlide />
        </SectionContent>
      </StyledSectionWrap>
    </section>
  );
}

const StyledSectionWrap = styled(SectionWrap)`
  padding: 0 ${({ theme }) => theme.layouts.smMargin};
  padding-bottom: 20px;
`;

const SectionContent = styled.div``;
