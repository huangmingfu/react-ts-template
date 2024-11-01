/**
 * 通过url获取文件后缀
 * @param url 图片链接
 * @example
 * getSuffixByUrl('https://example.com/path/to/file.txt'); // 返回 ".txt"
 * getSuffixByUrl('https://example.com/path/to/file.txt?version=1.2'); // 返回 ".txt"
 * getSuffixByUrl('https://example.com/path/to/file'); // 返回 ""
 * getSuffixByUrl('https://example.com/path/to/file.txt#section'); // 返回 ".txt"
 * getSuffixByUrl('哈哈哈.jpg'); // 返回 ".jpg"
 * getSuffixByUrl(''); // 返回 ""
 */
export function getSuffixByUrl(url = '') {
  const temp = url.split('/');
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename?.split(/#|\?/)[0] || '';
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
}
