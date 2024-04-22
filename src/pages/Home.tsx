import { CardPost } from "../components/composable/CardPost";
import { queryGetPosts } from "../queries/queryGetPosts";
import owlbear from '../assets/owlbear.png';

function Home() {
  const { data } = queryGetPosts();

  return (
    <main className="container px-4 max-w-2xl">
      <div className="bg-hero-pattern bg-center bg-contain border rounded-sm overflow-hidden">
        <div className="flex items-center justify-start gap-2 bg-background/90 p-5 overflow-hidden">
          <img className="w-16" src={owlbear} alt="Figura de um urso coruja filhote com um pergaminho e uma capa" />
          <div className="flex flex-col items-start justify-start">
            <h1 className="font-bold text-lg">Dungeon Gamble</h1>
            <p className="text-sm">Notas de desenvolvimento</p>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-start justify-start pt-10 gap-5">
        {data?.posts.map((item) =>
          <CardPost
            key={item.title + item.createdAt}
            createdAt={item.createdAt}
            number={item.number}
            title={item.title}
            updatedAt={item.updatedAt}
          />)}
      </section>
    </main>
  )
}

export default Home
