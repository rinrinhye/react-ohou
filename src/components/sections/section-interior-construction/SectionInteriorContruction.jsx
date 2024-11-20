import image_Inhasa from 'assets/interior_review_inhasa.jpg';
import image_Damso from 'assets/interior_damso.jpg';
import image_Woogin from 'assets/interior_woojin.jpg';
import SectionTitle from 'components/ui/SectionTitle';
import SectionWrap from 'components/sections/SectionWrap';
import SectionMoreLink from 'components/ui/SectionMoreLink';
import ReviewItem from './ReviewItem';
import styled from 'styled-components';
import { MD } from 'styles/mixins/styled-responsive';

export default function SectionInteriorContruction() {
  const lists = [
    {
      title: '인하사',
      desc: '집을 마련하면서 나름 깨끗하다고 생각하구 매매 했어요 하는 과정에서 도배와 조명 정도 생각했는데 막상 깊이 들여다보니 생각보다 규모가 커지더라구요 예산 안에서 하려고 견적을 열군데는 내본것같아요 대부분 안된다는 쪽 이었으나 인하사는 우선순위를 먼저 정해주시고 타협점을 찾을 수 있도록 세심하게 고민해주셨어요 직원들이 젊으셔서 그런지 선입견이나 아집? 같이 안된다는 말을 잘 안하시구 원하는 내용을 충분히 이해하시고 제안해주시는 점이 가장 좋았어요! 25년된 아파트라 너무 걱정 많았는데 새집처럼 잘 되었어요 주변에서도 예쁘게 잘 되었다구 칭찬 많이 해주셨네요 보양하시고 보내주신 사진 보자마자 입이 딱벌어졌습니다 살면서 한번도 그런 퀄리티의 깔끔한 보양이 없었지요 주민분들도 모두 공기동안 불편함 없이 잘 지나갔다고 좋은 반응이셨어요 ! 저는 제 주변에 이사를 앞둔 지인, 친구들에게 모두 추천하구 있습니다. 대표님의 진정성있는 마인드라면 요즘같은 반드시 번창하시리라 생각됩니다. 총평 매우만족이에요!',
      imageSrc: image_Inhasa,
    },

    {
      title: '담소디자인',
      desc: '상담 받고 가격도 타 업체 대비 메리트있었고 여러가지 설명을 잘 해주셔서 선택했습니다 화이트+월넛 인테리어를 원했는데 과하지 않게 포인트 줄 부분을 잘 제안해주셔서 전체적으로 원하는대로 잘 진행되었어요 원하는 소재나 디자인을 말하면 잘 맞는 것을 추천해주시는 점이 좋았습니다~~',
      imageSrc: image_Damso,
    },
    {
      title: '우진인테리어',
      desc: '윤실장님과 진행하였어요☺️👍 처음 상담부터 좋은 인상과 결정력도 좋으셔서 믿음이 갔어요 일정하나하나 소통해 주시고 가격과 집 평수도 감안하여 주방 장부터 붙박이장도 이쁘고 세련대게 아주잘 해주셨어요 전기등 같은 경우는 전문 지식이 없어서 윤실장께 알아서 부탁드린다고 할만큼 쎈스도 좋으셨어요. 전선코드위치부터 사소한 세탁수전까지 말하지 않았음에도 모두 교체해주시고 신경써주시는게 너무너무 감동이였어요 저는 윤실장님 적극추천드립니다.시작부터 끝까지 책임감있게 일해주신 덕분에 전 너무 편했어요 🤣 주위에서도 인테리어 너무 고급지게 잘했다고 알려달라고 난리네요. 윤실장님 감사드리고 수고 많으셨어요 아직 집 정리 중이라 더이쁘게 해서 나중에 또 올릴때용👍☺️',
      imageSrc: image_Woogin,
    },
  ];

  return (
    <section className='section section--interior-construction'>
      <SectionWrap>
        <SectionTitle title={`유저들의 인테리어 시공 리뷰`} />
        <div className='section--interior-construction__content'>
          <ReviewList className='interior-construction-review__list'>
            {lists.map((item) => {
              return (
                <ReviewItem
                  item={item}
                  cssName={'interior-construction'}
                />
              );
            })}
          </ReviewList>

          <SectionMoreLink text={'인테리어 시공업체 찾기'} />
        </div>
      </SectionWrap>
    </section>
  );
}

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${MD`
      flex-direction: row;
      gap: 16px;
  `}
`;
