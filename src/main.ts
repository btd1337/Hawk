import { CommitValidator } from './commit-validator.ts';

class Main {
  static bootstrap() {
    const sourceType = Deno.args[1]; // Second argument to specify source type

    let commitMessage: string;

    if (sourceType === '--string') {
      commitMessage = Main.getMessage(Deno.args[0]);
    } else {
      commitMessage = Main.getMessage(null);
    }

    const validator = new CommitValidator(commitMessage);

    if (!validator.isCommitMessageValid()) {
      console.error(
        '\n‼️ ERRO: A mensagem do seu commit deve estar em Português. \n👉🏼 Caso ela já esteja, considere melhorar o entendimento do seu texto.\n\n',
      );
      Deno.exit(1);
    }
  }

  static getMessage(source: string | null): string {
    if (source && source.startsWith('fixup! ')) {
      return source;
    } else if (source) {
      return source.trim();
    } else {
      const filePath = Deno.args[0];
      return Deno.readTextFileSync(filePath).trim();
    }
  }
}

Main.bootstrap();
