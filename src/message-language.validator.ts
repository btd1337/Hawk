import { francAll } from 'franc-min';
import { LanguageCode } from './language-code.enum.ts';

export class MessageLanguageValidator {
	message: string;
	language?: string;

	constructor(message: string, language?: string) {
		this.message = message;
		this.language = language || LanguageCode.English;
	}

	isFixup(): boolean {
		return this.message.startsWith('fixup! ');
	}

	isRevert(): boolean {
		return this.message.startsWith('Revert ');
	}

	isValidMessage(): boolean {
		if (this.isFixup() || this.isRevert()) {
			return true;
		}

		const probableLanguages: [string, number][] = francAll(this.message);

		const maxAllowed = probableLanguages.length < 2
			? probableLanguages.length
			: 2;

		for (let i = 0; i < maxAllowed; i++) {
			if (probableLanguages[i][0] === this.language) {
				return true;
			}
		}

		return false;
	}
}
