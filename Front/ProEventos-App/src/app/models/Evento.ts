import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
id: number;
local: string;
dataEvento?: Date;
tema: string;
qtdPessoas: number;
imagemURL: string;
telefone: String;
email: string;
lotes: Lote[];
redesSociais: RedeSocial[];
palestrantesEventos: Palestrante[];
}

