export interface Product {
    id: number;
    supplierId : number;
    categoryId : number;
    quantityPerUnit : string;
    unitPrice : number;
    unitsInStock : number;
    unitsOnOrder : number;
    reorderLevel : number;
    discontinued :boolean;
    name : string;

  }
  // json2ts
  // ctrl + alt + v
  