# Hawk

## Message Language Validator

This application validates if messages are in the desired language using
command-line arguments.

### Setup

#### Prerequisites

- Ensure you have Deno installed. If not, you can install it from
  [Deno Installation](https://deno.land/#installation).

#### Installation

No installation is required as Deno uses a URL-based module system.

### Usage

#### Command-Line Flags

- `--file=`, `-f=`: Specifies the file path containing the message.
- `--language=`, `-l=`: Specifies the language code for validation.
- `--message=`, `-m=`: Specifies the message directly via command line.

#### Example Usage

##### Validate Direct Message:

```sh
deno task start --message="Your commit message here" --language=eng
```

##### Validate Message from File:

```sh
deno task start --file=path/to/your/file.txt --language=eng
```

### Error Handling

- If no valid arguments are provided, an error is thrown specifying the
  requirement for at least one valid argument.

- If the message is not in the specified language, an error message is
  displayed, and the application exits with a status code of 1.

### Supported Languages

- English (`eng`)
- Spanish (`spa`)
- Portuguese (`por`)
- French (`fra`)
- German (`deu`)
- Italian (`ita`)
- Russian (`rus`)
- Arabic (`arb`)
- Bengali (`ben`)
- Hindi (`hin`)
- Indonesian (`ind`)
- Japanese (`jpn`)
- and others

> See all suported languages
> [in here link](https://github.com/wooorm/franc/tree/main/packages/franc-min)

### Implementation

The application uses `MessageLanguageValidator` to check if the provided message
is in the desired language. If validation fails, it outputs an appropriate error
message using the `Messages` enum.

### Notes

- Ensure Deno has appropriate permissions (`--allow-read`) to read files if
  validating messages from files.

## License

This project is licensed under the GNU License - see the LICENSE file for
details.
