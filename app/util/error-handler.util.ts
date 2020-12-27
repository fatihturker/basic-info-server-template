/**
 * @description holds error handler util
 */

import { ResponseCode } from '../constant';
import { DebugLogUtil } from './debug-log.util';

export class ErrorHandlerUtil {
  constructor(private debugLogUtil = new DebugLogUtil()) {}
  /**
   * handles custom exceptions
   * @param exception exception
   */
  handle = (exception: any) => {
    let response = {
      code: ResponseCode.BAD_REQUEST,
      message: exception.message,
    };

    // Overwrite Response Code and Message here
    if (exception.responseCode) {
      response.code = exception.responseCode;
    }

    this.debugLogUtil.log(exception);
    console.error(response);

    return response;
  };
}
