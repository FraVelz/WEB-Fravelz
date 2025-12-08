import { useTranslation } from 'react-i18next';

export default function PasatiemposSection() {
    const { t } = useTranslation();
    
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t('info_hobbies_title')}</h2>
            <ul className="cursor-default text-gray-300 space-y-2 list-none">
                <li className="flex items-center hover:translate-x-2 transition-transform"><span draggable="false" className="select-none text-cyan-400 mr-3 text-lg">◆</span>{t('hobbies_exercise')}</li>
                <li className="flex items-center hover:translate-x-2 transition-transform"><span draggable="false" className="select-none text-purple-400 mr-3 text-lg">◆</span>{t('hobbies_piano')}</li>
                <li className="flex items-center hover:translate-x-2 transition-transform"><span draggable="false" className="select-none text-cyan-400 mr-3 text-lg">◆</span>{t('hobbies_webdev')}</li>
                <li className="flex items-center hover:translate-x-2 transition-transform"><span draggable="false" className="select-none text-purple-400 mr-3 text-lg">◆</span>{t('hobbies_linux')}</li>

                <li className="flex items-center hover:translate-x-2 transition-transform"><span draggable="false" className="select-none text-cyan-400 mr-3 text-lg">◆</span>{t('hobbies_typing_label')}
                    (<a
                        href="https://monkeytype.com/profile/Fravelz"
                        target="_blank"
                        rel="noreferrer noopener"
                        className=" text-cyan-300 hover:text-white underline underline-offset-2 decoration-dotted transition-colors duration-200"
                    >
                        {t('hobbies_typing_link')}
                    </a>)
                </li>
            </ul>
        </div>
    );
}
