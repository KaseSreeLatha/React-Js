import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  DataLabel,
  AnnotationDirective,
  AnnotationsDirective,
  ChartAnnotation,
} from "@syncfusion/ej2-react-charts";

// Your data arrays
/*const data1 = [
  { x: 'Avg Last 13 weeks', y: 1945 },
  { x: 'Same Period last year', y: 5838 },
];
 
const data2 = [
  { x: 'Avg Last 13 weeks', y: 22638 },
  { x: 'Same Period last year', y: 23380 },
];
*/
// Calculate the sum of the columns

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    #chart {
        background-color: transparent !important;
    }
 
    #chart .e-chart-axes > .e-majortick > line,
    #chart .e-chart-gridlines > .e-majortick > line {
        display: none;
    }`;

const GrpColumnType1 = (props) => {
  const data1 = props.dataA;
  const data2 = props.dataB;

  const summedData = data1.map((item, index) => ({
    x: item.x,
    y: item.y + data2[index].y,
  }));
  const datas = [data1, data2];

  const getTotal = (x) => {
    var sum = 0;
    for (var i = 0; i < datas.length; i++) {
      for (var j = 0; j < datas[i].length; j++) {
        if (datas[i][j].x === x) {
          sum += datas[i][j].y;
          break;
        }
      }
    }
    return sum;
  };

  const columnTotalTemplate = (x) => {
    const total = getTotal(x);
    console.log("total grp1", total);
    return "$" + total + "";
  };
  const displayTotalValue = () => {
    console.log("displayvalue console", data1[1].y + data2[1].y);
    let total = data1[1].y + data2[1].y;
    return total;
  };

  return (
    <div>
      <ChartComponent
        primaryXAxis={{ valueType: "Category", majorGridLines: { width: 0 } }}
        primaryYAxis={{
          labelFormat: "${value}",
          visible: false,
          majorGridLines: { width: 0 },
        }}
        title={props.chartTitle}
        tooltip={{ enable: true }}
        background={props.background}
      >
        <Inject
          services={[
            ColumnSeries,
            Category,
            Tooltip,
            DataLabel,
            ChartAnnotation,
          ]}
        />
        <AnnotationsDirective>
          <AnnotationDirective
            content={columnTotalTemplate("Avg Last 13 weeks")}
            region="Series"
            verticalAlignment="Top"
            coordinateUnits="Point"
            x="Avg Last 13 weeks"
            y={getTotal("Avg Last 13 weeks")}
          ></AnnotationDirective>
          <AnnotationDirective
            content={
              '<div style="background-color: #FDECF1; margin-left:100px; color:red; padding: 2px; border: 1px solid black; border-radius: 12px">16%</div>'
            }
            region="Series"
            verticalAlignment="Top"
            coordinateUnits="Point"
            x="Avg Last 13 weeks"
            y={getTotal("Avg Last 13 weeks")}
          ></AnnotationDirective>
        </AnnotationsDirective>
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data2}
            xName="x"
            yName="y"
            type="Column"
            name="Recurring"
            width={1}
            columnSpacing={0}
            fill="#254975"
            cornerRadius={{ topLeft: 8, topRight: 8 }}
            marker={{
              dataLabel: {
                visible: true,
                position: "Top",
                font: {
                  fontWeight: "100",
                  color: "#ffffff",
                },
              },
            }}
          />
          <SeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            type="Column"
            name="occational"
            fill="#AED3FF"
            width={1}
            cornerRadius={{ topLeft: 8, topRight: 8 }}
            columnSpacing={0} // Negative value to overlap
            marker={{
              dataLabel: {
                visible: true,
                position: "Top",
                font: {
                  fontWeight: "100",
                  color: "#0000000",
                },
              },
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default GrpColumnType1;

