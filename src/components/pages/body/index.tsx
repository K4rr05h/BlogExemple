import { useState } from "react";
import BlogPost from "../../ui/BlogPost/blogPost";

export default function index() {
  const [post, setPost] = useState([
    {
      title: "O que é linguagem de programação? Conheça as principais",
      description: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
      date: "17 de ago, 2024",
      like: false,
    },
    {
      title: "GitHub agora permite fazer login sem precisar de senha",
      description: "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
      date: "12 de jul, 2024",
      like: false,
    },
    {
      title: "Por que os hiperlinks são azuis em sua maioria?",
      description: "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
      date: "21 de jun, 2024",
      like: false,
    },
  ])

  const toggleLike = (index: number) => {
    setPost(prev =>
      prev.map((post, i) =>
        i === index ? { ...post, like: !post.like } : post
      )
    );
  } 

  return (
    <div className="bg-stone-950 h-screen px-96 justify-items-center pt-4">
      {post.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title}
          description={post.description}
          like={post.like}
          date={post.date}
          onClick={() => toggleLike(index)}
        />
      ))}
    </div>
  )
}
