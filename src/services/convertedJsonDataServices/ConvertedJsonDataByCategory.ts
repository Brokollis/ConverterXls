import { useContext, useEffect, useState } from "react"
import { FileDataContext } from "../UseFileContext"

interface ICalculateProductsByParameter{
    name: string;
    totalValue: number;
}

export const ConvertedJsonDataByCategory = () => {

    const { jsonData } = useContext(FileDataContext)
    const [productsByCategory, setProductsByCategory] = useState<ICalculateProductsByParameter[]>([])

      
    const calculateTotalSalesOfCategory = (category: string) => {
        return jsonData
        .filter((obj) => obj.PRODUTO === category)
        .reduce((total, obj) => total + obj.QUANTIDADE_VENDIDA, 0);
    };
    
    useEffect(() => {
        if (jsonData.length > 0) {
            const uniqueCategories = [...new Set(jsonData.map((obj) => obj.PRODUTO))];
            
            const productsWithTotalSales = uniqueCategories.map((product) => {
                const totalSales = calculateTotalSalesOfCategory(product);
                return {
                    name: product,
                    totalValue: totalSales,
                };
            });
            setProductsByCategory(productsWithTotalSales);
        }
    }, [jsonData]);


    return { productsByCategory }
}