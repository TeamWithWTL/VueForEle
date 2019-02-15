import Mock from 'mockjs'

const topnav = Mock.mock([{
        label: "资产台账",
        index: "ledger"
    },
    {
        label: "生产运行",
        index: "production"
    },
    {
        label: "协同办公",
        index: "together"
    },
    {
        label: "统计分析",
        index: "analysis"
    },
    {
        label: "系统管理",
        index: "sysytem"
    }
])
const ledge = Mock.mock([{
        label: "资产类型",
        index: "/home/test1"
    },
    {
        label: "官网台账",
        index: "/home/test2"
    },
    {
        label: "管线台账",
        index: "/home/test2"
    },
    {
        label: "设备台账",
        index: "/home/test2"
    },
    {
        label: "换热站台账",
        index: "/home/test2"
    },
    {
        label: "阀门井台账",
        index: "/home/ledger/valuewell"
    },
    {
        label: "生产商台账",
        index: "/home/test2"
    }
])
const production = Mock.mock([{
        label: "区域管理",
        index: "/home/test1",
    },
    {
        label: "巡检任务",
        index: "/home/test2"
    },
    {
        label: "官网巡检",
        index: "/home/test2"
    },
    {
        label: "报停巡检",
        index: "/home/test2",
        children: [{
                label: "社区管理",
                index: "/add"
            },
            {
                label: "报停用户",
                index: "/info"
            },
            {
                label: "报停巡检记录",
                index: "/info"
            },
            {
                label: "报停检查",
                index: "/info"
            }
        ]
    },
    {
        label: "缺陷管理",
        index: "/home/test2"
    },
    {
        label: "供热情况",
        index: "/home/test2"
    },
    {
        label: "检修记录",
        index: "/home/test2"
    },
    {
        label: "设备更换记录",
        index: "/home/test2"
    },
    {
        label: "分户计量",
        index: "/home/test2"
    }
])
const together = Mock.mock([{
        label: "通知公告",
        index: "/home/test1",
        children: [{
                label: "发布公告",
                index: "/add"
            },
            {
                label: "接收公告",
                index: "/info"
            }
        ]
    },
    {
        label: "人员定位",
        index: "/home/test2"
    },
    {
        label: "请假记录",
        index: "/home/test2"
    }
])
const analysis = Mock.mock([{
        label: "管线巡检",
        index: "/home/test1",
        children: [{
                label: "管线状态统计",
                index: "/add"
            },
            {
                label: "管线类型统计",
                index: "/info"
            }
        ]
    },
    {
        label: "设备统计",
        index: "/home/test1",
        children: [{
                label: "设备类型统计",
                index: "/add"
            },
            {
                label: "设备状态统计",
                index: "/info"
            },
            {
                label: "设备厂家统计",
                index: "/info"
            }
        ],
    },
    {
        label: "阀门井统计",
        index: "/home/test1",
        children: [{
                label: "阀门井厂家",
                index: "/add"
            },
            {
                label: "阀门井状态",
                index: "/info"
            }
        ]
    },
    {
        label: "运维统计",
        index: "/home/test1",
        children: [{
                label: "任务完成率",
                index: "/add"
            },
            {
                label: "事件类型统计",
                index: "/info"
            },
            {
                label: "事件状态统计",
                index: "/info"
            }
        ]
    },
    {
        label: "个人任务统计",
        index: "/home/test1",
        children: [{
            label: "个人任务完成率",
            index: "/add"
        }]
    },
    {
        label: "安检统计",
        index: "/home/test1",
        children: [{
                label: "社区安检率",
                index: "/add"
            },
            {
                label: "个人民用户安检统计",
                index: "/info"
            },
            {
                label: "个人工商用户安检统计",
                index: "/info"
            }
        ]
    },
    {
        label: "缺陷统计",
        index: "/home/test2"
    },
    {
        label: "盗暖统计",
        index: "/home/test2"
    }
])
const sysytem = Mock.mock([{
        label: "基础信息",
        index: "/home",
        children: [{
                label: "字典管理",
                index: "/add"
            },
            {
                label: "菜单管理",
                index: "/tree"
            },
            {
                label: "系统配置",
                index: '/info'
            },
            {
                label: "系统配置",
                index: "/info"
            }
        ]
    },
    {
        label: "组织架构",
        index: "/home/test12",
        children: [{
                label: "部门管理",
                index: "/add"
            },
            {
                label: "人员管理",
                index: "/info"
            },
            {
                label: "班组管理",
                index: "/info"
            }
        ],
    },
    {
        label: "权限管理",
        index: "/home/test11",
        children: [{
                label: "角色管理",
                index: "/add"
            },
            {
                label: "角色人员",
                index: "/info"
            },
            {
                label: "授权管理",
                index: "/info"
            },
            {
                label: "数据权限",
                index: "/info"
            },
            {
                label: "功能管理",
                index: "/info"
            }
        ]
    },
    {
        label: "计划管理",
        index: "/home/test14",
        children: [{
            label: "计划模板",
            index: "/add"
        }]
    }
])
const tree = Mock.mock([{
        label: "资产台账",
        index: "ledger",
        children: [{
                label: "资产类型",
                index: "/home/test1"
            },
            {
                label: "官网台账",
                index: "/home/test2"
            },
            {
                label: "管线台账",
                index: "/home/test2"
            },
            {
                label: "设备台账",
                index: "/home/test2"
            },
            {
                label: "换热站台账",
                index: "/home/test2"
            },
            {
                label: "阀门井台账",
                index: "/home/ledger/valuewell"
            },
            {
                label: "生产商台账",
                index: "/home/test2"
            }
        ]
    },
    {
        label: "生产运行",
        index: "production",
        children: [{
                label: "区域管理",
                index: "/home/test1",
            },
            {
                label: "巡检任务",
                index: "/home/test2"
            },
            {
                label: "官网巡检",
                index: "/home/test2"
            },
            {
                label: "报停巡检",
                index: "/home/test2",
                children: [{
                        label: "社区管理",
                        index: "/add"
                    },
                    {
                        label: "报停用户",
                        index: "/info"
                    },
                    {
                        label: "报停巡检记录",
                        index: "/info"
                    },
                    {
                        label: "报停检查",
                        index: "/info"
                    }
                ]
            },
            {
                label: "缺陷管理",
                index: "/home/test2"
            },
            {
                label: "供热情况",
                index: "/home/test2"
            },
            {
                label: "检修记录",
                index: "/home/test2"
            },
            {
                label: "设备更换记录",
                index: "/home/test2"
            },
            {
                label: "分户计量",
                index: "/home/test2"
            }
        ]
    },
    {
        label: "协同办公",
        index: "together",
        children: [{
                label: "通知公告",
                index: "/home/test1",
                children: [{
                        label: "发布公告",
                        index: "/add"
                    },
                    {
                        label: "接收公告",
                        index: "/info"
                    }
                ]
            },
            {
                label: "人员定位",
                index: "/home/test2"
            },
            {
                label: "请假记录",
                index: "/home/test2"
            }

        ]
    },
    {
        label: "统计分析",
        index: "analysis",
        children: [{
                label: "管线巡检",
                index: "/home/test1",
                children: [{
                        label: "管线状态统计",
                        index: "/add"
                    },
                    {
                        label: "管线类型统计",
                        index: "/info"
                    }
                ]
            },
            {
                label: "设备统计",
                index: "/home/test1",
                children: [{
                        label: "设备类型统计",
                        index: "/add"
                    },
                    {
                        label: "设备状态统计",
                        index: "/info"
                    },
                    {
                        label: "设备厂家统计",
                        index: "/info"
                    }
                ],
            },
            {
                label: "阀门井统计",
                index: "/home/test1",
                children: [{
                        label: "阀门井厂家",
                        index: "/add"
                    },
                    {
                        label: "阀门井状态",
                        index: "/info"
                    }
                ]
            },
            {
                label: "运维统计",
                index: "/home/test1",
                children: [{
                        label: "任务完成率",
                        index: "/add"
                    },
                    {
                        label: "事件类型统计",
                        index: "/info"
                    },
                    {
                        label: "事件状态统计",
                        index: "/info"
                    }
                ]
            },
            {
                label: "个人任务统计",
                index: "/home/test1",
                children: [{
                    label: "个人任务完成率",
                    index: "/add"
                }]
            },
            {
                label: "安检统计",
                index: "/home/test1",
                children: [{
                        label: "社区安检率",
                        index: "/add"
                    },
                    {
                        label: "个人民用户安检统计",
                        index: "/info"
                    },
                    {
                        label: "个人工商用户安检统计",
                        index: "/info"
                    }
                ]
            },
            {
                label: "缺陷统计",
                index: "/home/test2"
            },
            {
                label: "盗暖统计",
                index: "/home/test2"
            }

        ]
    },
    {
        label: "系统管理",
        index: "sysytem",
        children: [{
                label: "基础信息",
                index: "/home",
                children: [{
                        label: "字典管理",
                        index: "/add"
                    },
                    {
                        label: "菜单管理",
                        index: "/tree"
                    },
                    {
                        label: "系统配置",
                        index: '/info'
                    },
                    {
                        label: "系统配置",
                        index: "/info"
                    }
                ]
            },
            {
                label: "组织架构",
                index: "/home/test12",
                children: [{
                        label: "部门管理",
                        index: "/add"
                    },
                    {
                        label: "人员管理",
                        index: "/info"
                    },
                    {
                        label: "班组管理",
                        index: "/info"
                    }
                ],
            },
            {
                label: "权限管理",
                index: "/home/test11",
                children: [{
                        label: "角色管理",
                        index: "/add"
                    },
                    {
                        label: "角色人员",
                        index: "/info"
                    },
                    {
                        label: "授权管理",
                        index: "/info"
                    },
                    {
                        label: "数据权限",
                        index: "/info"
                    },
                    {
                        label: "功能管理",
                        index: "/info"
                    }
                ]
            },
            {
                label: "计划管理",
                index: "/home/test14",
                children: [{
                    label: "计划模板",
                    index: "/add"
                }]
            }

        ]
    }
])
export default {
    topnav,
    ledge,
    production,
    sysytem,
    analysis,
    together,
    tree
}