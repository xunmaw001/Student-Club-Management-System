const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"社团类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShetuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"社团活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShetuanhuodong"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "报表",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团管理",
                        "menuJump":"列表",
                        "tableName":"shetuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"社团申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanOrder"
                    }
                ],
                "menu":"社团管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
							"新增",
							"修改",
							"删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团成员管理",
                        "menuJump":"列表",
                        "tableName":"shetuanChengyuan"
                    }
                ],
                "menu":"社团成员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团活动管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"社团活动申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongOrder"
                    }
                ],
                "menu":"社团活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"团长管理",
                        "menuJump":"列表",
                        "tableName":"tuanzhang"
                    }
                ],
                "menu":"团长管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"xuesheng"
                    }
                ],
                "menu":"学生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团管理",
                        "menuJump":"列表",
                        "tableName":"shetuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"社团申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanOrder"
                    }
                ],
                "menu":"社团管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
							"新增"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团成员管理",
                        "menuJump":"列表",
                        "tableName":"shetuanChengyuan"
                    }
                ],
                "menu":"社团成员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"社团活动管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"社团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "审核",
                            "查看",
                            "删除"
                        ],
                        "menu":"社团活动申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongOrder"
                    }
                ],
                "menu":"社团活动管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"团长",
        "tableName":"tuanzhang"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社团管理",
                        "menuJump":"列表",
                        "tableName":"shetuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"社团留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanOrder"
                    }
                ],
                "menu":"社团管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社团成员管理",
                        "menuJump":"列表",
                        "tableName":"shetuanChengyuan"
                    }
                ],
                "menu":"社团成员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社团活动管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"社团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"社团活动申请管理",
                        "menuJump":"列表",
                        "tableName":"shetuanhuodongOrder"
                    }
                ],
                "menu":"社团活动管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"学生",
        "tableName":"xuesheng"
    }
]
    }
}
export default menu;
