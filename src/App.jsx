import {useTranslation} from "react-i18next";
import {Suspense} from "react";
import DevelopInfo from "./DevelopInfo.jsx";

export default function App() {
    const {t} = useTranslation();


    return (
        <Suspense fallback="loading">
            <DevelopInfo/>
            <div className="w-3/5 mx-auto bg-slate-100 p-5 rounded-lg shadow-lg">
                <span
                    className="bg-red-400 text-slate-50 px-2 py-1 rounded-lg float-right">{t('blog.info')}</span>
                <h1 className="text-3xl font-bold ">{t('blog.title')}</h1>
                <div className="flex gap-x-2 my-2 text-slate-600">
                    <span>John Steprolloer</span>
                    <span>{t('blog.date')}</span>
                </div>
                <img src="/threads.avif" alt="Threads Bug Fix Image"/>
                <p className="mt-3">{t('blog.content')}</p>
            </div>
        </Suspense>
    );
}
