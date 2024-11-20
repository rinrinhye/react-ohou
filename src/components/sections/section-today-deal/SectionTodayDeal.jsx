import SectionTitle from 'components/ui/SectionTitle';
import SectionWrap from 'components/sections/SectionWrap';
import SectionMoreLink from 'components/ui/SectionMoreLink';
import { HideMobile, Mobile } from 'styles/react-responsive';
import styled from 'styled-components';
import Product from 'components/ui/products/Product';
import useFetch from 'hooks/use-fetch';
import TodayDealSlide from './TodayDealSlide';

export default function SectionTodayDeal() {
  const [data, loading, error] = useFetch('today-deal-products');

  return (
    <section>
      <SectionWrap>
        <SectionTitle title={'오늘의딜'} />
        <SectionContent>
          <Mobile>
            {data.map((item, index) => {
              if (index < 4) {
                return (
                  <ProductItem>
                    <Product
                      item={item}
                      cssName={'today-deal'}
                    />
                  </ProductItem>
                );
              }
              return null;
            })}
          </Mobile>
          <HideMobile>
            <TodayDealSlide
              data={data}
              cssName={'today-deal'}
            />
          </HideMobile>
        </SectionContent>
        <SectionMoreLink text={'오늘의딜 더보기'} />
      </SectionWrap>
    </section>
  );
}

const SectionContent = styled.div``;

const ProductItem = styled.div`
  padding: 20px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;
