import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = [params] || [];
  //console.log(params);
  console.log(title);
  console.log(id);
  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
