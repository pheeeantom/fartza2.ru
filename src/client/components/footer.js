import React from "react";

function Footer(props) {
    return (
        <div className="bg-zinc-700 py-10 px-20 mt-32">
            <a className="text-white hover:text-gray-300 block" href="/privacy">Политика конфиденциальности</a>
            <a className="text-white hover:text-gray-300 block" href="https://youtube.com">Youtube-канал</a>
            <div className="text-center text-white pt-12">Fartza.ru 2023</div>
        </div>
    )
}

export default Footer;