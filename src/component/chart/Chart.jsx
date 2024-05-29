import { LineChart,Line,XAxis,YAxis } from "recharts";


const Chart = () => {
    const data = [
        {ID: 101, MathMark: 88, ChemistryMark: 92},
        {ID: 102, MathMark: 75, ChemistryMark: 85},
        {ID: 103, MathMark: 93, ChemistryMark: 89},
        {ID: 104, MathMark: 67, ChemistryMark: 73},
        {ID: 105, MathMark: 82, ChemistryMark: 78},
        {ID: 106, MathMark: 90, ChemistryMark: 95},
        {ID: 107, MathMark: 76, ChemistryMark: 80}
    ]
    

    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Line dataKey={"MathMark"}  stroke="#82ca9d"/>
            <Line dataKey={"ChemistryMark"} stroke="#8884d8"></Line>

        </LineChart>
    );
};

export default Chart;