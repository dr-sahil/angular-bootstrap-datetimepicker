import {DlDateAdapterString} from './dl-date-adapter-string';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';

/**
 * @license
 * Copyright 2013-present Dale Lotts All Rights Reserved.
 * http://www.dalelotts.com
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/dalelotts/angular-bootstrap-datetimepicker/blob/master/LICENSE
 */



describe('DlDateAdapterString', () => {

  describe('default configuration', () => {
    let dateAdapter: DlDateAdapterString;
    let testMoment: dayjs.Dayjs;
    beforeEach(() => {
      testMoment = dayjs(1523077200000);
      dateAdapter = new DlDateAdapterString([
          dayjs.localeData().longDateFormat('lll'),
          'YYYY-MM-DDTHH:mm',
          'YYYY-MM-DDTHH:mm:ss',
          'YYYY-MM-DDTHH:mm:ss.SSS',
          'YYYY-MM-DD',
          'YYYY-MM-DDTHH:mm:ss.SSS[Z]' // ISO_8601
        ],
        dayjs.localeData().longDateFormat('lll')
      );
    });

    describe('fromMilliseconds', () => {
      it('should return "lll" moment format', () => {
        expect(dateAdapter.fromMilliseconds(1523077200000)).toEqual(testMoment.format('lll'));
      });
    });

    describe('toMilliseconds', () => {
      it('should accept "lll" moment format', () => {
        expect(dateAdapter.toMilliseconds(testMoment.format('lll'))).toEqual(1523077200000);
      });
      it('should return undefined for invalid date value', () => {
        expect(dateAdapter.toMilliseconds('Aor 7, 2018 12:00 AM')).toBeUndefined();
      });
    });
  });
});
