import SectionWrap from 'components/sections/SectionWrap';
import styled from 'styled-components';
import { HideMobile } from 'styles/react-responsive';
import { LG, MD } from 'styles/mixins/styled-responsive';

import MainVisual from './MainVisual';
import QuickMenu from './QuickMenu';
import BannerSlide from './BannerSlide';

export default function SectionMain() {
  return (
    <section>
      <SectionWrap>
        <Top>
          <HideMobile>
            <TopLeft>
              <MainVisual />
            </TopLeft>
          </HideMobile>
          <TopRight>
            <BannerSlide />
          </TopRight>
        </Top>
        <Bottom>
          <QuickMenu />
        </Bottom>
      </SectionWrap>
    </section>
  );
}

const Top = styled.div`
  margin-bottom: 30px;

  ${MD`  
    display: flex;
    margin-bottom: 30px;
    gap: 16px;
  `}

  ${LG`
    gap:20px;
  `}
`;

const TopLeft = styled.div`
  flex: 1 1 calc(75%);
  height: 100%;
  min-width: 0;

  ${MD`  
  
    flex: 1 1 calc(75%);
    height: 100%;
    min-width: 0;

`}
`;
const TopRight = styled.div`
  flex: 1 1 calc(25%);
  height: 100%;
  min-width: 0;

  ${MD`  
  
    flex: 1 1 calc(25%);
    height: 100%;
    min-width: 0;
  `}
`;

const Bottom = styled.div``;
