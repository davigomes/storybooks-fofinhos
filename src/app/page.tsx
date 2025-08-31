import StoryCard from "../components/StoryCard";

export default function Home() {
  const stories = [
    {
      title: "A Doce Partilha de Cecília e Sofia",
      imageUrl: "/images/A Doce Partilha de Cecília e Sofia.jpg",
    },
    {
      title: "A Grande Conquista de Sofia",
      imageUrl: "/images/A Grande Conquista de Sofia.jpg",
    },
    {
      title: "A Pescaria Mágica de Sofia",
      imageUrl: "/images/A Pescaria Mágica de Sofia.jpg",
    },
    {
      title: "A Primeira Aventura de Sofia",
      imageUrl: "/images/A Primeira Aventura de Sofia.jpg",
    },
    {
      title: "A Primeira Visita à Fazenda",
      imageUrl: "/images/A Primeira Visita à Fazenda.jpg",
    },
    {
      title: "A Sofia e o Sorvete de Chocolate",
      imageUrl: "/images/A Sofia e o Sorvete de Chocolate.jpg",
    },
    {
      title: "As Irmãs em Fátima",
      imageUrl: "/images/As Irmãs em Fátima.jpg",
    },
    {
      title: "As Orações de Sofia e Cecília",
      imageUrl: "/images/As Orações de Sofia e Cecília.jpg",
    },
    {
      title: "Cecília e o Segredo dos Passarinhos",
      imageUrl: "/images/Cecília e o Segredo dos Passarinhos.jpg",
    },
    {
      title: "O Almoço Mágico da Sofia",
      imageUrl: "/images/O Almoço Mágico da Sofia.jpg",
    },
    {
      title: "O Primeiro Dia de Cecília na Escola",
      imageUrl: "/images/O Primeiro Dia de Cecília na Escola.jpg",
    },
    {
      title: "O Sorvete de Chocolate da Sofia",
      imageUrl: "/images/O Sorvete de Chocolate da Sofia.jpg",
    },
    {
      title: "Sofia e Cecília na Fazenda",
      imageUrl: "/images/Sofia e Cecília na Fazenda.jpg",
    },
    {
      title: "Sofia e o Trenzinho Compartilhado",
      imageUrl: "/images/Sofia e o Trenzinho Compartilhado.jpg",
    },
    {
      title: "Sofia e os Livros Compartilhados",
      imageUrl: "/images/Sofia e os Livros Compartilhados.jpg",
    },
    {
      title: "Sofia e os Peixinhos",
      imageUrl: "/images/Sofia e os Peixinhos.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-2 py-6 sm:px-4 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2 tracking-tight">
        Histórias Para Ninar
      </h1>
      <p className="text-base sm:text-lg text-gray-500 text-center mb-6 max-w-md">
        Selecione uma história para ler antes de dormir.
      </p>
      <section className="w-full max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            imageUrl={story.imageUrl}
          />
        ))}
      </section>
    </main>
  );
}
