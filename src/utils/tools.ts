/**
 * 简单的随机唯一id
 * @returns string
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 复制文本到剪贴板
 * @param {string} text 要复制的文本
 * @param {string | null} 复制成功时的提示文本
 */
export function copy(text: string, _prompt: string | null = '已成功复制到剪切板!') {
  if (navigator.clipboard) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        // prompt && message.success(prompt);
      })
      .catch((error) => {
        // message.error('复制失败!' + error.message);
        return error;
      });
  }
  if (Reflect.has(document, 'execCommand')) {
    return new Promise<void>((resolve, reject) => {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // 在手机 Safari 浏览器中，点击复制按钮，整个页面会跳动一下
        textArea.style.width = '0';
        textArea.style.position = 'fixed';
        textArea.style.left = '-999px';
        textArea.style.top = '10px';
        textArea.setAttribute('readonly', 'readonly');
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // prompt && message.success(prompt);
        resolve();
      } catch (error) {
        // message.error('复制失败!' + error.message);
        reject(error);
      }
    });
  }
  return Promise.reject(`"navigator.clipboard" 或 "document.execCommand" 中存在API错误, 拷贝失败!`);
}
