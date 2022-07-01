import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends Component {
    getOption = () => {
        return {
            toolbox: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['one', 'two', 'three', 'four', 'five'],
                textStyle: {
                    color: ['#74788d']
                }
            },
            color: ['#306309', '#EAB807', '#028950', '#15E28C', '#67B32E'],
            series: [
                {
                    name: 'Total sales',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'one' },
                        { value: 310, name: 'two' },
                        { value: 234, name: 'three' },
                        { value: 135, name: 'four' },
                        { value: 1548, name: 'five' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment data-aos="fade-bottom">
                <ReactEcharts style={{ height: "305px" }} option={this.getOption()}/>
            </React.Fragment>
        );
    }
}
export default Pie;