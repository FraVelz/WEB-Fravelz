import ReproductorMusica from "../components/music.jsx";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from 'react-i18next';

function Logo({ altText }) {
    return (
        <div className="
        row-span-2
        relative
        h-32 w-32
        sm:h-64 sm:w-64
        mr-4
        ">
            {/* Borde girando (grueso) */}
            <div className="
            absolute inset-0
            rounded-full
            p-4
            bg-linear-to-r from-cyan-500 via-purple-500 to-cyan-500
            animate-[spin_2s_linear_infinite]
            "></div>

            {/* Imagen fija más pequeña para que deje ver el borde */}
            <div className="
            absolute inset-1 rounded-full bg-gray-900 z-10 overflow-hidden
            ">
                <img
                    draggable="false"
                    className="h-full w-full rounded-full object-cover select-none"
                    src={`${import.meta.env.BASE_URL}/logo-fravelz.jpg`}
                    alt={altText}
                />
            </div>
        </div>
    );
}

export default function FrontPage() {
    const { t, i18n } = useTranslation();
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <ReproductorMusica className="
            hidden lg:block
            fixed top-4 right-4
            bg-gray-900 text-gray-50
            rounded-xl border-gray-700 border-3
            hover:border-gray-500
            transition-all
            p-2 z-20
            " />

            <div className="
            flex items-center justify-center
            flex-col
            gap-4

            max-w-screen
            ">
                <div className="
                w-screen h-fit
                sm:w-fit p-4
                flex flex-col

                bg-gray-950 text-gray-50

                border-gray-700 border-b-3
                sm:rounded-2xl sm:border-gray-700 sm:border-2
                hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20
                transition-all duration-300
                ">
                    <div className="
                    grid grid-cols-2 grid-rows-2
                    grid-cols-[auto_1fr]
                    grid-rows-[auto_1fr]
                    sm:grid-rows-[1fr_1fr]

                    items-center justify-center
                    ">
                        <Logo altText={t('hero_logo_alt')} />

                        <h1 className="text-3xl self-end bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">
                            Francisco J. Vélez O.
                        </h1>

                        <div>
                            <p className="
                            text-lg mb-2 text-cyan-300 font-semibold
                            ">@Fravelz</p>

                            <div className="
                            grid grid-cols-2 grid-row-2
                            grid-cols-[auto_auto]
                            justify-start items-center
                            gap-2
                            ">
                                <a href="https://github.com/FraVelz" target="_blank" className="
                                h-fit w-fit
                                flex items-center justify-center
                                bg-gray-900
                                px-3 py-2 border border-gray-700 rounded-full
                                hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30
                                transition-all
                                ">
                                    <FontAwesomeIcon icon={faGithub} className="
                                    text-gray-300
                                    hover:text-cyan-300
                                    " />
                                </a>

                                <div className="
                                flex items-center gap-2
                                text-sm text-cyan-300
                                max-w-fit pr-3
                                bg-gray-900 px-2 py-1 rounded-full
                                border border-cyan-500/40 hover:border-cyan-400/60
                                transition-all hover:shadow-lg hover:shadow-cyan-500/10
                                ">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
                                    <span>{t('hero_location')}</span>
                                </div>

                                <button
                                    onClick={() => copyToClipboard('fravelz@proton.me')}
                                    className="
                                    flex items-center gap-2
                                col-span-2
                                    text-sm text-purple-300
                                    max-w-fit pr-3
                                    p-1
                                    bg-gray-900 px-2 rounded-full
                                    border border-purple-500/40 hover:border-purple-400/60
                                    hover:text-purple-200
                                    transition-all cursor-pointer hover:shadow-lg hover:shadow-purple-500/10
                                    "
                                >
                                    <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                                    <span>{copied ? t('hero_copy_success') : 'fravelz@proton.me'}</span>
                                    <FontAwesomeIcon icon={faCopy} className="text-xs text-purple-500" />
                                </button>

                            </div>
                        </div>
                    </div>

                    <p className="mt-3 text-gray-200">{t('hola')}</p>
                    <p className="text-lg text-cyan-100"><b>{t('futuro_pentester')}</b></p>

                    <div className="
                    text-4xl flex gap-3
                    w-full justify-center items-center
                    ">
                    </div>

                    <div className="idioma flex items-center justify-center gap-2 mt-2">
                        <span className="text-sm text-gray-300">{t('change_language')}</span>
                        <select
                            value={i18n.language}
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            className="
                            bg-gray-800 text-cyan-200
                            border-cyan-500/30 hover:border-cyan-400/60
                            rounded px-2 py-1
                            text-sm border
                            transition-all
                            cursor-pointer
                            "
                        >
                            <option value="es">Español</option>
                            <option value="zh">中文</option>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>

                <ReproductorMusica className="
                block lg:hidden
                bg-gray-900 text-gray-50
                rounded-xl border-gray-700 border-3
                hover:border-gray-500
                transition-all
                p-2
                " />
            </div>
        </>
    );
}