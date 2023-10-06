import { PieChart } from "recharts";
import ChartBox from "../../components/chartbox/ChartBox";
import { TopBox } from "../../components/topbox/TopBox";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import PieChartBox from "../../components/piechart/PieChart";
import { BarChartBox } from "../../components/barchartbox/BarChart";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      {/* <div className="box box7">
        <BarChartBox />
      </div>
      <div className="box box8">
        <BarChartBox />
      </div> */}
      <div className="box box9">Box 9</div>
    </div>
  );
};
