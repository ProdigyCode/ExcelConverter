export const LOGTYPE = {
	ERROR :'[ERROR]',
	INFO : '[INFO]',
	DEBUG : '[DEBUG]'
};

export interface Logger {
	info(message: string): void;
	debug(message: string): void;
	error(error: string): void;
};