import LinkOverlay from 'components/ui/LinkOverlay';
import BadgeFreeShipping from './badges/BadgeFreeShipping';
import BadgePaymentDiscount from './badges/BadgePaymentDiscount';
import BadgeSpecialDeal from './badges/BadgeSpecialDeal';
import PriceGroup from './PriceGroup';
import ReviewGroup from './ReviewGroup';
import SamedayDeliveryGroup from './SamedayDeliveryGroup';
import TitleGroup from './TitleGroup';
import PhotoCard from 'components/ui/PhotoCard';
import styled, { css } from 'styled-components';
import { MD } from 'styles/mixins/styled-responsive';
import { lineClamp } from 'styles/mixins/line-clamp';
import { textStyle } from 'styles/mixins/text-style';

export default function Product({ item, cssName }) {
  const {
    title,
    brandName,
    price,
    otherProducts,
    rating,
    discountRate,
    reviewCount,
    imageSrc,
  } = item;

  const { freeShipping, specialDeal, paymentDiscount, sameDelivery } =
    item.badges;

  return (
    <StyledProduct className={cssName}>
      <LinkOverlay ariaLabel={title} />
      <PhotoCard
        cssName={cssName}
        item={{ imageSrc }}
        scrapButton={true}
      />
      <StyledInfo>
        <TitleGroup
          brandName={brandName}
          title={title}
        />
        <ReviewGroup
          rating={rating}
          reviewCount={reviewCount}
        />
        <PriceGroup
          discountRate={discountRate}
          price={price}
          otherProducts={otherProducts}
        />
        {sameDelivery && <SamedayDeliveryGroup sameDelivery={sameDelivery} />}

        {freeShipping || specialDeal ? (
          <div className='product__badge-group'>
            {freeShipping && <BadgeFreeShipping />}
            {specialDeal && <BadgeSpecialDeal />}
          </div>
        ) : null}

        {paymentDiscount && (
          <BadgePaymentDiscount paymentDiscount={paymentDiscount} />
        )}
      </StyledInfo>
    </StyledProduct>
  );
}

const StyledInfo = styled.div``;

const StyledProduct = styled.article`
  position: relative;
  display: flex;

  &.today-deal {
    align-items: center;
    gap: 12px;

    > div {
      flex: 0 0 calc(50% - 6px);
    }

    .product__review-group {
      margin-top: 6px;
    }

    .product__price-group {
      margin-top: 2px;
    }

    .product__price-number-group {
      margin-top: 3px;
    }

    .product__badge-group {
      margin-top: 6px;
    }

    ${MD`
        flex-direction:column;
      `}
  }

  &.best-product {
    flex-direction: column;
    gap: 10px;

    .product__brand {
      ${textStyle(12)}
    }

    .product__title {
      ${lineClamp(2)}
    }

    .product__price-group {
      margin-top: 4px;
    }

    .product__review-group {
      margin-top: 4px;
    }

    .product__badge-group {
      margin-top: 8px;
    }
  }
`;
