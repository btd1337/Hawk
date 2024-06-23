import { Language } from './language.enum.ts';
import { MessageLanguageValidator } from './message-language.validator.ts';
import { Messages } from './messages.ts';

class Main {
  static flags = {
    file: {
      long: '--file=',
      short: '-f=',
    },
    language: {
      long: '--language=',
      short: '-l=',
    },
    message: {
      long: '--message=',
      short: '-m=',
    },
  };

  static bootstrap() {
    let filePath: string | undefined = undefined;
    let language: string | undefined = undefined;
    let message: string | undefined = undefined;
    let messageValidator: MessageLanguageValidator | undefined = undefined;

    if (Deno.args.length === 0) {
      throw new Deno.errors.InvalidData(
        "It's necessary to pass least one argument",
      );
    }

    for (let i = 0; i < Deno.args.length; i++) {
      if (
        Deno.args[i].startsWith(Main.flags.message.long)
      ) {
        message = Deno.args[i].split(Main.flags.message.long)[1];
      } else if (
        Deno.args[i].startsWith(Main.flags.message.short)
      ) {
        message = Deno.args[i].split(Main.flags.message.short)[1];
      } else if (
        Deno.args[i].startsWith(Main.flags.file.long)
      ) {
        filePath = Deno.args[i].split(Main.flags.file.long)[1];
        message = Deno.readTextFileSync(filePath).trim();
      } else if (
        Deno.args[i].startsWith(Main.flags.file.short)
      ) {
        filePath = Deno.args[i].split(Main.flags.file.short)[1];
        message = Deno.readTextFileSync(filePath).trim();
      } else if (
        Deno.args[i].startsWith(Main.flags.language.long)
      ) {
        language = Deno.args[i].split(Main.flags.language.long)[1];
      } else if (
        Deno.args[i].startsWith(Main.flags.language.short)
      ) {
        language = Deno.args[i].split(Main.flags.language.short)[1];
      } else {
        throw new Deno.errors.InvalidData(
          "It's necessary to pass least one valid argument",
        );
      }
    }

    if (message) {
      messageValidator = new MessageLanguageValidator(
        message,
        language,
      );
    }

    if (!messageValidator?.isValidMessage()) {
      console.error(
        `\n‼️ ${Messages.getInvalid(language as keyof typeof Language)}\n\n`,
      );
      Deno.exit(1);
    }
  }
}

Main.bootstrap();
