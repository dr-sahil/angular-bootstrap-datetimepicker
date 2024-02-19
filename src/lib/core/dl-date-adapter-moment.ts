import dayjs from 'dayjs';
import {DlDateAdapter} from './dl-date-adapter';

/**
 * Adapts `dayjs` to be usable as a date by date/time components that work with dates.
 **/
export class DlDateAdapterMoment extends DlDateAdapter<dayjs.Dayjs> {

  /**
   * Create a new instance of a `dayjs` type from milliseconds.
   * @param milliseconds
   *  a time value as milliseconds (local time zone)
   * @returns
   *  an instance of `dayjs` for the specified moment in time.
   */
  fromMilliseconds(milliseconds: number): dayjs.Dayjs {
    return dayjs(milliseconds);
  }

  /**
   * Returns a moment in time value as milliseconds (local time zone).
   * @param value
   *  a moment or `null`.
   * @returns
   *  a `moment.valueOf()` result for the specified `dayjs` or `null`
   */
  toMilliseconds(value: dayjs.Dayjs | null): number | null {
    return (value) ? value.valueOf() : undefined;
  }
}
