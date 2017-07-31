import { Logger } from './lib/log/definitions/Logger';
import { WinstonLogger } from './lib/log/WinstonLogger';
import { ExcelConverter } from './lib/excel/definitions/ExcelConverter';
import { XlsxExcelConverter } from './lib/excel/XlsxExcelConverter';
import { DirectoryWatcher } from './lib/directory/definitions/DirectoryWatcher';
import { NativeDirectoryWatcher } from './lib/directory/NativeDirectoryWatcher';

export class MainApplication {
	public static LOGGER: Logger;
	private _excelConverter: ExcelConverter;
	private _directoryWatcher: DirectoryWatcher;

	public set directoryWatcher(_directoryWatcher: DirectoryWatcher) {
		this._directoryWatcher = _directoryWatcher;
	}

	public get directoryWatcher(): DirectoryWatcher {
		return this._directoryWatcher;
	}

	public set excelConverter(_excelConverter: ExcelConverter) {
		this._excelConverter = _excelConverter;
	}

	public get excelConverter(): ExcelConverter {
		return this._excelConverter;
	}

	constructor() {
		MainApplication.LOGGER = WinstonLogger.getLogger(MainApplication.name);
		this.excelConverter = new XlsxExcelConverter();
		this.directoryWatcher = new NativeDirectoryWatcher();
		this.directoryWatcher.start();
	}
}

new MainApplication();