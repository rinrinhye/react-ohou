import SectionTitle from 'components/ui/SectionTitle';
import SectionWrap from 'components/sections/SectionWrap';
import BestItem from './BestItem';
import styled from 'styled-components';
import useFetch from 'hooks/use-fetch';
import { useEffect, useState } from 'react';
import ProductCategoryControlSlide from './ProductCategoryControlSlide';

const categoryList = [
  { all: '전체' },
  { school: ' 새학기준비' },
  { furniture: '가구' },
  { fabrics: '패브릭' },
  { kitchenware: '주방용품' },
  { food: '식품' },
  { decor: '데코·식물' },
  { lighting: '조명' },
  { storage: '수납·정리' },
  { householdGoods: '생활용품' },
  { dailyNecessities: '생필품' },
  { kids: '유아·아동' },
  { pets: '반려동물' },
  { camping: '캠핑·레저' },
  { tools: '공구·DIY' },
  { interior: '인테리어시공' },
  { rental: '렌탈·구독' },
  { grocery: '장보기' },
  { wedding: '혼수·신혼' },
];

export default function SectionBestProduct() {
  const [data, loading, error] = useFetch('best-products');
  const [category, setCategory] = useState('all');

  const handleCategory = (e) => {
    const value = e.target.textContent;
    const obj = categoryList.find((v) => {
      return Object.values(v)[0] === value;
    });
    const key = Object.keys(obj)[0];
    setCategory(key);
  };

  return (
    <section>
      <SectionWrap>
        <SectionTitle title={'베스트'} />
        <div>
          <ProductCategoryControlSlide
            categoryList={categoryList}
            handleCategory={handleCategory}
            category={category}
          />
          <div>
            <Group>
              {data[category] &&
                data[category].map((item) => {
                  return (
                    <BestItem
                      cssName={'best-product'}
                      item={item}
                    />
                  );
                })}
            </Group>
          </div>
        </div>
      </SectionWrap>
    </section>
  );
}

const Group = styled.div`
  display: flex;
  gap: 12px;
`;
