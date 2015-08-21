/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/d3/d3.d.ts" />
"use strict";

interface Label
{
    setText(text: string): void;
    setBold(bold: boolean): void;
    setColor(color: Color.Color): void;

    getText(): string;
    getBold(): boolean;
    getColor(): Color.Color;
}

interface IPerfRun {
    x: Date;
    y: number;
}

interface IPerfDataSeries {
    desc: string;
    data: IPerfRun[];
}

module Chart
{
    class ChartLabel implements Label
    {
        text: string;
        bold: boolean;
        Color: Color.Color;

        public setText(text: string) {
            this.text = text;
        }

        public setBold(bold: boolean) {
            this.bold = bold;
        }

        public setColor(color: Color.Color) {
            this.Color = color;
        }

        public getText(): string {
            return this.text;
        }

        public getBold(): boolean {
            return this.bold;
        }

        public getColor(): Color.Color {
            return this.Color;
        }
    }

    export class Base
    {
        public chartHeight: number = 400;
        public chartWidth: number = 500;
        public legendWidth: number = 150;
        public chartTitle: ChartLabel;
        public xAxisLabel: ChartLabel;
        public yAxisLabel: ChartLabel;
        public zAcisLabel: ChartLabel;

        constructor(public element) { }

        public set Width(width: number) {
            this.chartWidth = width;
        }

        public get Width(): number {
            return this.chartWidth;
        }

        public set Height(height: number) {
            this.chartHeight = height;
        }

        public get Height(): number {
            return this.chartHeight;
        }

        public set LegendWidth(width: number) {
            this.legendWidth = width;
        }

        public get LegendWidth(): number {
            return this.legendWidth;
        }

        public set ChartTitle(title: string) {
            this.chartTitle.setText(title);
        }

        public get ChartTitle(): string {
            return this.chartTitle.getText();
        }

        public set ChartXAxis(title: string) {
            this.xAxisLabel.setText(title);
        }

        public get ChartXAxis(): string {
            return this.xAxisLabel.getText();
        }

        public set ChartYAxis(title: string) {
            this.yAxisLabel.setText(title);
        }

        public get ChartYAxis(): string {
            return this.yAxisLabel.getText();
        }
    }

    export class Bar extends Base
    {
        public element: ID3Selection;
        public legendItemHeight = 30;
        public colors = ['rgb(0, 113, 188)', 'rgb(0, 174, 239)', 'rgb(145, 0, 145)'];
        public xAxisHashHeight = 10;
        public layout = 'wiggle';

        constructor(element: ID3Selection)
        {
            super(element);
            this.element = element;
        }

        public render()
        {
            var x = d3.scale.linear().domain([0, 10]).range([0, this.chartWidth]);
            var y = d3.scale.linear().domain([0, 10]).range([0, this.chartHeight]);
        }
    }
}

window.onload = () => {
    var el = document.getElementById('content');
};