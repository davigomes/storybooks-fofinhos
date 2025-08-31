import StoryCard from "../components/StoryCard";

export default function Home() {
  const stories = [
    {
      title: "A Doce Partilha de Cecília e Sofia",
      imageUrl: "/images/A Doce Partilha de Cecília e Sofia.jpg",
      href: "https://gemini.google.com/share/4c9d35aa136c",
    },
    {
      title: "A Grande Conquista de Sofia",
      imageUrl: "/images/A Grande Conquista de Sofia.jpg",
      href: "https://gemini.google.com/share/315be2f0cb77",
    },
    {
      title: "A Pescaria Mágica de Sofia",
      imageUrl: "/images/A Pescaria Mágica de Sofia.jpg",
      href: "https://gemini.google.com/share/92377ea71c72",
    },
    {
      title: "A Primeira Aventura de Sofia",
      imageUrl: "/images/A Primeira Aventura de Sofia.jpg",
      href: "https://gemini.google.com/share/6d58a2b78044",
    },
    {
      title: "A Primeira Visita à Fazenda",
      imageUrl: "/images/A Primeira Visita à Fazenda.jpg",
      href: "https://gemini.google.com/share/54853cb949c4",
    },
    {
      title: "A Sofia e o Sorvete de Chocolate",
      imageUrl: "/images/A Sofia e o Sorvete de Chocolate.jpg",
      href: "https://gemini.google.com/share/eec739d0c641",
    },
    {
      title: "As Irmãs em Fátima",
      imageUrl: "/images/As Irmãs em Fátima.jpg",
      href: "https://gemini.google.com/share/ee3c9b36e470",
    },
    {
      title: "As Orações de Sofia e Cecília",
      imageUrl: "/images/As Orações de Sofia e Cecília.jpg",
      href: "https://gemini.google.com/share/16d6e486550d",
    },
    {
      title: "Cecília e o Segredo dos Passarinhos",
      imageUrl: "/images/Cecília e o Segredo dos Passarinhos.jpg",
      href: "https://gemini.google.com/share/111281d4685d",
    },
    {
      title: "O Almoço Mágico da Sofia",
      imageUrl: "/images/O Almoço Mágico da Sofia.jpg",
      href: "https://gemini.google.com/share/2dc8d6f7b8ba",
    },
    {
      title: "O Primeiro Dia de Cecília na Escola",
      imageUrl: "/images/O Primeiro Dia de Cecília na Escola.jpg",
      href: "https://gemini.google.com/share/88b566387cff",
    },
    {
      title: "O Sorvete de Chocolate da Sofia",
      imageUrl: "/images/O Sorvete de Chocolate da Sofia.jpg",
      href: "https://gemini.google.com/share/d46552ad738f",
    },
    {
      title: "Sofia e Cecília na Fazenda",
      imageUrl: "/images/Sofia e Cecília na Fazenda.jpg",
      href: "https://gemini.google.com/share/9020b6ee6d30",
    },
    {
      title: "Sofia e o Trenzinho Compartilhado",
      imageUrl: "/images/Sofia e o Trenzinho Compartilhado.jpg",
      href: "https://gemini.google.com/share/a7a7b7e83244",
    },
    {
      title: "Sofia e os Livros Compartilhados",
      imageUrl: "/images/Sofia e os Livros Compartilhados.jpg",
      href: "https://gemini.google.com/share/d6ec5d211543",
    },
    {
      title: "Sofia e os Peixinhos",
      imageUrl: "/images/Sofia e os Peixinhos.jpg",
      href: "https://gemini.google.com/share/60bbb6f2860e",
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
            href={story.href}
          />
        ))}
      </section>
    </main>
  );
}
