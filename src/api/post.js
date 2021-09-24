import request from '@/utils/request'

// 分页查询文章列表
export function pagePost(params) {
  return request({
    url: '/post/page',
    method: 'get',
    params
  })
}
// 文章详情
export function detailPost(params) {
  return request({
    url: '/post/client/detail',
    method: 'get',
    params
  })
}
