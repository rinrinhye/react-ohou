import SectionTitle from 'components/ui/SectionTitle';
import InteriorPicSlide from './InteriorPicSlide';
import SectionWrap from 'components/sections/SectionWrap';
import useFetch from 'hooks/use-fetch';
import styled from 'styled-components';

export default function SectionInteriorPic() {
  const [data, loading, error] = useFetch('interior-pic-posts');

  return (
    <StyledSection>
      <SectionWrap>
        <SectionTitle
          title={`이런 사진 찾고 있나요?`}
          subTitle={`좋아하실 만한 인테리어 콘텐츠를 추천해드려요`}
        />
        <div>
          <InteriorPicSlide data={data} />
        </div>
      </SectionWrap>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  overflow: hidden;
`;
