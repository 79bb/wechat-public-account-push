/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa4753de63190bed5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ddd51f99f48455f4938c307f6a28821d',

  PROVINCE: '贵州',
  CITY: '铜仁',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9zew6gsn5Ewi3d3UdVbI9sBNle0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'oZ6r8GRvf28O1m3maqmVH_5LGzkGDVdzxBezt0h_KPY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2001', date: '10-13',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-31' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'QE1rlkbZGc52y5qGRLLasgxF1uC52b0FpNThbRPuCns',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9zew6gsn5Ewi3d3UdVbI9sBNle0',
    }
  ],

}

module.exports = USER_CONFIG

