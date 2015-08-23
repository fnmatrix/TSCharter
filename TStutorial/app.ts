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
        private chartArea: any;
        private ctx: CanvasRenderingContext2D; 

        constructor()
        {
            // Setup Canvas
            this.chartArea = <HTMLCanvasElement>document.createElement("canvas");
            this.chartArea.width = this.Width;
            this.chartArea.height = this.Height;
            this.chartArea.style.border = "1px solid black";

            // Draw Canvas Area
            document.body.appendChild(this.chartArea);
        }

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

        public draw(chart: Chart.Base)
        {
            // Title
            this.ctx.fillText(chart.chartTitle.getText(), 10, 20);
        }
    }
}

window.onload = () => {
    var el = document.getElementById('content');

    var canvasChart = new Chart.Base();
    canvasChart.chartTitle.setText("Test Chart");
    canvasChart.chartTitle.setColor(Color.Color.prototype.setColor("blue"));
    canvasChart.draw(canvasChart);
};