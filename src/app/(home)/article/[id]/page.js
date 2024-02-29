import Article from "@/components/ui/articles/Article";

export default function Page({ params }) {
  return <Article id={params.id} />;
}
