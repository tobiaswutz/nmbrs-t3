import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { collection } = router.query;

  return (
    <div>
      <h1>lellek</h1>
      <h1>Blog Post: {collection}</h1>
    </div>
  );
}
