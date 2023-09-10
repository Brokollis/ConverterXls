import { useContext } from "react";
import { FileDataContext } from "../UseFileContext";

export const ConvertedJsonDataByCurrentMonth = () => {

  const { jsonData } = useContext(FileDataContext)

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = 2021;

  const filteredSales = jsonData.filter((sale) => {
    return sale.DATA.includes(`${currentMonth}/${currentYear}`);
  });

  const currentDate = new Date();
  const month = currentDate.toLocaleDateString('default', { month: 'long' }); 
  const totalQuantity = filteredSales.reduce((total, sale) => total + sale.QUANTIDADE_VENDIDA, 0);

  return{
    name: month,
    totalValue: totalQuantity
  }
}
