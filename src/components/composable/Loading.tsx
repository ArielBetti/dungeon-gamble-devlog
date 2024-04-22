import dinoGif from "../../assets/dino.gif";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 min-h-screen flex flex-col w-full items-center justify-center bg-background/70 backdrop-blur-sm gap-2">
      <img src={dinoGif} alt="Animação de um dinossauro carismático estilo 16bits" className="w-20" />
      <h2 className="text-lg font-semibold animate-pulse">Carregando</h2>
    </div>
  )
}

export default Loading