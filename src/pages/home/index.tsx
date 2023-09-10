import CardCategory from "../../components/cardCategory";
import CardHighlight from "../../components/cardHighlight";
import Carousel from "../../components/carousel";
import TableSales from "../../components/listSales/index.tsx";
import CardSalesMonth from "../../components/cardSalesMonth/index.tsx";
import { changeColorCategory } from "../../utils/changeColorCategory.ts";
import { ConvertedJsonDataByCategory, ConvertedJsonDataByCurrentMonth, ConvertedJsonDataByMonth, ConvertedJsonDataByYear} from '../../services/convertedJsonDataServices'
import './style.css'


const Home = () => {

    const { productsByCategory } = ConvertedJsonDataByCategory()
    const { productsByMonth } = ConvertedJsonDataByMonth()
    const { totalSales } = ConvertedJsonDataByYear()
    const { name: nameMonth, totalValue} = ConvertedJsonDataByCurrentMonth()

    return(
        <main>
            <section className="highlights">
                <div className="cards-sales-months">
                    <Carousel
                        settingsResponsive={{
                            0: { items: 2.1 },
                            380: { items: 2.2 },
                            430: { items: 2.5 },
                            580: { items: 3 },
                            650: { items: 3.5},
                            740: { items: 2},
                            815:{items:2.5 },
                            945:{items:3 },
                            1035:{items:3.5},
                            1140: { items: 4.0 }
                        }}>
                        {productsByMonth.map((month) => (
                            <CardSalesMonth month={month.name} valueSales={month.totalValue}/>
                        ))}
                    </Carousel>
                </div>
                <div className="cards-highlights">
                    <CardHighlight
                        title={nameMonth}
                        descripton="Total vendido mês"
                        quantitySales={totalValue}
                    />
                    <CardHighlight
                        title="Anual"
                        descripton="Total vendido ano"
                        quantitySales={totalSales}
                    />
                </div>
            </section>
            <section className="categories">
                <Carousel
                    settingsResponsive={{
                        0: { items: 1.4},
                        390: { items: 1.5},
                        460: { items: 1.8},
                        500: { items: 2},
                        560: { items: 2.2},
                        620: { items: 2.5},
                        685: { items: 2.8},
                        740: { items: 3},
                        800: { items: 3.1 },
                        950: { items: 3.5 },
                        1090: {items: 4.1},
                        1160: { items: 4.4 }
                 }}>
                   {
                        productsByCategory?.map((category) => (
                            <CardCategory
                                key={category.name} 
                                category={category.name}
                                quantitySales={category.totalValue}
                                colorBorder={changeColorCategory(category.name)}
                            />
                        ))
                    }
                </Carousel>
            </section>
            <section className="list-sales">
                <TableSales/>
            </section>
        </main>
    );
}

export default Home;