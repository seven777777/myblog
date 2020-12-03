/*
 * @Author: seven.zhang 
 * @Date: 2020-12-02 17:27:38 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2020-12-03 15:47:40
 */
const bookData = {
    '2017':[
        {
            month:'1月',
            book:[
                {
                    name:'愿风裁尘',
                    author:'郭敬明',
                    type:'散文',
                    star:'3',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'2月',
            book:[
                {
                    name:'百年孤独',
                    author:'加西亚.马尔克斯',
                    type:'小说',
                    star:'5',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'3月',
            book:[
                {
                    name:'文化苦旅',
                    author:'余秋雨',
                    type:'散文',
                    star:'5',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'4月',
            book:[
                {
                    name:'活着',
                    author:'余华',
                    type:'小说',
                    star:'5',
                    kind:'虚构'
                },
                {
                    name:'小王子',
                    author:'安托万·德·圣·埃克苏佩里',
                    type:'童话',
                    star:'5',
                    kind:'虚构'
                },
                {
                    name:'Javascript高级程序设计（第三版）',
                    author:'Nicholas C.Zakas',
                    type:'技术',
                    star:'5',
                    kind:'非虚构'
                },
            ]
        },
        {
            month:'5月',
            book:[
                {
                    name:'茶馆',
                    author:'老舍',
                    type:'话剧',
                    star:'4',
                    kind:'虚构'
                },
                {
                    name:'张爱玲：最是清醒落寞人',
                    author:'牧来',
                    type:'传记',
                    star:'3',
                    kind:'非虚构'
                },
                {
                    name:'嫌疑人X的献身',
                    author:'东野圭吾',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                },
                {
                    name:'白夜行',
                    author:'东野圭吾',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                },
            ]
        },
        {
            month:'6月',
            book:[
                {
                    name:'人间草木',
                    author:'汪曾祺',
                    type:'散文',
                    star:'4',
                    kind:'非虚构'
                },
                {
                    name:'小团圆',
                    author:'张爱玲',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                },
            ]
        }
    ],
    '2019':[
        {
            month:'1月',
            book:[
                {
                    name:'霍乱时期的爱情',
                    author:'加西亚·马尔克斯',
                    type:'小说',
                    star:'5',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'2月',
            book:[
                {
                    name:'伤逝',
                    author:'鲁迅',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'3月',
            book:[
                {
                    name:'房思琪的初恋乐园',
                    author:'林奕含',
                    type:'小说',
                    star:'3',
                    kind:'虚构'
                },
                {
                    name:'标准日本语',
                    author:'',
                    type:'语言',
                    star:'4',
                    kind:'非虚构'
                },
                {
                    name:'放学后',
                    author:'东野圭吾',
                    type:'推理小说',
                    star:'3',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'4月',
            book:[
                {
                    name:'英儿',
                    author:'顾城',
                    type:'小说',
                    star:'5',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'5月',
            book:[
                {
                    name:'瓦尔登湖',
                    author:'亨利·戴维·梭罗',
                    type:'散文',
                    star:'5',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'6月',
            book:[]
        },
        {
            month:'7月',
            book:[
                {
                    name:'晚清有个曾国藩',
                    author:'赵焰',
                    type:'历史',
                    star:'4',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'8月',
            book:[
                {
                    name:'晚清有个袁世凯',
                    author:'赵焰',
                    type:'历史',
                    star:'3',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'9月',
            book:[
                {
                    name:'晚清有个李鸿章',
                    author:'赵焰',
                    type:'历史',
                    star:'3',
                    kind:'非虚构'
                }
            ]
        },
        {
            month:'10月',
            book:[
                {
                    name:'一半是海水一半是火焰',
                    author:'王朔',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                },
                {
                    name:'永失我爱',
                    author:'王朔',
                    type:'小说',
                    star:'4',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'11月',
            book:[
                {
                    name:'无人喝彩',
                    author:'王朔',
                    type:'小说',
                    star:'3',
                    kind:'虚构'
                },
                {
                    name:'过把瘾就死',
                    author:'王朔',
                    type:'小说',
                    star:'2',
                    kind:'虚构'
                }
            ]
        },
        {
            month:'12月',
            book:[]
        }
    ],
    // '2020':[
    //     {
    //         month:'1月',
    //         book:[]
    //     },
    //     {
    //         month:'2月',
    //         book:[]
    //     },
    //     {
    //         month:'3月',
    //         book:[
    //             {
    //                 name:'生活是很好玩的',
    //                 author:'汪曾祺',
    //                 type:'散文',
    //                 star:'3',
    //                 kind:'非虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'4月',
    //         book:[
    //             {
    //                 name:'人间失格',
    //                 author:'太宰治',
    //                 type:'小说',
    //                 star:'5',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'奔跑吧！梅勒斯',
    //                 author:'太宰治',
    //                 type:'小说',
    //                 star:'3',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'维庸之妻',
    //                 author:'太宰治',
    //                 type:'小说',
    //                 star:'4',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'算法图解',
    //                 author:'Aditya Bhargav',
    //                 type:'技术',
    //                 star:'4',
    //                 kind:'非虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'5月',
    //         book:[
    //             {
    //                 name:'克莱因壶',
    //                 author:'冈嶋二人',
    //                 type:'小说',
    //                 star:'4',
    //                 kind:'虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'6月',
    //         book:[
    //             {
    //                 name:'夜莺与玫瑰',
    //                 author:'王尔德',
    //                 type:'童话',
    //                 star:'5',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'半小时漫画宋词',
    //                 author:'陈磊',
    //                 type:'其他',
    //                 star:'3',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'斜阳',
    //                 author:'太宰治',
    //                 type:'小说',
    //                 star:'4',
    //                 kind:'虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'7月',
    //         book:[
    //             {
    //                 name:'七个平行世界的我',
    //                 author:'小岩井',
    //                 type:'小说',
    //                 star:'2',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'十一字谜案',
    //                 author:'东野圭吾',
    //                 type:'小说',
    //                 star:'3',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'情迷佛罗伦萨',
    //                 author:'毛姆',
    //                 type:'小说',
    //                 star:'4',
    //                 kind:'虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'8月',
    //         book:[
    //             {
    //                 name:'万历十五年',
    //                 author:'黄仁宇',
    //                 type:'历史',
    //                 star:'5',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'rework',
    //                 author:'Jason Fried & David Heinemeier Hansson',
    //                 type:'企业管理',
    //                 star:'2',
    //                 kind:'非虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'9月',
    //         book:[
    //             {
    //                 name:'世界重启',
    //                 author:'路易斯·达特内尔',
    //                 type:'其他',
    //                 star:'4',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'沉默的巡游',
    //                 author:'东野圭吾',
    //                 type:'小说',
    //                 star:'4',
    //                 kind:'虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'10月',
    //         book:[
    //             {
    //                 name:'山里的糖果',
    //                 author:'邓安庆',
    //                 type:'散文',
    //                 star:'4',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'阿勒泰的角落',
    //                 author:'李娟',
    //                 type:'散文',
    //                 star:'4',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'代码大全',
    //                 author:'史蒂夫·迈克康奈尔',
    //                 type:'技术',
    //                 star:'5',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'纸上王国',
    //                 author:'邓安庆',
    //                 type:'散文',
    //                 star:'3',
    //                 kind:'非虚构'
    //             }
    //         ]
    //     },
    //     {
    //         month:'11月',
    //         book:[
    //             {
    //                 name:'山月记',
    //                 author:'中岛敦',
    //                 type:'小说',
    //                 star:'5',
    //                 kind:'虚构'
    //             },
    //             {
    //                 name:'rework2',
    //                 author:'Jason Fried & David Heinemeier Hansson',
    //                 type:'企业管理',
    //                 star:'3',
    //                 kind:'非虚构'
    //             },
    //             {
    //                 name:'东京老铺',
    //                 author:'Mateusz Urbanowicz',
    //                 type:'插画集',
    //                 star:'4',
    //                 kind:'非虚构'
    //             }
    //         ]
    //     }
    // ]
}