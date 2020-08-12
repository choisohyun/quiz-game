const customMediaQuery = (maxWidth: number): string => {
  return maxWidth > 700 ? `@media (min-width: ${maxWidth}px)` : `@media (max-width: ${maxWidth}px)`;
};

const media = {
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export { media };
