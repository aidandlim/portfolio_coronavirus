import React from 'react';

import { ResponsivePie } from '@nivo/pie';

import { numberFormat, percentFormat } from '../../util';

import './index.css';

const WorldSummary = ({ allData }) => {
    const recoveredData = [
        {
            id: 'recovered',
            label: 'recovered',
            value: allData.cases.recovered,
        },
        {
            id: 'cases',
            label: 'cases',
            value: allData.cases.total - allData.cases.recovered,
        },
    ];

    const criticalData = [
        {
            id: 'critical',
            label: 'critical',
            value: allData.cases.critical,
        },
        {
            id: 'cases',
            label: 'cases',
            value: allData.cases.total - allData.cases.critical,
        },
    ];

    const deathData = [
        {
            id: 'deaths',
            label: 'deaths',
            value: allData.deaths.total,
        },
        {
            id: 'cases',
            label: 'cases',
            value: allData.cases.total - allData.deaths.total,
        },
    ];

    return (
        <div className='worldSummary'>
            <div className='worldSummary-cases-container'>
                <div className='worldSummary-cases'>
                    <div className='worldSummary-cases-title'>TOTAL CASES</div>
                    <div className='worldSummary-cases-value'>
                        {numberFormat(allData.cases.total)}&nbsp;&nbsp;( ▲ {numberFormat(allData.cases.new)} )
                    </div>
                </div>
            </div>
            <div className='worldSummary-container'>
                <PieChart data={recoveredData} color='#1abc9c' />
                <div className='worldSummary-value'>
                    <p>{numberFormat(allData.cases.recovered)}</p>
                    <p>{percentFormat(allData.cases.recovered, allData.cases.total)}</p>
                </div>
            </div>
            <div className='worldSummary-container'>
                <PieChart data={criticalData} color='#F57C00' />
                <div className='worldSummary-value'>
                    <p>{numberFormat(allData.cases.critical)}</p>
                    <p>{percentFormat(allData.cases.critical, allData.cases.total)}</p>
                </div>
            </div>
            <div className='worldSummary-container'>
                <PieChart data={deathData} color='#e74c3c' />
                <div className='worldSummary-value'>
                    <p>{numberFormat(allData.deaths.total)}</p>
                    <p>{percentFormat(allData.deaths.total, allData.cases.total)}</p>
                </div>
            </div>
            <div className='worldSummary-title-container'>
                <div>RECOVERED</div>
            </div>
            <div className='worldSummary-title-container'>
                <div>CRITICAL</div>
            </div>
            <div className='worldSummary-title-container'>
                <div>DEATH</div>
            </div>
        </div>
    );
};

const PieChart = ({ data, color }) => {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            innerRadius={0.5}
            colors={[color, '#606060']}
            enableSlicesLabels={false}
            enableRadialLabels={false}
            isInteractive={false}
        />
    );
};

export default WorldSummary;
