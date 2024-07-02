import React from 'react'
import Layout from './Header/Layout'
import { BarChart } from '@mui/x-charts/BarChart';

const Dashboard = () => {
    return (
        <div>
            <Layout />
            <h2>Welcome to Dashboard</h2>
            <div className='container-fluid'>
            <BarChart
                series={[
                    { data: [35, 44, 24, 34] },
                    { data: [51, 6, 49, 30] },
                    { data: [15, 25, 30, 50] },
                    { data: [60, 50, 15, 25] },
                ]}
                height={290}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            </div>
            
        </div>
    )
}

export default Dashboard
