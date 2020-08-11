import styled from "styled-components";

interface IText {
  color: string;
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  isClick?: boolean;
}

const Text = styled.span<IText>`
  display: inline-block;
  color: ${({ theme, color }) => theme.light[color] || theme.light.black};
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize] || theme.fontSizes.md};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeights[fontWeight] || theme.fontWeights.regular};
  line-height: ${({ lineHeight }) => lineHeight};
  cursor: ${({ isClick }) => (isClick ? "pointer" : "default")};
`;

export default Text;
