import { francAll } from 'franc-min';

export class CommitValidator {
	message: string;
	language?: string;

	constructor(message: string, language?: string) {
		this.message = message;
		this.language = language;
	}

	isFixup(): boolean {
		return this.message.startsWith('fixup! ');
	}

	isRevert(): boolean {
		return this.message.startsWith('Revert ');
	}

	isCommitMessageValid(): boolean {
		if (this.isFixup() || this.isRevert()) {
			return true;
		}

		const probableLanguages: [string, number][] = francAll(this.message);

		const maxAllowed = probableLanguages.length < 2
			? probableLanguages.length
			: 2;

		for (let i = 0; i < maxAllowed; i++) {
			// Português
			if (probableLanguages[i][0] === 'por') {
				return true;
			}
		}

		return false;
	}
}
