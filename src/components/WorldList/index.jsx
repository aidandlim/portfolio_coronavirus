import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { timeCalculator, numberFormat, percentFormat } from '../../util';

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
                    <th rowSpan={2} width='17.5%'>
                        COUNTRY
                    </th>
                    <th colSpan={5}>CASES</th>
                    <th colSpan={2}>DEATHS</th>
                    <th rowSpan={2} width='12.5%'>
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
                {data.length !== 0 ? (
                    data
                        .sort((a, b) => b.cases.total - a.cases.total)
                        .map((data, index) => (
                            <Fragment key={index}>
                                <tr>
                                    <td rowSpan={2}>
                                        <Link to={`/country/${data.country}`} className='worldList-link'>
                                            {data.country}
                                        </Link>
                                    </td>
                                    <td rowSpan={2}>
                                        <font className='worldList-cases'>{numberFormat(data.cases.total)}</font>
                                    </td>
                                    <td>{numberFormat(data.cases.new)}</td>
                                    <td>{numberFormat(data.cases.active)}</td>
                                    <td>{numberFormat(data.cases.critical)}</td>
                                    <td>
                                        <font className='worldList-recovered'>{numberFormat(data.cases.recovered)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-deaths'>{numberFormat(data.deaths.total)}</font>
                                    </td>
                                    <td>{numberFormat(data.deaths.new)}</td>
                                    <td rowSpan={2}>{timeCalculator(data.time)}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.cases.new, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.cases.active, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.cases.critical, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.cases.recovered, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.deaths.total, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='worldList-percent'>{percentFormat(data.deaths.new, data.cases.total)}</font>
                                    </td>
                                </tr>
                            </Fragment>
                        ))
                ) : (
                    <tr>
                        <td className='worldList-loading' colSpan={9}>
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default WorldList;
