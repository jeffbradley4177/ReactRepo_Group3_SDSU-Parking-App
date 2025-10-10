export type ParkingLotRecord = {
  Index: number;
  LotNumber: string;
  TotalSpaces: number;
  TakenSpaces: number;
  [key: string]: unknown;
};
