import SectionTitle from 'components/ui/SectionTitle';
import SectionWrap from 'components/sections/SectionWrap';
import PopularSearchKeyword from 'components/ui/PopularSearchKeyword';
import styled from 'styled-components';

export default function () {
  const lists = [
    { keyword: '미닉스 음식물 처리기', status: 'up', rank: 1 },
    { keyword: '틈새 수납장', status: 'up', rank: 2 },
    { keyword: '와이드 서랍장', status: 'up', rank: 3 },
    { keyword: '도브 바디워시', status: 'down', rank: 4 },
    { keyword: '모달 이불', status: 'up', rank: 5 },
    { keyword: '덴비', status: 'new', rank: 6 },
    { keyword: '작은방꾸미기', status: 'up', rank: 7 },
    { keyword: '가방 수납', status: 'up', rank: 8 },
    { keyword: '철제 선반', status: 'down', rank: 9 },
    { keyword: '오늘의 가든', status: 'new', rank: 10 },
  ];

  return (
    <section>
      <SectionWrap>
        <SectionTitle title={`인기검색어`} />
        <div>
          <List>
            {lists.map((item) => {
              return (
                <Item>
                  <PopularSearchKeyword item={item} />
                </Item>
              );
            })}
          </List>
        </div>
      </SectionWrap>
    </section>
  );
}

const List = styled.ol`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Item = styled.li`
  min-width: 0;
`;
