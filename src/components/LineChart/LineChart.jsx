import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, name: 'Alice', math: 45, physics: 38, chemistry: 42 },
        { id: 2, name: 'Bob', math: 32, physics: 40, chemistry: 34 },
        { id: 3, name: 'Charlie', math: 48, physics: 45, chemistry: 39 },
        { id: 4, name: 'David', math: 29, physics: 33, chemistry: 35 },
        { id: 5, name: 'Emma', math: 44, physics: 47, chemistry: 49 },
        { id: 6, name: 'Frank', math: 22, physics: 30, chemistry: 27 },
        { id: 7, name: 'Grace', math: 49, physics: 46, chemistry: 48 },
        { id: 8, name: 'Henry', math: 41, physics: 43, chemistry: 38 },
        { id: 9, name: 'Isabella', math: 46, physics: 44, chemistry: 47 },
        { id: 10, name: 'Jack', math: 35, physics: 37, chemistry: 36 }
      ];
      

    return (
        <div className='my-8'>
            <LChart width={1000} height={400} data={studentMarks}>
                <Line type={'monotone'} dataKey={'math'} stroke='red' ></Line>
                <Line type={'monotone'} dataKey={'physics'} stroke='blue' ></Line>
                <Line type={'monotone'} dataKey={'chemistry'} stroke='purple' ></Line>
                <CartesianGrid stroke='gray' strokeDasharray={5.5}></CartesianGrid>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LChart>
        </div>
    );
};

export default LineChart;