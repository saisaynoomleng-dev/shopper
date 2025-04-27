const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  return <div>SearchPage</div>;
};

export default SearchPage;
