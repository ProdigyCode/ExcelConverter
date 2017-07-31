export class DirectoryNotFoundException extends Error {
	constructor(directoryPath: string) {
		super('Directory ' + directoryPath + ' not found');
		Object.setPrototypeOf(this, DirectoryNotFoundException.prototype);
	}
}