//  主机暂时使用package.json中的代理功能，只需要对应接口即可
export const host = 'https://uncledd2.cn/'

// 调用照片接口，一次返回20张照片信息，参数为photoId，返回id的后20张照片，photoId=-2时表示第一次加载，
export const Show20Photos = '/Show20Photos'

// 下载照片接口，参数为photoId
export const DownloadPhoto = '/DownloadPhoto'