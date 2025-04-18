import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
    date?: string;
    title?: string;
    description?: string;
    like?: boolean;
    onClick?: () => void;
}

export default function BlogPost( { date, title, description, like, onClick } : Props ) {

  return (
    <button
        className="text-stone-100 w-full mt-4 border-1 rounded-md border-stone-800 p-5 cursor-pointer active:border-red-200 focus:border-2 focus:border-red-400 "
        onClick={onClick}
    >
        <div className="flex justify-between">
            <p className="text-xs text-red-300">
                { date ? date : "17 de ago, 2024" }
            </p>
            {like === true ? (
                <FcLike />
                ) : (
                <FcLikePlaceholder />
            )}
        </div>
        <h1 className="text-lg my-2 text-start">
            { title ? title : "O que é linguagem de programação? Conheça as principais"}
        </h1>
        <p className="text-md text-stone-300 text-start">
            { description ?
                description :
                "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando." }
        </p>
    </button>
  )
}
