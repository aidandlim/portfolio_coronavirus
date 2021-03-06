import React from 'react';

import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';

import { isMobile } from 'react-device-detect';

import { numberFormat, percentFormat } from '../../util';

import './index.css';

const Summary = ({ type, data }) => {
    const today = type === 'country' ? data[0] : data[data.findIndex((element) => element.country === 'All')];

    const recoveredData = [
        {
            id: 'recovered',
            label: 'recovered',
            value: today.cases.recovered,
        },
        {
            id: 'cases',
            label: 'cases',
            value: today.cases.total - today.cases.recovered,
        },
    ];

    const criticalData = [
        {
            id: 'critical',
            label: 'critical',
            value: today.cases.critical,
        },
        {
            id: 'cases',
            label: 'cases',
            value: today.cases.total - today.cases.critical,
        },
    ];

    const deathData = [
        {
            id: 'deaths',
            label: 'deaths',
            value: today.deaths.total,
        },
        {
            id: 'cases',
            label: 'cases',
            value: today.cases.total - today.deaths.total,
        },
    ];

    let dateData = [];

    if (type === 'country') {
        for (let i = 0; i < 4; i++) {
            let id = '';

            if (i === 0) id = 'total';
            if (i === 1) id = 'recovered';
            if (i === 2) id = 'critical';
            if (i === 3) id = 'deaths';

            dateData.push({
                id: id,
                data: [],
            });

            for (let j = data.length - 1; j >= 0; j--) {
                let thisData;

                if (i === 0) thisData = data[j].cases.total;
                if (i === 1) thisData = data[j].cases.recovered;
                if (i === 2) thisData = data[j].cases.critical;
                if (i === 3) thisData = data[j].deaths.total;

                dateData[i].data.push({
                    x: data[j].day,
                    y: thisData,
                });
            }
        }
    }

    return (
        <div className='summary'>
            <div className='summary-cases-container'>
                <div className='summary-cases'>
                    <div className='summary-cases-title'>TOTAL CASES</div>
                    <div className='summary-cases-value'>
                        {numberFormat(today.cases.total)}&nbsp;&nbsp;( ▲ {numberFormat(today.cases.new)} )
                    </div>
                </div>
            </div>
            <div className='summary-container'>
                <PieChart data={recoveredData} color='#1abc9c' />
                <div className='summary-value'>
                    <p>{numberFormat(today.cases.recovered)}</p>
                    <p>{percentFormat(today.cases.recovered, today.cases.total)}</p>
                </div>
            </div>
            <div className='summary-container'>
                <PieChart data={criticalData} color='#F57C00' />
                <div className='summary-value'>
                    <p>{numberFormat(today.cases.critical)}</p>
                    <p>{percentFormat(today.cases.critical, today.cases.total)}</p>
                </div>
            </div>
            <div className='summary-container'>
                <PieChart data={deathData} color='#e74c3c' />
                <div className='summary-value'>
                    <p>{numberFormat(today.deaths.total)}</p>
                    <p>{percentFormat(today.deaths.total, today.cases.total)}</p>
                </div>
            </div>
            <div className='summary-title-container'>
                <div>RECOVERED</div>
            </div>
            <div className='summary-title-container'>
                <div>CRITICAL</div>
            </div>
            <div className='summary-title-container'>
                <div>DEATH</div>
            </div>
            {type === 'country' && !isMobile ? (
                <div className='summary-container-wide'>
                    <LineChart data={dateData} />
                </div>
            ) : null}
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

const LineChart = ({ data }) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 30, bottom: 100, left: 70 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            colors={['#3498db', '#1abc9c', '#F57C00', '#e74c3c']}
            lineWidth={3}
            pointSize={7}
            pointColor={{ from: 'color', modifiers: [] }}
            enableArea={true}
            axisBottom={{
                orient: 'bottom',
                tickRotation: 90,
                tickPadding: 10,
                legendPosition: 'middle',
            }}
        />
    );
};

export default Summary;
