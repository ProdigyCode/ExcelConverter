import { ExcelConverter } from './definitions/ExcelConverter';
import { Logger } from '../log/definitions/Logger';
import { WinstonLogger } from '../log/WinstonLogger';
import * as XLSX from 'xlsx';

export class XlsxExcelConverter implements ExcelConverter {
	private static LOGGER: Logger;

	constructor() {
		XlsxExcelConverter.LOGGER = WinstonLogger.getLogger(XlsxExcelConverter.name);
		XlsxExcelConverter.LOGGER.info('initiating XlsxExcelConverter');
	}

	convertToCSV() {
		XlsxExcelConverter.LOGGER.info('convert to csv');
	}
}