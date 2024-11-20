import { css } from 'styled-components';
import { textStyles } from '../constants/text-styles';

export function textStyle(size = 16) {
  const styles = textStyles[size] || textStyles[16];

  return css`
    font-size: ${styles.fontSize};
    line-height: ${styles.lineHeight};
    letter-spacing: ${styles.letterSpacing};
  `;
}
