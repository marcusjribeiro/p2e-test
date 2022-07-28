export interface ICrabSalesReturn {
  bucketDate: string; //Bucket date
  avgPrice: number; //Average price for the day
  higherPrice: number; //Higher sale price for the day
  lowerPrice: number; //Lower sale price for the day
  totalPrice: number; //Sum of all price sales for the day
  totalSales: number; //Total number of sales for the day
}

export interface ICrabSalesPost {
  from: string;
  breedCount: number[];
  legend: number[];
  purity: number[];
  crabClass: string[];
}
