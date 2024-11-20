import styled from 'styled-components';
import Product from 'components/ui/products/Product';

export default function BestItem({ item, cssName }) {
  return (
    <StyledBestItem>
      <Product
        item={item}
        cssName={cssName}
      />
    </StyledBestItem>
  );
}

const StyledBestItem = styled.div`
  flex: 1 1 calc(33.3% - 4px);
  min-width: 0;
`;
