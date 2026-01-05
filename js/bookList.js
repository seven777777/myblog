/*
 * @Author: seven.zhang
 * @Date: 2020-12-02 17:27:38
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2026-01-05 13:44:11
 */
const bookData = {
    2017: [
        {
            month: '1月',
            book: [
                {
                    name: '愿风裁尘',
                    author: '郭敬明',
                    type: '散文',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '2月',
            book: [
                {
                    name: '百年孤独',
                    author: '加西亚.马尔克斯',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '文化苦旅',
                    author: '余秋雨',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '活着',
                    author: '余华',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '小王子',
                    author: '安托万·德·圣·埃克苏佩里',
                    type: '童话',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: 'Javascript高级程序设计（第三版）',
                    author: 'Nicholas C.Zakas',
                    type: '技术',
                    star: '5',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '茶馆',
                    author: '老舍',
                    type: '话剧',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '张爱玲：最是清醒落寞人',
                    author: '牧来',
                    type: '传记',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '嫌疑人X的献身',
                    author: '东野圭吾',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '白夜行',
                    author: '东野圭吾',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                {
                    name: '人间草木',
                    author: '汪曾祺',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '小团圆',
                    author: '张爱玲',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        }
    ],
    2019: [
        {
            month: '1月',
            book: [
                {
                    name: '霍乱时期的爱情',
                    author: '加西亚·马尔克斯',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '2月',
            book: [
                {
                    name: '伤逝',
                    author: '鲁迅',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '房思琪的初恋乐园',
                    author: '林奕含',
                    type: '小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '标准日本语',
                    author: '',
                    type: '语言',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '放学后',
                    author: '东野圭吾',
                    type: '推理小说',
                    star: '3',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '英儿',
                    author: '顾城',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '瓦尔登湖',
                    author: '亨利·戴维·梭罗',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '6月',
            book: []
        },
        {
            month: '7月',
            book: [
                {
                    name: '晚清有个曾国藩',
                    author: '赵焰',
                    type: '历史',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '8月',
            book: [
                {
                    name: '晚清有个袁世凯',
                    author: '赵焰',
                    type: '历史',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '9月',
            book: [
                {
                    name: '晚清有个李鸿章',
                    author: '赵焰',
                    type: '历史',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '一半是海水一半是火焰',
                    author: '王朔',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '永失我爱',
                    author: '王朔',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '11月',
            book: [
                {
                    name: '无人喝彩',
                    author: '王朔',
                    type: '小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '过把瘾就死',
                    author: '王朔',
                    type: '小说',
                    star: '2',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '12月',
            book: []
        }
    ],
    2020: [
        {
            month: '1月',
            book: []
        },
        {
            month: '2月',
            book: []
        },
        {
            month: '3月',
            book: [
                {
                    name: '生活是很好玩的',
                    author: '汪曾祺',
                    type: '散文',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '人间失格',
                    author: '太宰治',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '奔跑吧！梅勒斯',
                    author: '太宰治',
                    type: '小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '维庸之妻',
                    author: '太宰治',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '算法图解',
                    author: 'Aditya Bhargav',
                    type: '技术',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '克莱因壶',
                    author: '冈嶋二人',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                {
                    name: '夜莺与玫瑰',
                    author: '王尔德',
                    type: '童话',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '半小时漫画宋词',
                    author: '陈磊',
                    type: '其他',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '斜阳',
                    author: '太宰治',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '7月',
            book: [
                {
                    name: '七个平行世界的我',
                    author: '小岩井',
                    type: '小说',
                    star: '2',
                    kind: '虚构'
                },
                {
                    name: '十一字谜案',
                    author: '东野圭吾',
                    type: '小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '情迷佛罗伦萨',
                    author: '毛姆',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '8月',
            book: [
                {
                    name: '万历十五年',
                    author: '黄仁宇',
                    type: '历史',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: 'rework',
                    author: 'Jason Fried & David Heinemeier Hansson',
                    type: '企业管理',
                    star: '2',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '9月',
            book: [
                {
                    name: '世界重启',
                    author: '路易斯·达特内尔',
                    type: '其他',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '沉默的巡游',
                    author: '东野圭吾',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '山里的糖果',
                    author: '邓安庆',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '阿勒泰的角落',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '代码大全',
                    author: '史蒂夫·迈克康奈尔',
                    type: '技术',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '纸上王国',
                    author: '邓安庆',
                    type: '散文',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '11月',
            book: [
                {
                    name: '山月记',
                    author: '中岛敦',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: 'rework2',
                    author: 'Jason Fried & David Heinemeier Hansson',
                    type: '企业管理',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '东京老铺',
                    author: 'Mateusz Urbanowicz',
                    type: '插画集',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '12月',
            book: [
                {
                    name: '皮囊',
                    author: '蔡崇达',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '时间的秩序',
                    author: '卡洛·罗韦利',
                    type: '科普',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '城南旧事',
                    author: '林海音',
                    type: '半自传小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '难民',
                    author: '阮清越',
                    type: '半自传小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '笑场',
                    author: '李诞',
                    type: '其他',
                    star: '3',
                    kind: '虚构'
                }
            ]
        }
    ],
    2021: [
        {
            month: '1月',
            book: [
                {
                    name: '走夜路请放声歌唱',
                    author: '李娟',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '乱时候,穷时候',
                    author: '姜淑梅',
                    type: '回忆录',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '九篇雪',
                    author: '李娟',
                    type: '散文',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '2月',
            book: [
                {
                    name: '牧羊少年奇幻之旅',
                    author: '保罗科埃略',
                    type: '长篇小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '野草',
                    author: '鲁迅',
                    type: '散文诗',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '蛤蟆先生去看心理医生',
                    author: '罗伯特·戴博德',
                    type: '心理学',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '神的孩子全跳舞',
                    author: '村上春树',
                    type: '短篇小说集',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '上帝的骰子：量子物理趣画',
                    author: '罗金海',
                    type: '物理漫画',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '被讨厌的勇气',
                    author: '岸见一郎/古贺史健',
                    type: '心理学',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '十月国度',
                    author: '雷·布拉德伯里',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '羊道 · 春牧场',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '羊道 · 前山夏牧场',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '羊道 · 深山夏牧场',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '论自由',
                    author: '约翰·斯图亚特·穆勒',
                    type: '政治哲学',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                {
                    name: '2001：太空漫游',
                    author: '阿瑟•克拉克',
                    type: '科幻小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '钝感力',
                    author: '渡边淳一',
                    type: '日本文学',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '7月',
            book: [
                {
                    name: '额尔古纳河右岸',
                    author: '迟子建',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '鲜衣怒马少年时',
                    author: '少年怒马',
                    type: '历史',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '人性的因素',
                    author: '毛姆',
                    type: '短篇小说',
                    star: '3',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '8月',
            book: [
                {
                    name: '而已集',
                    author: '鲁迅',
                    type: '杂文',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '9月',
            book: [
                {
                    name: '冬牧场',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '我的阿勒泰',
                    author: '李娟',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '掌中之物',
                    author: '贝昕',
                    type: '网文小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '遥远的向日葵地',
                    author: '李娟',
                    type: '散文',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '边疆动物小说：索勒索勒',
                    author: '李娟',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '呼兰河传',
                    author: '萧红',
                    type: '长篇小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '树犹如此',
                    author: '白先勇',
                    type: '散文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '顾城的诗 顾城的画',
                    author: '顾城',
                    type: '诗集',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '11月',
            book: [
                {
                    name: '面纱',
                    author: '毛姆',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '我喜欢生命本来的样子',
                    author: '周国平',
                    type: '杂文',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '飞鸟集',
                    author: '泰戈尔',
                    type: '诗集',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '知道分子',
                    author: '王朔',
                    type: '杂文',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '12月',
            book: [
                {
                    name: '夏天只是西瓜做的一个梦',
                    author: '鱼山',
                    type: '绘本',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '秋园',
                    author: '杨本芬',
                    type: '自传体小说',
                    star: '5',
                    kind: '非虚构'
                },
                {
                    name: '漂流船',
                    author: '杰罗姆',
                    type: '小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '呐喊',
                    author: '鲁迅',
                    type: '短篇小说集',
                    star: '4',
                    kind: '虚构'
                }
            ]
        }
    ],
    2022: [
        {
            month: '1月',
            book: []
        },
        {
            month: '2月',
            book: [
                {
                    name: '高数基础',
                    author: '开课吧',
                    type: '数学',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '高数',
                    author: '开课吧',
                    type: '数学',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '线性代数',
                    author: '开课吧',
                    type: '数学',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: 'C语言基础',
                    author: '开课吧',
                    type: '计算机',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '计算机数据结构',
                    author: '王道',
                    type: '计算机',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                {
                    name: '计算机组成原理',
                    author: '王道',
                    type: '计算机',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '7月',
            book: [
                {
                    name: '计算机网络',
                    author: '王道',
                    type: '计算机',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '8月',
            book: [
                {
                    name: '计算机操作系统',
                    author: '王道',
                    type: '计算机',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '9月',
            book: [
                {
                    name: '毛泽东思想和中国特色社会主义理论体系',
                    author: '徐涛',
                    type: '政治',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '中国近代史纲要',
                    author: '徐涛',
                    type: '政治',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '马克思主义基本原理',
                    author: '徐涛',
                    type: '政治',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '11月',
            book: [
                {
                    name: '思想道德与法治',
                    author: '徐涛',
                    type: '政治',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '12月',
            book: []
        }
    ],
    2023: [
        {
            month: '1月',
            book: [
                {
                    name: '三体：地球往事',
                    author: '刘慈欣',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '三体：黑暗森林',
                    author: '刘慈欣',
                    type: '科幻',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '2月',
            book: [
                {
                    name: '三体：死神永生',
                    author: '刘慈欣',
                    type: '科幻',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '小径分叉的花园',
                    author: '博尔赫斯',
                    type: '科幻短篇集',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '金阁寺',
                    author: '三岛由纪夫',
                    type: '长篇小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                // {
                //     name: '线性代数',
                //     author: '',
                //     type: '数学',
                //     star: '',
                //     kind: '非虚构'
                // },
                // {
                //     name: 'C语言基础',
                //     author: '',
                //     type: '计算机',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '小王子（英文版）',
                    author: '安托万·德·圣-埃克苏佩里',
                    type: '童话',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                // {
                //     name: '计算机组成原理',
                //     author: '',
                //     type: '计算机',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '7月',
            book: [
                // {
                //     name: '计算机网络',
                //     author: '',
                //     type: '计算机',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '8月',
            book: [
                // {
                //     name: '计算机操作系统',
                //     author: '',
                //     type: '计算机',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '9月',
            book: [
                // {
                //     name: '计算机数据结构',
                //     author: '',
                //     type: '计算机',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '10月',
            book: [
                // {
                //     name: '中国近代史纲要',
                //     author: '',
                //     type: '政治',
                //     star: '',
                //     kind: '非虚构'
                // },
                // {
                //     name: '马克思主义基本原理',
                //     author: '',
                //     type: '政治',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '11月',
            book: [
                // {
                //     name: '毛泽东思想和中国特色社会主义理论体系',
                //     author: '',
                //     type: '教材',
                //     star: '',
                //     kind: '非虚构'
                // },
                // {
                //     name: '思想道德与法治',
                //     author: '',
                //     type: '教材',
                //     star: '',
                //     kind: '非虚构'
                // }
            ]
        },
        {
            month: '12月',
            book: []
        }
    ],
    2024: [
        {
            month: '1月',
            book: []
        },
        {
            month: '2月',
            book: []
        },
        {
            month: '3月',
            book: [
                {
                    name: '我们生活在巨大的差距里',
                    author: '余华',
                    type: '杂文集',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '豆子芝麻茶',
                    author: '杨本芬',
                    type: '散文集',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '敏捷实践指南',
                    author: '项目管理协会',
                    type: '技术',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '太白金星有点烦',
                    author: '马伯庸',
                    type: '小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: 'PMBOK第六版',
                    author: '项目管理协会',
                    type: '技术',
                    star: '4',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '6月',
            book: []
        },
        {
            month: '7月',
            book: []
        },
        {
            month: '8月',
            book: []
        },
        {
            month: '9月',
            book: [
                {
                    name: '献给阿尔吉侬的花束',
                    author: '丹尼尔·凯斯',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '平面国',
                    author: '埃德温·A·艾勃特',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '11月',
            book: []
        },
        {
            month: '12月',
            book: []
        }
    ],
    2025: [
        {
            month: '1月',
            book: [
                {
                    name: '宋朝人的日常生活',
                    author: '侯印国',
                    type: '历史',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '超越音符',
                    author: '林俊杰',
                    type: '人物自传',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '克林索尔的最后夏天',
                    author: '赫尔曼•黑塞',
                    type: '中篇小说',
                    star: '3',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '2月',
            book: [
                {
                    name: '强者破局',
                    author: '冯唐',
                    type: '历史',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '3月',
            book: [
                {
                    name: '愤怒的葡萄',
                    author: '约翰•斯坦贝克',
                    type: '长篇小说',
                    star: '5',
                    kind: '虚构'
                },
                {
                    name: '山谷微风',
                    author: '余华',
                    type: '散文集',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '4月',
            book: [
                {
                    name: '坍缩',
                    author: '刘慈欣',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '小林生活禅',
                    author: '林帝浣',
                    type: '漫画',
                    star: '2',
                    kind: '非虚构'
                },
                {
                    name: '长安的荔枝',
                    author: '马伯庸',
                    type: '中篇小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '5月',
            book: [
                {
                    name: '人类重启',
                    author: '亚历山大·温斯坦',
                    type: '科幻',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '晴耕雨读，得闲饮茶',
                    author: '季羡林等',
                    type: '散文集',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '我本芬芳',
                    author: '杨本芬',
                    type: '半自传体小说',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '时间从来不语，却回答了所有问题',
                    author: '季羡林',
                    type: '散文集',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '6月',
            book: [
                {
                    name: '梦的解析',
                    author: '西格蒙德·弗洛伊德',
                    type: '心理学理论',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '食南之徒',
                    author: '马伯庸',
                    type: '长篇小说',
                    star: '3',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '7月',
            book: [
                {
                    name: '小城与不确定性的墙',
                    author: '村上春树',
                    type: '长篇小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '8月',
            book: [
                {
                    name: '一只猫的人间观察',
                    author: '寐语者',
                    type: '治愈系文学',
                    star: '3',
                    kind: '非虚构'
                }
            ]
        },
        {
            month: '9月',
            book: [
                {
                    name: '生死疲劳',
                    author: '莫言',
                    type: '长篇小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '10月',
            book: [
                {
                    name: '庆祝无意义',
                    author: '米兰·昆德拉',
                    type: '长篇小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '林家铺子',
                    author: '矛盾',
                    type: '短篇小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '不生锈的人生',
                    author: '石井哲代',
                    type: '日本体回忆录',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '带上她的眼睛',
                    author: '刘慈欣',
                    type: '科幻',
                    star: '4',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '11月',
            book: [
                {
                    name: '一间只属于自己的房间',
                    author: '弗吉尼亚·伍尔夫基',
                    type: '散文体论著',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '悉达多',
                    author: '赫尔曼·黑塞',
                    type: '中篇小说',
                    star: '5',
                    kind: '虚构'
                }
            ]
        },
        {
            month: '12月',
            book: [
                {
                    name: '哲学家的最后一课',
                    author: '朱锐',
                    type: '哲学',
                    star: '4',
                    kind: '非虚构'
                },
                {
                    name: '独居冰岛的一年',
                    author: '嘉倩',
                    type: '生活随笔',
                    star: '3',
                    kind: '非虚构'
                },
                {
                    name: '人生',
                    author: '路遥',
                    type: '中篇小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '一生中最高兴的一天',
                    author: '路遥',
                    type: '中篇小说集',
                    star: '3',
                    kind: '虚构'
                },
                {
                    name: '月牙儿',
                    author: '老舍',
                    type: '中篇小说',
                    star: '4',
                    kind: '虚构'
                },
                {
                    name: '我的遥远的清平湾',
                    author: '史铁生',
                    type: '半自传体小说',
                    star: '4',
                    kind: '虚构'
                }
            ]
        }
    ]
}
