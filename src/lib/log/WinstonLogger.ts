import {Logger, LOGTYPE} from './definitions/Logger';
import * as WINSTON from 'winston';

export class WinstonLogger implements Logger {

	private _className: string;
	private _winstonLogger: WINSTON.LoggerInstance;

	constructor(_className: string) {
		this.className = _className;
		this.winstonLogger = new WINSTON.Logger({
			transports: [
				new WINSTON.transports.Console()
			]
		});
	}

	private set className(_className: string) { this._className = _className }
	private get className() { return this._className }

	private set winstonLogger(_winstonLogger: WINSTON.LoggerInstance) { this._winstonLogger = _winstonLogger }

	public static getLogger(className: string): WinstonLogger {
		return new WinstonLogger(className);
	}

	public info(message: string): void {
		this._winstonLogger.info(message);
	}

	public debug(message: string): void {

	}

	public error(error: string): void {
		this._winstonLogger.error(error);
	}
}