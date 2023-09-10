import { useContext, useEffect, useState } from "react";
import { FileDataContext } from "../UseFileContext";
import getMonthNameOfDate from "../../utils/getMonthOfDate";

interface ICalculateProductsByMonth{
    name: string;
    totalValue: number;
}
export const ConvertedJsonDataByMonth = () => {
    
    const { jsonData } = useContext(FileDataContext)
    const [productsByMonth, setProductsByMonth] = useState<ICalculateProductsByMonth[]>([])


    const calculateTotalSalesOfMonth = (monthYear: string) => {
        return jsonData
            .filter((obj) => {
                return obj.DATA.includes(monthYear);
            })
            .reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);
    };

    useEffect(()=>{
        if (jsonData.length > 0) {
            const uniqueMonths = [...new Set(jsonData.map((obj) => obj.DATA.slice(3)))];

            const uniqueProductCardsOfMonth = uniqueMonths.map((monthYear) => {
                const [targetMonth, targetYear] = monthYear.split('/');
                const formattedMonthYear = `${targetMonth.padStart(2, '0')}/${targetYear}`;
                const salesQuantityOfMonth = calculateTotalSalesOfMonth(formattedMonthYear);
                const monthName = getMonthNameOfDate(formattedMonthYear); 

                return { 
                    name: monthName,
                    totalValue: salesQuantityOfMonth,
                }
            });

            setProductsByMonth(uniqueProductCardsOfMonth)
        }

    }, [jsonData])
    
    return { productsByMonth }
}