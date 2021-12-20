export interface ICard {
  background: string;
  operator: string;
  isActive?: boolean;
  setNumbers: (operador: string) => void;
}
