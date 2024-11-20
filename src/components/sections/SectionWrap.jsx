import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LG, MD, XL } from 'styles/mixins/styled-responsive';

export default function SectionWrap({ children }) {
  return <Wrap>{children}</Wrap>;
}

const Wrap = styled.div`
  padding: 0 16px;
  padding-bottom: 20px;
  overflow: hidden;

  ${MD`    
    padding: 0 40px;
    margin-bottom: 40px;
    `}

  ${LG`   
     padding: 0 $60px;
    `}

  ${XL` max-width: 1256px;
    padding: 0 $60px;
    margin: 0 auto 40px;`}
`;
