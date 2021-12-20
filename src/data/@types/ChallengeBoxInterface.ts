export interface IChallengeBox {
  result: boolean;
  resultText: number;
  erro: boolean;
  operator: string;
  amount: number;
  primayNumber: number;
  secundaryNumber: number;
  setNumbers: (operator: string) => void;
  calculate: (operator: string, answer: number) => void;
}
