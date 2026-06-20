import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilme } from "@/services/filme.services";

interface Props {
  params: Promise<{id: string}>
}

export default async function EditarFilmePage({params}: Props) {

  const {id} = await params

  //TEM QUE IMPLEMTAR NO SERVICE
  //PARA BUSCAR UM UNICO FILME NO BACK
  //UTILIZAR O MEGABRAIN NA FORCA MAXIMA
  //ELE PRECISA SABER MAIS
  const filme  = await getFilme(id)

  return (
    <>
    <FilmeForm filme={filme} />
    </> 

  );
}