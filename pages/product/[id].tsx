import { useRouter } from "next/router";

function ProductPage() {
  const router = useRouter();
  return <div>{router.query.id}</div>;
}

export default ProductPage;
