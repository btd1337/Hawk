import { LanguageCode } from './language-code.enum.ts';
import { Language } from './language.enum.ts';

export class Messages {
    static getInvalid(language: keyof typeof Language) {
        switch (language) {
            case LanguageCode.Arabic: {
                return `خطأ: يجب أن يكون رسالة الكوميت الخاصة بك باللغة العربية وصحيحة قواعديًا. \n👉🏼 إذا كانت بالفعل كذلك، فاستفد من تحسين وضوح نصك.`;
            }
            case LanguageCode.Bengali: {
                return `ত্রুটি: আপনার কমিট মেসেজটি বাংলায় হতে হবে এবং ব্যাকরণিকভাবে সঠিক হতে হবে। \n👉🏼 এটি ইতিমধ্যে সঠিক হলে, আপনার লেখার স্পষ্টতা উন্নতি করার বিবেচনা করুন।`;
            }
            case LanguageCode.English: {
                return `ERROR: Your commit message must be in English and grammatically correct. \n👉🏼 If it already is, consider improving the clarity of your text.`;
            }
            case LanguageCode.French: {
                return `ERREUR: Votre message de commit doit être en français et grammaticalement correct. \n👉🏼 S'il l'est déjà, envisagez d'améliorer la clarté de votre texte.`;
            }
            case LanguageCode.German: {
                return `FEHLER: Ihre Commit-Nachricht muss auf Deutsch sein und grammatikalisch korrekt sein. \n👉🏼 Wenn sie es bereits ist, überlegen Sie, die Klarheit Ihres Textes zu verbessern.`;
            }
            case LanguageCode.Hindi: {
                return `त्रुटि: आपका कमिट संदेश हिंदी में होना चाहिए और व्याकरणिक रूप से सही होना चाहिए। \n👉🏼 अगर यह पहले से ही है, तो अपने पाठ की स्पष्टता में सुधार करने की विचार करें।`;
            }
            case LanguageCode.Indonesian: {
                return `KESALAHAN: Pesan komit Anda harus dalam bahasa Indonesia dan secara gramatikal benar. \n👉🏼 Jika sudah demikian, pertimbangkan untuk meningkatkan kejelasan teks Anda.`;
            }
            case LanguageCode.Italian: {
                return `ERRORE: Il tuo messaggio di commit deve essere in italiano e grammaticalmente corretto. \n👉🏼 Se lo è già, considera di migliorare la chiarezza del tuo testo.`;
            }
            case LanguageCode.Japanese: {
                return `エラー: コミットメッセージは日本語である必要があり、文法的に正確である必要があります。\n👉🏼 もしそうであれば、テキストの明確さを向上させることを検討してください。`;
            }
            case LanguageCode.MandarinChinese: {
                return `错误：您的提交消息必须是用中文编写的，并且语法正确。\n👉🏼 如果已经是这样，请考虑提高文本的清晰度。`;
            }
            case LanguageCode.Portuguese: {
                return `ERRO: A mensagem do seu commit deve estar em Português e estar gramaticalmente correta. \n👉🏼 Caso ela já esteja, considere melhorar o entendimento do seu texto.`;
            }
            case LanguageCode.Russian: {
                return `ОШИБКА: Сообщение вашего коммита должно быть на русском языке и грамматически правильным. \n👉🏼 Если оно уже таковым является, рассмотрите возможность улучшения ясности вашего текста.`;
            }
            case LanguageCode.Spanish: {
                return `ERROR: El mensaje de su commit debe estar en Español y ser gramaticalmente correcto. \n👉🏼 Si ya lo está, considere mejorar la claridad de su texto.`;
            }
            default: {
                console.log(`Linguagem: ${Language[language]}`);
                const lang = language
                    ? (Language[language] || language.toUpperCase())
                    : Language.eng;
                return `ERROR: Your commit message must be in ${lang} and grammatically correct. \n👉🏼 If it already is, consider improving the clarity of your text.`;
            }
        }
    }
}
