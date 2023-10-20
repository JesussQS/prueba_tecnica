import { Area } from "./Area";
import { Pabellon } from "./Pabellon";

export class Ambiente{
  id?: string;
  descripcion?: string;
  foto?: string;
  contacto?: string;
  horario?: string;
  piso?: string;
  referencia?: string;
  area?: Area;
  pabellon?: Pabellon;
}
