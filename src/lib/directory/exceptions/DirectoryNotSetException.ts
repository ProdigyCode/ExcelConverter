export class DirectoryNotSetException extends Error {
	constructor() {
		super('Directory path not set');
		Object.setPrototypeOf(this, DirectoryNotSetException.prototype);
	}
}