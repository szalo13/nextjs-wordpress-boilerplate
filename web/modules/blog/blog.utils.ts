const calcTotalPages = (totalItems: number, take: number) => {
  return Math.ceil(totalItems / take);
};

export const getStaticPagesPaths = (
  totalItems: number,
  take: number,
  paramName = "page"
) => {
  return Array.from(new Array(calcTotalPages(totalItems, take))).map(
    (_, idx) => ({
      params: { [paramName]: String(idx + 1) },
    })
  );
};
