export default {
  definition: {
    author: "leiting",
    createdate: "2016/4/29",
    corp: "uinnova",
  },
  canvas: {
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      height: "1080px",
      width: "1920px",
      position: "relative",
    },
    heartbeat: 5
  },
  layouts: [],

  /**
   * 图层
   */
  layout: {
    id: "",
    name: "图层",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isComponentOpen: false,
    isMoving: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "500px",
      backgroundImage: "linear-gradient(to bottom, rgba(88, 183, 255, 0.5), rgba(88, 183, 255, 0.5))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: []
  },

  /**
   * 单行文本
   */
  uSingleText: {
    id: "",
    name: "单行文本",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "208px",
      height: "80px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uSingleText",
        name: "单行文本",
        type: "USingleText",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {value: ["单行文本"]},
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "28px",
          left: "57px",
          textAlign: "left",
          fontSize: "20px",
          color: "rgba(113,252,244,1)"
        }
      }
    ]
  },

  /**
   * 数字翻牌器
   */
  uNumberCard: {
    id: "",
    name: "数字翻牌器",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "400px",
      height: "100px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uNumberCard",
        name: "数字翻牌器",
        type: "uNumberCard",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ["当日交易量"],
            value: [123456]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          height: "100%",
          margin: "0 auto"
        },
        componentStyle: {
          uComponentConfig: {
            width: "50px",
            height: "80px",
            numberLength: 6,
            borderColor: "rgba(130, 130, 130, 0.5)",
            cornerWidth: "10px",
            cornerHeight: "10px",
            cornerSize: "2px",
            itemMargin: "20px",
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
            fontSize: "50px",
            fontColor: "rgba(251,161,108, 1)"
          }
        }
      }
    ]
  },

  /**
   * 时间器
   */
  uTimeCard: {
    id: "",
    name: "时间器",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "400px",
      height: "100px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uTimeCard",
        name: "时间器",
        type: "uTimeCard",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "none",
          value: {
            name: "当日交易量",
            value: 123456
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          height: "100%",
          width: "100%",
          position: "relative"
        },
        componentStyle: {
          uComponentConfig: {
            fontSize: "30px",
            fontColor: "rgba(251,161,108, 1)",
            timeFormat: {
              value: "年月日",
              options: [
                {
                  value: '年月日',
                  label: '年月日'
                },
                {
                  value: '-',
                  label: '-'
                },
                {
                  value: '/',
                  label: '/'
                }
              ]
            },
            timeMargin: '20px'
          }
        }
      }
    ]
  },

  /**
   * 饼图
   */
  uPie: {
    id: "",
    name: "饼图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "300px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uPie",
        name: "饼图",
        type: "uPie",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            'name': ['9月', '2月', '3月', '4月', '5月'],
            'value': [335, 310, 234, 234, 234],
            'total': [400, 400, 400, 400, 400]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT * FROM TABLENAME"
        },
        style: {
          position: "absolute",
          top: "100px",
          left: "0px",
          width: "300px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            pieName: "饼图",
            isLabel: false,
            labelColor: "auto",
            fontSize: 12,
            labelPosition: {
              value: 'outside',
              options: [
                {
                  value: 'outside',
                  label: 'outside'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            labelFormatter: "{c}",
            lineWidth: 1,
            lineLength: 30,
            lineLength2: 10,
            lineSmoth: false,
            diagramSize: 0,
            pieRadius: "75%",
            pieOutRadius: "75%",
            pieInnerRadius: "50%",
            roseColor: 'rgba(40, 200, 189, 1)',
            multiColorValue: [],
          }
        }
      }
    ]
  },

  /**
   * 多环图
   */
  uPieMultiCicle: {
    id: "",
    name: "多环图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "300px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uPieMultiCicle",
        name: "多环图",
        type: "uPieMultiCicle",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            'name': ['1月', '2月', '3月', '4月'],
            'value': [335, 310, 211, 234],
            'total': [400, 400, 400, 400]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT * FROM TABLENAME"
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "300px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            pieName: "多环图",
            cicleWidth: "20px",
            diagramSize: 0,
            multiColorValue: []
          }
        }
      }
    ]
  },


  /**
   * 矩形框
   */
  uRectLayout: {
    id: "",
    name: "矩形框",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "640px",
      height: "360px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uRectLayout",
        name: "矩形框",
        type: "uRectLayout",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "none",
          value: {},
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          }
        },
        style: {
          position: "relative",
          width: "100%",
          height: "100%"
        },
        componentStyle: {
          uRectStyle: {
            borderColor: "rgba(0,137,250, 1)",
            leftCicleColor: "rgba(0,127,255, 1)",
            specBorderColor: "rgba(102,254,255, 1)",
            alertRectColor: "rgba(47,112,143, 1)",
            alertIconColor: "rgba(204,204,204, 1)",
            bgColor: "linear-gradient(to bottom, rgba(0,137,251, 0.2), rgba(0,137,251, 0.2))",
            rectTypeProp: {
              value: "矩形框-横向",
              options: [{
                value: '普通矩形框',
                label: '普通矩形框'
              }, {
                value: '矩形框-横向',
                label: '矩形框-横向'
              }, {
                value: '矩形框-竖向',
                label: '矩形框-竖向'
              }, {
                value: '科幻矩形框',
                label: '科幻矩形框'
              }, {
                key: "告警矩形框",
                value: "告警矩形框"
              }]
            }
          },
          uRectType: "矩形框-横向"
        }
      }
    ]
  },

  /**
   * 2D中国地图
   */
  u2DMapChina: {
    id: "",
    name: "2D中国地图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "1000px",
      height: "800px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "u2DMapChina",
        name: "2D中国地图",
        type: "u2DMapChina",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: [
            [{name: '北京'}, {name: '上海', value: 95}],
            [{name: '北京'}, {name: '广州', value: 90}],
            [{name: '北京'}, {name: '大连', value: 80}],
            [{name: '北京'}, {name: '南宁', value: 70}],
            [{name: '北京'}, {name: '南昌', value: 60}],
            [{name: '北京'}, {name: '拉萨', value: 50}],
            [{name: '北京'}, {name: '长春', value: 40}],
            [{name: '北京'}, {name: '包头', value: 30}],
            [{name: '北京'}, {name: '重庆', value: 20}],
            [{name: '北京'}, {name: '常州', value: 10}]
          ],
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1000px",
          height: "800px"
        },
        componentStyle: {
          uComponentConfig: {
            areaColor: 'rgba(66, 132, 255, 0.74)',
            borderColor: 'rgba(141, 189, 255, 1)',
            isEffectScatter: true,
            isEffectLine: true,
            isAnimationLine: true,
            scatterColor: 'rgba(113,252,244,1)',
            alColor: 'rgba(255,255,255,1)'
          }
        }
      }
    ]
  },

  /**
   * 2D世界地图
   */
  u2DMapWorld: {
    id: "",
    name: "2D世界地图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "1000px",
      height: "800px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "u2DMapWorld",
        name: "2D世界地图",
        type: "u2DMapWorld",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: [
            [{name: '北京'}, {name: '上海', value: 95}],
            [{name: '北京'}, {name: '广州', value: 90}],
            [{name: '北京'}, {name: '大连', value: 80}],
            [{name: '北京'}, {name: '南宁', value: 70}],
            [{name: '北京'}, {name: '南昌', value: 60}],
            [{name: '北京'}, {name: '拉萨', value: 50}],
            [{name: '北京'}, {name: '长春', value: 40}],
            [{name: '北京'}, {name: '包头', value: 30}],
            [{name: '北京'}, {name: '重庆', value: 20}],
            [{name: '北京'}, {name: '常州', value: 10}],
            [{name: '北京'}, {name: '纽约', value: 95}],
            [{name: '北京'}, {name: '拉斯维加斯', value: 70}]
          ],
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1000px",
          height: "800px"
        },
        componentStyle: {
          uComponentConfig: {
            areaColor: 'rgba(66, 132, 255, 0.74)',
            borderColor: 'rgba(141, 189, 255, 1)',
            isEffectScatter: true,
            isEffectLine: true,
            isAnimationLine: true,
            scatterColor: 'rgba(113,252,244,1)',
            alColor: 'rgba(255,255,255,1)'
          }
        }
      }
    ]
  },

  /**
   * 3D地球
   */
  uGlobe: {
    id: "",
    name: "3D地球",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "1000px",
      height: "800px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uGlobe",
        name: "3D地球",
        type: "uGlobe",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: [
            [{name: '北京'}, {name: '上海', value: 95}],
            [{name: '北京'}, {name: '广州', value: 90}],
            [{name: '北京'}, {name: '大连', value: 80}],
            [{name: '北京'}, {name: '南宁', value: 70}],
            [{name: '北京'}, {name: '南昌', value: 60}],
            [{name: '北京'}, {name: '拉萨', value: 50}],
            [{name: '北京'}, {name: '长春', value: 40}],
            [{name: '北京'}, {name: '包头', value: 30}],
            [{name: '北京'}, {name: '重庆', value: 20}],
            [{name: '北京'}, {name: '常州', value: 10}],
            [{name: '北京'}, {name: '纽约', value: 95}],
            [{name: '北京'}, {name: '拉斯维加斯', value: 70}]
          ],
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1000px",
          height: "800px"
        },
        componentStyle: {
          uComponentConfig: {
            globeType: {
              value: "材质地球",
              options: [{
                value: '材质地球',
                label: '材质地球'
              }, {
                value: '地图地球',
                label: '地图地球'
              }]
            },
            globeBgColor: 'rgba(0,55,120,0.5)',
            mapColor: 'rgba(66, 132, 255, 0.74)',
            mapBorderColor: 'rgba(141, 189, 255, 1)',
            emphasisMapColor: 'rgba(66, 132, 255, 0.34)',
            skyColor: 'rgba(0,0,0,1)',
            scaller3DColor: 'rgba(89, 131, 255, 1)',
            line3DColor: 'rgba(56, 110, 113, 0.76)',
            isEffectLine: true,
            isEffectScatter: true,
          }
        }
      }
    ]
  },

  /**
   * 水位图
   */
  uLiquidFill: {
    id: "",
    name: "水位图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "300px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uLiquidFill",
        name: "水位图",
        type: "uLiquidFill",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['完成率'],
            value: ['0.9']
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "300px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            radius: '90%',
            range: '0-0.2;0.2-0.4;0.4-0.6;0.6-0.8;0.8-1',
            liquidColor1: 'rgba(66,248,66,1)',
            liquidColor2: 'rgba(34,139,255,1)',
            liquidColor3: 'rgba(248,212,66,1)',
            liquidColor4: 'rgba(243,101,35,1)',
            liquidColor5: 'rgba(248,66,66,1)',
            diagramSize: 0
          }
        }
      }
    ]
  },

  /**
   * iframe
   */
  uIframe: {
    id: "",
    name: "iframe",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uIframe",
        name: "iframe",
        type: "uIframe",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "none",
          value: {},
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          }
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%"
        },
        componentStyle: {
          uComponentConfig: {
            iframeUrl: "http://www.uinnova.com"
          }
        }
      }
    ]
  },

  /**
   * 柱状图
   */
  uBar: {
    id: "",
    name: "柱状图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uBar",
        name: "柱状图",
        type: "uBar",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['1月', '2月', '3月', '4月', '5月'],
            '电话': [335, 310, 234, 234, 234],
            '微信': [335, 310, 234, 234, 234]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "服务请求种类数量统计",
            barColor: "rgba(0,255,255,0.5)",
            xAxisColor: "rgba(197, 197, 197, 1)",
            xAxisWidth: 1,
            xAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isxAxisLabel: true,
            xAxisLableColor: "rgba(197, 197, 197, 1)",
            xAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            xAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            xAxisLabelFontSize: 12,
            xAxisLabelFontAlign: {
              value: "center",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            xAxisLabelBaseline: {
              value: "top",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yAxisColor: "rgba(197, 197, 197, 1)",
            yAxisWidth: 1,
            yAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isyAxisLabel: true,
            yAxisLableColor: "rgba(197, 197, 197, 1)",
            yAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            yAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            yAxisLabelFontSize: 12,
            yAxisLabelFontAlign: {
              value: "right",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            yAxisLabelBaseline: {
              value: "middle",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yaxisRotate: 0,
            gridBottom: "3%",
            gridLeft: "3%",
            gridRight: "4%",
            axisRotate: 0,
            barDirection: {
              value: "竖向",
              options: [
                {
                  value: '竖向',
                  label: '竖向'
                },
                {
                  value: '横向',
                  label: '横向'
                }
              ]
            },
            barPlace: {
              value: "展开",
              options: [
                {
                  value: '展开',
                  label: '展开'
                },
                {
                  value: '堆叠',
                  label: '堆叠'
                }
              ]
            },
            isLabel: true,
            labelPosition: {
              value: 'insideTop',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'insideLeft',
                  label: 'insideLeft'
                },
                {
                  value: 'insideRight',
                  label: 'insideRight'
                },
                {
                  value: 'insideTop',
                  label: 'insideTop'
                },
                {
                  value: 'insideBottom',
                  label: 'insideBottom'
                },
                {
                  value: 'insideTopLeft',
                  label: 'insideTopLeft'
                },
                {
                  value: 'insideBottomLeft',
                  label: 'insideBottomLeft'
                },
                {
                  value: 'insideTopRight',
                  label: 'insideTopRight'
                },
                {
                  value: 'insideBottomRight',
                  label: 'insideBottomRight'
                }
              ]
            },
            barWidth: "30%",
            isXaxis: true,
            isX: true,
            isYaxis: true,
            isY: true,
            isYsplit: false,
            isXsplit: false,
            xSplitColor: "rgba(255,255,255, 1)",
            xSplitWidth: 1,
            xSplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            ySplitColor: "rgba(255,255,255, 1)",
            ySplitWidth: 1,
            ySplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            symbolSizeX: '90%',
            symbolSizeY: '60%',
            symbol: {
              value: "roundRect",
              options: [
                {
                  value: 'circle',
                  label: 'circle'
                },
                {
                  value: 'rect',
                  label: 'rect'
                },
                {
                  value: 'roundRect',
                  label: 'roundRect'
                },
                {
                  value: 'triangle',
                  label: 'triangle'
                },
                {
                  value: 'diamond',
                  label: 'diamond'
                },
                {
                  value: 'pin',
                  label: 'pin'
                },
                {
                  value: 'arrow',
                  label: 'arrow'
                }
              ]
            },
            labelColor: "rgba(255,255,255, 1)",
            labelFontSize: 12,
            labelOffsetX: 0,
            labelOffsetY: 0,
            labelFormatter: "{c}",
            multiColor: false,
            multiColorValue: []
          }
        }
      }
    ]
  },

  /**
   * 柱状进度条
   */
  uBarProcess: {
    id: "",
    name: "对比横柱图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uBarProcess",
        name: "对比横柱图",
        type: "uBarProcess",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['巡检进度'],
            'total': [10000],
            '计划完成次数': [10000],
            '实际完成次数': [6000],
            '发现故障次数': [2000],
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "对比横柱图",
            isLabel: true,
            labelPosition: {
              value: 'insideRight',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'insideLeft',
                  label: 'insideLeft'
                },
                {
                  value: 'insideRight',
                  label: 'insideRight'
                },
                {
                  value: 'insideTop',
                  label: 'insideTop'
                },
                {
                  value: 'insideBottom',
                  label: 'insideBottom'
                },
                {
                  value: 'insideTopLeft',
                  label: 'insideTopLeft'
                },
                {
                  value: 'insideBottomLeft',
                  label: 'insideBottomLeft'
                },
                {
                  value: 'insideTopRight',
                  label: 'insideTopRight'
                },
                {
                  value: 'insideBottomRight',
                  label: 'insideBottomRight'
                }
              ]
            },
            labelColor: "rgba(255,255,255, 1)",
            labelFontSize: 12,
            barWidth: "50",
            multiColor: false,
            labelOffset: -50,
            labelFormatter: "{c}次\n{b}",
            multiColorValue: []
          }
        }
      }
    ]
  },

  /**
   * 响应进度条
   * todo:
   */
  uBarProgress: {
    id: "",
    name: "进度条",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uBarProgress",
        name: "进度条",
        type: "uBarProgress",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['进度'],
            value: [0.4]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "进度条",
            isLabel: true,
            labelPosition: {
              value: 'insideRight',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'insideLeft',
                  label: 'insideLeft'
                },
                {
                  value: 'insideRight',
                  label: 'insideRight'
                },
                {
                  value: 'insideTop',
                  label: 'insideTop'
                },
                {
                  value: 'insideBottom',
                  label: 'insideBottom'
                },
                {
                  value: 'insideTopLeft',
                  label: 'insideTopLeft'
                },
                {
                  value: 'insideBottomLeft',
                  label: 'insideBottomLeft'
                },
                {
                  value: 'insideTopRight',
                  label: 'insideTopRight'
                },
                {
                  value: 'insideBottomRight',
                  label: 'insideBottomRight'
                }
              ]
            },
            labelColor: "rgba(255,255,255, 1)",
            labelFontSize: 12,
            barWidth: "50",
            multiColor: false,
            labelOffset: -50,
            labelFormatter: "{c}次\n{b}",
            range: '0-0.2;0.2-0.4;0.4-0.6;0.6-0.8;0.8-1',
            liquidColor1: 'rgba(66,248,66,1)',
            liquidColor2: 'rgba(34,139,255,1)',
            liquidColor3: 'rgba(248,212,66,1)',
            liquidColor4: 'rgba(243,101,35,1)',
            liquidColor5: 'rgba(248,66,66,1)',
          }
        }
      }
    ]
  },

  /**
   * 底色柱状图
   */
  uBarBG: {
    id: "",
    name: "带底柱状图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uBarBG",
        name: "带底柱状图",
        type: "uBarBG",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['企业网银', '手机银行', 'ATM/CDM', '综合柜面系统', '个人网银'],
            '电话': [335, 310, 234, 234, 234]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: ""
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "服务请求种类数量统计",
            barColorbg: "rgba(30, 133, 244, 0.16)",
            barColorinner: "linear-gradient(to bottom, rgba(188,133,107, 1), rgba(9,40,77, 1))",
            barWidthbg: 18,
            barWidthinner: 6,
            barBorderRadius: "4,4,0,0",
            barBorderRadiusinner: "0,0,0,0",
            barGap: "-65%",
            gridBottom: "3%",
            gridLeft: "3%",
            gridRight: "4%",
            axisRotate: 0,
            xAxisColor: "rgba(89,89,89,1)",
            isXaxis: true,
            isX: true,
            isXsplit: false,
            yAxisColor: "rgba(89,89,89,1)",
            isYaxis: true,
            isY: true,
            isYsplit: false,
            barDirection: {
              value: "竖向",
              options: [
                {
                  value: '竖向',
                  label: '竖向'
                },
                {
                  value: '横向',
                  label: '横向'
                }
              ]
            },
            barPlace: {
              value: "展开",
              options: [
                {
                  value: '展开',
                  label: '展开'
                },
                {
                  value: '堆叠',
                  label: '堆叠'
                }
              ]
            },
            isLabel: true,
            labelPosition: {
              value: 'top',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'insideLeft',
                  label: 'insideLeft'
                },
                {
                  value: 'insideRight',
                  label: 'insideRight'
                },
                {
                  value: 'insideTop',
                  label: 'insideTop'
                },
                {
                  value: 'insideBottom',
                  label: 'insideBottom'
                },
                {
                  value: 'insideTopLeft',
                  label: 'insideTopLeft'
                },
                {
                  value: 'insideBottomLeft',
                  label: 'insideBottomLeft'
                },
                {
                  value: 'insideTopRight',
                  label: 'insideTopRight'
                },
                {
                  value: 'insideBottomRight',
                  label: 'insideBottomRight'
                }
              ]
            },
            labelColor: "rgba(19, 236, 244, 1)",
            barfontSize: 12,
            xSplitColor: "rgba(255,255,255, 1)",
            xSplitWidth: 1,
            xSplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            ySplitColor: "rgba(255,255,255, 1)",
            ySplitWidth: 1,
            ySplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            multiColor: false,
            multiColorValue: [],
            xAxisWidth: 1,
            xAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isxAxisLabel: true,
            xAxisLableColor: "rgba(197, 197, 197, 1)",
            xAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            xAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            xAxisLabelFontSize: 12,
            xAxisLabelFontAlign: {
              value: "center",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            xAxisLabelBaseline: {
              value: "top",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yAxisWidth: 1,
            yAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isyAxisLabel: true,
            yAxisLableColor: "rgba(197, 197, 197, 1)",
            yAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            yAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            yAxisLabelFontSize: 12,
            yAxisLabelFontAlign: {
              value: "right",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            yAxisLabelBaseline: {
              value: "middle",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yaxisRotate: 0,
          }
        }
      }
    ]
  },

  /**
   * 横向左右柱状图
   */
  uBarLRHoriz: {
    id: "",
    name: "水平双向柱",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uBarLRHoriz",
        name: "水平双向柱",
        type: "uBarLRHoriz",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['1月', '2月', '3月', '4月', '5月'],
            '电话-left': [335, 310, 234, 234, 234],
            '微信-left': [335, 310, 234, 234, 234],
            '邮件-right': [335, 310, 234, 234, 234],
            'QQ-right': [335, 310, 234, 234, 234]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT COLUMN FROM TABLE"
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "服务请求统计",
            axisColor: "rgba(89,89,89,1)",
            barPlace: {
              value: "展开",
              options: [
                {
                  value: '展开',
                  label: '展开'
                },
                {
                  value: '堆叠',
                  label: '堆叠'
                }
              ]
            },
            isLabel: true,
            isXaxis: true,
            isX: true,
            isXsplit: false,
            xSplitColor: "rgba(255,255,255, 1)",
            xSplitWidth: 1,
            xSplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            axisfontSize: 12,
            axisPosition: {
              value: "bottom",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            barfontSize: 12,
            barWidth: "20%",
            multiColorValue: [],
            axisWidth: 1,
            axisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
          }
        }
      }
    ]
  },

  /**
   * 折线图
   */
  uLine: {
    id: "",
    name: "折线图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uLine",
        name: "折线图",
        type: "uLine",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['1月', '2月', '3月', '4月', '5月'],
            '电话': [335, 310, 234, 234, 234],
            '微信': [315, 280, 214, 134, 54]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT COLUMN FROM TABLENAME"
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            barName: "服务请求种类数量统计",
            lineColor: "rgba(0, 255, 255, 0.75)",
            lineWidth: 1,
            areaColor: "rgba(0, 255, 255, 0.75)",
            gridBottom: "3%",
            gridLeft: "3%",
            gridRight: "4%",
            axisRotate: 0,
            xAxisColor: "rgba(89,89,89,1)",
            isX: true,
            isXaxis: true,
            isXsplit: false,
            isY: true,
            yAxisColor: "rgba(89,89,89,1)",
            isYaxis: true,
            isYsplit: false,
            xSplitColor: "rgba(255,255,255, 1)",
            xSplitWidth: 1,
            xSplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            ySplitColor: "rgba(255,255,255, 1)",
            ySplitWidth: 1,
            ySplitType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isPoint: true,
            pointWidth: 1,
            isSmoth: false,
            isLabel: true,
            labelPosition: {
              value: 'insideTop',
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                },
                {
                  value: 'inside',
                  label: 'inside'
                },
                {
                  value: 'insideLeft',
                  label: 'insideLeft'
                },
                {
                  value: 'insideRight',
                  label: 'insideRight'
                },
                {
                  value: 'insideTop',
                  label: 'insideTop'
                },
                {
                  value: 'insideBottom',
                  label: 'insideBottom'
                },
                {
                  value: 'insideTopLeft',
                  label: 'insideTopLeft'
                },
                {
                  value: 'insideBottomLeft',
                  label: 'insideBottomLeft'
                },
                {
                  value: 'insideTopRight',
                  label: 'insideTopRight'
                },
                {
                  value: 'insideBottomRight',
                  label: 'insideBottomRight'
                }
              ]
            },
            labelFontSize: 12,
            labelFormatter: "{c}",
            multiColorValue: [],
            multiAreaColorValue: [],
            xAxisWidth: 1,
            xAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isxAxisLabel: true,
            xAxisLableColor: "rgba(197, 197, 197, 1)",
            xAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            xAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            xAxisLabelFontSize: 12,
            xAxisLabelFontAlign: {
              value: "center",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            xAxisLabelBaseline: {
              value: "top",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yAxisWidth: 1,
            yAxisType: {
              value: "solid",
              options: [
                {
                  value: 'solid',
                  label: 'solid'
                },
                {
                  value: 'dashed',
                  label: 'dashed'
                },
                {
                  value: 'dotted',
                  label: 'dotted'
                }
              ]
            },
            isyAxisLabel: true,
            yAxisLableColor: "rgba(197, 197, 197, 1)",
            yAxisLabelFontStyle: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'italic',
                  label: 'italic'
                },
                {
                  value: 'oblique',
                  label: 'oblique'
                }
              ]
            },
            yAxisLabelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            yAxisLabelFontSize: 12,
            yAxisLabelFontAlign: {
              value: "right",
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                {
                  value: 'center',
                  label: 'center'
                }
              ]
            },
            yAxisLabelBaseline: {
              value: "middle",
              options: [
                {
                  value: 'top',
                  label: 'top'
                },
                {
                  value: 'middle',
                  label: 'middle'
                },
                {
                  value: 'bottom',
                  label: 'bottom'
                }
              ]
            },
            yaxisRotate: 0,
          },
        }
      }
    ]
  },

  /**
   * 折线图
   */
  uRadar: {
    id: "",
    name: "雷达图",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "500px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uRadar",
        name: "雷达图",
        type: "uRadar",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            name: ['电话', '微信', '邮件', 'QQ', '运维工具'],
            max: [35, 51, 27, 58, 17],
            '1月': [35, 51, 27, 38, 10],
            '2月': [10, 11, 23, 21, 17],
            '3月': [5, 13, 11, 58, 16],
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT COLUMN FROM TABLENAME"
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "500px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            radarName: "一季度服务请求数量",
            nameColor: "rgba(220, 112, 11, 1)",
            radarShap: {
              value: 'polygon',
              options: [
                {
                  value: 'polygon',
                  label: 'polygon'
                },
                {
                  value: 'circle',
                  label: 'circle'
                },
              ]
            },
            isSplitline: true,
            splitNumber: 4,
            splitlineColor: "rgba(238,197,102, 1)",
            splitArea: false,
            isAxisline: true,
            axislineColor: "rgba(238,197,102, 0.5)",
            radarSymbol: {
              value: 'none',
              options: [
                {
                  value: 'none',
                  label: 'none'
                },
                {
                  value: 'circle',
                  label: 'circle'
                },
                {
                  value: 'rect',
                  label: 'rect'
                },
                {
                  value: 'roundRect',
                  label: 'roundRect'
                },
                {
                  value: 'triangle',
                  label: 'triangle'
                },
                {
                  value: 'diamond',
                  label: 'diamond'
                },
                {
                  value: 'pin',
                  label: 'pin'
                },
                {
                  value: 'arrow',
                  label: 'arrow'
                },
              ]
            },
            radaColor: "rgba(249,113,60, 1)"
          }
        }
      }
    ]
  },

  /**
   * 仪表盘
   */
  uDashboard: {
    id: "",
    name: "仪表盘",
    layoutType: "normal",
    isSelected: false,
    isResizing: false,
    isMoving: false,
    isComponentOpen: false,
    isChange: false,
    isEditLyoutName: false,
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "300px",
      height: "300px",
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
      isShow: true,
      isLock: false
    },
    components: [
      {
        id: "uDashboard",
        name: "仪表盘",
        type: "uDashboard",
        heartbeat: 5,
        isSelected: false,
        isResizing: false,
        isMoving: false,
        datasource: {
          type: "json",
          value: {
            'name': ['响应时长'],
            'value': [50],
            'max': [200],
            'min': [0]
          },
          url: {
            reqtype: "POST",
            value: ""
          },
          legend: ['x轴', '系列1', '系列2'],
          database: {
            id: -1,
            dbtype: "",
            dbinstance: "",
            host: "",
            port: "",
            username: "",
            passwd: ""
          },
          sql: "SELECT * FROM TABLENAME"
        },
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "300px",
          height: "300px"
        },
        componentStyle: {
          uComponentConfig: {
            dashboardName: "仪表盘",
            radius: "90%",
            startAngle: 180,
            endAngle: 0,
            axisRange: "0.25,0.5,0.75,1",
            rangeColor1: "linear-gradient(to top, rgba(196,28,44, 1), rgba(236,68,14, 1))",
            rangeColor2: "linear-gradient(to right, rgba(236,68,14, 1), rgba(244,142,5, 1))",
            rangeColor3: "linear-gradient(to right, rgba(244,142,5, 1), rgba(85,186,165, 1))",
            rangeColor4: "linear-gradient(to bottom, rgba(85,186,165, 1), rgba(0,182,238, 1))",
            axisWidth: 3,
            isAxisLable: true,
            labelFontSize: 14,
            labelFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            labelColor: "rgba(255,255,255, 1)",
            axisTickLength: 10,
            axisTickColor: 'auto',
            splitNumber: 8,
            splitLineLength: 15,
            splitLineColor: 'auto',
            isPoints: true,
            pointsLength: "80%",
            pointsWidth: 8,
            isDetail: true,
            detailWidth: 100,
            detailHeight: 40,
            detailBgColor: "rgba(0,182,238, 0.8)",
            detailBorderWidth: 0,
            detailBorderColor: "rgba(0,0,0, 1)",
            detailOffsetLeft: 0,
            detailOffsetTop: "30%",
            detailFontSize: 30,
            detailFontWeight: {
              value: "normal",
              options: [
                {
                  value: 'normal',
                  label: 'normal'
                },
                {
                  value: 'bold',
                  label: 'bold'
                },
                {
                  value: 'bolder',
                  label: 'bolder'
                },
                {
                  value: 'lighter',
                  label: 'lighter'
                }
              ]
            },
            detailFontColor: "rgba(255,255,255, 1)",
            multiColorValue: []
          }
        }
      }
    ]
  },
}
