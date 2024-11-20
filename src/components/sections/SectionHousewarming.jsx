import img01 from 'assets/housewarming_01.jpeg';
import img02 from 'assets/housewarming_02.jpeg';
import img03 from 'assets/housewarming_03.jpeg';
import img04 from 'assets/housewarming_04.jpeg';
import moImg01 from 'assets/mo_housewarming_01.jpeg';
import moImg02 from 'assets/mo_housewarming_02.jpeg';
import moImg03 from 'assets/mo_housewarming_03.jpeg';
import moImg04 from 'assets/mo_housewarming_04.jpeg';
import SectionTitle from 'components/ui/SectionTitle';
import LinkOverlay from 'components/ui/LinkOverlay';
import PhotoCard from 'components/ui/PhotoCard';
import SectionWrap from 'components/sections/SectionWrap';
import styled from 'styled-components';
import { textStyle } from 'styles/mixins/text-style';
import { MD } from 'styles/mixins/styled-responsive';
import { Highlight } from 'styles/globals';
import { lineClamp } from 'styles/mixins/line-clamp';

export default function SectionHousewarming() {
  const lists = [
    {
      titleHighlight: '하나하나 차곡차곡',
      title: '여전히 느리지만 담백한 심플라이프',
      imageSrc: img01,
      moSrc: moImg01,
    },
    {
      titleHighlight: '누워서 식멍할 수 있는 4평',
      title: '방을 꽉 채운 식물과 조명💡',
      imageSrc: img02,
      moSrc: moImg02,
    },
    {
      titleHighlight: '확장 후 넓고 환해진 개인 공간',
      title: '라이프스타일도 달라졌어요',
      imageSrc: img03,
      moSrc: moImg03,
    },
    {
      titleHighlight: '제주의 한 숲속 외딴 구옥을',
      title: '셀프로 고친 공예가의 주택',
      imageSrc: img04,
      moSrc: moImg04,
    },
  ];

  return (
    <section>
      <SectionWrap>
        <SectionTitle title={`따끈따끈🍚 새 집들이가 올라왔어요!`} />
        <div>
          <div>
            <List>
              {lists.map((item) => {
                return (
                  <Item>
                    <LinkOverlay
                      href={''}
                      ariaLabel={`${item.titleHighlight}${item.title}`}
                    />
                    <PhotoCard
                      item={item}
                      scrapButton={true}
                      cssName={'housewarming'}
                    />
                    <Title>
                      <Highlight>{item.titleHighlight}</Highlight>&nbsp;
                      {item.title}
                    </Title>
                  </Item>
                );
              })}
            </List>
          </div>
        </div>
      </SectionWrap>
    </section>
  );
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  ${MD`
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
  `}
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 10px;
`;

const Title = styled.div`
  ${textStyle(16)}
  ${lineClamp(2)}
    word-break: keep-all;

  ${Highlight} {
    font-weight: 700;
  }
`;
