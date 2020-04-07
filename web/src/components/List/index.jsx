import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import { numberFormat, percentFormat } from '../../util';

import './index.css';

const List = ({ type, data }) => {
    return (
        <table className='list'>
            <thead>
                <tr>
                    <td colSpan={8}>
                        <font className='list-active'>T : TOTAL</font>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <font className='list-new'>N : NEW</font>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <font className='list-active'>A : ACTIVE</font>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <font className='list-critical'>C : CRITICAL</font>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <font className='list-recovered'>R : RECOVERED</font>
                    </td>
                </tr>
                <tr>
                    <th rowSpan={2} width='16%'>
                        {type === 'country' ? 'DATE' : 'COUNTRY'}
                    </th>
                    <th colSpan={5}>CASES</th>
                    <th colSpan={2}>DEATHS</th>
                </tr>
                <tr>
                    <th width='12%'>T</th>
                    <th width='12%'>N</th>
                    <th width='12%'>A</th>
                    <th width='12%'>C</th>
                    <th width='12%'>R</th>
                    <th width='12%'>T</th>
                    <th width='12%'>N</th>
                </tr>
            </thead>
            <tbody>
                {data.length !== 0 ? (
                    data
                        .sort((a, b) => b.cases.total - a.cases.total)
                        .map((data, index) => (
                            <Fragment key={index}>
                                <tr>
                                    {type === 'country' ? (
                                        <td rowSpan={2}>{data.day}</td>
                                    ) : (
                                        <td rowSpan={2}>
                                            <Link to={`/country/${data.country}`} className='list-link'>
                                                {data.country}
                                            </Link>
                                        </td>
                                    )}
                                    <td rowSpan={2}>
                                        <font className='list-cases'>{numberFormat(data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-new'>{numberFormat(data.cases.new)}</font>
                                    </td>
                                    <td>{numberFormat(data.cases.active)}</td>
                                    <td>
                                        <font className='list-critical'>{numberFormat(data.cases.critical)}</font>
                                    </td>
                                    <td>
                                        <font className='list-recovered'>{numberFormat(data.cases.recovered)}</font>
                                    </td>
                                    <td>
                                        <font className='list-deaths'>{numberFormat(data.deaths.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-new'>{numberFormat(data.deaths.new)}</font>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.cases.new, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.cases.active, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.cases.critical, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.cases.recovered, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.deaths.total, data.cases.total)}</font>
                                    </td>
                                    <td>
                                        <font className='list-percent'>{percentFormat(data.deaths.new, data.cases.total)}</font>
                                    </td>
                                </tr>
                            </Fragment>
                        ))
                ) : (
                    <tr>
                        <td className='list-loading' colSpan={9}>
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default List;
