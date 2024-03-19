type DetailProductProps = { params: { slug: string[] } };
export default function DetailProductPage(props: DetailProductProps) {
  const { params } = props;
  console.log(params);
  
  return (
    <div>
      <h1>Detail Page</h1>
      <div>{params.slug[0]}</div>
    </div>
  );
}
