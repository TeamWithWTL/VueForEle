import Mock from 'mockjs'

const topnav = Mock.mock([{
        name: "资产台账",
        index: "ledger"
    },
    {
        name: "生产运行",
        index: "production"
    },
    {
        name: "协同办公",
        index: "together"
    },
    {
        name: "统计分析",
        index: "analysis"
    },
    {
        name: "系统管理",
        index: "sysytem"
    }
])
const ledge = Mock.mock([{
        name: "资产类型",
        index: "/home/test1"
    },
    {
        name: "官网台账",
        index: "/home/test2"
    },
    {
        name: "管线台账",
        index: "/home/test2"
    },
    {
        name: "设备台账",
        index: "/home/test2"
    },
    {
        name: "换热站台账",
        index: "/home/test2"
    },
    {
        name: "阀门井台账",
        index: "/home/ledger/valuewell"
    },
    {
        name: "生产商台账",
        index: "/home/test2"
    }
])
const production = Mock.mock([{
        name: "区域管理",
        index: "/home/test1",
    },
    {
        name: "巡检任务",
        index: "/home/test2"
    },
    {
        name: "官网巡检",
        index: "/home/test2"
    },
    {
        name: "报停巡检",
        index: "/home/test2",
        children: [{
                name: "社区管理",
                index: "/add"
            },
            {
                name: "报停用户",
                index: "/info"
            },
            {
                name: "报停巡检记录",
                index: "/info"
            },
            {
                name: "报停检查",
                index: "/info"
            }
        ]
    },
    {
        name: "缺陷管理",
        index: "/home/test2"
    },
    {
        name: "供热情况",
        index: "/home/test2"
    },
    {
        name: "检修记录",
        index: "/home/test2"
    },
    {
        name: "设备更换记录",
        index: "/home/test2"
    },
    {
        name: "分户计量",
        index: "/home/test2"
    }
])
const together = Mock.mock([{
        name: "通知公告",
        index: "/home/test1",
        children: [{
                name: "发布公告",
                index: "/add"
            },
            {
                name: "接收公告",
                index: "/info"
            }
        ]
    },
    {
        name: "人员定位",
        index: "/home/test2"
    },
    {
        name: "请假记录",
        index: "/home/test2"
    }
])
const analysis = Mock.mock([{
        name: "管线巡检",
        index: "/home/test1",
        children: [{
                name: "管线状态统计",
                index: "/add"
            },
            {
                name: "管线类型统计",
                index: "/info"
            }
        ]
    },
    {
        name: "设备统计",
        index: "/home/test1",
        children: [{
                name: "设备类型统计",
                index: "/add"
            },
            {
                name: "设备状态统计",
                index: "/info"
            },
            {
                name: "设备厂家统计",
                index: "/info"
            }
        ],
    },
    {
        name: "阀门井统计",
        index: "/home/test1",
        children: [{
                name: "阀门井厂家",
                index: "/add"
            },
            {
                name: "阀门井状态",
                index: "/info"
            }
        ]
    },
    {
        name: "运维统计",
        index: "/home/test1",
        children: [{
                name: "任务完成率",
                index: "/add"
            },
            {
                name: "事件类型统计",
                index: "/info"
            },
            {
                name: "事件状态统计",
                index: "/info"
            }
        ]
    },
    {
        name: "个人任务统计",
        index: "/home/test1",
        children: [{
            name: "个人任务完成率",
            index: "/add"
        }]
    },
    {
        name: "安检统计",
        index: "/home/test1",
        children: [{
                name: "社区安检率",
                index: "/add"
            },
            {
                name: "个人民用户安检统计",
                index: "/info"
            },
            {
                name: "个人工商用户安检统计",
                index: "/info"
            }
        ]
    },
    {
        name: "缺陷统计",
        index: "/home/test2"
    },
    {
        name: "盗暖统计",
        index: "/home/test2"
    }
])
const sysytem = Mock.mock([{
        name: "基础信息",
        index: "/home",
        children: [{
                name: "字典管理",
                index: "/add"
            },
            {
                name: "菜单管理",
                index: "/tree"
            },
            {
                name: "系统配置",
                index: '/info'
            },
            {
                name: "系统配置",
                index: "/info"
            }
        ]
    },
    {
        name: "组织架构",
        index: "/home/test12",
        children: [{
                name: "部门管理",
                index: "/add"
            },
            {
                name: "人员管理",
                index: "/info"
            },
            {
                name: "班组管理",
                index: "/info"
            }
        ],
    },
    {
        name: "权限管理",
        index: "/home/test11",
        children: [{
                name: "角色管理",
                index: "/add"
            },
            {
                name: "角色人员",
                index: "/info"
            },
            {
                name: "授权管理",
                index: "/info"
            },
            {
                name: "数据权限",
                index: "/info"
            },
            {
                name: "功能管理",
                index: "/info"
            }
        ]
    },
    {
        name: "计划管理",
        index: "/home/test14",
        children: [{
            name: "计划模板",
            index: "/add"
        }]
    }
])
export default {
    topnav,
    ledge,
    production,
    sysytem,
    analysis,
    together
}