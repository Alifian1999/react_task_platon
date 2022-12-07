import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label
} from "recharts";
import moment from "moment";

console.log(
  moment(1612390027112).startOf("minute").add(1, "minutes").toISOString()
);
const data01 = [
  { name: "Offline", value: 50 },
  { name: "AloDoc", value: 15 },
  { name: "HaloDoc", value: 35 },
  { name: "Tokopedia", value: 35 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Bullet = ({ backgroundColor, size }:any) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size
      }}
    ></div>
  );
};

const CustomizedLegend = (props:any) => {
  const { payload } = props;
  return (
    <ul className="LegendList">
      {payload.map((entry:any, index:number) => (
        <li key={`item-${index}`}>
          <div className="flex font-semibold text-sm items-center">
            <div className="flex items-center justify-center mb-1">
              <Bullet backgroundColor={entry.payload.fill} size="10px" />
              <div className="ml-4">{entry.value}</div>
            </div>
            <div style={{ marginLeft: "10px" }} className="flex font-semibold text-sm items-center">(%{entry.payload.value})</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CustomLabel = ({ viewBox, labelText, value }:any) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="15"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy + 20}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#0088FE"
        fontSize="26"
        fontWeight="600"
      >
        {value}
      </text>
    </g>
  );
};

const PieChartsComponent = () => {
  return (
    <div style={{ width: "100%", height: 420, marginTop:'-80px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={100}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={<CustomLabel labelText="ICPs" value={15} />}
              position="center"
            />
          </Pie>
          <Legend content={<CustomizedLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartsComponent
