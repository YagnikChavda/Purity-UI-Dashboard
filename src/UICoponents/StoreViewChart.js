import React from 'react';

import './StoreViewChart.scss';
import ChartLines from '../Images/Lines.png'

export default function StoreViewChart() {
    return (
        <div className='store-chart chart-block'>
            <span className="span">
                <div className="div">Sales overview</div>
                <div className="div-2">
                    <span>
                        (+5) more
                    </span>{" "}
                    in 2021
                </div>
                <div className="div-3">
                    <span className="span-2">
                        <div className="div-4">500</div>
                        <div className="div-5">400</div>
                        <div className="div-6">300</div>
                        <div className="div-7">200</div>
                        <div className="div-8">100</div>
                        <div className="div-9">0</div>
                    </span>
                    <div className="div-10">
                        <div className="div-11" />
                        <div className="div-12">
                            <img
                                loading="lazy"
                                src={ChartLines}
                                className="img"
                            />
                            <div className="div-13" />
                            <div className="div-14" />
                            <div className="div-15" />
                            <div className="div-16" />
                        </div>
                    </div>
                </div>
                <span className="span-3">
                    <div className="div-17">Jan</div>
                    <div className="div-18">Feb</div>
                    <div className="div-19">Mar</div>
                    <div className="div-20">Apr</div>
                    <div className="div-21">May</div>
                    <div className="div-22">Jun</div>
                    <div className="div-23">Jul</div>
                    <div className="div-24">Aug</div>
                    <div className="div-25">Sep</div>
                    <div className="div-26">Oct</div>
                    <div className="div-27">Nov</div>
                    <div className="div-28">Dec</div>
                </span>
            </span>
        </div>
    )
}
