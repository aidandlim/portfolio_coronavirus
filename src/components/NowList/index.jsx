import React from 'react';

import { Link } from 'react-router-dom';

import { timeCalculator } from '../../util';

import './index.css';

const NowList = ({ data }) => {
    /*
        country:
        cases:
            new:
            active:
            critical:
            recovered:
            total:
        deaths:
            new:
            total:
        day:
        time:
    */

    return (
        <table className='nowList'>
            <thead>
                <tr>
                    <th rowSpan={2} width='15%'>
                        COUNTRY
                    </th>
                    <th colSpan={8}>CASES</th>
                    <th colSpan={3}>DEATHS</th>
                    <th rowSpan={2} width='15%'>
                        UPDATE
                    </th>
                </tr>
                <tr>
                    <th width='10%'>TOTAL</th>
                    <th width='10%'>NEW</th>
                    <th width='10%' colSpan={2}>
                        ACTIVE
                    </th>
                    <th width='10%' colSpan={2}>
                        CRITICAL
                    </th>
                    <th width='10%' colSpan={2}>
                        RECOVERED
                    </th>
                    <th width='10%' colSpan={2}>
                        TOTAL
                    </th>
                    <th width='10%'>NEW</th>
                </tr>
            </thead>
            <tbody>
                {data
                    .sort((a, b) => b.cases.total - a.cases.total)
                    .map((data, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/country/${data.country}`}>{data.country}</Link>
                            </td>
                            <td>{data.cases.total}</td>
                            <td>{data.cases.new}</td>
                            <td width='5%'>{data.cases.active}</td>
                            <td width='5%'>
                                ({((data.cases.active / data.cases.total) * 100).toFixed(1)}%)
                            </td>
                            <td width='5%'>{data.cases.critical}</td>
                            <td width='5%'>
                                ({((data.cases.critical / data.cases.total) * 100).toFixed(1)}%)
                            </td>
                            <td width='5%'>{data.cases.recovered}</td>
                            <td width='5%'>
                                ({((data.cases.recovered / data.cases.total) * 100).toFixed(1)}%)
                            </td>
                            <td width='5%'>{data.deaths.total}</td>
                            <td width='5%'>
                                ({((data.deaths.total / data.cases.total) * 100).toFixed(1)}%)
                            </td>
                            <td>{data.deaths.new}</td>
                            <td>{timeCalculator(data.time)}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default NowList;
