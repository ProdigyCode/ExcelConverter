import { Logger } from './lib/definitions/Logger';
import { WinstonLogger } from './lib/WinstonLogger';

export class ExcelConverter {
	private static LOGGER: Logger;

	constructor() {
		ExcelConverter.LOGGER = WinstonLogger.getLogger(ExcelConverter.name);
		ExcelConverter.LOGGER.info('aloha');
		ExcelConverter.LOGGER.error('error mas');
	}
}

new ExcelConverter();