import { DirectoryWatcher } from './definitions/DirectoryWatcher';
import { Logger } from '../log/definitions/Logger';
import { WinstonLogger } from '../log/WinstonLogger';
import { DirectoryNotFoundException, DirectoryNotSetException } from './exceptions/DirectoryException';
import * as FS from 'fs';

export class NativeDirectoryWatcher implements DirectoryWatcher {
	public static LOGGER:Logger;
	private _directoryPath: string;

	constructor() {
		NativeDirectoryWatcher.LOGGER = WinstonLogger.getLogger(NativeDirectoryWatcher.name);
	}

	get directoryPath(): string {
		return this._directoryPath;
	}

	set directoryPath(_directoryPath: string) {
		this._directoryPath = _directoryPath;
	}

	start(): void {
		if(this._directoryPath === undefined || this._directoryPath === '') {
			throw new DirectoryNotSetException();
		}
		if(!FS.existsSync(this._directoryPath)) {
			throw new DirectoryNotFoundException(this._directoryPath);
		}
		NativeDirectoryWatcher.LOGGER.info('start watching directory ' + this.directoryPath);
	}

	stop(): void {
		NativeDirectoryWatcher.LOGGER.info('stop watching directory');
	}
}