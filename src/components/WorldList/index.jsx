import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { timeCalculator } from '../../util';

import './index.css';

const WorldList = ({ data }) => {
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
        <table className='worldList'>
            <thead>
                <tr>
                    <th rowSpan={2} width='15%'>
                        COUNTRY
                    </th>
                    <th colSpan={5}>CASES</th>
                    <th colSpan={2}>DEATHS</th>
                    <th rowSpan={2} width='15%'>
                        UPDATE
                    </th>
                </tr>
                <tr>
                    <th width='10%'>TOTAL</th>
                    <th width='10%'>NEW</th>
                    <th width='10%'>ACTIVE</th>
                    <th width='10%'>CRITICAL</th>
                    <th width='10%'>RECOVERED</th>
                    <th width='10%'>TOTAL</th>
                    <th width='10%'>NEW</th>
                </tr>
            </thead>
            <tbody>
                {data
                    .sort((a, b) => b.cases.total - a.cases.total)
                    .map((data, index) => (
                        <Fragment key={index}>
                            <tr>
                                <td rowSpan={2}>
                                    <Link to={`/country/${data.country}`}>{data.country}</Link>
                                </td>
                                <td rowSpan={2}>{data.cases.total}</td>
                                <td>{data.cases.new}</td>
                                <td>{data.cases.active}</td>
                                <td>{data.cases.critical}</td>
                                <td>{data.cases.recovered}</td>
                                <td>{data.deaths.total}</td>
                                <td>{data.deaths.new}</td>
                                <td rowSpan={2}>{timeCalculator(data.time)}</td>
                            </tr>
                            <tr>
                                <td>({((data.cases.new / data.cases.total) * 100).toFixed(2)}%)</td>
                                <td>({((data.cases.active / data.cases.total) * 100).toFixed(2)}%)</td>
                                <td>({((data.cases.critical / data.cases.total) * 100).toFixed(2)}%)</td>
                                <td>
                                    ({((data.cases.recovered / data.cases.total) * 100).toFixed(2)}
                                    %)
                                </td>
                                <td>({((data.deaths.total / data.cases.total) * 100).toFixed(2)}%)</td>
                                <td>({((data.deaths.new / data.cases.total) * 100).toFixed(2)}%)</td>
                            </tr>
                        </Fragment>
                    ))}
            </tbody>
        </table>
    );
};

export default WorldList;
