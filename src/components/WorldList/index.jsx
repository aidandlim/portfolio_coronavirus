import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { numberFormat, percentFormat } from '../../util';

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
                    <td colSpan={8}>
                        T : Total&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;N : New&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;A : Active&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;C :
                        Critical&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;R : Recovered
                    </td>
                </tr>
                <tr>
                    <th rowSpan={2} width='23%'>
                        COUNTRY
                    </th>
                    <th colSpan={5}>CASES</th>
                    <th colSpan={2}>DEATHS</th>
                </tr>
                <tr>
                    <th width='11%'>T</th>
                    <th width='11%'>N</th>
                    <th width='11%'>A</th>
                    <th width='11%'>C</th>
                    <th width='11%'>R</th>
                    <th width='11%'>T</th>
                    <th width='11%'>N</th>
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
