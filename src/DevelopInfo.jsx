import {useTranslation} from "react-i18next";

export default function DevelopInfo() {

    const {t, i18n} = useTranslation();

    const changeLangHandler = async (e, lang) => {
        if (i18n.language !== lang) {
            await i18n.changeLanguage(lang);

        }
        document.querySelectorAll("button").forEach(button => {
            button.classList.remove("active")
        })
        e.target.classList.toggle("active");
    }

    return (
        <div className="m-5 mb-20">
            <span className="font-bold">Browser Language : {i18n.language}</span>
            <p>{t("developer")}</p>
            <button
                className="border border-slate-600 px-2 py-1 rounded-lg mt-2 hover:bg-yellow-400 duration-150"
                onClick={(e) => changeLangHandler(e, "en")}>English
            </button>
            <button
                className="border border-slate-600 px-2 py-1 rounded-lg mt-2 ms-2 hover:bg-yellow-400 duration-150"
                onClick={(e) => changeLangHandler(e, "tr")}>Turkish
            </button>
            <button
                className="border border-slate-600 px-2 py-1 rounded-lg mt-2 ms-2 hover:bg-yellow-400 duration-150"
                onClick={(e) => changeLangHandler(e, "fr")}>French
            </button>
            <button
                className="border border-slate-600 px-2 py-1 rounded-lg mt-2 ms-2 hover:bg-yellow-400 duration-150"
                onClick={(e) => changeLangHandler(e, "de")}>German
            </button>
        </div>
    );
}