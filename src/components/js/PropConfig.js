export default {
  props: {
    type: 'canvas',
    title: '画布设置',
    props: {}
  },
  propsConfigList: {
    canvas: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'backgroundImage',
          propType: 'lgcolor'
        },
      ],
      common: [
        {
          propName: 'heartbeat',
          propType: 'number'
        }
      ]
    },
    layout: [
      {
        propName: 'width',
        propType: 'numbersuffix',
        suffix: 'px'
      },
      {
        propName: 'height',
        propType: 'numbersuffix',
        suffix: 'px'
      },
      {
        propName: 'top',
        propType: 'numbersuffix',
        suffix: 'px'
      },
      {
        propName: 'left',
        propType: 'numbersuffix',
        suffix: 'px'
      },
      {
        propName: 'backgroundImage',
        propType: 'lgcolor'
      },
      {
        propName: 'isShow',
        propType: 'switch'
      },
    ],
    USingleText: {
      style: [
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'textAlign',
          propType: 'text'
        },
        {
          propName: 'fontSize',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'color',
          propType: 'color'
        },
      ]
    },
    uNumberCard: {
      style: [],
      numbercardstyle:[
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'numberLength',
          propType: 'number'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        },
        {
          propName: 'cornerWidth',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'cornerHeight',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'cornerSize',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'itemMargin',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'backgroundImage',
          propType: 'lgcolor'
        },
        {
          propName: 'fontSize',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'fontColor',
          propType: 'color'
        },
      ]
    },
    uTimeCard: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      timecardstyle:[
        {
          propName: 'fontSize',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'fontColor',
          propType: 'color'
        },
        {
          propName: 'timeFormat',
          propType: 'select'
        },
        {
          propName: 'timeMargin',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ]
    },
    uPie: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      piestyle:[
        {
          propName: 'pieName',
          propType: 'text',
        },
        {
          propName: 'pieRadius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'diagramSize',
          propType: 'label',
        },
        {
          propName: 'isLabel',
          propType: 'switch',
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
        {
          propName: 'lineWidth',
          propType: 'number',
        },
        {
          propName: 'lineLength',
          propType: 'number',
        },
        {
          propName: 'lineLength2',
          propType: 'number',
        },
        {
          propName: 'lineSmoth',
          propType: 'switch',
        },
        {
          propName: 'fontSize',
          propType: 'number',
        },
        {
          propName: 'diagramSize',
          propType: 'label',
        }
      ],
      piecolor: [
        {
          propName: 'color',
          propType: 'color'
        },
      ]
    },
    uPieCicle: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      piestyle:[
        {
          propName: 'pieName',
          propType: 'text',
        },
        {
          propName: 'pieOutRadius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'pieInnerRadius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'diagramSize',
          propType: 'label',
        },
        {
          propName: 'isLabel',
          propType: 'switch',
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'fontSize',
          propType: 'number',
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
        {
          propName: 'lineWidth',
          propType: 'number',
        },
        {
          propName: 'lineLength',
          propType: 'number',
        },
        {
          propName: 'lineLength2',
          propType: 'number',
        },
        {
          propName: 'lineSmoth',
          propType: 'switch',
        },
      ],
      piecolor: [
        {
          propName: 'color',
          propType: 'color'
        },
      ]
    },
    uPieMultiCicle: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      piestyle:[
        {
          propName: 'pieName',
          propType: 'text',
        },
        {
          propName: 'cicleWidth',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'diagramSize',
          propType: 'label'
        },
      ],
      piecolor: [
        {
          propName: 'color',
          propType: 'color'
        },
      ]
    },
    uPieRose: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      piestyle:[
        {
          propName: 'pieName',
          propType: 'text',
        },
        {
          propName: 'roseColor',
          propType: 'color'
        },
        {
          propName: 'pieRadius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'diagramSize',
          propType: 'label',
        },
        {
          propName: 'isLabel',
          propType: 'switch',
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'fontSize',
          propType: 'number',
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
        {
          propName: 'lineWidth',
          propType: 'number',
        },
        {
          propName: 'lineLength',
          propType: 'number',
        },
        {
          propName: 'lineLength2',
          propType: 'number',
        },
        {
          propName: 'lineSmoth',
          propType: 'switch',
        },
      ]
    },
    uRectLayout: {
      style:[],
      rectStyle:[
        {
          propName: 'rectTypeProp',
          propType: 'select'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        },
        {
          propName: 'leftCicleColor',
          propType: 'color'
        },
        {
          propName: 'specBorderColor',
          propType: 'color'
        },
        {
          propName: 'alertRectColor',
          propType: 'color'
        },
        {
          propName: 'alertIconColor',
          propType: 'color'
        },
        {
          propName: 'bgColor',
          propType: 'lgcolor'
        }
      ]
    },
    u2DMapChina: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      mapstyle: [
        {
          propName: 'areaColor',
          propType: 'color'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        }
      ],
      mapconfig: [
        {
          propName: 'scatterColor',
          propType: 'color'
        },
        {
          propName: 'alColor',
          propType: 'color'
        },
        {
          propName: 'isEffectLine',
          propType: 'switch'
        },
        {
          propName: 'isAnimationLine',
          propType: 'switch'
        }
      ]
    },
    u2DMapWorld: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      mapstyle: [
        {
          propName: 'areaColor',
          propType: 'color'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        }
      ],
      mapconfig: [
        {
          propName: 'scatterColor',
          propType: 'color'
        },
        {
          propName: 'alColor',
          propType: 'color'
        },
        {
          propName: 'isEffectLine',
          propType: 'switch'
        },
        {
          propName: 'isAnimationLine',
          propType: 'switch'
        }
      ]
    },
    uGlobe: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      mapconfig: [
        {
          propName: 'globeType',
          propType: 'select'
        },
        {
          propName: 'globeBgColor',
          propType: 'color'
        },
        {
          propName: 'mapColor',
          propType: 'color'
        },
        {
          propName: 'mapBorderColor',
          propType: 'color'
        },
        {
          propName: 'emphasisMapColor',
          propType: 'color'
        },
        {
          propName: 'skyColor',
          propType: 'color'
        },
        {
          propName: 'scaller3DColor',
          propType: 'color'
        },
        {
          propName: 'line3DColor',
          propType: 'color'
        },
        {
          propName: 'isEffectLine',
          propType: 'switch'
        },
        {
          propName: 'isEffectScatter',
          propType: 'switch'
        }
      ]
    },
    uLiquidFill: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      liquidconfig: [
        {
          propName: 'radius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'range',
          propType: 'text'
        },
        {
          propName: 'liquidColor1',
          propType: 'color'
        },
        {
          propName: 'liquidColor2',
          propType: 'color'
        },
        {
          propName: 'liquidColor3',
          propType: 'color'
        },
        {
          propName: 'liquidColor4',
          propType: 'color'
        },
        {
          propName: 'liquidColor5',
          propType: 'color'
        },
        {
          propName: 'diagramSize',
          propType: 'label',
        },
      ]
    },
    uIframe: {
      style: [],
      iframeconfig: [
        {
          propName: 'iframeUrl',
          propType: 'text'
        }
      ]
    },
    uBar: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barDirection',
          propType: 'select'
        },
        {
          propName: 'barColor',
          propType: 'lgcolor',
          condition: 'noimage'
        },
        {
          propName: 'multiColor',
          propType: 'switch'
        },
        {
          propName: 'barWidth',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelOffsetX',
          propType: 'number'
        },
        {
          propName: 'labelOffsetY',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uBarIcon: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'symbol',
          propType: 'select'
        },
        {
          propName: 'symbolSizeX',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'symbolSizeY',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'barDirection',
          propType: 'select'
        },
        {
          propName: 'barColor',
          propType: 'lgcolor',
          condition: 'noimage'
        },
        {
          propName: 'multiColor',
          propType: 'switch'
        },
        {
          propName: 'barWidth',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelOffsetX',
          propType: 'number'
        },
        {
          propName: 'labelOffsetY',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uBarMulti: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barDirection',
          propType: 'select'
        },
        {
          propName: 'barPlace',
          propType: 'select'
        },
        {
          propName: 'barWidth',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelOffsetX',
          propType: 'number'
        },
        {
          propName: 'labelOffsetY',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uBarProcess: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barWidth',
          propType: 'number',
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelOffset',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        },
        {
          propName: 'borderWidth',
          propType: 'number'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        }
      ]
    },

    //todo:响应式进度条
    uBarProgress: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barWidth',
          propType: 'number',
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelOffset',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        },
        {
          propName: 'borderWidth',
          propType: 'number'
        },
        {
          propName: 'borderColor',
          propType: 'color'
        }
      ]
    },
    uBarBG: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barDirection',
          propType: 'select'
        },
        {
          propName: 'barfontSize',
          propType: 'number'
        },
        {
          propName: 'barColorbg',
          propType: 'color'
        },
        {
          propName: 'barColorinner',
          propType: 'lgcolor',
          condition: 'noimage'
        },
        {
          propName: 'barWidthbg',
          propType: 'number',
        },
        {
          propName: 'barWidthinner',
          propType: 'number',
        },
        {
          propName: 'barBorderRadius',
          propType: 'text',
        },
        {
          propName: 'barBorderRadiusinner',
          propType: 'text',
        },
        {
          propName: 'barGap',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelColor',
          propType: 'color'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uBarLRHoriz: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      barstyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'barPlace',
          propType: 'select'
        },
        {
          propName: 'barWidth',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'barfontSize',
          propType: 'number'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'axisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'axisWidth',
          propType: 'number'
        },
        {
          propName: 'axisType',
          propType: 'select'
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'axisfontSize',
          propType: 'number'
        },
        {
          propName: 'axisPosition',
          propType: 'select'
        },
      ],
      barcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uLine: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      linestyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'lineColor',
          propType: 'color'
        },
        {
          propName: 'lineWidth',
          propType: 'number'
        },
        {
          propName: 'isSmoth',
          propType: 'switch'
        },
        {
          propName: 'isPoint',
          propType: 'switch'
        },
        {
          propName: 'pointWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      linecolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uLineMulti: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      linestyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'lineColor',
          propType: 'color'
        },
        {
          propName: 'lineWidth',
          propType: 'number'
        },
        {
          propName: 'isSmoth',
          propType: 'switch'
        },
        {
          propName: 'isPoint',
          propType: 'switch'
        },
        {
          propName: 'pointWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      linecolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uLineArea: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      linestyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'lineColor',
          propType: 'color'
        },
        {
          propName: 'lineWidth',
          propType: 'number'
        },
        {
          propName: 'isSmoth',
          propType: 'switch'
        },
        {
          propName: 'isPoint',
          propType: 'switch'
        },
        {
          propName: 'pointWidth',
          propType: 'number'
        },
        {
          propName: 'areaColor',
          propType: 'lgcolor',
          condition: 'noimage'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      linecolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ],
      areaColor:[
        {
          propName: 'color',
          propType: 'lgcolor',
          condition: 'noimage'
        }
      ]
    },
    uLineAreaMulti: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      linestyle: [
        {
          propName: 'barName',
          propType: 'text'
        },
        {
          propName: 'lineWidth',
          propType: 'number'
        },
        {
          propName: 'isSmoth',
          propType: 'switch'
        },
        {
          propName: 'isPoint',
          propType: 'switch'
        },
        {
          propName: 'pointWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisColor',
          propType: 'color'
        },
        {
          propName: 'isX',
          propType: 'switch'
        },
        {
          propName: 'isXaxis',
          propType: 'switch'
        },
        {
          propName: 'xAxisWidth',
          propType: 'number'
        },
        {
          propName: 'xAxisType',
          propType: 'select'
        },
        {
          propName: 'isxAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'xAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'xAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'xAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'xAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'axisRotate',
          propType: 'number',
        },
        {
          propName: 'isXsplit',
          propType: 'switch'
        },
        {
          propName: 'xSplitColor',
          propType: 'color'
        },
        {
          propName: 'xSplitWidth',
          propType: 'number'
        },
        {
          propName: 'xSplitType',
          propType: 'select'
        },
        {
          propName: 'isY',
          propType: 'switch'
        },
        {
          propName: 'yAxisColor',
          propType: 'color'
        },
        {
          propName: 'isYaxis',
          propType: 'switch'
        },
        {
          propName: 'yAxisWidth',
          propType: 'number'
        },
        {
          propName: 'yAxisType',
          propType: 'select'
        },
        {
          propName: 'isyAxisLabel',
          propType: 'switch'
        },
        {
          propName: 'yAxisLableColor',
          propType: 'color'
        },
        {
          propName: 'yAxisLabelFontStyle',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontWeight',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelFontSize',
          propType: 'number'
        },
        {
          propName: 'yAxisLabelFontAlign',
          propType: 'select'
        },
        {
          propName: 'yAxisLabelBaseline',
          propType: 'select'
        },
        {
          propName: 'yaxisRotate',
          propType: 'number'
        },
        {
          propName: 'isYsplit',
          propType: 'switch'
        },
        {
          propName: 'ySplitColor',
          propType: 'color'
        },
        {
          propName: 'ySplitWidth',
          propType: 'number'
        },
        {
          propName: 'ySplitType',
          propType: 'select'
        },
        {
          propName: 'gridBottom',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridLeft',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'gridRight',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'isLabel',
          propType: 'switch'
        },
        {
          propName: 'labelPosition',
          propType: 'select'
        },
        {
          propName: 'labelFontSize',
          propType: 'number'
        },
        {
          propName: 'labelFormatter',
          propType: 'textarea'
        },
      ],
      linecolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ],
      areaColor:[
        {
          propName: 'color',
          propType: 'lgcolor',
          condition: 'noimage'
        }
      ]
    },
    uRadar: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      radarstyle: [
        {
          propName: 'radaColor',
          propType: 'color'
        },
        {
          propName: 'radarName',
          propType: 'text'
        },
        {
          propName: 'nameColor',
          propType: 'color'
        },
        {
          propName: 'radarShap',
          propType: 'select'
        },
        {
          propName: 'isSplitline',
          propType: 'switch'
        },
        {
          propName: 'splitlineColor',
          propType: 'color'
        },
        {
          propName: 'splitArea',
          propType: 'switch'
        },
        {
          propName: 'isAxisline',
          propType: 'switch'
        },
        {
          propName: 'axislineColor',
          propType: 'color'
        },
        {
          propName: 'radarSymbol',
          propType: 'select'
        },
      ],
      radarcolor:[
        {
          propName: 'color',
          propType: 'color'
        }
      ]
    },
    uDashboard: {
      style: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        }
      ],
      dashboardstyle:[
        {
          propName: 'radius',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'startAngle',
          propType: 'number',
        },
        {
          propName: 'endAngle',
          propType: 'number',
        },
        {
          propName: 'axisWidth',
          propType: 'number',
        },
        {
          propName: 'isAxisLable',
          propType: 'switch',
        },
        {
          propName: 'labelFontSize',
          propType: 'number',
        },
        {
          propName: 'labelFontWeight',
          propType: 'select',
        },
        {
          propName: 'labelColor',
          propType: 'color',
        },
        {
          propName: 'axisTickLength',
          propType: 'number',
        },
        {
          propName: 'axisTickColor',
          propType: 'color',
        },
        {
          propName: 'splitNumber',
          propType: 'number',
        },
        {
          propName: 'splitLineLength',
          propType: 'number',
        },
        {
          propName: 'splitLineColor',
          propType: 'color',
        },
        {
          propName: 'isPoints',
          propType: 'switch',
        },
        {
          propName: 'pointsLength',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'pointsWidth',
          propType: 'number',
        },
        {
          propName: 'isDetail',
          propType: 'switch',
        },
        {
          propName: 'detailWidth',
          propType: 'number',
        },
        {
          propName: 'detailHeight',
          propType: 'number',
        },
        {
          propName: 'detailBgColor',
          propType: 'color',
        },
        {
          propName: 'detailBorderWidth',
          propType: 'number',
        },
        {
          propName: 'detailBorderColor',
          propType: 'color',
        },
        {
          propName: 'detailOffsetLeft',
          propType: 'number',
        },
        {
          propName: 'detailOffsetTop',
          propType: 'numbersuffix',
          suffix: '%'
        },
        {
          propName: 'detailFontSize',
          propType: 'number',
        },
        {
          propName: 'detailFontWeight',
          propType: 'select',
        },
        {
          propName: 'detailFontColor',
          propType: 'color',
        },
        {
          propName: 'axisRange',
          propType: 'text',
        },
        {
          propName: 'rangeColor1',
          propType: 'lgcolor',
        },
        {
          propName: 'rangeColor2',
          propType: 'lgcolor',
        },
        {
          propName: 'rangeColor3',
          propType: 'lgcolor',
        },
        {
          propName: 'rangeColor4',
          propType: 'lgcolor',
        },
      ],
      dashboardcolor: [
        {
          propName: 'color',
          propType: 'color'
        },
      ]
    },
  },
  propertyLabel: {
    width: '宽度',
    height: '高度',
    top: '距上',
    left: '距左',
    backgroundImage: '背景',
    background: '背景色',
    textAlign: '对齐方式',
    fontSize: '字体大小',
    color: '颜色',
    heartbeat: '刷新间隔',
    borderColor: '边框颜色',
    leftCicleColor: '科幻圈颜色',
    specBorderColor: '科幻条颜色',
    bgColor: '背景色',
    rectTypeProp: '框样式',
    areaColor: '填充颜色',
    isEffectScatter: '位置',
    isEffectLine: '连接线',
    isAnimationLine: '飞线',
    scatterColor: '位置颜色',
    alColor: '动线颜色',
    globeBgColor: '地球颜色',
    mapColor: '地图颜色',
    mapBorderColor: '边界色',
    emphasisMapColor: '交互色',
    skyColor: '天空色',
    globeType: '地球材质',
    scaller3DColor: '圆点颜色',
    line3DColor: '飞线颜色',
    range: '值域范围',
    liquidColor1: '值域色一',
    liquidColor2: '值域色二',
    liquidColor3: '值域色三',
    liquidColor4: '值域色四',
    liquidColor5: '值域色五',
    iframeUrl: '链接地址',
    barName: '名称',
    barColor: '柱颜色',
    lineColor: '线颜色',
    isYsplit: 'Y辅助线',
    isXsplit: 'X辅助线',
    multiColor: '多色柱',
    xAxisColor: 'X轴颜色',
    yAxisColor: 'Y轴颜色',
    isXaxis: '显示X轴',
    isYaxis: '显示Y轴',
    isX: 'X及文字',
    isY: 'Y及文字',
    alertRectColor: '上三角色',
    alertIconColor: '图标颜色',
    pieName: '饼图名称',
    isLabelline: '标注线',
    isLabel: '标注',
    labelPosition: '标注位置',
    labelColor: '标注色',
    lineWidth: '标线宽',
    diagramSize: '饼图尺寸',
    roseColor: '玫瑰颜色',
    cicleWidth: '环宽',
    barWidth: '柱宽',
    barDirection: '柱方向',
    barPlace: '柱排列',
    axisfontSize: '轴字大小',
    barfontSize: '柱字大小',
    isPoint: '显示顶点',
    pointWidth: '顶点线宽',
    isSmoth: '是否平滑',
    labelFontSize: '标注字大小',
    barColorbg: '背景柱色',
    barColorinner: '内柱色',
    barGap: '柱偏移量',
    barWidthbg: '背景柱宽',
    barWidthinner: '内柱宽',
    barBorderRadius: '外柱圆角',
    axisRotate: 'X坐标旋转',
    yaxisRotate: 'Y坐标旋转',
    gridBottom: '偏移量↑',
    gridLeft: '偏移量→',
    gridRight: '偏移量←',
    axisPosition: 'X轴位置',
    pieRadius: '饼宽占比',
    pieOutRadius: '环外径',
    pieInnerRadius: '环内径',
    axisColor: '坐标系颜色',
    barBorderRadiusinner: '内柱圆角',
    radius: '图宽占比',
    radarName: '雷达图',
    nameColor: '坐标名颜色',
    radarShap: '坐标形状',
    isSplitline: '显示分割线',
    splitNumber: '分割线数量',
    splitlineColor: '分割线颜色',
    splitArea: '分割区域',
    isAxisline: '显示放射轴',
    axislineColor: '放射轴颜色',
    radarSymbol: '顶点形状',
    borderWidth: '边框宽度',
    itemMargin: '每项距离',
    fontColor: '字体颜色',
    cornerWidth: '边角宽',
    cornerHeight: '边角高',
    cornerSize: '边角线粗细',
    axisWidth: '坐标轴粗细',
    isAxisLable: '显示标注',
    labelFontWeight: '标注字粗细',
    axisTickLength: '刻度线长',
    axisTickColor: '刻度线色',
    splitLineLength: '分割线长',
    splitLineColor: '分割线色',
    isPoints: '显示指针',
    pointsLength: '指针长',
    pointsWidth: '指针宽',
    isDetail: '显示详情',
    detailWidth: '详情宽',
    detailHeight: '详情高',
    detailBorderWidth: '详情边宽',
    detailBorderColor: '详情边色',
    detailOffsetLeft: '详情距左',
    detailOffsetTop: '详情距上',
    detailFontSize: '详情字大小',
    detailFontWeight: '详情字粗细',
    detailFontColor: '详情字色',
    axisRange: '颜色值域',
    rangeColor1: '值域色一',
    rangeColor2: '值域色二',
    rangeColor3: '值域色三',
    rangeColor4: '值域色四',
    startAngle: '开始角度',
    endAngle: '结束角度',
    xSplitColor: 'X辅线色',
    xSplitWidth: 'X辅线宽',
    xSplitType: 'X辅线类型',
    ySplitColor: 'Y辅线色',
    ySplitWidth: 'Y辅线宽',
    ySplitType: 'Y辅线类型',
    numberLength: '数字长度',
    isShow: '是否显示',
    timeFormat: '日期格式',
    timeMargin: '时间偏移量',
    radaColor: '雷达颜色',
    labelOffset: '标注偏移',
    labelFormatter: '标注格式',
    symbol: '图标形状',
    symbolSizeX: '图标宽',
    symbolSizeY: '图标高',
    labelOffsetX: '标注偏移X',
    labelOffsetY: '标注偏移Y',
    lineLength: '标注线长内',
    lineLength2: '标注线长外',
    lineSmoth: '是否平滑',
    xAxisWidth: 'X轴宽度',
    yAxisWidth: 'Y轴宽度',
    xAxisType: 'X轴类型',
    yAxisType: 'Y轴类型',
    isxAxisLabel: '显示X刻度',
    isyAxisLabel: '显示Y刻度',
    xAxisLableColor: 'X刻度色',
    yAxisLableColor: 'Y刻度色',
    xAxisLabelFontStyle: 'X刻度类型',
    yAxisLabelFontStyle: 'Y刻度类型',
    xAxisLabelFontWeight: 'X刻度粗细',
    yAxisLabelFontWeight: 'Y刻度粗细',
    xAxisLabelFontSize: 'X刻度大小',
    yAxisLabelFontSize: 'Y刻度大小',
    xAxisLabelFontAlign: 'X刻度水平',
    yAxisLabelFontAlign: 'Y刻度水平',
    xAxisLabelBaseline: 'X刻度垂直',
    yAxisLabelBaseline: 'Y刻度垂直',
    axisType: '坐标轴类型'

  }
}
