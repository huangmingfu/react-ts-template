import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * 日期时间格式化工具。
 */
export const dateUtil = dayjs;

/**
 * 将日期时间格式化为指定格式的字符串。
 * @param date 要格式化的日期时间。如果未提供，则默认为当前时间。
 * @param format 要格式化的目标格式，默认为 DATE_TIME_FORMAT。
 * @returns 格式化后的日期时间字符串。
 */
export function formatToDateTime(date?: dayjs.ConfigType, format = DATE_TIME_FORMAT): string {
  return dayjs(date).format(format);
}

/**
 * 将日期格式化为指定格式的字符串。
 * @param date 要格式化的日期。如果未提供，则默认为当前日期。
 * @param format 要格式化的目标格式，默认为 DATE_FORMAT。
 * @returns 格式化后的日期字符串。
 */
export function formatToDate(date?: dayjs.ConfigType, format = DATE_FORMAT): string {
  return dayjs(date).format(format);
}

/**
 * 判断指定时间是否在某个时间之前。
 * @param {string | dayjs.ConfigType} [specifiedTime] 要比较的指定时间，默认为当前时间。格式为 'YYYY-MM-DD HH:mm:ss' 或 dayjs 对象。
 * @param {string} targetTime 要比较的目标时间，格式为 'YYYY-MM-DD HH:mm:ss'。
 * @returns {boolean} 如果指定时间在目标时间之前，则返回 true，否则返回 false。
 */
export function isTimeBefore(
  specifiedTime: dayjs.ConfigType = dayjs(),
  targetTime: string,
): boolean {
  // 将指定时间转换为 dayjs 对象
  const specified = dayjs(specifiedTime);

  // 将目标时间转换为 dayjs 对象
  const target = dayjs(targetTime);

  return specified.isBefore(target);
}
