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

const SingleColumn = (props) => {
  const data1 = props.dataA;
  console.log("data1", data1);

  const getValue = (x) => {
    return "$" + data1[0].y + "";
  };

  const getPosition = (x) => {
    return data1[0].y;
  };

  const getValue1 = (x) => {
    return "$" + data1[1].y + "";
  };

  const getPosition1 = (x) => {
    return data1[1].y;
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
            content={getValue("Avg Last 13 weeks")}
            region="Series"
            verticalAlignment="Top"
            coordinateUnits="Point"
            x="Avg Last 13 weeks"
            y={getPosition("Avg Last 13 weeks")}
          />
          <AnnotationDirective
            content={getValue1("Same Period last year")}
            region="Series"
            verticalAlignment="Top"
            coordinateUnits="Point"
            x="Same Period last year"
            y={getPosition1("Same Period last year")}
          />
          <AnnotationDirective
            content={
              '<div style="background-color: #FDECF1; margin-left:100px; color:green; padding: 2px; border: 1px solid black; border-radius: 12px">83%</div>'
            }
            region="Series"
            verticalAlignment="Top"
            coordinateUnits="Point"
            x="Avg Last 13 weeks"
            y={getPosition("Avg Last 13 weeks")}
          ></AnnotationDirective>
        </AnnotationsDirective>
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            type="Column"
            name="occational"
            fill="#254975"
            width={1}
            cornerRadius={{ topLeft: 12, topRight: 12 }}
            columnSpacing={0} // Negative value to overlap
            marker={{
              dataLabel: {
                visible: false,
                position: "Top",
                font: {
                  fontWeight: "600",
                  color: "#ffffff",
                },
              },
            }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default SingleColumn;